import React from "react";
import { AbsoluteFill, Html5Audio, interpolate, Sequence, staticFile, useCurrentFrame } from "remotion";
import { Brand, BRAND_DUR, CornerLogo, Cta, CTA_DUR, End, Hook, HOOK_DUR, Recap, RECAP_DUR } from "./Bookends";
import { BAR, clamp } from "./kit";
import { Backdrop } from "./Layout";
import { CLAIM_DUR, FileClaim, START_DUR, StartRecovery, VERIFY_DUR, VerifyPay } from "./StepsA";
import { DASH_DUR, Dashboard, ESCALATE_DUR, Escalation, GetPaid, PAID_DUR } from "./StepsB";

// Scenes in order with their length in frames. Every length is a whole number of bars of the
// 120 BPM track (scripts/make-music.mjs), so each scene change lands on a bar line.
const SCENES: [string, React.FC, number, number][] = [
  // name, component, length, overlap into the next scene
  ["Hook", Hook, HOOK_DUR, 0],
  ["Brand", Brand, BRAND_DUR, 0],
  ["01 Start Your Recovery", StartRecovery, START_DUR, 4],
  ["02 Verify and pay", VerifyPay, VERIFY_DUR, 4],
  ["03 File a Claim", FileClaim, CLAIM_DUR, 4],
  ["04 Auto Escalation", Escalation, ESCALATE_DUR, 4],
  ["05 Recovery Dashboard", Dashboard, DASH_DUR, 4],
  ["06 Get Paid", GetPaid, PAID_DUR, 4],
  ["Recap", Recap, RECAP_DUR, 0],
  ["Call to action", Cta, CTA_DUR, 0],
];
const starts = SCENES.reduce<number[]>((acc, s, i) => [...acc, i === 0 ? 0 : acc[i - 1] + SCENES[i - 1][2]], []);
const STEPS_START = starts[2];
const RECAP_START = starts[8];
const END_START = starts[9] + CTA_DUR;
// End card: two bars plus a one-second tail for the last chord to ring out.
export const INTRO_FRAMES = END_START + BAR * 2 + 30;

const LogoLayer: React.FC = () => {
  const frame = useCurrentFrame();
  const opacity = interpolate(frame, [STEPS_START, STEPS_START + 14, RECAP_START + RECAP_DUR - 12, RECAP_START + RECAP_DUR], [0, 1, 1, 0], clamp);
  return opacity > 0 ? <CornerLogo opacity={opacity} /> : null;
};

// LegalRecovery intro: the problem → the brand → six-step walkthrough → recap → call to action.
export const LegalRecoveryIntro: React.FC = () => (
  <AbsoluteFill>
    <Backdrop />
    {SCENES.map(([name, Scene, dur, overlap], i) => (
      <Sequence key={name} from={starts[i]} durationInFrames={dur + overlap} name={name}>
        <Scene />
      </Sequence>
    ))}
    <Sequence from={END_START} name="End card">
      <End />
    </Sequence>
    <LogoLayer />
    <Html5Audio src={staticFile("music.mp3")} volume={0.85} />
  </AbsoluteFill>
);
