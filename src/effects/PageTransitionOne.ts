import type { EffectDefinition } from "./types";

/**
 * Page Transition One — White & Gold Sparkle Rain
 *
 * Replicates the existing page-transition effect (transitions.js) using tsparticles.
 * Three burst waves of particles fall from the top of the screen on a dark overlay.
 * 60 % white, 40 % gold (#c9a959). Particles are small glowing circles (1.5–5 px)
 * that drift horizontally as they fall, then fade out.
 */
export const pageTransitionOne: EffectDefinition = {
  id: "page-transition-one",
  label: "Page Transition One",
  duration: 4000,
  options: {
    fullScreen: { enable: true, zIndex: 9999 },
    background: { color: "#0a0a0a" },
    fpsLimit: 60,

    particles: {
      color: {
        // 3 whites + 2 golds ≈ 60/40 ratio
        value: ["#ffffff", "#ffffff", "#ffffff", "#c9a959", "#c9a959"],
      },
      number: { value: 0 },
      shape: { type: "circle" },
      size: {
        value: { min: 1.5, max: 5 },
      },
      opacity: {
        value: { min: 0.6, max: 1 },
        animation: {
          enable: true,
          speed: 0.6,
          startValue: "max",
          destroy: "min",
        },
      },
      move: {
        enable: true,
        direction: "bottom",
        speed: { min: 6, max: 18 },
        outModes: { default: "destroy" },
        drift: { min: -0.8, max: 0.8 },
        gravity: { enable: true, acceleration: 3 },
      },
      shadow: {
        enable: true,
        blur: 5,
        color: "#ffffff",
      },
      life: {
        duration: { value: { min: 0.7, max: 1.9 } },
        count: 1,
      },
    },

    // Three burst waves matching the original createSparkleWave calls
    emitters: [
      {
        position: { x: 50, y: -2 },
        size: { width: 100, height: 0 },
        rate: { quantity: 20, delay: 0.02 },
        life: { count: 1, duration: 0.5 },
        startCount: 40,
      },
      {
        position: { x: 50, y: -2 },
        size: { width: 100, height: 0 },
        rate: { quantity: 15, delay: 0.02 },
        life: { count: 1, duration: 0.4, delay: 0.2 },
      },
      {
        position: { x: 50, y: -2 },
        size: { width: 100, height: 0 },
        rate: { quantity: 12, delay: 0.02 },
        life: { count: 1, duration: 0.3, delay: 0.5 },
      },
    ],
  },
};
