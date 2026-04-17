import { useCallback, useEffect, useRef, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import { loadEmittersPlugin } from "@tsparticles/plugin-emitters";
import { loadEmittersShapeSquare } from "@tsparticles/plugin-emitters-shape-square";
import type { Container } from "@tsparticles/engine";
import type { EffectDefinition } from "../effects/types";

let engineReady = false;
let enginePromise: Promise<void> | null = null;

function ensureEngine(): Promise<void> {
  if (engineReady) return Promise.resolve();
  if (!enginePromise) {
    enginePromise = initParticlesEngine(async (engine) => {
      await loadSlim(engine);
      await loadEmittersPlugin(engine);
      await loadEmittersShapeSquare(engine);
    }).then(() => {
      engineReady = true;
    });
  }
  return enginePromise;
}

interface Props {
  effect: EffectDefinition;
  onComplete?: () => void;
}

/**
 * Renders a single tsparticles effect as a full-screen overlay.
 * Auto-dismisses after `effect.duration` ms and calls `onComplete`.
 */
export default function EffectPlayer({ effect, onComplete }: Props) {
  const [ready, setReady] = useState(engineReady);
  const [visible, setVisible] = useState(true);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    ensureEngine().then(() => setReady(true));
  }, []);

  useEffect(() => {
    if (!ready) return;
    timerRef.current = setTimeout(() => {
      setVisible(false);
      onComplete?.();
    }, effect.duration);

    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, [ready, effect.duration, onComplete]);

  const particlesLoaded = useCallback(async (_container?: Container) => {
    // Could hook into container lifecycle here if needed
  }, []);

  if (!ready || !visible) return null;

  return (
    <Particles
      id={`effect-${effect.id}`}
      options={effect.options}
      particlesLoaded={particlesLoaded}
    />
  );
}
