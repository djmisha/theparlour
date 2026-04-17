import type { EffectDefinition } from "./types";

/**
 * Electricity — Dense 1px white particles connected by thin lines.
 *
 * Uses tsparticles "links" to draw connections between nearby particles,
 * combined with fast random movement and slight jitter to create an
 * electric / neural-network feel. Mouse hover repulses particles outward
 * like a static discharge.
 */
export const electricity: EffectDefinition = {
  id: "electricity",
  label: "Electricity",
  duration: 8000,
  options: {
    fullScreen: { enable: true, zIndex: 9999 },
    background: { color: "#0a0a0a" },
    fpsLimit: 60,

    particles: {
      color: { value: "#ffffff" },
      number: {
        value: 120,
        density: { enable: true, width: 800, height: 800 },
      },
      shape: { type: "circle" },
      size: { value: 1 },
      opacity: {
        value: { min: 0.3, max: 0.9 },
        animation: {
          enable: true,
          speed: 2,
          startValue: "random",
          sync: false,
        },
      },
      move: {
        enable: true,
        speed: { min: 1, max: 2.5 },
        direction: "none",
        random: true,
        straight: false,
        outModes: { default: "bounce" },
      },
      links: {
        enable: true,
        distance: 120,
        color: "#ffffff",
        opacity: 0.15,
        width: 0.5,
        triangles: {
          enable: true,
          color: "#ffffff",
          opacity: 0.02,
        },
      },
    },

    interactivity: {
      events: {
        onHover: {
          enable: true,
          mode: "grab",
        },
      },
      modes: {
        grab: {
          distance: 180,
          links: {
            opacity: 0.4,
            color: "#ffffff",
          },
        },
      },
    },

    detectRetina: true,
  },
};
