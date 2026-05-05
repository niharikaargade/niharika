# Portfolio Refresh Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Refresh the static portfolio into a tighter, more mature pastel green and lavender UI, keep existing copy intact, add the requested ADK and agentic AI mention, and run the site locally for review.

**Architecture:** The portfolio remains a single-page CDN React app driven by `resources/app.js` and styled entirely from `resources/styles.css`. The implementation will update data and structure lightly in `app.js`, then replace the decorative glassmorphism-heavy stylesheet with a denser, restrained editorial layout while preserving responsive behavior.

**Tech Stack:** Static HTML, CDN React 18, Babel standalone, CSS

---

### Task 1: Update Portfolio Data and Layout Hooks

**Files:**
- Modify: `resources/app.js`
- Verify: `resources/app.js`

- [ ] **Step 1: Add the requested ADK and agentic AI capability to the tech stack data**

Update the relevant `techStacks` group in `resources/app.js` so the skill list includes:

```js
"ADK",
"Agentic AI applications",
```

- [ ] **Step 2: Remove the floating decoration state and effect**

Delete the unused floating bubble state and effect from `App()`:

```js
const [activeProject, setActiveProject] = useState(projects[0].id);
const [projectFilter, setProjectFilter] = useState("All");
```

and remove the `useEffect` block that generates `bubbles`.

- [ ] **Step 3: Remove the floating layer markup from the page shell**

Delete this block from the render output:

```jsx
<div className="floating-layer" aria-hidden="true">
  {bubbles.map((bubble) => (
    <span
      key={bubble.id}
      className="bubble"
      style={{
        left: bubble.left,
        top: bubble.top,
        animationDelay: bubble.delay,
        width: bubble.size,
        height: bubble.size,
      }}
    />
  ))}
</div>
```

- [ ] **Step 4: Add semantic class hooks for the denser layout**

Update the hero and skills markup with compact layout hooks:

```jsx
<div className="cta-row compact-actions">
...
<div className="stat-grid hero-metrics">
...
<section className="panel stack-panel compact-panel">
...
<div className="stack-grid stack-grid-compact">
```

- [ ] **Step 5: Verify the file still parses cleanly**

Run:

```bash
node --check /Users/farmx/niharika/resources/app.js
```

Expected: command exits successfully with no syntax output.

### Task 2: Replace the Visual System

**Files:**
- Modify: `resources/styles.css`
- Verify: `resources/styles.css`

- [ ] **Step 1: Replace the root palette with mature pastel green and lavender tokens**

Set `:root` to the new restrained palette:

```css
:root {
  --bg: #f6f6f2;
  --bg-soft: #fbfbf8;
  --surface: #ffffff;
  --surface-soft: #f3f1f7;
  --surface-tint: #eef4ee;
  --ink: #233128;
  --muted: #5d6d63;
  --lavender: #9f8cc2;
  --lavender-deep: #6f618e;
  --green: #9ab7a3;
  --green-deep: #5f7d68;
  --line: rgba(61, 83, 68, 0.12);
  --line-strong: rgba(111, 97, 142, 0.18);
  --shadow: 0 18px 40px rgba(52, 67, 58, 0.08);
}
```

- [ ] **Step 2: Remove the decorative floating bubble system**

Delete the `.floating-layer`, `.bubble`, `.bubble::before`, and `@keyframes floatBubble` rules entirely.

- [ ] **Step 3: Tighten the main page spacing and simplify surfaces**

Update the layout blocks to reduce unnecessary space:

```css
.hero {
  padding: 20px clamp(18px, 4vw, 48px) 36px;
}

.content {
  gap: 18px;
  padding: 0 clamp(18px, 4vw, 48px) 40px;
}

.panel {
  border-radius: 24px;
  padding: clamp(18px, 3vw, 28px);
  background: rgba(255, 255, 255, 0.9);
  border: 1px solid var(--line);
  box-shadow: var(--shadow);
  backdrop-filter: none;
}
```

- [ ] **Step 4: Restyle navigation, hero, cards, and buttons to a minimal editorial look**

Adjust the relevant selectors so:

```css
.topbar-links a,
.button,
.project-tab,
.social-card,
.filter-pill,
.tag,
.detail-chip {
  transition: background-color 180ms ease, border-color 180ms ease, color 180ms ease, transform 180ms ease, box-shadow 180ms ease;
}
```

and ensure buttons, tabs, cards, and chips use flatter surfaces, selective lavender accents, and green hover emphasis instead of glossy gradients.

- [ ] **Step 5: Compress the skills and timeline sections**

Update `.stack-grid`, `.stack-card`, `.tag-row`, `.tag`, `.timeline-cards`, and `.timeline-card` so the section becomes denser and more scannable while preserving readability.

- [ ] **Step 6: Refine project, horse, certification, media, and footer layouts**

Adjust those sections to reduce bulk, keep imagery clean, and align spacing with the new minimal system without changing content.

- [ ] **Step 7: Tune responsive behavior for mobile**

Keep the existing responsive breakpoints, but reduce padding and preserve one-column stacking where needed.

- [ ] **Step 8: Verify stylesheet completeness by reviewing the final rendered selectors**

Run:

```bash
sed -n '1,260p' /Users/farmx/niharika/resources/styles.css
sed -n '261,520p' /Users/farmx/niharika/resources/styles.css
sed -n '521,900p' /Users/farmx/niharika/resources/styles.css
```

Expected: the file contains the new palette, no bubble selectors, and updated compact section rules.

### Task 3: Run the Site Locally and Verify the Refresh

**Files:**
- Verify: `index.html`
- Verify: `resources/app.js`
- Verify: `resources/styles.css`

- [ ] **Step 1: Start a local static server from the repo root**

Run:

```bash
python3 -m http.server 4173
```

Expected: server starts successfully and listens on `http://127.0.0.1:4173/`.

- [ ] **Step 2: Confirm the server responds**

Run:

```bash
curl -I http://127.0.0.1:4173/
```

Expected: HTTP `200 OK`.

- [ ] **Step 3: Spot-check the important rendered states**

Verify manually in the browser that:

```text
1. Hero uses the new pastel green and lavender system with tighter spacing.
2. Skills occupy less vertical space and include ADK / Agentic AI applications.
3. Project filter and project tabs still switch correctly.
4. No original text has been removed or rewritten.
```

- [ ] **Step 4: Commit the implementation**

Run:

```bash
git add resources/app.js resources/styles.css docs/superpowers/plans/2026-05-05-portfolio-refresh-implementation.md
git commit -m "feat: refresh portfolio UI"
```

Expected: commit succeeds with the UI refresh changes.
