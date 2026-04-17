# Effects System

Modular, self-contained visual effects powered by `@tsparticles/react` + `@tsparticles/slim`.

## Architecture

```
src/effects/
├── types.ts              # EffectDefinition interface
├── registry.ts           # Central list of all effects
├── PageTransitionOne.ts  # White & gold sparkle rain
├── Electricity.ts        # Connected particle network
├── Smoke.ts              # Rising smoke wisps
└── README.md             # This file

src/components/
├── EffectsTestbed.tsx    # Button grid UI for previewing effects
└── EffectPlayer.tsx      # Generic full-screen tsparticles renderer

src/pages/
└── effects.astro         # Test page at /effects (noindex)
```

## How to add a new effect

1. Create a new file in `src/effects/` (e.g. `MyEffect.ts`)
2. Export an `EffectDefinition` object:

```ts
import type { EffectDefinition } from "./types";

export const myEffect: EffectDefinition = {
  id: "my-effect",        // Unique identifier
  label: "My Effect",     // Button label on test page
  duration: 5000,         // Auto-dismiss after this many ms
  options: {              // Standard tsparticles ISourceOptions config
    fullScreen: { enable: true, zIndex: 9999 },
    background: { color: "#0a0a0a" },
    particles: { /* ... */ },
    emitters: [ /* ... */ ],  // Optional — for burst/continuous spawning
    interactivity: { /* ... */ },  // Optional — mouse/touch interactions
  },
};
```

3. Register it in `src/effects/registry.ts`:

```ts
import { myEffect } from "./MyEffect";

export const effects: EffectDefinition[] = [
  pageTransitionOne,
  electricity,
  smoke,
  myEffect,  // <-- add here
];
```

A button appears automatically on `/effects`.

## EffectDefinition interface

| Field      | Type             | Description                                      |
|------------|------------------|--------------------------------------------------|
| `id`       | `string`         | Unique key, used as the tsparticles container id  |
| `label`    | `string`         | Display name on the testbed button               |
| `duration` | `number`         | Milliseconds before the effect auto-dismisses    |
| `options`  | `ISourceOptions` | Full tsparticles configuration object            |

## EffectPlayer component

`EffectPlayer` is a generic React component that:
- Initializes the tsparticles engine once (singleton, with slim + emitters plugins)
- Renders a full-screen particle canvas for the given `EffectDefinition`
- Auto-removes itself after `duration` ms and calls `onComplete`

Props:
- `effect: EffectDefinition` — which effect to play
- `onComplete?: () => void` — callback when effect finishes

## Using effects outside the test page

Effects are decoupled from the testbed. To trigger one anywhere in the site:

```tsx
import EffectPlayer from "../components/EffectPlayer";
import { getEffect } from "../effects/registry";

const effect = getEffect("electricity");
// Render <EffectPlayer effect={effect} onComplete={handleDone} />
```

## Installed packages

- `@tsparticles/react` — React component wrapper
- `@tsparticles/slim` — Lightweight tsparticles bundle (circles, links, move, opacity, size, wobble, etc.)
- `@tsparticles/plugin-emitters` — Burst/continuous particle spawning
- `@tsparticles/plugin-emitters-shape-square` — Required dependency for emitters

## tsparticles config reference

Key config sections used across effects:

- `particles.number.value` — Initial particle count (0 if using emitters)
- `particles.size` / `particles.opacity` — Support `{ min, max }` ranges and `animation`
- `particles.move` — `speed`, `direction`, `drift`, `gravity`, `outModes`
- `particles.links` — Draw lines between nearby particles (used in Electricity)
- `particles.shadow` — Glow/blur per particle
- `particles.wobble` — Sinusoidal horizontal drift (used in Smoke)
- `particles.life` — Per-particle lifespan with auto-destroy
- `emitters[]` — Spawn particles over time from a position; supports `rate`, `life`, `startCount`, particle overrides
- `interactivity` — Mouse hover/click modes: `grab`, `repulse`, `push`, `bubble`

Full docs: https://particles.js.org/docs/
