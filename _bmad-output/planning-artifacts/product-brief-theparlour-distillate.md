---
title: "Product Brief Distillate: theparlour"
type: llm-distillate
source: "product-brief-theparlour.md"
created: "2026-04-10T08:55:34Z"
purpose: "Token-efficient context for downstream PRD creation"
---

# Product Brief Distillate: The Parlour Library

## Product intent

- The broader brand has two pillars: a secretive, prestige-driven magic club and a public-facing resource product. This brief intentionally focuses on pillar 2 as a standalone product while remaining brand-aligned with pillar 1.
- Working title is The Parlour Library.
- Product goal is to turn the current resources area into a product users return to weekly, not a one-time reference page.
- Positioning should preserve The Parlour's tone of mystique and selectivity, but utility must remain legible and fast for search, evaluation, and repeat visits.

## Existing product reality

- Current implementation is a static Astro page backed by a JSON file and a small client-side script for text search and coarse type filters.
- Existing top-level data model uses types such as Magician, Org, Vendor, Mfg, Resource, and Other. This is not sufficient for the proposed product taxonomy or editorial metadata.
- Current resource cards expose only name, short description, domain, and outbound link.
- Existing experience already claims curation and comprehensiveness, which raises the bar for any MVP to support freshness and editorial consistency operationally.
- The current page includes a contact-based path for suggestions and broken-link reporting, but not a structured submission or maintenance workflow.

## Users and use cases

- Beginner-to-intermediate magicians need trusted learning paths by topic and level, not a pile of undifferentiated links.
- Experienced performers need fast reference discovery across theory, sleight, interviews, tools, communities, and historical sources.
- Curious enthusiasts need credible entry points into magic culture and craft without insider confusion.
- Core user need is confidence: users want to know what is worth clicking and why before they leave The Parlour site.

## Requirements hints

- Search and filtering need to support categories and subcategories such as performance, theory, sleight, books, history, interviews, tools, and communities.
- Each resource card should carry summary, why it matters, audience level, format, and a quality badge.
- Editorial curation notes and best-for tags are central, not cosmetic; they are the main product differentiation.
- A small set of signature starter collections or guided entry points should likely ship early so new users do not land in an undifferentiated directory.
- Outbound link tracking is required for product learning and success measurement.
- Broken-link reporting should be part of the product workflow, not an afterthought.
- Community suggestion flow should exist in MVP, but moderation and acceptance criteria need to protect curator trust.
- New This Week should function as a return trigger and editorial showcase.
- Save or bookmark capability appears in the requested metrics, so it likely belongs no later than the early post-launch phase even if not day-one MVP.

## Technical context and constraints

- Must fit the existing Astro site architecture.
- Must remain lightweight and SEO-friendly.
- Must prioritize desktop and mobile usability equally.
- Present stack is static-site friendly and can support incremental enhancement, but richer metadata likely requires redesigning the underlying resource schema.
- Analytics, broken-link status, freshness verification, and submission moderation will likely introduce operational workflows and possibly serverless or CMS-like support.

## Competitive and market signals

- Conjuring Archive demonstrates that searchable depth and reference credibility matter for serious magic users; its strength is archival discovery and structured indexing.
- Vanishing Inc. demonstrates strong curation language and learning-path merchandising; its strength is commerce plus editorial trust, especially for beginners.
- theory11 demonstrates strong brand atmosphere, beginner-friendly entry points, and ongoing novelty, but it is commerce-led rather than curator-led.
- Opportunity for The Parlour is to occupy the white space between commerce-first discovery and archive-first lookup: trusted editorial guidance with strong brand identity.

## Strategic choices preserved for PRD work

- Core wedge should be trusted curation over raw aggregation, not trying to be the largest directory.
- Product should feel like entering a secret archive, but UX should not become cryptic or hard to scan.
- Success depends on repeat-use loops, not just organic traffic. New This Week, saves, curated collections, and freshness signals are important for habit formation.
- Editorial operations are a product dependency, not just content work. PRD should include explicit ownership, roles, workflows, and SLAs for review and freshness.

## Scope signals

- In scope for MVP: upgraded directory, rich cards, curation notes, best-for tags, analytics, broken-link reporting, submissions, and New This Week.
- Out of scope for MVP: forum, paid course hosting, native mobile app, personalized AI tutor.
- Not explicitly decided: whether bookmarks require accounts, whether personalization exists later, and how much community participation goes beyond submissions.

## Risks and unresolved questions

- Quality badge system needs a rubric: who assigns badges, what signals count, and whether criteria are public.
- Bookmarking requires a decision between anonymous browser storage, email capture, or account infrastructure.
- Category model needs stakeholder prioritization; too many categories at launch could create content debt.
- Outbound analytics and submission flows may raise privacy, spam, and moderation questions not yet resolved.
- Brand language must be tested so mystique enhances the product rather than obscuring utility.

## Rejected ideas and guardrails

- Do not steer the MVP toward a broad social community product.
- Do not turn the MVP into a hosted course platform.
- Do not frame success around store-like transactions or proprietary content sales.
- Do not over-index on breadth without an editorial standard and freshness process.
- Do not rely on secret-society tone alone as differentiation; the actual product moat is credible curator judgment plus maintained resource quality.