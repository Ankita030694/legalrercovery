import React from "react";
import { interpolate } from "remotion";
import { theme } from "../theme";
import { BAR, Card, clamp, Field, FloatCard, Floater, Icon, Pill, Plane, Pointer, Tick, useAnim } from "./kit";
import { Btn, IconTile, Label, Lines, StepScene } from "./Layout";

// Wording comes from src/app/user/how-it-works/page.tsx, src/app/user/dashboard/page.tsx and the
// dashboard mock-up in src/app/HomeClient.tsx. The case (Acme Corporation, ₹45,000) is that mock-up's.

export const ESCALATE_DUR = BAR * 4;
export const DASH_DUR = BAR * 3;
export const PAID_DUR = BAR * 4;

const NOTICES = [
  { label: "Notice 1", time: "Immediate", desc: "First demand letter sent via email & WhatsApp", icon: "mail", color: "#EF4444", bg: "#FEF2F2" },
  { label: "Notice 2", time: "Day 8", desc: "Warning citing applicable civil & criminal laws", icon: "chat", color: "#F97316", bg: "#FFF7ED" },
  { label: "Notice 3", time: "Day 15", desc: "Final warning — 48 hours to pay before complaint", icon: "alert", color: "#D97706", bg: "#FFFBEB" },
  { label: "Notice 4", time: "Day 22", desc: "Police complaint", icon: "gavel", color: "#2563EB", bg: "#EFF6FF" },
];
const NX = [150, 450, 750, 1050];

// 04: the showcase. One notice lands per bar along the three-week strip while the camera sweeps past.
export const Escalation: React.FC = () => {
  const { frame, pop, ease, ramp } = useAnim();
  const fill = interpolate(frame, [20, 80, 140, 200], [0, 300, 600, 900], clamp);
  return (
    <StepScene
      n="04"
      dir={1}
      dur={ESCALATE_DUR}
      yaw={(d) => 15 - 30 * d}
      title={[{ t: "Auto " }, { t: "Escalation", c: theme.red }]}
      sub="4 warnings over 3 weeks"
    >
      {/* the schedule strip */}
      <Plane>
        <div style={{ position: "absolute", left: 150, top: 517, width: 900, height: 6, borderRadius: 3, background: theme.border }} />
        <div style={{ position: "absolute", left: 150, top: 517, width: fill, height: 6, borderRadius: 3, background: theme.red }} />
        {NOTICES.map((n, i) => {
          const at = 10 + i * BAR;
          const on = ease(at + 8, 12);
          return (
            <div key={n.label} style={{ position: "absolute", left: NX[i] - 150, top: 498, width: 300, fontFamily: theme.font, textAlign: "center" }}>
              <div
                style={{
                  width: 44,
                  height: 44,
                  borderRadius: 22,
                  margin: "0 auto",
                  boxSizing: "border-box",
                  background: on > 0.5 ? theme.red : theme.white,
                  border: `5px solid ${on > 0.5 ? theme.redPale : theme.border}`,
                  transform: `scale(${0.8 + 0.2 * pop(at + 8)})`,
                }}
              />
              <div style={{ opacity: 0.3 + 0.7 * on }}>
                <div style={{ marginTop: 14, fontSize: 36, fontWeight: 800, color: theme.ink, letterSpacing: "-0.02em" }}>{n.time}</div>
                <div style={{ margin: "6px auto 0", width: 270, fontSize: 20, lineHeight: 1.32, fontWeight: 500, color: theme.body }}>{n.desc}</div>
              </div>
            </div>
          );
        })}
      </Plane>

      {/* the four notices, standing off the strip */}
      {NOTICES.map((n, i) => {
        const at = 10 + i * BAR;
        const p = pop(at, 12);
        const drop = ramp(at, at + 14);
        return (
          <Plane key={n.label} z={70} at={{ x: NX[i] - 125, y: 40 }} shift={{ x: 0, y: (1 - drop) * -90 }} opacity={Math.min(1, p * 1.6)}>
            <div
              style={{
                width: 250,
                height: 400,
                boxSizing: "border-box",
                padding: 24,
                borderRadius: 18,
                background: theme.white,
                border: "1px solid rgba(17,24,39,0.07)",
                boxShadow: "0 40px 70px -28px rgba(17,24,39,0.35), 0 8px 20px rgba(17,24,39,0.06)",
                fontFamily: theme.font,
                transform: `scale(${0.7 + 0.3 * p})`,
              }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
                <IconTile name={n.icon} color={n.color} bg={n.bg} size={54} />
                <div style={{ fontSize: 27, fontWeight: 800, color: theme.ink, letterSpacing: "-0.02em" }}>{n.label}</div>
              </div>
              <div style={{ height: 3, background: n.color, margin: "18px 0 20px", borderRadius: 2 }} />
              <Lines widths={[100, 92, 97, 85, 94, 60]} gap={13} />
              <div style={{ marginTop: 24 }}>
                <Lines widths={[90, 96, 55]} gap={13} />
              </div>
              <div style={{ position: "absolute", right: 18, bottom: 18 }}>
                <Tick at={at + 30} size={52} />
              </div>
            </div>
          </Plane>
        );
      })}

      <Floater at={24} x={-140} y={150} z={150} phase={1}>
        <FloatCard>
          <IconTile name="mail" size={46} />
          Email
        </FloatCard>
      </Floater>
      <Floater at={32} x={-140} y={260} z={170} phase={3}>
        <FloatCard>
          <IconTile name="chat" size={46} color="#059669" bg={theme.greenPale} />
          WhatsApp
        </FloatCard>
      </Floater>
      <Floater at={140} x={930} y={-36} z={160} phase={2}>
        <FloatCard>
          <IconTile name="clock" size={46} />
          3-Week Schedule
        </FloatCard>
      </Floater>
    </StepScene>
  );
};

const TIMELINE = [
  { label: "First Notice", desc: "Sent after 1 hour grace period" },
  { label: "Second Notice", desc: "Dispatched exactly 1 week after" },
  { label: "Third Notice", desc: "Final demand notice" },
  { label: "Police Complaint Draft", desc: "Drafted complaint copy shared" },
];

const Metric: React.FC<{ label: string; value: React.ReactNode; left: number; color?: string }> = ({ label, value, left, color = theme.ink }) => (
  <div
    style={{
      position: "absolute",
      left,
      top: 36,
      width: 292,
      height: 124,
      boxSizing: "border-box",
      padding: "20px 24px",
      borderRadius: 20,
      background: theme.field,
      border: `1.5px solid ${theme.border}`,
    }}
  >
    <div style={{ fontSize: 15, fontWeight: 700, color: theme.muted, letterSpacing: "0.07em", textTransform: "uppercase" }}>{label}</div>
    <div style={{ marginTop: 6, fontSize: 44, fontWeight: 800, color, letterSpacing: "-0.03em" }}>{value}</div>
  </div>
);

const CaseHead: React.FC<{ status: React.ReactNode }> = ({ status }) => (
  <div style={{ display: "flex", alignItems: "center", gap: 18 }}>
    <div
      style={{
        width: 64,
        height: 64,
        borderRadius: 18,
        background: theme.ink,
        color: theme.white,
        fontSize: 24,
        fontWeight: 800,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      AC
    </div>
    <div style={{ flex: 1 }}>
      <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
        <span style={{ fontSize: 30, fontWeight: 800, color: theme.ink, letterSpacing: "-0.02em" }}>Acme Corporation</span>
        {status}
      </div>
      <div style={{ fontSize: 18, fontWeight: 500, color: theme.muted }}>finance@acmecorp.com • Ref: #REC-4921</div>
    </div>
  </div>
);

// 05: the dashboard, with the dispatch timeline filling in.
export const Dashboard: React.FC = () => {
  const { frame, pop, ease } = useAnim();
  const CX = 100;
  const CY = 20;
  const done = [40, 74];
  const line = interpolate(frame, [40, 70, 74, 104], [0, 233, 233, 466], clamp);
  const live = frame >= 106;
  return (
    <StepScene
      n="05"
      dir={-1}
      dur={DASH_DUR}
      title={[{ t: "Recovery " }, { t: "Dashboard", c: theme.red }]}
      sub="Monitor active claims and notice dispatch queues in real time."
    >
      <Plane>
        <Card style={{ left: CX, top: CY, width: 1000, height: 636 }}>
          <Metric left={36} label="Total Dues Outstanding" value="₹45,000" />
          <Metric left={354} label="Active Recovery Claims" value="1" />
          <Metric left={672} label="Recovered Dues" value="₹0" color={theme.green} />
          <div
            style={{
              position: "absolute",
              left: 36,
              top: 188,
              width: 928,
              height: 412,
              boxSizing: "border-box",
              padding: 30,
              borderRadius: 22,
              border: `1.5px solid ${theme.border}`,
            }}
          >
            <CaseHead status={<Pill size={16}>Active Dispatch</Pill>} />
            <div style={{ position: "absolute", right: 30, top: 28, textAlign: "right" }}>
              <div style={{ fontSize: 14, fontWeight: 700, color: theme.faint, letterSpacing: "0.08em" }}>DISPUTE DUES</div>
              <div style={{ fontSize: 32, fontWeight: 800, color: theme.ink }}>₹45,000</div>
            </div>
            <div style={{ marginTop: 34, fontSize: 15, fontWeight: 700, color: theme.faint, letterSpacing: "0.08em", textTransform: "uppercase" }}>
              Demand Notice Dispatch Timeline
            </div>
            <div style={{ position: "absolute", left: 114, top: 216, width: 700, height: 6, borderRadius: 3, background: theme.border }} />
            <div style={{ position: "absolute", left: 114, top: 216, width: line, height: 6, borderRadius: 3, background: theme.green }} />
            {TIMELINE.map((t, i) => {
              const isDone = i < 2 && frame >= done[i];
              const isLive = i === 2 && live;
              return (
                <div key={t.label} style={{ position: "absolute", left: 114 + i * 233 - 110, top: 190, width: 220, textAlign: "center" }}>
                  <div
                    style={{
                      width: 58,
                      height: 58,
                      borderRadius: 29,
                      margin: "0 auto",
                      boxSizing: "border-box",
                      background: theme.white,
                      border: `4px solid ${isLive ? theme.red : theme.border}`,
                      boxShadow: isLive ? `0 0 0 ${6 + 4 * Math.sin(frame / 5)}px rgba(220,38,38,0.14)` : "none",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    {isDone ? <Tick at={done[i]} size={58} /> : <Icon name={i === 3 ? "gavel" : "mail"} size={26} color={isLive ? theme.red : theme.faint} />}
                  </div>
                  <div style={{ marginTop: 14, fontSize: 22, fontWeight: 800, color: isDone ? "#059669" : isLive ? theme.red : theme.faint }}>{t.label}</div>
                  <div style={{ marginTop: 4, fontSize: 16, lineHeight: 1.3, fontWeight: 500, color: theme.muted }}>{t.desc}</div>
                  {isLive ? (
                    <div style={{ marginTop: 8, opacity: pop(106) }}>
                      <Pill size={13} style={{ letterSpacing: "0.08em" }}>
                        IN PROGRESS
                      </Pill>
                    </div>
                  ) : null}
                </div>
              );
            })}
          </div>
        </Card>
      </Plane>

      <Floater at={30} x={-130} y={-44} z={150} phase={1}>
        <FloatCard style={{ alignItems: "flex-start", flexDirection: "column", gap: 2 }}>
          <span>Real-time Tracking</span>
          <span style={{ fontSize: 18, fontWeight: 500, color: theme.muted }}>Live dashboard case updates</span>
        </FloatCard>
      </Floater>
      <Floater at={84} x={1000} y={150} z={170} phase={3}>
        <FloatCard>
          <IconTile name="clock" size={46} />
          Notice in 24 Hours
        </FloatCard>
      </Floater>
    </StepScene>
  );
};

// 06: the defaulter pays, the user stops the notices and records the recovery.
export const GetPaid: React.FC = () => {
  const { frame, pop, ease } = useAnim();
  const CX = 70;
  const CY = 50;
  const modal = ease(80, 10) * (1 - ease(124, 8));
  const recovered = frame >= 124;
  const amount = Math.round(interpolate(frame, [124, 158], [0, 45000], clamp));
  return (
    <StepScene
      n="06"
      dir={1}
      dur={PAID_DUR}
      title={[{ t: "Get " }, { t: "Paid", c: theme.red }]}
      sub="Defaulter pays you directly — via UPI, bank transfer, or cash."
    >
      <Plane>
        <Card style={{ left: CX, top: CY, width: 760, height: 590 }}>
          <div style={{ position: "absolute", left: 40, right: 40, top: 36 }}>
            <CaseHead
              status={
                recovered ? (
                  <Pill size={16} color="#047857" bg={theme.greenPale}>
                    Dues Recovered
                  </Pill>
                ) : (
                  <Pill size={16}>Active Dispatch</Pill>
                )
              }
            />
          </div>
          {[
            { label: "Stuck Amount", value: "₹45,000", color: theme.ink },
            { label: "Recovered Amount", value: `₹${amount.toLocaleString("en-IN")}`, color: theme.green },
          ].map((m, i) => (
            <div
              key={m.label}
              style={{
                position: "absolute",
                left: 40 + i * 350,
                top: 140,
                width: 330,
                height: 150,
                boxSizing: "border-box",
                padding: "24px 28px",
                borderRadius: 20,
                background: i === 1 && recovered ? "#ECFDF5" : theme.field,
                border: `1.5px solid ${i === 1 && recovered ? "#A7F3D0" : theme.border}`,
              }}
            >
              <div style={{ fontSize: 16, fontWeight: 700, color: theme.muted, letterSpacing: "0.07em", textTransform: "uppercase" }}>{m.label}</div>
              <div style={{ marginTop: 8, fontSize: 54, fontWeight: 800, color: m.color, letterSpacing: "-0.03em" }}>{m.value}</div>
            </div>
          ))}
          <div style={{ position: "absolute", left: 40, top: 326, fontSize: 15, fontWeight: 700, color: theme.faint, letterSpacing: "0.08em", textTransform: "uppercase" }}>
            Demand Notice Dispatch Timeline
          </div>
          <div style={{ position: "absolute", left: 40, top: 364, display: "flex", gap: 14 }}>
            {["First Notice", "Second Notice", "Third Notice", "Police Complaint Draft"].map((t, i) => (
              <div
                key={t}
                style={{
                  padding: "10px 14px",
                  borderRadius: 12,
                  fontSize: 17,
                  fontWeight: 700,
                  whiteSpace: "nowrap",
                  background: i < 2 ? theme.greenPale : theme.field,
                  color: i < 2 ? "#047857" : theme.faint,
                  border: `1.5px solid ${i < 2 ? "#A7F3D0" : theme.border}`,
                  textDecoration: i >= 2 && recovered ? "line-through" : "none",
                }}
              >
                {t}
              </div>
            ))}
          </div>
          <div style={{ position: "absolute", left: 40, top: 452, width: 400, fontSize: 19, lineHeight: 1.35, fontWeight: 500, color: theme.muted }}>
            Once they pay, click "Stop Notices" and future dispatches stop instantly.
          </div>
          <Btn clickAt={76} ghost style={{ left: 480, top: 470, width: 240, color: theme.red, borderColor: theme.redPale }}>
            <Icon name="lock" size={24} color={theme.red} stroke={2.2} />
            Stop Notices
          </Btn>
        </Card>
      </Plane>

      {/* bank alert: an illustration of the defaulter paying the user directly */}
      <Floater at={30} x={800} y={36} z={150} phase={2}>
        <FloatCard style={{ padding: "20px 28px", gap: 18 }}>
          <IconTile name="rupee" size={60} color="#059669" bg={theme.greenPale} />
          <div>
            <div style={{ fontSize: 30, fontWeight: 800 }}>₹45,000 received</div>
            <div style={{ fontSize: 19, fontWeight: 500, color: theme.muted }}>from Acme Corporation · UPI</div>
          </div>
        </FloatCard>
      </Floater>

      {/* record recovery dialog */}
      <Plane z={110} opacity={modal} shift={{ x: 0, y: (1 - modal) * 30 }}>
        <Card style={{ left: 420, top: 150, width: 540, height: 400 }}>
          <div style={{ position: "absolute", left: 40, right: 40, top: 32 }}>
            <div style={{ fontSize: 30, fontWeight: 800, color: theme.ink, letterSpacing: "-0.02em" }}>Record Dues Recovery?</div>
            <div style={{ marginTop: 8, fontSize: 18, lineHeight: 1.35, fontWeight: 500, color: theme.muted }}>
              Record the amount recovered from the defaulter to mark this case as settled and update your recovery metrics.
            </div>
          </div>
          <Field label="Dues Recovered (₹)" value="45,000" from={92} to={104} style={{ left: 40, top: 172, width: 460 }} />
          <Btn ghost style={{ left: 40, top: 296, width: 180 }}>
            Go Back
          </Btn>
          <Btn clickAt={120} color="#059669" style={{ left: 236, top: 296, width: 264 }}>
            Record Recovery
          </Btn>
        </Card>
      </Plane>

      <Floater at={150} x={-100} y={565} z={160} phase={1}>
        <FloatCard>
          <IconTile name="wallet" size={46} />
          Defaulter pays you directly
        </FloatCard>
      </Floater>
      <Floater at={172} x={850} y={440} z={170} phase={3}>
        <FloatCard style={{ alignItems: "flex-start", flexDirection: "column", gap: 2 }}>
          <span>Zero commission</span>
          <span style={{ fontSize: 18, fontWeight: 500, color: theme.muted }}>on your recovered amount</span>
        </FloatCard>
      </Floater>

      <Plane z={70}>
        <Pointer
          keys={[
            { f: 56, x: 900, y: 660 },
            { f: 76, x: CX + 610, y: CY + 512, click: true },
            { f: 100, x: 700, y: 400 },
            { f: 120, x: 800, y: 486, click: true },
            { f: 136, x: 900, y: 600 },
          ]}
        />
      </Plane>
    </StepScene>
  );
};
