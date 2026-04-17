import type { EffectDefinition } from "./types";
import { pageTransitionOne } from "./PageTransitionOne";
import { electricity } from "./Electricity";
import { smoke } from "./Smoke";

/** All registered effects — add new ones here */
export const effects: EffectDefinition[] = [
  pageTransitionOne,
  electricity,
  smoke,
];

export function getEffect(id: string): EffectDefinition | undefined {
  return effects.find((e) => e.id === id);
}
