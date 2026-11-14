import React, { createContext, useContext } from "react";
import { Easing, interpolate, spring, useCurrentFrame, useVideoConfig } from "remotion";
import { theme } from "../theme";

export const clamp = { extrapolateLeft: "clamp", extrapolateRight: "clamp" } as const;

// The track is 120 BPM, so a beat is 15 frames and a bar is 60 frames at 30fps.
export const BEAT = 15;
export const BAR = 60;

export const useAnim = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  return {
    frame,
    // Bouncy 0→1 for things that pop in.
    pop: (at: number, damping = 13) => spring({ frame: frame - at, fps, config: { damping, mass: 0.6 } }),
    // Smooth 0→1 with no overshoot.
    ease: (at: number, dur = 16) => spring({ frame: frame - at, fps, config: { damping: 200 }, durationInFrames: dur }),
    ramp: (from: number, to: number, easing: (n: number) => number = Easing.inOut(Easing.cubic)) =>
      interpolate(frame, [from, to], [0, 1], { ...clamp, easing }),
  };
};

export type Word = { t: string; c?: string };

// One line of text whose words focus in from a blur, one after another.
export const Line: React.FC<{
  words: Word[];
  at: number;
  exitAt?: number;
  size: number;
  weight?: number;
  color?: string;
  stagger?: number;
  style?: React.CSSProperties;
  center?: boolean;
}> = ({ words, at, exitAt, size, weight = 700, color = theme.ink, stagger = 3, style, center }) => {
  const { frame, ease } = useAnim();
  const exit = exitAt === undefined ? 0 : interpolate(frame, [exitAt, exitAt + 10], [0, 1], clamp);
  return (
    <div style={{ display: "flex", flexWrap: "wrap", justifyContent: center ? "center" : "flex-start", lineHeight: 1.08, ...style }}>
      {words.map((w, i) => {
        const e = ease(at + i * stagger, 15);
        return (
          <span
            key={i}
            style={{
              display: "inline-block",
              whiteSpace: "pre",
              fontFamily: theme.font,
              fontSize: size,
              fontWeight: weight,
              letterSpacing: "-0.035em",
              color: w.c ?? color,
              opacity: e * (1 - exit),
              filter: `blur(${(1 - e) * 14 + exit * 14}px)`,
              transform: `translateY(${(1 - e) * 26 - exit * 14}px)`,
            }}
          >
            {w.t}
          </span>
        );
      })}
    </div>
  );
};

const ICONS: Record<string, string> = {
  home: "M3 11 L12 3 L21 11 V21 H14.5 V14.5 H9.5 V21 H3 Z",
  bank: "M3 9.5 L12 4 L21 9.5 Z M5.5 9.5 V17.5 M10 9.5 V17.5 M14 9.5 V17.5 M18.5 9.5 V17.5 M3.5 17.5 H20.5 M2.5 21 H21.5",
  chart: "M4 20 V11 M10 20 V5 M16 20 V14 M2.5 20 H21.5",
  gem: "M6.5 3.5 H17.5 L21.5 9 L12 20.5 L2.5 9 Z M2.5 9 H21.5 M9 3.5 L8 9 L12 20.5 L16 9 L15 3.5",
  shield: "M12 3 L20 6 V12 C20 17 16.5 20 12 21.5 C7.5 20 4 17 4 12 V6 Z",
  car: "M4 16.5 H20 V12 L17.5 7 H6.5 L4 12 Z M7 16.5 V19 M17 16.5 V19 M4 12 H20",
  lock: "M6 11 H18 V21 H6 Z M8.5 11 V7.5 A3.5 3.5 0 0 1 15.5 7.5 V11",
  check: "M5 12.5 L10 17.5 L19 7",
  download: "M12 4 V15 M7 10.5 L12 15.5 L17 10.5 M5 20 H19",
  heart: "M12 20 C4 14 3 9.5 5.5 7 C7.5 5 10.5 5.5 12 8 C13.5 5.5 16.5 5 18.5 7 C21 9.5 20 14 12 20 Z",
  gift: "M4 10.5 H20 V21 H4 Z M3 7 H21 V10.5 H3 Z M12 7 V21 M12 7 C10 3 6 4 8 7 M12 7 C14 3 18 4 16 7",
  chat: "M4 5 H20 V16 H10 L5.5 19.5 V16 H4 Z",
  paw: "M12 13 C9 13 7 15.5 7 17.5 C7 19.5 9 20 12 20 C15 20 17 19.5 17 17.5 C17 15.5 15 13 12 13 Z M6.5 9 V11 M10 6 V8.5 M14 6 V8.5 M17.5 9 V11",
  user: "M12 12 A4 4 0 1 0 12 4 A4 4 0 0 0 12 12 Z M4 21 C4 16.5 8 14.5 12 14.5 C16 14.5 20 16.5 20 21",
  pen: "M4 20 L5 15 L16 4 L20 8 L9 19 Z M13.5 6.5 L17.5 10.5",
  doc: "M6 3 H14 L19 8 V21 H6 Z M14 3 V8 H19 M9 13 H16 M9 17 H16",
  print: "M7 8 V3 H17 V8 M7 17 H4 V8 H20 V17 H17 M7 14 H17 V21 H7 Z",
  mail: "M3 6 H21 V18 H3 Z M3 7 L12 13.5 L21 7",
  phone: "M8 3 H16 V21 H8 Z M11 18 H13",
  rupee: "M7 4 H17 M7 8.5 H17 M7 4 C13 4 13 13 7 13 L14.5 20.5",
  pin: "M12 21 C7 15.5 5.5 12.5 5.5 9.5 A6.5 6.5 0 0 1 18.5 9.5 C18.5 12.5 17 15.5 12 21 Z M12 11.5 A2 2 0 1 0 12 7.5 A2 2 0 0 0 12 11.5 Z",
  send: "M21 3 L10.5 13.5 M21 3 L14.5 21 L10.5 13.5 L3 9.5 Z",
  alert: "M12 3.5 L21.5 20 H2.5 Z M12 10 V14.5 M12 17.2 V17.6",
  gavel: "M13 5 L19 11 M10.5 7.5 L16.5 13.5 M14.5 4 L9.5 9 M20 10 L15 15 M12.5 11.5 L4 20 M13 21 H21",
  truck: "M2.5 6 H14 V16.5 H2.5 Z M14 9.5 H18.5 L21.5 13 V16.5 H14 M7 19 A2 2 0 1 0 7 15 A2 2 0 0 0 7 19 Z M17.5 19 A2 2 0 1 0 17.5 15 A2 2 0 0 0 17.5 19 Z",
  clock: "M12 21 A9 9 0 1 0 12 3 A9 9 0 0 0 12 21 Z M12 7.5 V12 L15 14",
  wallet: "M3.5 7 H20.5 V19.5 H3.5 Z M3.5 7 L16 3.5 V7 M15.5 13.2 H17",
  arrow: "M4 12 H19 M13 6 L19 12 L13 18",
  chevron: "M6 9 L12 15 L18 9",
};

export const Icon: React.FC<{ name: keyof typeof ICONS | string; size?: number; color?: string; stroke?: number }> = ({
  name,
  size = 28,
  color = theme.ink,
  stroke = 1.9,
}) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" style={{ flexShrink: 0 }}>
    <path d={ICONS[name]} stroke={color} strokeWidth={stroke} strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

export const Card: React.FC<{ style?: React.CSSProperties; children?: React.ReactNode }> = ({ style, children }) => (
  <div
    style={{
      position: "absolute",
      background: theme.white,
      borderRadius: 30,
      border: "1px solid rgba(17,24,39,0.06)",
      boxShadow: "0 50px 90px -30px rgba(17,24,39,0.22), 0 12px 30px rgba(17,24,39,0.07)",
      fontFamily: theme.font,
      ...style,
    }}
  >
    {children}
  </div>
);

export const CardTitle: React.FC<{ children: React.ReactNode; sub?: string }> = ({ children, sub }) => (
  <div style={{ position: "absolute", left: 48, top: 38 }}>
    <div style={{ fontSize: 34, fontWeight: 700, color: theme.ink, letterSpacing: "-0.02em" }}>{children}</div>
    {sub ? <div style={{ fontSize: 20, fontWeight: 500, color: theme.muted, marginTop: 2 }}>{sub}</div> : null}
  </div>
);

// Text input that types its value between `from` and `to`, with a focus ring and caret while typing.
export const Field: React.FC<{
  label: string;
  value: string;
  from: number;
  to: number;
  style: React.CSSProperties;
}> = ({ label, value, from, to, style }) => {
  const { frame } = useAnim();
  const chars = Math.round(interpolate(frame, [from, to], [0, value.length], clamp));
  const focused = frame >= from - 5 && frame <= to + 8;
  return (
    <div style={{ position: "absolute", ...style }}>
      <div style={{ fontSize: 19, fontWeight: 600, color: theme.body, marginBottom: 8 }}>{label}</div>
      <div
        style={{
          height: 64,
          borderRadius: 16,
          background: theme.field,
          border: `2px solid ${focused ? theme.red : theme.border}`,
          boxShadow: focused ? "0 0 0 6px rgba(220,38,38,0.14)" : "none",
          display: "flex",
          alignItems: "center",
          padding: "0 20px",
          fontSize: 27,
          fontWeight: 600,
          color: theme.ink,
        }}
      >
        {value.slice(0, chars)}
        {focused ? (
          <span
            style={{ width: 3, height: 32, marginLeft: 3, background: theme.red, opacity: frame % 14 < 8 ? 1 : 0.15 }}
          />
        ) : null}
      </div>
    </div>
  );
};

export const Pill: React.FC<{
  children: React.ReactNode;
  color?: string;
  bg?: string;
  size?: number;
  style?: React.CSSProperties;
}> = ({ children, color = theme.redDeep, bg = theme.redPale, size = 20, style }) => (
  <div
    style={{
      display: "inline-flex",
      alignItems: "center",
      gap: 8,
      padding: `${size * 0.4}px ${size * 0.8}px`,
      borderRadius: 999,
      background: bg,
      color,
      fontFamily: theme.font,
      fontSize: size,
      fontWeight: 700,
      whiteSpace: "nowrap",
      ...style,
    }}
  >
    {children}
  </div>
);

export const Avatar: React.FC<{ name: string; color: string; size?: number }> = ({ name, color, size = 60 }) => (
  <div
    style={{
      width: size,
      height: size,
      borderRadius: size / 2,
      background: color,
      color: theme.white,
      fontFamily: theme.font,
      fontSize: size * 0.38,
      fontWeight: 700,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      flexShrink: 0,
    }}
  >
    {name
      .split(" ")
      .map((p) => p[0])
      .join("")
      .slice(0, 2)}
  </div>
);

// Filled circle with a tick that draws itself.
export const Tick: React.FC<{ at: number; size?: number; color?: string }> = ({ at, size = 34, color = theme.green }) => {
  const { pop, ramp } = useAnim();
  return (
    <div
      style={{
        width: size,
        height: size,
        borderRadius: size / 2,
        background: color,
        transform: `scale(${pop(at)})`,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexShrink: 0,
      }}
    >
      <svg width={size * 0.62} height={size * 0.62} viewBox="0 0 24 24" fill="none">
        <path
          d={ICONS.check}
          stroke="white"
          strokeWidth={3.2}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeDasharray={24}
          strokeDashoffset={24 * (1 - ramp(at + 2, at + 11))}
        />
      </svg>
    </div>
  );
};

export type Key = { f: number; x: number; y: number; click?: boolean };

// Mouse pointer that glides between keyframes and shows a ripple on each click.
export const Pointer: React.FC<{ keys: Key[] }> = ({ keys }) => {
  const { frame } = useAnim();
  const first = keys[0];
  const last = keys[keys.length - 1];
  let x = first.x;
  let y = first.y;
  for (let i = 0; i < keys.length - 1; i++) {
    const a = keys[i];
    const b = keys[i + 1];
    if (frame >= a.f) {
      // Arrive a few frames before the click so the pointer settles first.
      const t = interpolate(frame, [a.f + 3, b.f - 2], [0, 1], { ...clamp, easing: Easing.inOut(Easing.cubic) });
      x = a.x + (b.x - a.x) * t;
      y = a.y + (b.y - a.y) * t;
    }
  }
  const opacity = interpolate(frame, [first.f, first.f + 6, last.f + 10, last.f + 18], [0, 1, 1, 0], clamp);
  const clicks = keys.filter((k) => k.click);
  const press = Math.max(0, ...clicks.map((k) => interpolate(frame, [k.f - 2, k.f, k.f + 5], [0, 1, 0], clamp)));
  return (
    <>
      {clicks.map((k) => {
        const r = interpolate(frame, [k.f, k.f + 16], [0, 1], clamp);
        return r > 0 && r < 1 ? (
          <div
            key={k.f}
            style={{
              position: "absolute",
              left: k.x - 34,
              top: k.y - 34,
              width: 68,
              height: 68,
              borderRadius: 34,
              border: `3px solid ${theme.red}`,
              background: "rgba(220,38,38,0.12)",
              transform: `scale(${0.3 + r * 1.2})`,
              opacity: 1 - r,
              zIndex: 9,
            }}
          />
        ) : null;
      })}
      <svg
        width={46}
        height={46}
        viewBox="0 0 24 24"
        style={{
          position: "absolute",
          left: x - 6,
          top: y - 4,
          opacity,
          transform: `scale(${1 - press * 0.16})`,
          transformOrigin: "20% 15%",
          filter: "drop-shadow(0 6px 8px rgba(17,24,39,0.28))",
          zIndex: 10,
        }}
      >
        <path
          d="M4 2.5 L4 19 L8.6 15 L11.6 22 L14.6 20.7 L11.6 13.9 L17.6 13.9 Z"
          fill={theme.ink}
          stroke="white"
          strokeWidth={1.6}
          strokeLinejoin="round"
        />
      </svg>
    </>
  );
};

// ---------- 2.5D stage ----------
// The stage is a perspective box. Each Plane is a full-size layer rotated about the stage centre and
// pushed along z, so layers at different depths slide against each other as the camera angle drifts.

export const STAGE = { w: 1200, h: 740 };

export type StageState = { ry: number; rx: number; ox: number; oz: number; opacity: number; blur: number };
export const StageCtx = createContext<StageState>({ ry: 0, rx: 0, ox: 0, oz: 0, opacity: 1, blur: 0 });

// A Plane must only ever move through `shift` and `z`, which go into its transform. Animating its
// left/top instead makes Chrome rebuild the layer every frame, and headless Chrome then drops the
// layer from random frames of the render.
export const Plane: React.FC<{
  z?: number;
  // Extra blur for layers far from the focal plane (depth of field).
  dof?: number;
  opacity?: number;
  // Fixed stage position for a content-sized layer. Omit to cover the whole stage.
  at?: { x: number; y: number };
  // Per-frame movement within the plane.
  shift?: { x: number; y: number };
  children?: React.ReactNode;
}> = ({ z = 0, dof = 0, opacity = 1, at, shift, children }) => {
  const s = useContext(StageCtx);
  const blur = s.blur + dof;
  return (
    <div
      style={{
        position: "absolute",
        ...(at ? { left: at.x, top: at.y } : { inset: 0 }),
        transformOrigin: at ? `${STAGE.w / 2 - at.x}px ${STAGE.h / 2 - at.y}px` : "50% 50%",
        transform: `translate3d(${s.ox}px, 0, ${s.oz}px) rotateY(${s.ry}deg) rotateX(${s.rx}deg) translate3d(${shift?.x ?? 0}px, ${shift?.y ?? 0}px, ${z}px)`,
        opacity: s.opacity * opacity,
        // Always present, even at 0: adding or removing a filter also makes Chrome rebuild the layer.
        filter: `blur(${blur.toFixed(2)}px)`,
      }}
    >
      {children}
    </div>
  );
};

// Small card that hovers in front of the main plane and bobs gently.
export const Floater: React.FC<{
  at: number;
  x: number;
  y: number;
  z?: number;
  phase?: number;
  children: React.ReactNode;
}> = ({ at, x, y, z = 120, phase = 0, children }) => {
  const { frame, pop } = useAnim();
  const p = pop(at, 12);
  return (
    <Plane z={z} at={{ x, y }} shift={{ x: 0, y: Math.sin(frame / 22 + phase) * 7 }} opacity={Math.min(1, p * 1.5)}>
      <div style={{ transform: `scale(${0.6 + 0.4 * p})`, transformOrigin: "50% 50%" }}>{children}</div>
    </Plane>
  );
};

export const FloatCard: React.FC<{ children: React.ReactNode; style?: React.CSSProperties }> = ({ children, style }) => (
  <div
    style={{
      display: "flex",
      alignItems: "center",
      gap: 14,
      padding: "16px 24px",
      borderRadius: 22,
      // Solid, not frosted: backdrop-filter inside a 3D-transformed layer flickers in headless Chrome.
      background: "rgba(255,255,255,0.97)",
      border: "1.5px solid #FFFFFF",
      boxShadow: "0 24px 50px -14px rgba(17,24,39,0.25)",
      fontFamily: theme.font,
      fontSize: 23,
      fontWeight: 700,
      color: theme.ink,
      whiteSpace: "nowrap",
      ...style,
    }}
  >
    {children}
  </div>
);

