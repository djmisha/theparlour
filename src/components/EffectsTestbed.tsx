import { useState, useCallback } from "react";
import { effects } from "../effects/registry";
import type { EffectDefinition } from "../effects/types";
import EffectPlayer from "./EffectPlayer";

export default function EffectsTestbed() {
  const [activeEffect, setActiveEffect] = useState<EffectDefinition | null>(null);

  const handleComplete = useCallback(() => {
    setActiveEffect(null);
  }, []);

  return (
    <div style={{ padding: "3rem 2rem", maxWidth: 800, margin: "0 auto" }}>
      <h1 style={{ color: "#c9a959", fontFamily: "Cinzel, serif", marginBottom: "0.5rem" }}>
        Effects Testbed
      </h1>
      <p style={{ color: "#aaa", marginBottom: "2rem", fontFamily: "Cormorant Garamond, serif", fontSize: "1.1rem" }}>
        Click a button to preview an effect. Each effect is self-contained and reusable.
      </p>

      <div style={{ display: "flex", flexWrap: "wrap", gap: "1rem" }}>
        {effects.map((effect) => (
          <button
            key={effect.id}
            onClick={() => setActiveEffect(effect)}
            disabled={activeEffect !== null}
            style={{
              padding: "0.75rem 1.5rem",
              background: activeEffect?.id === effect.id ? "#c9a959" : "transparent",
              color: activeEffect?.id === effect.id ? "#0a0a0a" : "#c9a959",
              border: "1px solid #c9a959",
              borderRadius: 4,
              cursor: activeEffect ? "not-allowed" : "pointer",
              fontFamily: "Cinzel, serif",
              fontSize: "0.9rem",
              letterSpacing: "0.05em",
              transition: "all 0.2s ease",
              opacity: activeEffect && activeEffect.id !== effect.id ? 0.4 : 1,
            }}
          >
            {effect.label}
          </button>
        ))}
      </div>

      {activeEffect && (
        <EffectPlayer effect={activeEffect} onComplete={handleComplete} />
      )}
    </div>
  );
}
