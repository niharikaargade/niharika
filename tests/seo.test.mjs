import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import test from "node:test";

const siteUrl = "https://niharikaargade.github.io/niharika/";

test("publishes full-stack developer metadata for search engines", () => {
  const html = readFileSync("index.html", "utf8");

  assert.match(html, /<title>Niharika Argade \| AI & Cloud Full Stack Developer<\/title>/);
  assert.match(html, /name="description"[\s\S]*Senior Full Stack Developer/);
  assert.match(html, /"jobTitle": "Senior Full Stack Developer"/);
  assert.match(html, /"React Native"/);
  assert.match(html, /"Spring Boot"/);
  assert.match(html, /"AWS"/);
  for (const term of [
    "AI",
    "Agentic AI",
    "Python",
    "Django",
    "Azure",
    "Google Cloud",
    "Data Analysis",
    "Backend Development",
    "Product Engineering",
    "IoT",
    "PostgreSQL",
  ]) {
    assert.match(html, new RegExp(term));
  }
});

test("keeps the portfolio's original visible hero heading", () => {
  const app = readFileSync("resources/app.js", "utf8");

  assert.match(app, /Explore how thoughtful products take shape with me/);
});

test("publishes a sitemap and allows crawlers to discover it", () => {
  const robots = readFileSync("robots.txt", "utf8");
  const sitemap = readFileSync("sitemap.xml", "utf8");

  assert.match(robots, new RegExp(`Sitemap: ${siteUrl}sitemap.xml`));
  assert.match(sitemap, /<urlset xmlns="http:\/\/www\.sitemaps\.org\/schemas\/sitemap\/0\.9">/);
  assert.match(sitemap, new RegExp(`<loc>${siteUrl}<\\/loc>`));
});
