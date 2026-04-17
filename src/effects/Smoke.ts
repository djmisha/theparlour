import type { EffectDefinition } from "./types";

/**
 * Smoke — Soft, large semi-transparent particles drifting upward.
 *
 * Uses oversized circles with heavy shadow blur to fake soft edges.
 * Two emitter layers at different sizes/speeds create depth.
 * Particles grow as they rise and fade out, mimicking smoke dispersal.
 */
export const smoke: EffectDefinition = {
  id: "smoke",
  label: "Smoke",
  duration: 10000,
  options: {
    fullScreen: { enable: true, zIndex: 9999 },
    background: { color: "#0a0a0a" },
    fpsLimit: 60,

    particles: {
      color: { value: "#888888" },
      number: { value: 0 },
      shape: { type: "circle" },
      size: {
        value: { min: 30, max: 80 },
        animation: {
          enable: true,
          speed: 8,
          startValue: "min",
          destroy: "none",
          sync: false,
        },
      },
      opacity: {
        value: { min: 0.02, max: 0.1 },
        animation: {
          enable: true,
          speed: 0.3,
          startValue: "max",
          destroy: "min",
          sync: false,
        },
      },
      move: {
        enable: true,
        speed: { min: 0.5, max: 1.5 },
        direction: "top",
        random: false,
        straight: false,
        outModes: { default: "destroy", bottom: "none" },
        drift: { min: -0.3, max: 0.3 },
      },
      shadow: {
        enable: true,
        blur: 20,
        color: "#666666",
        offset: { x: 0, y: 0 },
      },
      wobble: {
        enable: true,
        distance: 15,
        speed: { min: 1, max: 3 },
      },
      life: {
        duration: { value: { min: 4, max: 8 } },
        count: 1,
      },
    },

    emitters: [
      // Main layer — larger, slower, more diffuse
      {
        position: { x: 50, y: 105 },
        size: { width: 100, height: 0 },
        rate: { quantity: 3, delay: 0.3 },
        life: { count: 0, duration: 0 },
        particles: {
          size: { value: { min: 50, max: 100 } },
          opacity: { value: { min: 0.03, max: 0.08 } },
          move: { speed: { min: 0.4, max: 1 } },
        },
      },
      // Detail layer — smaller, faster wisps
      {
        position: { x: 50, y: 105 },
        size: { width: 80, height: 0 },
        rate: { quantity: 2, delay: 0.5 },
        life: { count: 0, duration: 0 },
        particles: {
          size: { value: { min: 20, max: 45 } },
          opacity: { value: { min: 0.04, max: 0.12 } },
          move: { speed: { min: 0.8, max: 2 } },
        },
      },
    ],

    detectRetina: true,
  },
};
