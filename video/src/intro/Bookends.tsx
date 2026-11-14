import React from "react";
import { Easing, Img, interpolate, staticFile } from "remotion";
import { theme } from "../theme";
import { BAR, clamp, FloatCard, Floater, Icon, Line, Plane, Pointer, StageState, Tick, useAnim } from "./kit";
import { IconTile, Stage } from "./Layout";

export const HOOK_DUR = BAR * 2;
export const BRAND_DUR = BAR * 2;
export const RECAP_DUR = BAR * 2;
export const CTA_DUR = BAR * 3;

const full: React.CSSProperties = { position: "absolute", left: 0, width: 1920 };

// Stage state for a bookend scene: gentle sweep, blur in and out.
const useSweep = (dur: number, from: number, to: number): StageState => {
  const { frame, ease, ramp } = useAnim();
  const enter = ease(6, 22);
  const exit = ramp(dur - 14, dur, Easing.in(Easing.cubic));
  return {
    ry: from + (to - from) * (frame / dur),
    rx: 5,
    ox: 0,
    oz: (1 - enter) * -400 - exit * 300,
    opacity: Math.min(1, enter * 1.5) * (1 - exit),
    blur: (1 - enter) * 10 + exit * 12,
  };
};

const Bubble: React.FC<{ at: number; top: number; children: React.ReactNode }> = ({ at, top, children }) => {
  const { pop } = useAnim();
  const p = pop(at, 12);
  return (
    <div
      style={{
        position: "absolute",
        right: 36,
        top,
        padding: "16px 24px",
        borderRadius: "24px 24px 6px 24px",
        background: theme.red,
        color: theme.white,
        fontFamily: theme.font,
        fontSize: 28,
        fontWeight: 600,
        whiteSpace: "nowrap",
        opacity: Math.min(1, p * 1.5),
        transform: `scale(${0.7 + 0.3 * p})`,
        transformOrigin: "100% 100%",
        boxShadow: "0 14px 26px -12px rgba(220,38,38,0.6)",
      }}
    >
      {children}
    </div>
  );
};

// The viewer's problem: reminders that never get a reply. The recovery types are the site's own list.
export const Hook: React.FC = () => {
  const { frame, ease } = useAnim();
  const state = useSweep(HOOK_DUR, 10, -6);
  const exitAt = HOOK_DUR - 14;
  const chips: [string, number, number, number][] = [
    ["Unpaid Salary & Employment Dues", 70, -195, 60],
    ["Security Deposit & Rent", 78, -120, 300],
    ["Freelancer & Client Payments", 74, 900, 30],
    ["Money Lent to Friend / Relative", 82, 860, 290],
  ];
  return (
    <>
      <Line words={[{ t: "Someone " }, { t: "owes " }, { t: "you " }, { t: "money." }]} at={4} exitAt={exitAt} size={108} weight={800} center style={{ ...full, top: 100 }} />
      <Line
        words={[{ t: "And " }, { t: "they've " }, { t: "gone " }, { t: "silent." }]}
        at={62}
        exitAt={exitAt}
        size={108}
        weight={800}
        color={theme.red}
        center
        style={{ ...full, top: 222 }}
      />
      <Stage state={state} top={400} scale={1.12}>
        <Plane>
          <div
            style={{
              position: "absolute",
              left: 270,
              top: 20,
              width: 660,
              height: 440,
              borderRadius: 30,
              background: theme.white,
              border: "1px solid rgba(17,24,39,0.07)",
              boxShadow: "0 50px 90px -30px rgba(17,24,39,0.25), 0 12px 30px rgba(17,24,39,0.07)",
            }}
          >
            <Bubble at={16} top={36}>
              Hi, any update on my payment?
            </Bubble>
            <Bubble at={30} top={128}>
              The ₹45,000 invoice is overdue.
            </Bubble>
            <Bubble at={44} top={220}>
              Hello??
            </Bubble>
            <div
              style={{
                position: "absolute",
                right: 40,
                top: 300,
                fontFamily: theme.font,
                fontSize: 22,
                fontWeight: 600,
                color: theme.faint,
                opacity: ease(54),
              }}
            >
              Seen · no reply
            </div>
            <div style={{ position: "absolute", left: 36, top: 350, display: "flex", gap: 9, opacity: ease(58) * 0.9 }}>
              {[0, 1, 2].map((i) => (
                <div
                  key={i}
                  style={{ width: 16, height: 16, borderRadius: 8, background: theme.border, transform: `translateY(${Math.sin(frame / 4 - i) * 4}px)` }}
                />
              ))}
            </div>
          </div>
        </Plane>
        {chips.map(([t, at, x, y], i) => (
          <Floater key={t} at={at} x={x} y={y} z={130 + i * 12} phase={i}>
            <FloatCard style={{ fontSize: 24 }}>{t}</FloatCard>
          </Floater>
        ))}
      </Stage>
    </>
  );
};

const Badge: React.FC<{ at: number; icon: string; children: React.ReactNode }> = ({ at, icon, children }) => {
  const { pop, ramp } = useAnim();
  const p = pop(at, 12);
  return (
    <div style={{ opacity: Math.min(1, p * 1.5), transform: `translateY(${(1 - p) * 30}px) scale(${0.8 + 0.2 * p})` }}>
      <FloatCard style={{ fontSize: 28, padding: "18px 30px" }}>
        <IconTile name={icon} size={50} />
        {children}
      </FloatCard>
    </div>
  );
};

const Logo: React.FC<{ width: number; style?: React.CSSProperties }> = ({ width, style }) => (
  <Img src={staticFile("logo.svg")} style={{ width, height: (width * 601) / 3236, ...style }} />
);

// The brand: logo, then the homepage headline.
export const Brand: React.FC = () => {
  const { pop, ramp } = useAnim();
  const exitAt = BRAND_DUR - 14;
  const exit = ramp(exitAt, BRAND_DUR, Easing.in(Easing.cubic));
  const p = pop(2, 13);
  return (
    <>
      <div style={{ ...full, top: 190, display: "flex", justifyContent: "center", opacity: Math.min(1, p * 1.4) * (1 - exit), filter: `blur(${exit * 12}px)` }}>
        <Logo width={600} style={{ transform: `scale(${0.8 + 0.2 * p})` }} />
      </div>
      <Line words={[{ t: "Money " }, { t: "Stuck?" }]} at={14} exitAt={exitAt} size={150} weight={800} center style={{ ...full, top: 380 }} />
      <Line
        words={[{ t: "Recover " }, { t: "It " }, { t: "Legally." }]}
        at={24}
        exitAt={exitAt}
        size={150}
        weight={800}
        color={theme.red}
        center
        style={{ ...full, top: 550 }}
      />
      <div style={{ ...full, top: 810, display: "flex", justifyContent: "center", gap: 28, opacity: 1 - exit, filter: `blur(${exit * 12}px)` }}>
        <Badge at={56} icon="wallet">
          Starting at ₹999
        </Badge>
        <Badge at={64} icon="clock">
          Notice in 24 Hours
        </Badge>
        <Badge at={72} icon="shield">
          No Hidden Fees
        </Badge>
      </div>
    </>
  );
};

// Small logo that stays in the corner during the walkthrough.
export const CornerLogo: React.FC<{ opacity: number }> = ({ opacity }) => (
  <Logo width={236} style={{ position: "absolute", left: 64, top: 52, opacity }} />
);

const STEPS3 = [
  { title: "File a Claim", sub: "Enter defaulter details & dues", icon: "doc" },
  { title: "Auto Escalation", sub: "4 warnings over 3 weeks", icon: "send" },
  { title: "Get Paid", sub: "Defaulter pays you directly", icon: "shield" },
];

// The product's own three-step summary (src/app/user/how-it-works/page.tsx).
export const Recap: React.FC = () => {
  const { pop, ease } = useAnim();
  const state = useSweep(RECAP_DUR, -9, 7);
  const exitAt = RECAP_DUR - 14;
  return (
    <>
      <Line
        words={[{ t: "3 ", c: theme.red }, { t: "simple ", c: theme.red }, { t: "steps ", c: theme.red }, { t: "to " }, { t: "recover " }, { t: "your " }, { t: "money." }]}
        at={3}
        exitAt={exitAt}
        size={86}
        weight={800}
        center
        style={{ ...full, top: 130 }}
      />
      <Stage state={state} top={300} scale={1.2}>
        {STEPS3.map((s, i) => {
          const p = pop(12 + i * 14, 12);
          return (
            <Plane key={s.title} z={40 + i * 30} at={{ x: i * 410, y: 40 }} opacity={Math.min(1, p * 1.5)} shift={{ x: 0, y: (1 - p) * 60 }}>
              <div
                style={{
                  width: 380,
                  height: 350,
                  boxSizing: "border-box",
                  padding: 36,
                  borderRadius: 30,
                  background: theme.white,
                  border: "1px solid rgba(17,24,39,0.07)",
                  boxShadow: "0 50px 90px -30px rgba(17,24,39,0.28), 0 12px 30px rgba(17,24,39,0.07)",
                  fontFamily: theme.font,
                }}
              >
                <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                  <IconTile name={s.icon} size={84} />
                  <span style={{ fontSize: 96, fontWeight: 800, lineHeight: 1, color: theme.red, opacity: 0.16 }}>{i + 1}</span>
                </div>
                <div style={{ marginTop: 34, fontSize: 40, fontWeight: 800, color: theme.ink, letterSpacing: "-0.03em", whiteSpace: "nowrap" }}>{s.title}</div>
                <div style={{ marginTop: 8, fontSize: 25, lineHeight: 1.3, fontWeight: 500, color: theme.muted }}>{s.sub}</div>
              </div>
            </Plane>
          );
        })}
        {[0, 1].map((i) => (
          <Plane key={i} z={120} at={{ x: 380 + i * 410 - 17, y: 183 }} opacity={ease(24 + i * 14)}>
            <div
              style={{
                width: 64,
                height: 64,
                borderRadius: 32,
                background: theme.red,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                boxShadow: "0 12px 24px -8px rgba(220,38,38,0.7)",
              }}
            >
              <Icon name="arrow" size={34} color="white" stroke={2.6} />
            </div>
          </Plane>
        ))}
        <Floater at={62} x={150} y={470} z={150} phase={1}>
          <FloatCard style={{ fontSize: 28 }}>
            <Tick at={64} size={40} />
            ₹999 flat fee
          </FloatCard>
        </Floater>
        <Floater at={70} x={465} y={470} z={150} phase={2}>
          <FloatCard style={{ fontSize: 28 }}>
            <Tick at={72} size={40} />
            No Hidden Fees
          </FloatCard>
        </Floater>
        <Floater at={78} x={790} y={470} z={150} phase={3}>
          <FloatCard style={{ fontSize: 28 }}>
            <Tick at={80} size={40} />
            Zero commission
          </FloatCard>
        </Floater>
      </Stage>
    </>
  );
};

// The one call to action, in the site's own closing words.
export const Cta: React.FC = () => {
  const { frame, pop, ease, ramp } = useAnim();
  const exitAt = CTA_DUR - 14;
  const exit = ramp(exitAt, CTA_DUR, Easing.in(Easing.cubic));
  const b = pop(44, 11);
  const press = Math.max(0, 1 - Math.abs(frame - 97) / 5);
  const out: React.CSSProperties = { opacity: 1 - exit, filter: `blur(${exit * 12}px)` };
  return (
    <>
      <Line words={[{ t: "Ready " }, { t: "to " }, { t: "recover " }, { t: "what " }, { t: "is" }]} at={5} exitAt={exitAt} size={116} weight={800} center style={{ ...full, top: 250 }} />
      <Line words={[{ t: "rightfully ", c: theme.red }, { t: "yours?", c: theme.red }]} at={17} exitAt={exitAt} size={116} weight={800} center style={{ ...full, top: 380 }} />
      <div style={{ ...full, top: 548, textAlign: "center", fontFamily: theme.font, fontSize: 34, fontWeight: 500, color: theme.muted, opacity: ease(30) * (1 - exit), filter: `blur(${(1 - ease(30)) * 8 + exit * 12}px)` }}>
        Start your recovery in less than 5 minutes.
      </div>
      <div style={{ ...full, top: 654, display: "flex", justifyContent: "center", ...out }}>
        <div
          style={{
            height: 112,
            padding: "0 64px",
            borderRadius: 28,
            background: theme.red,
            color: theme.white,
            fontFamily: theme.font,
            fontSize: 44,
            fontWeight: 800,
            display: "flex",
            alignItems: "center",
            gap: 18,
            boxShadow: "0 30px 60px -18px rgba(220,38,38,0.7)",
            opacity: Math.min(1, b * 1.5),
            transform: `scale(${(0.7 + 0.3 * b) * (1 - press * 0.05)})`,
          }}
        >
          Start Recovery
          <Icon name="arrow" size={44} color="white" stroke={2.6} />
        </div>
      </div>
      <div style={{ ...full, top: 842, display: "flex", justifyContent: "center", gap: 48, fontFamily: theme.font, fontSize: 28, fontWeight: 600, color: theme.body, ...out }}>
        {["No Hidden Fees", "Notice in 24 Hours", "Zero commission"].map((t, i) => (
          <div key={t} style={{ display: "flex", alignItems: "center", gap: 12, opacity: ease(58 + i * 7) }}>
            <Tick at={58 + i * 7} size={36} />
            {t}
          </div>
        ))}
      </div>
      <div style={{ ...full, top: 0, height: 1080, ...out }}>
        <Pointer
          keys={[
            { f: 72, x: 1380, y: 900 },
            { f: 96, x: 1010, y: 718, click: true },
            { f: 124, x: 1090, y: 790 },
          ]}
        />
      </div>
    </>
  );
};

export const End: React.FC = () => {
  const { pop, ease } = useAnim();
  const p = pop(3, 13);
  return (
    <>
      <div style={{ ...full, top: 330, display: "flex", justifyContent: "center", opacity: Math.min(1, p * 1.4) }}>
        <Logo width={820} style={{ transform: `scale(${0.82 + 0.18 * p})` }} />
      </div>
      <Line words={[{ t: "Money " }, { t: "Stuck? " }, { t: "Recover ", c: theme.red }, { t: "It ", c: theme.red }, { t: "Legally.", c: theme.red }]} at={14} size={64} weight={800} center style={{ ...full, top: 556 }} />
      <div style={{ ...full, top: 696, display: "flex", justifyContent: "center", opacity: ease(34), transform: `translateY(${(1 - ease(34)) * 20}px)` }}>
        <div
          style={{
            padding: "18px 44px",
            borderRadius: 999,
            background: theme.ink,
            color: theme.white,
            fontFamily: theme.font,
            fontSize: 44,
            fontWeight: 700,
            letterSpacing: "-0.01em",
          }}
        >
          legalrecovery.in
        </div>
      </div>
    </>
  );
};
