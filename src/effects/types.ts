import type { ISourceOptions } from "@tsparticles/engine";

export interface EffectDefinition {
  /** Unique identifier for this effect */
  id: string;
  /** Display label for the button */
  label: string;
  /** tsparticles configuration */
  options: ISourceOptions;
  /** How long (ms) to keep the effect visible before auto-dismissing */
  duration: number;
}
