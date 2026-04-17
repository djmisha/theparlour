---
project_name: 'theparlour'
user_name: 'Misha'
date: '2026-04-10'
sections_completed: ['technology_stack', 'language_rules', 'framework_rules', 'testing_rules', 'quality_rules', 'workflow_rules', 'anti_patterns']
existing_patterns_found: 12
status: 'complete'
rule_count: 70
optimized_for_llm: true
---

# Project Context for AI Agents

_This file contains critical rules and patterns that AI agents must follow when implementing code in this project. Focus on unobvious details that agents might otherwise miss._

---

## Technology Stack & Versions

- Runtime/build model: Node.js 18+ with static-site output (Astro build).
- Framework core: Astro `^5.15.8`.
- Astro integrations:
	- `@astrojs/react` `^4.2.1`
	- `@astrojs/sitemap` `^3.7.2`
- UI runtime:
	- React `^19.1.0`
	- React DOM `^19.1.0`
	- React Icons `^5.6.0`
- Effects/particles:
	- `@tsparticles/react` `^3.0.0`
	- `@tsparticles/slim` `^3.9.1`
	- `@tsparticles/plugin-emitters` `^3.9.1`
	- `@tsparticles/plugin-emitters-shape-square` `^3.9.1`
- TypeScript baseline: extends `astro/tsconfigs/base`.
- Astro site config:
	- `site`: `https://theparlour.com`
	- integrations: `react()` and `sitemap()`
- Styling and browser scripts:
	- Plain CSS under `public/styles/`
	- Plain JS modules under `public/js/`

## Critical Implementation Rules

### Language-Specific Rules

- Use TypeScript types/interfaces for component and effect contracts; avoid `any` unless absolutely unavoidable.
- In Astro files, declare typed props using `interface Props` and destructure from `Astro.props` in frontmatter.
- Keep imports ESM-only (`import` / `export`), matching `type: "module"` in package metadata.
- Use `import type` for type-only dependencies to keep emitted JS clean.
- Prefer named exports for reusable definitions (effects, helpers, schemas); reserve default exports for primary components.
- For React state in TSX, model nullable state explicitly (`T | null`) and gate rendering with strict null checks.
- Type timer refs in React with `ReturnType<typeof setTimeout>` to stay compatible across DOM/runtime typings.
- Keep async side effects inside `useEffect` by calling a typed async helper; do not make `useEffect` callback itself async.
- Use optional callback invocation (`onComplete?.()`) for optional handlers instead of manual function checks.
- Keep shared effect contracts in `src/effects/types.ts`; every effect file must satisfy `EffectDefinition` exactly (`id`, `label`, `duration`, `options`).
- Register effect modules centrally in `src/effects/registry.ts`; do not hardcode effect lists in UI components.
- Preserve existing TS/TSX style (`"` and `;`) unless a formatter config is introduced.

### Framework-Specific Rules

- Use `.astro` for pages/layout/composition-first UI; use `.tsx` only where client-side React state/lifecycle is required.
- Keep page routes file-based under `src/pages/` and preserve existing URL naming patterns (kebab-case route files).
- Centralize global metadata/SEO/schema concerns in `src/layouts/Layout.astro`; page files should pass page-specific values via props, not duplicate global meta logic.
- For structured data, pass JSON-LD payloads through layout props and render with `set:html={JSON.stringify(...)}`.
- Treat React effect components as reusable islands/components, not page-level orchestration logic.
- Keep effects architecture modular:
	- One effect per file in `src/effects/`
	- Single registry in `src/effects/registry.ts`
	- Generic player in `src/components/EffectPlayer.tsx`
- Reuse existing visual tokens and typography direction when adding effect-adjacent UI.
- Keep static browser scripts in `public/js/` for non-React interactions; do not migrate working static scripts into React without a clear architectural need.
- Preserve `noindex` behavior for non-production utility/test pages.
- When adding framework-wide behavior, update `astro.config.mjs` explicitly rather than scattering equivalent runtime logic across pages.

### Testing Rules

- Treat `npm run build` as the baseline required verification for every substantive change.
- For UI/content changes in Astro pages/components, perform manual route checks for impacted pages and confirm no runtime console errors, responsive rendering integrity, and key interaction behavior.
- For metadata/SEO changes, verify rendered head output (title, description, canonical, OG) and ensure `noindex` is intentional.
- For effect-system changes (`src/effects/*`, `src/components/EffectPlayer.tsx`, registry), verify behavior through `/effects`: effect appears, auto-dismiss duration works, no stuck overlay state, and no console errors.
- When adding data in `src/data/*.json`, validate field compatibility with consuming components before merge.
- If a formal test framework is introduced later, define commands in package scripts immediately and prioritize smoke/integration coverage for routes and critical interactions.
- Avoid flaky timing assertions for particle visuals; prefer deterministic checks around mount/unmount and callback execution.
- Keep testing changes scoped; do not introduce a full test stack as part of unrelated feature work unless explicitly requested.

### Code Quality & Style Rules

- Match existing naming conventions: PascalCase for Astro/TSX components, kebab-case for route pages, and kebab-case JSON data files.
- Keep responsibilities separated: Astro for pages/layout/composition, TS/TSX for typed interactive behavior, `public/js/` for browser utility scripts.
- Do not introduce large inline styles in production-facing components; prefer shared stylesheets under `public/styles/`.
- Keep comments sparse and high-value, especially around non-obvious animation/effect behavior.
- Preserve import order style: external packages first, then internal modules, with `import type` for type-only dependencies.
- Avoid broad refactors during focused tasks; preserve existing APIs and structure unless explicitly requested.
- Keep copy aligned with `WRITING-STYLE.md` brand constraints and naming consistency for project proper nouns.
- Keep SEO/meta/schema consistency with the shared layout contract in `src/layouts/Layout.astro`.
- Maintain accessibility baselines: semantic heading order, meaningful interactive labels, and native interactive elements.
- Preserve performance-conscious defaults: avoid unnecessary client hydration and avoid heavyweight new dependencies when existing stack utilities suffice.

### Development Workflow Rules

- Use existing npm scripts as the canonical local workflow: `npm run dev`, `npm run build`, and `npm run preview`.
- Keep changes scoped per task/story; avoid mixing unrelated refactors with content, SEO, or effect behavior updates.
- For dependency changes, add only when required, keep compatibility with Astro 5 + React 19, and verify manifest/lockfile consistency.
- For route/page edits, verify canonical URL and metadata behavior remains aligned with `site` in `astro.config.mjs`.
- For Netlify-impacting changes, preserve static build assumptions and keep `netlify.toml` behavior valid.
- Keep generated planning/implementation artifacts under `_bmad-output/` rather than source folders.
- Document new architectural conventions when introduced to prevent future agent drift.
- Prefer additive, reversible changes over destructive rewrites unless the request explicitly requires behavioral replacement.
- Before closing substantial changes, record concise verification notes (what was checked and where).
- If branch/commit/PR policy is not defined in-repo, do not invent strict formats; state assumptions explicitly.

### Critical Don't-Miss Rules

- Do not bypass `src/layouts/Layout.astro` for metadata and SEO defaults; keep head logic centralized.
- Do not change canonical site identity anchors casually (`site` URL, schema IDs, brand naming).
- Do not break effect cleanup flow; each trigger path must deterministically unmount overlays and fire completion callbacks.
- Do not register effects in multiple places; `src/effects/registry.ts` is the single source of truth.
- Do not migrate working `public/js/` interactions into React without an explicit architectural requirement.
- Do not publish copy that violates `WRITING-STYLE.md` tone and vocabulary constraints.
- Do not replace semantic interactive elements with non-semantic containers for convenience.
- Do not increase particle/animation intensity without checking mobile performance and interaction smoothness.
- Do not change JSON data shapes in `src/data/` without updating all consumers.
- Do not ship global style or script changes without regression checks across primary routes.

---

## Usage Guidelines

**For AI Agents:**

- Read this file before implementing any code.
- Follow all documented rules; if rules conflict, prefer the stricter option.
- Preserve established architecture, style, and routing conventions unless explicitly asked to change them.
- Update this file when introducing durable new project conventions.

**For Humans:**

- Keep this file lean; remove obvious or stale rules.
- Update technology versions when dependencies or framework baselines change.
- Revisit after major architectural or workflow changes.
- Use this file as the first context artifact for any new AI-driven implementation session.

Last Updated: 2026-04-10
