# Three.js Fizz Bubbles Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Add iridescent bubbles behind and in front of the portfolio, with a new upward fizz burst on each scroll gesture.

**Architecture:** A React-mounted Three.js scene owns a fixed transparent renderer and one animation loop. Scroll input adds bounded particles that rise and fade; renderer layers are pointer-transparent. Reduced-motion users receive a static sparse scene.

**Tech Stack:** Existing React/Babel CDN app, Three.js browser CDN, CSS, WebGL.

**Spec:** `docs/superpowers/specs/2026-10-29-threejs-fizz-bubbles-design.md`

## Global Constraints
- Keep pointer input available to site content.
- Bound particle count and recycle expired particles.
- Pause when document is hidden; dispose listeners and GPU resources.
- Respect reduced-motion settings.
- Preserve unrelated working-tree changes.

## Review Focus
- Rapid repeated scroll bursts: cap remains fixed and bubbles continue to rise.
- Reduced motion: no continuous animation.
- WebGL unavailable: site content remains usable.
- Narrow screens and resize: canvas stays aligned to viewport.

---

### Task 1: Add Three.js scene and scroll fizz

**Files:**
- Modify: `index.html` (Three.js CDN and app cache version)
- Modify: `resources/app.js` (scene lifecycle and React mount)
- Modify: `resources/styles.css` (behind/foreground renderer layers)

- [ ] Load the Three.js browser build before the Babel app script.
- [ ] Create a transparent fixed renderer, soap-film bubble highlights, bounded rising particles, and scroll-triggered bursts; handle resize, visibility, reduced motion, missing WebGL, and cleanup.
- [ ] Layer bubbles behind content and a small subset in foreground, leaving pointer events to the page.
- [ ] Update app cache version and inspect diff.
- [ ] Validate syntax/source and manually inspect if browser is available.
