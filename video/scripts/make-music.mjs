// Generates the intro video's original backing track as public/music.wav.
// 120 BPM in F major, so one beat = 15 frames and one bar = 60 frames at 30fps:
// every scene change in src/intro lands on a bar line. Run: node scripts/make-music.mjs
import { writeFileSync } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const SR = 44100;
const BEAT = 0.5;
const BAR = BEAT * 4;
const BARS = 30;
const DUR = BARS * BAR + 1;
const N = Math.ceil(DUR * SR);

// Buses: dry (drums, effects), mus (pumped by the kick), rev (reverb send).
const bus = () => [new Float32Array(N), new Float32Array(N)];
const dry = bus();
const mus = bus();
const rev = bus();

let seed = 20261114;
const noise = () => {
  seed = (Math.imul(seed, 1664525) + 1013904223) >>> 0;
  return seed / 2147483648 - 1;
};
const mtof = (m) => 440 * 2 ** ((m - 69) / 12);
const TAU = Math.PI * 2;

const put = (b, i, l, r, send = 0) => {
  if (i < 0 || i >= N) return;
  b[0][i] += l;
  b[1][i] += r;
  if (send) {
    rev[0][i] += l * send;
    rev[1][i] += r * send;
  }
};
const panGains = (p) => [Math.cos(((p + 1) * Math.PI) / 4), Math.sin(((p + 1) * Math.PI) / 4)];

class Biquad {
  constructor(type, f, q = 0.707) {
    this.type = type;
    this.q = q;
    this.x1 = this.x2 = this.y1 = this.y2 = 0;
    this.set(f);
  }
  set(f) {
    const w = (TAU * Math.min(f, SR * 0.45)) / SR;
    const cs = Math.cos(w);
    const al = Math.sin(w) / (2 * this.q);
    let b0, b1, b2;
    if (this.type === "lp") [b0, b1, b2] = [(1 - cs) / 2, 1 - cs, (1 - cs) / 2];
    else if (this.type === "hp") [b0, b1, b2] = [(1 + cs) / 2, -(1 + cs), (1 + cs) / 2];
    else [b0, b1, b2] = [al, 0, -al];
    const a0 = 1 + al;
    this.b0 = b0 / a0;
    this.b1 = b1 / a0;
    this.b2 = b2 / a0;
    this.a1 = (-2 * cs) / a0;
    this.a2 = (1 - al) / a0;
  }
  run(x) {
    const y = this.b0 * x + this.b1 * this.x1 + this.b2 * this.x2 - this.a1 * this.y1 - this.a2 * this.y2;
    this.x2 = this.x1;
    this.x1 = x;
    this.y2 = this.y1;
    this.y1 = y;
    return y;
  }
}

// ---------- drums ----------
const kickTimes = [];
const kick = (t, g) => {
  kickTimes.push(t);
  const i0 = Math.round(t * SR);
  let ph = 0;
  for (let i = 0; i < 0.42 * SR; i++) {
    const x = i / SR;
    ph += (TAU * (46 + 135 * Math.exp(-x * 32))) / SR;
    const s = Math.tanh((Math.sin(ph) * Math.exp(-x * 8) + noise() * Math.exp(-x * 500) * 0.25) * 1.5) * g;
    put(dry, i0 + i, s, s);
  }
};
const clap = (t, g) => {
  const i0 = Math.round(t * SR);
  const bp = new Biquad("bp", 1700, 1.1);
  for (let i = 0; i < 0.32 * SR; i++) {
    const x = i / SR;
    let e = Math.exp(-x * 22) * 0.55;
    for (const b of [0, 0.011, 0.023]) if (x >= b) e += Math.exp(-(x - b) * 150);
    const s = bp.run(noise()) * e * g * 1.6;
    put(dry, i0 + i, s, s, 0.3);
  }
};
const hat = (t, g, open, pan = 0.15) => {
  const i0 = Math.round(t * SR);
  const hp = new Biquad("hp", 8200, 0.8);
  const [pl, pr] = panGains(pan);
  const len = open ? 0.26 : 0.07;
  for (let i = 0; i < len * SR; i++) {
    const x = i / SR;
    const s = hp.run(noise()) * Math.exp(-x * (open ? 17 : 75)) * g;
    put(dry, i0 + i, s * pl, s * pr, 0.08);
  }
};
const snare = (t, g) => {
  const i0 = Math.round(t * SR);
  const bp = new Biquad("bp", 2300, 0.9);
  for (let i = 0; i < 0.2 * SR; i++) {
    const x = i / SR;
    const s = (bp.run(noise()) * 1.4 + Math.sin(TAU * 190 * x) * Math.exp(-x * 34) * 0.6) * Math.exp(-x * 24) * g;
    put(dry, i0 + i, s, s, 0.25);
  }
};

// ---------- tonal ----------
const bass = (t, dur, m, g) => {
  const i0 = Math.round(t * SR);
  const f = mtof(m);
  let y1 = 0;
  let y2 = 0;
  for (let i = 0; i < dur * SR; i++) {
    const x = i / SR;
    const ph = (f * x) % 1;
    const raw = (2 * ph - 1) * 0.7 + Math.sin(TAU * f * x) * 0.9;
    const a = 1 - Math.exp((-TAU * (170 + 950 * Math.exp(-x * 13))) / SR);
    y1 += a * (raw - y1);
    y2 += a * (y1 - y2);
    const env = Math.min(1, x / 0.004) * Math.min(1, (dur - x) / 0.025) * (0.55 + 0.45 * Math.exp(-x * 5));
    const s = y2 * env * g;
    put(mus, i0 + i, s, s);
  }
};
const pad = (t, dur, notes, g, cutA, cutB) => {
  const i0 = Math.round(t * SR);
  const rel = 0.45;
  const lpL = new Biquad("lp", cutA, 0.9);
  const lpR = new Biquad("lp", cutA, 0.9);
  const voices = [];
  for (const m of notes)
    for (const [cents, pan] of [
      [-9, -0.7],
      [0, 0],
      [9, 0.7],
    ]) voices.push({ f: mtof(m) * 2 ** (cents / 1200), ph: Math.abs(noise()), pg: panGains(pan) });
  const total = Math.round((dur + rel) * SR);
  for (let i = 0; i < total; i++) {
    const x = i / SR;
    if (i % 64 === 0) {
      const c = cutA + (cutB - cutA) * Math.min(1, x / dur);
      lpL.set(c);
      lpR.set(c);
    }
    let l = 0;
    let r = 0;
    for (const v of voices) {
      v.ph = (v.ph + v.f / SR) % 1;
      const s = 2 * v.ph - 1;
      l += s * v.pg[0];
      r += s * v.pg[1];
    }
    const env = Math.min(1, x / 0.22) * (x > dur ? Math.max(0, 1 - (x - dur) / rel) : 1);
    const k = (g * env) / voices.length;
    put(mus, i0 + i, lpL.run(l) * k * 3, lpR.run(r) * k * 3, 0.35);
  }
};
const pluckOnce = (t, m, g, pan, bright) => {
  const i0 = Math.round(t * SR);
  const f = mtof(m);
  const [pl, pr] = panGains(pan);
  let y1 = 0;
  let y2 = 0;
  for (let i = 0; i < 0.5 * SR; i++) {
    const x = i / SR;
    const ph = (f * x) % 1;
    const raw = (2 * ph - 1) * 0.6 + (ph < 0.5 ? 0.35 : -0.35) + Math.sin(TAU * f * x) * 0.3;
    const a = 1 - Math.exp((-TAU * (320 + bright * Math.exp(-x * 17))) / SR);
    y1 += a * (raw - y1);
    y2 += a * (y1 - y2);
    const s = y2 * Math.min(1, x / 0.002) * Math.exp(-x * 9.5) * g;
    put(mus, i0 + i, s * pl, s * pr, 0.3);
  }
};
// Pluck with a dotted-eighth ping-pong echo.
const pluck = (t, m, g, pan, bright) => {
  pluckOnce(t, m, g, pan, bright);
  pluckOnce(t + 0.375, m, g * 0.3, -pan, bright * 0.7);
  pluckOnce(t + 0.75, m, g * 0.12, pan, bright * 0.5);
};
const leadOnce = (t, dur, m, g, pan) => {
  const i0 = Math.round(t * SR);
  const f0 = mtof(m);
  const [pl, pr] = panGains(pan);
  let ph = 0;
  for (let i = 0; i < (dur + 0.08) * SR; i++) {
    const x = i / SR;
    const vib = x > 0.15 ? 1 + 0.004 * Math.sin(TAU * 5.5 * x) : 1;
    ph += (f0 * vib) / SR;
    const p = ph % 1;
    const tri = 4 * Math.abs(p - 0.5) - 1;
    const raw = tri * 0.7 + Math.sin(TAU * ph) * 0.5 + Math.sin(TAU * ph * 2) * 0.12;
    const env = Math.min(1, x / 0.006) * (0.65 + 0.35 * Math.exp(-x * 7)) * (x > dur ? Math.max(0, 1 - (x - dur) / 0.08) : 1);
    const s = raw * env * g;
    put(mus, i0 + i, s * pl, s * pr, 0.4);
  }
};
const lead = (t, dur, m, g) => {
  leadOnce(t, dur, m, g, 0.1);
  leadOnce(t + 0.375, dur * 0.8, m, g * 0.28, -0.6);
  leadOnce(t + 0.75, dur * 0.6, m, g * 0.1, 0.6);
};
const bell = (t, m, g, pan = 0.2) => {
  const i0 = Math.round(t * SR);
  const f = mtof(m);
  const [pl, pr] = panGains(pan);
  for (let i = 0; i < 1.6 * SR; i++) {
    const x = i / SR;
    const s = Math.sin(TAU * f * x + 1.8 * Math.sin(TAU * f * 3.5 * x) * Math.exp(-x * 9)) * Math.exp(-x * 4.5) * g;
    put(dry, i0 + i, s * pl, s * pr, 0.5);
  }
};

// ---------- effects ----------
const riser = (t, dur, g) => {
  const i0 = Math.round(t * SR);
  const l = new Biquad("bp", 500, 1.4);
  const r = new Biquad("bp", 500, 1.4);
  for (let i = 0; i < dur * SR; i++) {
    const k = i / (dur * SR);
    if (i % 64 === 0) {
      const f = 500 * 18 ** k;
      l.set(f);
      r.set(f * 1.07);
    }
    const a = k * k * g;
    put(dry, i0 + i, l.run(noise()) * a, r.run(noise()) * a, 0.25);
  }
};
const impact = (t, g) => {
  const i0 = Math.round(t * SR);
  const hpL = new Biquad("hp", 2600, 0.7);
  const hpR = new Biquad("hp", 2600, 0.7);
  let ph = 0;
  for (let i = 0; i < 1.7 * SR; i++) {
    const x = i / SR;
    ph += (TAU * (38 + 30 * Math.exp(-x * 5))) / SR;
    const sub = Math.sin(ph) * Math.exp(-x * 2.6) * 0.9;
    const e = Math.exp(-x * 3.4) * 0.3;
    put(dry, i0 + i, (sub + hpL.run(noise()) * e) * g, (sub + hpR.run(noise()) * e) * g, 0.4);
  }
};
// Soft air sweep that peaks at t, used on scene changes.
const whoosh = (t, g) => {
  const dur = 0.5;
  const i0 = Math.round((t - dur / 2) * SR);
  const bp = new Biquad("bp", 600, 1.2);
  for (let i = 0; i < dur * SR; i++) {
    const k = i / (dur * SR);
    if (i % 32 === 0) bp.set(500 + 4200 * Math.sin(Math.PI * k));
    const s = bp.run(noise()) * Math.sin(Math.PI * k) ** 2 * g;
    const [pl, pr] = panGains(-0.7 + 1.4 * k);
    put(dry, i0 + i, s * pl, s * pr, 0.3);
  }
};

// ---------- arrangement ----------
// IV – I – V – vi in F major (B♭maj7, F, C, Dm7).
const CHORDS = [
  [58, 62, 65, 69],
  [57, 60, 65, 69],
  [55, 60, 64, 67],
  [57, 62, 65, 72],
];
const ROOTS = [34, 41, 36, 38];
// Syncopated 3-3-2 pluck riff: [sixteenth step, chord tone, accent].
const RIFF = [
  [0, 0, 1],
  [3, 2, 0.8],
  [6, 3, 0.9],
  [8, 1, 0.6],
  [10, 2, 0.75],
  [11, 3, 0.5],
  [14, 2, 0.85],
];
// Bass line per bar: [beat position, octave offset].
const BASSLINE = [
  [0, 0],
  [0.75, 0],
  [1.5, 12],
  [2, 0],
  [2.75, 0],
  [3.5, 12],
];
// Lead motif per chord: [eighth-note position, midi note, length in beats].
const MOTIF = [
  [[0, 74, 0.45], [1, 77, 0.45], [3, 81, 0.9], [5, 79, 0.45], [6, 77, 0.9]],
  [[0, 72, 0.9], [2, 77, 0.45], [3, 81, 1.4], [6, 79, 0.45], [7, 77, 0.45]],
  [[0, 76, 0.45], [1, 79, 0.45], [3, 84, 0.9], [5, 79, 0.45], [6, 76, 0.9]],
  [[0, 77, 0.9], [2, 81, 0.45], [3, 86, 1.4], [6, 84, 0.45], [7, 81, 0.45]],
];
// Scene map in bars (src/intro/Main.tsx): 0 hook, 2 brand, 4 start, 7 verify and pay, 9 file a claim,
// 12 auto escalation, 16 dashboard, 19 get paid, 23 recap, 25 call to action, 28 end card.
const groove = (b) => b >= 4 && b <= 27;
const full = (b) => (b >= 12 && b <= 15) || (b >= 19 && b <= 26);
const thin = (b) => b === 16 || b === 27;

for (let b = 0; b < BARS; b++) {
  const t = b * BAR;
  const c = b % 4;
  const chord = CHORDS[c];

  // pad
  let cut = [2400, 2400];
  let pg = 0.19;
  if (b < 2) {
    cut = [500 + b * 350, 850 + b * 350];
    pg = 0.13;
  } else if (b < 4) cut = [1200 + (b - 2) * 900, 2100 + (b - 2) * 900];
  else if (full(b)) cut = [3400, 3400];
  else if (b >= 28) {
    cut = [2000, 1200];
    pg = 0.16;
  }
  pad(t, BAR, chord, pg, cut[0], cut[1]);

  // pluck riff
  for (const [step, tone, acc] of RIFF) {
    if ((b < 2 || b >= 28) && step !== 0 && step !== 6 && step !== 10) continue;
    let g = 0.2;
    let bright = 3400;
    if (b < 2) [g, bright] = [0.12, 1300];
    else if (b < 4) [g, bright] = [0.16, 2400 + (b - 2) * 800];
    else if (full(b)) [g, bright] = [0.22, 4800];
    else if (b >= 28) [g, bright] = [0.11, 1700];
    const at = t + step * (BEAT / 4);
    pluck(at, chord[tone] + 12, g * acc, step % 2 ? 0.5 : -0.5, bright);
    if (full(b) && acc >= 0.85) pluckOnce(at, chord[tone] + 24, g * 0.4, 0, bright);
  }

  // drums + bass
  if (b === 2 || b === 3) {
    for (let k = 0; k < 4; k++) {
      kick(t + k * BEAT, 0.55);
      hat(t + k * BEAT + BEAT / 2, 0.08, false);
    }
  }
  if (groove(b)) {
    for (let k = 0; k < 4; k++) {
      if (!thin(b)) kick(t + k * BEAT, 0.95);
      if (k % 2 === 1) {
        snare(t + k * BEAT, 0.2);
        clap(t + k * BEAT, 0.2);
      }
      hat(t + k * BEAT + BEAT / 2, k === 3 ? 0.11 : 0.09, k === 3);
      if (b >= 7) for (const q of [0, 0.25, 0.75]) hat(t + (k + q) * BEAT, q === 0 ? 0.045 : 0.03, false, -0.35);
    }
    if (thin(b)) bass(t, BAR * 0.9, ROOTS[c], 0.26);
    else for (const [pos, oct] of BASSLINE) bass(t + pos * BEAT, 0.2, ROOTS[c] + oct, pos === 0 ? 0.32 : 0.38);
  }
  if (full(b)) for (const [pos, m, len] of MOTIF[c]) lead(t + pos * (BEAT / 2), len * BEAT, m, 0.16);
}

// Snare roll that doubles in speed over the bar before a drop at time `drop`.
const roll = (drop) => {
  for (let s = 0; s < 4; s++) snare(drop - 2 + s * 0.25, 0.13 + s * 0.02);
  for (let s = 0; s < 4; s++) snare(drop - 1 + s * 0.125, 0.2 + s * 0.02);
  for (let s = 0; s < 8; s++) snare(drop - 0.5 + s * 0.0625, 0.28 + s * 0.02);
};
const ding = (t, g = 0.15) => {
  bell(t, 84, g, -0.2);
  bell(t + 0.11, 89, g, 0.3);
};

impact(0, 0.22);
riser(2.5, 1.5, 0.16);
impact(4, 0.5); // brand
bell(4, 84, 0.1);
riser(6, 2, 0.24);
impact(8, 0.6); // walkthrough starts
riser(22, 2, 0.3);
roll(24);
impact(24, 0.9); // auto escalation
for (const t of [25, 27, 29, 31]) ding(t); // one per notice
riser(36, 2, 0.3);
roll(38);
impact(38, 0.95); // get paid
ding(39); // payment received
ding(42); // recovery recorded
impact(46, 0.45); // recap
riser(48.5, 1.5, 0.2);
impact(50, 0.85); // call to action
for (const t of [14, 18, 32, 56]) whoosh(t, 0.16);

// Final resolved chord.
pad(60, 0.9, [53, 57, 60, 65], 0.2, 1800, 900);
bell(60, 89, 0.12);
bass(60, 0.8, 41, 0.3);
// ---------- mixdown ----------
const duck = new Float32Array(N).fill(1);
for (const t of kickTimes) {
  const i0 = Math.round(t * SR);
  for (let i = 0; i < 0.36 * SR && i0 + i < N; i++) {
    const d = 1 - 0.62 * Math.exp((-i / SR) * 9);
    if (d < duck[i0 + i]) duck[i0 + i] = d;
  }
}

// Small plate-style reverb: four damped combs into two allpasses per channel.
const reverb = (input, offset) => {
  const out = new Float32Array(N);
  const combs = [1557, 1617, 1491, 1422].map((d) => ({ buf: new Float32Array(d + offset), i: 0, lp: 0 }));
  const aps = [556, 441].map((d) => ({ buf: new Float32Array(d + offset), i: 0 }));
  for (let n = 0; n < N; n++) {
    let acc = 0;
    for (const cb of combs) {
      const y = cb.buf[cb.i];
      cb.lp = y * 0.72 + cb.lp * 0.28;
      cb.buf[cb.i] = input[n] + cb.lp * 0.8;
      cb.i = (cb.i + 1) % cb.buf.length;
      acc += y;
    }
    for (const ap of aps) {
      const y = ap.buf[ap.i];
      ap.buf[ap.i] = acc + y * 0.5;
      ap.i = (ap.i + 1) % ap.buf.length;
      acc = y - acc * 0.5;
    }
    out[n] = acc * 0.25;
  }
  return out;
};
const wet = [reverb(rev[0], 0), reverb(rev[1], 23)];

const out = [new Float32Array(N), new Float32Array(N)];
let peak = 0;
for (let ch = 0; ch < 2; ch++) {
  const hp = new Biquad("hp", 30, 0.707);
  for (let n = 0; n < N; n++) {
    const s = Math.tanh(hp.run(dry[ch][n] + mus[ch][n] * duck[n] + wet[ch][n] * 0.2) * 1.15);
    out[ch][n] = s;
    if (Math.abs(s) > peak) peak = Math.abs(s);
  }
}
const norm = 0.89 / peak;
const fadeOut = 0.9 * SR;

const pcm = Buffer.alloc(44 + N * 4);
pcm.write("RIFF", 0);
pcm.writeUInt32LE(36 + N * 4, 4);
pcm.write("WAVEfmt ", 8);
pcm.writeUInt32LE(16, 16);
pcm.writeUInt16LE(1, 20);
pcm.writeUInt16LE(2, 22);
pcm.writeUInt32LE(SR, 24);
pcm.writeUInt32LE(SR * 4, 28);
pcm.writeUInt16LE(4, 32);
pcm.writeUInt16LE(16, 34);
pcm.write("data", 36);
pcm.writeUInt32LE(N * 4, 40);
for (let n = 0; n < N; n++) {
  const fade = Math.min(1, n / 400) * Math.min(1, (N - n) / fadeOut);
  for (let ch = 0; ch < 2; ch++) pcm.writeInt16LE(Math.round(out[ch][n] * norm * fade * 32767), 44 + n * 4 + ch * 2);
}

const file = path.join(path.dirname(fileURLToPath(import.meta.url)), "..", "public", "music.wav");
writeFileSync(file, pcm);
console.log(`Wrote ${file} (${DUR}s, peak ${peak.toFixed(2)} before normalising)`);
