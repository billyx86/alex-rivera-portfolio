import { describe, it, expect } from "vitest";
import { readFileSync, readdirSync, statSync } from "node:fs";
import { join, dirname, extname } from "node:path";
import { fileURLToPath } from "node:url";

const here = dirname(fileURLToPath(import.meta.url));
const srcRoot = join(here, "..", "src");

function walk(dir: string): string[] {
  const out: string[] = [];
  for (const entry of readdirSync(dir)) {
    const p = join(dir, entry);
    const st = statSync(p);
    if (st.isDirectory()) out.push(...walk(p));
    else if ([".tsx", ".ts"].includes(extname(p))) out.push(p);
  }
  return out;
}

const source = walk(srcRoot)
  .map((f) => readFileSync(f, "utf8"))
  .join("\n");

// In-page anchors used across the UI (nav links + hero CTAs) vs the section
// ids that exist. Catches typos that would leave a nav link dead.
const sectionIds = new Set(
  [...source.matchAll(/\bid="([a-zA-Z][\w-]*)"/g)].map((m) => m[1]),
);
const inPageAnchors = [
  ...new Set([...source.matchAll(/href="#([a-zA-Z][\w-]*)"/g)].map((m) => m[1])),
];

describe("anchor integrity", () => {
  it("defines the section ids the UI navigates to", () => {
    for (const id of ["top", "about", "skills", "work", "experience", "contact"]) {
      expect(sectionIds.has(id), `missing section id #${id}`).toBe(true);
    }
  });

  it("every in-page #anchor resolves to an existing id", () => {
    const dangling = inPageAnchors.filter(
      (a) => !sectionIds.has(a) && !["work", "experience", "skills", "about", "contact", "top"].includes(a),
    );
    // All real anchors must resolve; only allow the six canonical sections.
    const allowed = ["top", "about", "skills", "work", "experience", "contact"];
    const unknown = inPageAnchors.filter(
      (a) => !allowed.includes(a) && !sectionIds.has(a),
    );
    expect(unknown, `dangling anchors: ${unknown.join(", ")}`).toEqual([]);
    expect(dangling).toEqual([]);
  });
});
