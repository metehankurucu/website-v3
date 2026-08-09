import type { ComponentType } from "react"
import { HeroMockup } from "./hero-mockup"
import { CodixusMockup } from "./codixus-mockup"
import { LitemetricsMockup } from "./litemetrics-mockup"
import { RevcatMockup } from "./revcat-mockup"
import { ReactShotMockup } from "./react-shot-mockup"
import { CurtainMockup } from "./curtain-mockup"
import { BluffinMockup } from "./bluffin-mockup"
import { FibercheckMockup } from "./fibercheck-mockup"

export { HeroMockup }

export const projectMockups: Record<string, ComponentType> = {
  codixus: CodixusMockup,
  litemetrics: LitemetricsMockup,
  revcat: RevcatMockup,
  "react-shot": ReactShotMockup,
  "curtain-ai": CurtainMockup,
  bluffin: BluffinMockup,
  fibercheck: FibercheckMockup,
}

export const projectImages: Record<string, string> = {}
