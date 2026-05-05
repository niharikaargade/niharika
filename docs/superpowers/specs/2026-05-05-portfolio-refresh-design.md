# Portfolio Refresh Design

**Date:** 2026-05-05

**Goal:** Refresh the existing portfolio into a more mature, minimalistic experience using pastel green and lavender, tighten spacing and layout density, preserve all current written text, and add a concise mention of ADK and agentic AI application capability.

## Constraints

- Keep the current site architecture as a static portfolio powered by CDN React and a single stylesheet.
- Do not rewrite or replace existing portfolio text.
- Only add new wording where explicitly requested for ADK and agentic AI relevance.
- Keep the current section structure unless a layout change improves density and clarity without changing content.
- Avoid introducing a Node, Tailwind, Motion, Aceternity UI, or daisyUI build setup in this pass.

## Current State

- The site is rendered from [index.html](/Users/farmx/niharika/index.html), [resources/app.js](/Users/farmx/niharika/resources/app.js), and [resources/styles.css](/Users/farmx/niharika/resources/styles.css).
- The visual system currently uses a glossy lavender palette, floating bubbles, strong glassmorphism, and generous padding.
- The skills section occupies more vertical space than necessary because each skill group uses roomy cards and large chips.
- Interactions are present, but the current motion language feels decorative rather than restrained.

## Visual Direction

### Palette

- Base background shifts to warm off-white with layered pastel green and lavender accents.
- Cards use soft opaque surfaces instead of translucent frosted panels.
- Accent usage becomes more selective: lavender for hierarchy and pastel green for emphasis and hover feedback.

### Typography

- Preserve the existing font families.
- Reduce oversized decorative feeling by tightening heading scale relationships and vertical spacing.
- Strengthen contrast and hierarchy through spacing, weight, and alignment instead of stronger color saturation.

### Layout

- Reduce unnecessary whitespace across hero, section wrappers, cards, and footer.
- Tighten gaps between related elements while keeping readability intact.
- Rework the skills section into denser, more scannable grouped chips with less card padding.
- Keep projects as the primary high-information section with a cleaner side rail and a more editorial content panel.

### Motion and Interaction

- Remove floating bubble decoration entirely.
- Keep interactions subtle: slight lift, background transitions, border emphasis, and softer hover states.
- Maintain a polished feel through restrained transitions rather than animated spectacle.

## Content Updates

- Preserve all existing text exactly as written.
- Add one concise ADK and agentic AI mention in the technologies/profile area so the portfolio reflects current market relevance.
- The addition should feel integrated with the existing full-stack and systems narrative, not bolted on as a separate marketing block.

## Section-by-Section Changes

### Hero

- Keep current hero copy and portrait.
- Tighten vertical spacing and simplify top navigation styling.
- Make the call-to-action row more compact and aligned with the mature minimal direction.
- Adjust stat cards to feel lighter and more aligned with the new palette.

### How I Work

- Keep all signal text.
- Present the four statements in a tighter grid with reduced padding and a quieter visual style.

### Journey

- Preserve the full timeline content.
- Reduce card bulk and make the grid feel more even and easier to scan.

### Tech Stack

- Keep current categories.
- Add ADK and agentic AI application capability inside the most relevant group instead of creating a new large standalone section.
- Compress chip spacing and card padding so the section occupies less height.

### Projects

- Preserve all project copy.
- Refine the project rail and content surface to improve hierarchy and reduce visual noise.
- Keep the current filter interaction and selected-project detail pattern.

### Horse Life

- Keep current tone and content.
- Simplify surrounding surfaces so this section feels personal but still consistent with the mature overall UI.

### Certification, Media, Footer

- Keep all current content and links.
- Reduce padding and soften visual treatment so these sections do not overpower the core story.

## Implementation Notes

- Main changes should stay within `resources/app.js` and `resources/styles.css`.
- `resources/app.js` will need a small data update for the added ADK and agentic AI mention.
- `resources/styles.css` will carry the primary redesign: palette, spacing, grid density, card styles, hover behavior, and responsive adjustments.

## Risks and Guardrails

- Over-compressing spacing could hurt readability on mobile, so responsive spacing must be tuned separately from desktop.
- The redesign must avoid looking empty or generic; the balance should be minimal but still warm and personal.
- Since the project does not currently use a package-managed frontend stack, plugin-based UI libraries should not be partially bolted in during this pass.
