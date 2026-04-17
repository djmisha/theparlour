---
title: "Product Brief: theparlour"
status: "complete"
created: "2026-04-10T08:55:34Z"
updated: "2026-04-10T08:57:17Z"
inputs:
  - "/Users/mosinovs/Documents/workspace/theparlour/src/pages/resources.astro"
  - "/Users/mosinovs/Documents/workspace/theparlour/src/data/links.json"
  - "/Users/mosinovs/Documents/workspace/theparlour/public/js/links.js"
  - "/Users/mosinovs/Documents/workspace/theparlour/README.md"
  - "https://www.conjuringarchive.com/"
  - "https://www.vanishingincmagic.com/"
  - "https://theory11.com/"
---

# Product Brief: The Parlour Library

## Summary

The Parlour Library is a curated magic knowledge hub that turns The Parlour's existing resources area into a repeat-use product. It extends the brand promise of The Parlour as a selective, high-standard society, but productizes that promise for a broader audience through trusted discovery rather than private membership alone.

The current experience is a static, filterable link directory. It signals breadth, but it does not yet help users decide what to trust, what to read next, or why they should return weekly. The opportunity is to evolve it into an editorially curated archive where each resource carries context, quality signals, freshness, and clear next-step guidance.

## Problem Statement

Magic learning resources are fragmented across shops, archives, creator sites, videos, interviews, communities, and reference collections. Beginners and working performers alike spend too much time searching, cross-checking, and second-guessing quality. The result is low confidence, wasted time, and inconsistent learning paths.

The market has strong commerce destinations and respected archives, but fewer products combine trusted curation, fast discovery, and brand-led editorial guidance in a lightweight, SEO-friendly experience. The Parlour can fill that gap by becoming the place users visit when they want the right resource quickly, not just more links.

## Users And JTBD

### Primary users

- Beginner-to-intermediate magicians who need trusted starting points, skill-level guidance, and fewer dead ends.
- Experienced performers who want efficient access to high-quality references, interviews, theory, tools, and specialist materials.
- Curious enthusiasts exploring magic culture, history, and craft through a reputable guide.

### Jobs to be done

- When I want to learn a topic in magic, help me find credible starting resources matched to my level and intent.
- When I am evaluating whether a resource is worth my time, show me why it matters and who it is best for.
- When I want to keep up with the field, surface worthwhile additions and updates without forcing me to search the whole internet again.
- When I discover something useful, let me save it, revisit it, and trust that links are still current.

## Value Proposition

The Parlour Library offers trusted curation over raw aggregation: a continuously maintained, trust-scored magic resource hub with editorial guidance, freshness signals, and a brand experience that feels like entering a secret society archive.

Its differentiation is not sheer inventory size alone. It is the combination of:

- Clear quality criteria and curator judgment.
- Faster resource selection through summaries, audience levels, and best-for tags.
- Ongoing maintenance through freshness checks, broken-link handling, and community submissions.
- A distinct brand atmosphere that makes the product feel special rather than utilitarian.

## MVP Feature Set

The MVP should prove one outcome above all: users can discover a high-value magic resource quickly, trust the recommendation, and return for more.

- Searchable, filterable resource directory across categories and subcategories such as performance, theory, sleight, books, history, interviews, tools, and communities.
- Upgraded resource cards with summary, why it matters, audience level, format, and a visible quality badge.
- Editorial curation notes and best-for tags that turn the library from a list into guided discovery.
- Signature starter collections for a small set of high-intent use cases, such as where to begin, theory essentials, and performer references by discipline.
- Outbound link tracking and click analytics to identify what users actually value.
- Broken-link reporting and a lightweight freshness workflow so trust does not decay.
- Resource submission flow for community suggestions, with clear editorial acceptance criteria.
- New This Week section to create a recurring reason to revisit the product.
- Responsive, SEO-friendly experience that fits the existing Astro architecture and preserves desktop-mobile parity.

## Non-Goals

The MVP should explicitly avoid becoming a broad community platform or content-hosting business.

- No full community forum.
- No paid course hosting.
- No native mobile app.
- No personalized AI tutor.
- No attempt to compete head-on with magic retailers on transactions or proprietary inventory.

## Success Metrics

For the first 90 days after launch, success should be measured by evidence of repeated utility and editorial trust.

- Weekly active users.
- Outbound click-through rate.
- Return visitor rate.
- Resource save or bookmark rate.
- Link freshness SLA: percentage of listed resources verified within the last 60 days.
- Community submission acceptance rate.

## Risks And Assumptions

### Key risks

- Editorial maintenance risk: the product promise depends on regular freshness checks and consistent curation quality.
- Operating-model risk: without a clearly assigned curator workflow, quality badges, freshness checks, and community submissions will stall.
- Brand-balance risk: leaning too far into mystique could obscure utility, while leaning too far into utility could dilute The Parlour identity.
- Data model risk: the current link directory structure is too shallow for trust badges, audience levels, editorial notes, and subcategories.
- Adoption risk: a weekly return habit may not form unless New This Week and save or bookmark behavior deliver clear ongoing value.
- Analytics and privacy risk: outbound tracking and bookmarks may require policy, implementation, and data-retention decisions that are not yet defined.

### Core assumptions

- The Parlour brand is credible enough to support curator authority outside the membership product.
- Users will value fewer, better recommendations more than maximum comprehensiveness.
- Lightweight editorial features can materially improve repeat usage without requiring a heavy application stack.
- The existing Astro architecture can support the MVP with modest content-model and interaction upgrades.

## Phased Rollout Recommendation

### Phase 1: Curated foundation

Ship the upgraded directory experience with stronger information architecture, richer resource cards, quality badges, editorial notes, mobile-ready search and filtering, and a handful of signature curated collections. This phase establishes the product's core trust proposition and gives launch traffic obvious entry points.

### Phase 2: Maintenance and signal loop

Add outbound click tracking, broken-link reporting, and internal freshness operations. This phase turns the library into a maintainable product rather than a static page.

### Phase 3: Habit formation

Launch New This Week, save or bookmark capability, and simple return-driving entry points such as featured collections or editor's picks. This phase focuses on weekly engagement.

### Phase 4: Community-assisted curation

Open community submissions with moderation tooling, acceptance workflows, and visible curator standards. This phase expands coverage while protecting trust.

## Open Decisions Requiring Stakeholder Input

- Should save or bookmark functionality be anonymous, browser-local, or tied to accounts from day one?
- What exact rubric defines each quality badge, and how transparent should that rubric be to users?
- How much of the secret-society brand language should appear in utility-heavy surfaces like search, filters, and cards?
- Which categories should be editorial launch priorities, and which can wait until later phases?
- Who owns ongoing curation operations, freshness verification, and submission moderation once the MVP is live?
- What level of manual review is acceptable for community submissions before the queue becomes operationally heavy?
- What analytics stack and privacy posture are acceptable within the current site and brand standards?

## Recommendation

Proceed with The Parlour Library as a standalone productized pillar under the existing brand. The strongest initial wedge is not to become the biggest magic database, store, or community. It is to become the most trusted front door to magic resources: curated, current, and clearly explained.

If executed well, this product can strengthen both pillars at once. It creates a public-facing habit product with search and SEO value, while reinforcing The Parlour's private-brand mystique through visible standards of taste, rigor, and curation.