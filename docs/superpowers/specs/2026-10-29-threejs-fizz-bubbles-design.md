# Three.js Fizz Bubbles Design

## Intent
Add a playful layer of floating, translucent soap bubbles to the portfolio. Each scroll gesture releases a fresh burst that rises from below, creating a fizz effect.

## Goals
- Render bubbles behind and in front of page content with soft iridescent soap-film highlights.
- Add a burst on each scroll gesture and let bubbles float upward.
- Keep page content readable and interactive; respect reduced-motion preferences and avoid unbounded particle growth.

## Non-goals
- Reflect actual page content or add bubble interactions.
- Change page layout or scrolling behavior.

## Approaches
- **Three.js WebGL scene (chosen):** layered transparent spheres with shader/material highlights, spawning bounded bursts on scroll. Matches the requested Three.js effect and gives convincing spherical light play; adds GPU/runtime cost.
- CSS bubbles: lighter and simpler, but weaker spherical reflections and not Three.js.

## Design calls
- Keep a single viewport-sized Three.js renderer fixed behind the site, with occasional foreground bubbles in a separate overlay layer, both pointer-transparent.
- Spawn a small burst per scroll input, with a hard particle cap and recycle expired bubbles so continuous scrolling stays bounded.
- Use soap-film iridescence and broad specular highlights rather than scene reflections; use subtle motion and low opacity to protect legibility.
- Pause rendering when the page is hidden, clean up listeners and GPU resources, and honor reduced motion with a static sparse scene or no animation.
- Load the Three.js browser build from the existing CDN-based setup; no build system or package manager is present.

## Constraints
The site is a React app loaded through browser scripts and Babel in `index.html`; styles and effects live in `resources/styles.css` and `resources/app.js`. The branch was created from the current site branch. Existing local unrelated files must remain untouched.

## Builder scope
Implement a small scene component/effect in the current app, style layering and sizing, and update the cache version. Verify syntax and inspect the rendered experience on desktop and mobile, including repeated scrolls and reduced motion.
