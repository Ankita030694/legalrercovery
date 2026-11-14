import React from "react";
import { Composition } from "remotion";
import { INTRO_FRAMES, LegalRecoveryIntro } from "./intro/Main";
import { FPS } from "./theme";

export const RemotionRoot: React.FC = () => (
  <Composition
    id="LegalRecoveryIntro"
    component={LegalRecoveryIntro}
    durationInFrames={INTRO_FRAMES}
    fps={FPS}
    width={1920}
    height={1080}
  />
);
