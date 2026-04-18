import type { ComponentType } from "react"
import { HeroMockup } from "./hero-mockup"
import { CodixusMockup } from "./codixus-mockup"
import { LitemetricsMockup } from "./litemetrics-mockup"
import { RevcatMockup } from "./revcat-mockup"
import { ReactShotMockup } from "./react-shot-mockup"
import { FlastMockup } from "./flast-mockup"
import { CurtainMockup } from "./curtain-mockup"
import { ImpostorMockup } from "./impostor-mockup"
import { FibercheckMockup } from "./fibercheck-mockup"

export { HeroMockup }

export const projectMockups: Record<string, ComponentType> = {
  codixus: CodixusMockup,
  litemetrics: LitemetricsMockup,
  revcat: RevcatMockup,
  "react-shot": ReactShotMockup,
  flast: FlastMockup,
  "curtain-ai": CurtainMockup,
  "impostor-who": ImpostorMockup,
  fibercheck: FibercheckMockup,
}

export const projectImages: Record<string, string> = {}
