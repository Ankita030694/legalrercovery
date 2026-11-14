import React from "react";
import { interpolate } from "remotion";
import { theme } from "../theme";
import { BAR, Card, clamp, Field, FloatCard, Floater, Icon, Pill, Plane, Pointer, Tick, useAnim } from "./kit";
import { Btn, IconTile, Label, Lines, Select, StepScene } from "./Layout";

// Wording on these screens comes from src/components/RecoveryForm.tsx, PhysicalDispatchChoice.tsx,
// src/lib/recoveryTypes.ts and src/app/user/new-recovery/page.tsx. People and amounts are fictional.

export const START_DUR = BAR * 3;
export const VERIFY_DUR = BAR * 2;
export const CLAIM_DUR = BAR * 3;

const TYPES = [
  "Unpaid Salary & Employment Dues",
  "Business Dues & Unpaid Invoices",
  "Freelancer & Client Payments",
  "Money Lent to Friend / Relative",
];

// 01: the public form, ending on "Verify Email & Pay ₹999".
export const StartRecovery: React.FC = () => {
  const { frame, pop, ease } = useAnim();
  const CX = 220;
  const CY = 50;
  const menu = ease(78, 8) * (1 - ease(99, 6));
  const picked = frame >= 99;
  const noAt = 121;
  const sent = frame >= 146;
  return (
    <StepScene
      n="01"
      dir={-1}
      dur={START_DUR}
      title={[{ t: "Start Your " }, { t: "Recovery", c: theme.red }]}
      sub="Enter your details to initiate secure legal recovery setup."
    >
      <Plane>
        <Card style={{ left: CX, top: CY, width: 760, height: 640 }}>
          <Field label="Full Name" value="Priya Nair" from={20} to={38} style={{ left: 44, top: 40, width: 326 }} />
          <Field label="Phone Number" value="98765 43210" from={42} to={60} style={{ left: 390, top: 40, width: 326 }} />
          <Select
            label="What do you wish to recover?"
            placeholder="Select recovery type"
            value={TYPES[2]}
            at={99}
            open={frame >= 76 && frame < 99}
            style={{ left: 44, top: 164, width: 672 }}
          />
          <Label style={{ position: "absolute", left: 44, top: 288 }}>Send your legal notices physically too?</Label>
          {[
            { title: "Yes", detail: "+₹450 by Speed Post", icon: "truck", on: false },
            { title: "No", detail: "Email & WhatsApp only", icon: "mail", on: frame >= noAt },
          ].map((o, i) => (
            <div
              key={o.title}
              style={{
                position: "absolute",
                left: 44 + i * 346,
                top: 324,
                width: 326,
                height: 104,
                borderRadius: 18,
                border: `2.5px solid ${o.on ? theme.red : theme.border}`,
                background: o.on ? theme.redTint : theme.white,
                display: "flex",
                alignItems: "center",
                gap: 16,
                padding: "0 20px",
                boxSizing: "border-box",
              }}
            >
              <IconTile name={o.icon} color={o.on ? theme.red : theme.muted} bg={o.on ? theme.redPale : theme.field} />
              <div>
                <div style={{ fontSize: 26, fontWeight: 700, color: theme.ink }}>{o.title}</div>
                <div style={{ fontSize: 18, fontWeight: 500, color: theme.muted }}>{o.detail}</div>
              </div>
            </div>
          ))}
          <Btn clickAt={144} style={{ left: 44, top: 462, width: 672 }}>
            <Icon name={sent ? "clock" : "shield"} size={28} color="white" stroke={2.2} />
            {sent ? "Sending OTP..." : "Verify Email & Pay ₹999"}
          </Btn>
          <div style={{ position: "absolute", left: 44, top: 556, width: 672, fontSize: 17, lineHeight: 1.4, fontWeight: 500, color: theme.faint, textAlign: "center" }}>
            *This pricing is only for 1 case which includes sending to 1 opposition and covers 3 notices & 1 police complaint.
          </div>
        </Card>
      </Plane>

      {/* recovery type menu */}
      <Plane z={24} opacity={menu} at={{ x: CX + 44, y: CY + 264 }} shift={{ x: 0, y: (1 - menu) * -14 }}>
        <div
          style={{
            width: 672,
            padding: 8,
            boxSizing: "border-box",
            borderRadius: 18,
            background: theme.white,
            border: `1px solid ${theme.border}`,
            boxShadow: "0 30px 60px -20px rgba(17,24,39,0.35)",
            fontFamily: theme.font,
          }}
        >
          {TYPES.map((t, i) => {
            const hover = i === 2 && frame >= 90;
            return (
              <div
                key={t}
                style={{
                  height: 54,
                  borderRadius: 12,
                  padding: "0 16px",
                  display: "flex",
                  alignItems: "center",
                  fontSize: 24,
                  fontWeight: 600,
                  color: hover ? theme.redDeep : theme.ink,
                  background: hover ? theme.redTint : "transparent",
                }}
              >
                {t}
              </div>
            );
          })}
        </div>
      </Plane>

      <Floater at={26} x={-70} y={150} phase={1}>
        <FloatCard>
          <IconTile name="wallet" size={46} />
          Starting at ₹999
        </FloatCard>
      </Floater>
      <Floater at={40} x={990} y={110} z={150} phase={3}>
        <FloatCard>
          <IconTile name="clock" size={46} />
          Takes about a minute
        </FloatCard>
      </Floater>
      <Floater at={150} x={790} y={560} z={160} phase={2}>
        <FloatCard>
          <Tick at={152} size={40} />
          OTP sent to WhatsApp and email
        </FloatCard>
      </Floater>

      <Plane z={34}>
        <Pointer
          keys={[
            { f: 60, x: 1010, y: 600 },
            { f: 76, x: 880, y: CY + 223, click: true },
            { f: 98, x: 520, y: CY + 264 + 8 + 2 * 54 + 30, click: true },
            { f: 120, x: 780, y: CY + 380, click: true },
            { f: 144, x: 610, y: CY + 500, click: true },
            { f: 158, x: 700, y: CY + 590 },
          ]}
        />
      </Plane>
    </StepScene>
  );
};

const OTP = "482917";
const INCLUDED = ["3 Legal Notices", "1 Police Complaint", "Attorney Validation", "Real-time Tracking"];

// 02: OTP check, then the ₹999 payment summary.
export const VerifyPay: React.FC = () => {
  const { frame, ease, pop } = useAnim();
  const pay = ease(46, 18);
  return (
    <StepScene
      n="02"
      dir={1}
      dur={VERIFY_DUR}
      title={[{ t: "Verify Identity. " }, { t: "Secure Payment.", c: theme.red }]}
      sub="Enter the OTP sent to your WhatsApp and email to verify your identity."
    >
      <Plane>
        <Card style={{ left: 70, top: 110, width: 480, height: 480 }}>
          <div style={{ position: "absolute", left: 0, top: 40, width: "100%", display: "flex", flexDirection: "column", alignItems: "center" }}>
            <div
              style={{
                width: 76,
                height: 76,
                borderRadius: 38,
                background: theme.redTint,
                border: `2px solid ${theme.redPale}`,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Icon name="lock" size={36} color={theme.red} stroke={2.2} />
            </div>
            <div style={{ marginTop: 18, fontSize: 34, fontWeight: 800, color: theme.ink, letterSpacing: "-0.02em" }}>Verify Identity</div>
            <Label style={{ marginTop: 26 }}>Enter 6-Digit OTP</Label>
            <div style={{ display: "flex", gap: 10, marginTop: 12 }}>
              {OTP.split("").map((d, i) => {
                const on = frame >= 12 + i * 4;
                return (
                  <div
                    key={i}
                    style={{
                      width: 58,
                      height: 72,
                      borderRadius: 14,
                      background: theme.field,
                      border: `2px solid ${on ? theme.red : theme.border}`,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontSize: 36,
                      fontWeight: 800,
                      color: theme.ink,
                    }}
                  >
                    {on ? d : ""}
                  </div>
                );
              })}
            </div>
            <div style={{ marginTop: 30, display: "flex", alignItems: "center", gap: 12, fontSize: 21, fontWeight: 600, color: theme.body, opacity: pop(40) }}>
              <Tick at={40} size={34} />
              Your identity has been verified.
            </div>
          </div>
        </Card>
      </Plane>

      <Plane z={70} opacity={pay} shift={{ x: (1 - pay) * 140, y: 0 }}>
        <Card style={{ left: 630, top: 40, width: 500, height: 630 }}>
          <div style={{ position: "absolute", left: 44, top: 36, right: 44 }}>
            <div style={{ fontSize: 34, fontWeight: 800, color: theme.ink, letterSpacing: "-0.02em" }}>Secure Payment</div>
            <div style={{ marginTop: 22, display: "flex", justifyContent: "space-between", alignItems: "baseline" }}>
              <span style={{ fontSize: 21, fontWeight: 600, color: theme.muted }}>Amount Payable</span>
              <span>
                <span style={{ fontSize: 60, fontWeight: 800, color: theme.ink, letterSpacing: "-0.03em" }}>₹999</span>
                <span style={{ fontSize: 20, fontWeight: 600, color: theme.muted }}> / flat fee</span>
              </span>
            </div>
            <div style={{ marginTop: 10, display: "flex", justifyContent: "space-between", fontSize: 21, fontWeight: 600 }}>
              <span style={{ color: theme.muted }}>Payment Gateway</span>
              <span style={{ color: theme.ink }}>PayU Hosted Checkout</span>
            </div>
            <div style={{ height: 2, background: theme.border, margin: "26px 0 22px" }} />
            <div style={{ fontSize: 17, fontWeight: 700, color: theme.ink, letterSpacing: "0.06em", textTransform: "uppercase" }}>
              What's included in this plan:
            </div>
            {INCLUDED.map((t, i) => (
              <div key={t} style={{ marginTop: 18, display: "flex", alignItems: "center", gap: 16, fontSize: 27, fontWeight: 700, color: theme.ink }}>
                <Tick at={60 + i * 6} size={38} />
                <span style={{ opacity: interpolate(frame, [60 + i * 6, 68 + i * 6], [0, 1], clamp) }}>{t}</span>
              </div>
            ))}
          </div>
        </Card>
      </Plane>

      <Floater at={90} x={1000} y={130} z={170} phase={2}>
        <FloatCard>
          <Tick at={92} size={38} />
          No Hidden Fees
        </FloatCard>
      </Floater>
    </StepScene>
  );
};

// 03: the defaulter's details, then a preview of the first demand notice.
export const FileClaim: React.FC = () => {
  const { frame, ease, pop } = useAnim();
  const CX = 20;
  const CY = 40;
  const doc = ease(120, 20);
  return (
    <StepScene n="03" dir={-1} dur={CLAIM_DUR} title={[{ t: "File a " }, { t: "Claim", c: theme.red }]} sub="Enter defaulter details & dues">
      <Plane>
        <Card style={{ left: CX, top: CY, width: 740, height: 600 }}>
          <div style={{ position: "absolute", left: 44, top: 32, fontSize: 30, fontWeight: 800, color: theme.ink, letterSpacing: "-0.02em" }}>
            Initiate Debt Recovery
          </div>
          <Field label="Defaulter Legal Name" value="Acme Corporation" from={16} to={36} style={{ left: 44, top: 96, width: 384 }} />
          <Select label="Constitution Type" value="Company" at={40} style={{ left: 448, top: 96, width: 248 }} />
          <Field label="Dues Amount (INR)" value="45,000" from={46} to={56} style={{ left: 44, top: 210, width: 300 }} />
          <Field label="Payment Due Date" value="15 Sep 2026" from={60} to={72} style={{ left: 364, top: 210, width: 332 }} />
          <Field label="Primary Email" value="finance@acmecorp.com" from={76} to={98} style={{ left: 44, top: 324, width: 384 }} />
          <Select label="State / UT" placeholder="Select State" value="Maharashtra" at={102} style={{ left: 448, top: 324, width: 248 }} />
          <div
            style={{
              position: "absolute",
              left: 44,
              top: 440,
              display: "flex",
              alignItems: "center",
              gap: 12,
              fontSize: 20,
              fontWeight: 600,
              color: theme.body,
              opacity: pop(106),
            }}
          >
            <Tick at={106} size={30} />
            SHO Jurisdictional Police Station
            <Pill size={15} color="#047857" bg={theme.greenPale}>
              Smart Auto-Fill
            </Pill>
          </div>
          <Btn clickAt={118} style={{ left: 44, top: 490, width: 652 }}>
            Confirm & Review Claim
            <Icon name="arrow" size={26} color="white" stroke={2.4} />
          </Btn>
        </Card>
      </Plane>

      {/* demand notice preview */}
      <Plane z={90} opacity={doc} shift={{ x: (1 - doc) * 170, y: 0 }}>
        <Card style={{ left: 800, top: 0, width: 430, height: 620, borderRadius: 16 }}>
          <div style={{ position: "absolute", left: 36, right: 36, top: 30 }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
              <div>
                <div style={{ fontSize: 23, fontWeight: 800, color: theme.ink }}>AMA Legal Solutions</div>
                <div style={{ fontSize: 14, fontWeight: 600, color: theme.muted, letterSpacing: "0.08em", textTransform: "uppercase" }}>
                  Advocate & Solicitors
                </div>
              </div>
              <Pill size={15}>Notice 1</Pill>
            </div>
            <div style={{ height: 3, background: theme.red, margin: "16px 0 20px" }} />
            <div style={{ fontSize: 14, fontWeight: 700, color: theme.muted, letterSpacing: "0.06em" }}>TO DEFAULTER:</div>
            <div style={{ fontSize: 21, fontWeight: 700, color: theme.ink, marginBottom: 18 }}>Acme Corporation</div>
            <div style={{ fontSize: 18, fontWeight: 600, color: theme.ink, marginBottom: 14 }}>Dear Sir/Madam,</div>
            <Lines widths={[100, 94, 98, 88, 60]} />
            <div style={{ fontSize: 17, fontWeight: 700, color: theme.ink, margin: "22px 0 12px" }}>You are therefore hereby requested to:</div>
            <Lines widths={[92, 96, 70]} />
            <div style={{ fontSize: 17, fontWeight: 600, color: theme.ink, margin: "22px 0 10px" }}>Kindly treat this matter as urgent.</div>
            <div style={{ fontSize: 16, fontWeight: 500, color: theme.muted }}>For and on behalf of</div>
            <div style={{ fontSize: 19, fontWeight: 700, color: theme.ink }}>Priya Nair</div>
          </div>
        </Card>
      </Plane>

      <Floater at={148} x={1010} y={560} z={170} phase={1}>
        <FloatCard>
          <Tick at={150} size={40} />
          Attorney Validation
        </FloatCard>
      </Floater>

      <Plane z={34}>
        <Pointer
          keys={[
            { f: 102, x: 720, y: 660 },
            { f: 118, x: 420, y: CY + 528, click: true },
            { f: 134, x: 560, y: CY + 640 },
          ]}
        />
      </Plane>
    </StepScene>
  );
};
