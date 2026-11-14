import React from "react";
import { AbsoluteFill, Easing, useCurrentFrame } from "remotion";
import { theme } from "../theme";
import { Icon, Line, Pill, STAGE, StageCtx, StageState, useAnim, Word } from "./kit";

// Light canvas with two slow red glows, like the site's "red-radial-glow" spots.
export const Backdrop: React.FC = () => {
  const frame = useCurrentFrame();
  const a = Math.sin(frame / 140) * 60;
  return (
    <AbsoluteFill style={{ background: theme.bg }}>
      <div
        style={{
          position: "absolute",
          left: 1100,
          top: -380,
          width: 1200,
          height: 1200,
          borderRadius: "50%",
          background: "radial-gradient(closest-side, rgba(220,38,38,0.13), transparent)",
          transform: `translate(${a}px, ${-a / 2}px)`,
        }}
      />
      <div
        style={{
          position: "absolute",
          left: -420,
          top: 420,
          width: 1100,
          height: 1100,
          borderRadius: "50%",
          background: "radial-gradient(closest-side, rgba(220,38,38,0.09), transparent)",
          transform: `translate(${-a}px, ${a / 2}px)`,
        }}
      />
    </AbsoluteFill>
  );
};

// Perspective box that holds the Planes of one scene.
export const Stage: React.FC<{ state: StageState; scale?: number; top?: number; children: React.ReactNode }> = ({
  state,
  scale = 1,
  top = 250,
  children,
}) => (
  <div
    style={{
      position: "absolute",
      left: (1920 - STAGE.w) / 2,
      top,
      width: STAGE.w,
      height: STAGE.h,
      perspective: 1900,
      transform: `scale(${scale})`,
      transformOrigin: "50% 0%",
    }}
  >
    <StageCtx.Provider value={state}>{children}</StageCtx.Provider>
  </div>
);

// Walkthrough step: step pill, headline and one-line description centred on top, a faint giant
// step number behind, and the UI stage in the middle. `dir` flips which way the stage faces, so
// consecutive steps swing in from opposite sides. Lasts `dur` frames plus a 4-frame overlap.
export const StepScene: React.FC<{
  n: string;
  title: Word[];
  sub: string;
  dur: number;
  dir: 1 | -1;
  // Camera override: yaw in degrees for a given progress 0→1 through the step.
  yaw?: (drift: number) => number;
  children: React.ReactNode;
}> = ({ n, title, sub, dur, dir, yaw, children }) => {
  const { frame, ease, ramp } = useAnim();
  const enter = ease(0, 22);
  const exit = ramp(dur - 12, dur + 4, Easing.in(Easing.cubic));
  const drift = frame / dur;
  const base = yaw ? yaw(drift) : dir * (-12 + 5 * drift);
  const state: StageState = {
    ry: base - dir * (1 - enter) * 22 + dir * exit * 14,
    rx: 5 - 2 * drift,
    ox: dir * ((1 - enter) * 340 - exit * 260),
    oz: (1 - enter) * -520 - exit * 380,
    opacity: Math.min(1, enter * 1.6) * (1 - exit),
    blur: (1 - enter) * 12 + exit * 12,
  };
  const exitAt = dur - 12;
  const soft = (at: number): React.CSSProperties => ({
    opacity: ease(at) * (1 - exit),
    filter: `blur(${(1 - ease(at)) * 8 + exit * 8}px)`,
    transform: `translateY(${(1 - ease(at)) * 14}px)`,
  });
  return (
    <>
      <div
        style={{
          position: "absolute",
          top: 190,
          ...(dir > 0 ? { left: 40 } : { right: 40 }),
          fontFamily: theme.font,
          fontSize: 620,
          fontWeight: 800,
          lineHeight: 1,
          letterSpacing: "-0.06em",
          color: theme.red,
          opacity: 0.075 * enter * (1 - exit),
          transform: `translateX(${dir * (-60 + 90 * drift)}px)`,
        }}
      >
        {n}
      </div>
      <div style={{ position: "absolute", left: 0, top: 46, width: 1920, display: "flex", flexDirection: "column", alignItems: "center" }}>
        <div style={soft(2)}>
          <Pill size={19} style={{ letterSpacing: "0.12em" }}>
            STEP {n}
          </Pill>
        </div>
        <Line words={title} at={5} exitAt={exitAt} size={78} weight={800} center style={{ marginTop: 14 }} />
        <div style={{ marginTop: 14, fontFamily: theme.font, fontSize: 29, fontWeight: 500, color: theme.muted, ...soft(16) }}>{sub}</div>
      </div>
      <Stage state={state} scale={1.08 + 0.04 * drift}>
        {children}
      </Stage>
    </>
  );
};

// ---------- small UI parts shared by the product screens ----------

export const Label: React.FC<{ children: React.ReactNode; style?: React.CSSProperties }> = ({ children, style }) => (
  <div style={{ fontSize: 19, fontWeight: 600, color: theme.body, ...style }}>{children}</div>
);

// Select box that shows `value` from frame `at` on (placeholder before).
export const Select: React.FC<{ label: string; value: string; placeholder?: string; at: number; open?: boolean; style: React.CSSProperties }> = ({
  label,
  value,
  placeholder = "",
  at,
  open,
  style,
}) => {
  const frame = useCurrentFrame();
  const set = frame >= at;
  return (
    <div style={{ position: "absolute", ...style }}>
      <Label style={{ marginBottom: 8 }}>{label}</Label>
      <div
        style={{
          height: 64,
          borderRadius: 16,
          background: theme.field,
          border: `2px solid ${open ? theme.red : theme.border}`,
          boxShadow: open ? "0 0 0 6px rgba(220,38,38,0.14)" : "none",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "0 18px 0 20px",
          fontSize: 26,
          fontWeight: 600,
          color: set ? theme.ink : theme.faint,
          whiteSpace: "nowrap",
        }}
      >
        {set ? value : placeholder}
        <Icon name="chevron" size={24} color={theme.muted} stroke={2.4} />
      </div>
    </div>
  );
};

// Primary button that dips when clicked at `clickAt`.
export const Btn: React.FC<{
  children: React.ReactNode;
  clickAt?: number;
  style: React.CSSProperties;
  color?: string;
  ghost?: boolean;
}> = ({ children, clickAt, style, color = theme.red, ghost }) => {
  const { frame } = useAnim();
  const press = clickAt === undefined ? 0 : Math.max(0, 1 - Math.abs(frame - clickAt - 1) / 5);
  return (
    <div
      style={{
        position: "absolute",
        height: 72,
        borderRadius: 16,
        background: ghost ? theme.white : color,
        border: ghost ? `2px solid ${theme.border}` : "none",
        color: ghost ? theme.body : theme.white,
        boxShadow: ghost ? "none" : `0 14px 28px -10px ${color}99`,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        gap: 12,
        fontSize: 25,
        fontWeight: 700,
        whiteSpace: "nowrap",
        transform: `scale(${1 - press * 0.04})`,
        ...style,
      }}
    >
      {children}
    </div>
  );
};

// Grey placeholder lines standing in for body text on a document.
export const Lines: React.FC<{ widths: number[]; gap?: number; h?: number }> = ({ widths, gap = 12, h = 9 }) => (
  <div style={{ display: "flex", flexDirection: "column", gap }}>
    {widths.map((w, i) => (
      <div key={i} style={{ width: `${w}%`, height: h, borderRadius: h, background: "#E5E7EB" }} />
    ))}
  </div>
);

// Icon in a soft coloured square.
export const IconTile: React.FC<{ name: string; color?: string; bg?: string; size?: number }> = ({
  name,
  color = theme.red,
  bg = theme.redTint,
  size = 52,
}) => (
  <div
    style={{
      width: size,
      height: size,
      borderRadius: size * 0.3,
      background: bg,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      flexShrink: 0,
    }}
  >
    <Icon name={name} size={size * 0.54} color={color} stroke={2.1} />
  </div>
);
