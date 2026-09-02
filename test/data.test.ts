import { describe, it, expect } from "vitest";
import {
  profile,
  stats,
  skills,
  projects,
  experience,
  socials,
} from "../src/lib/data";

describe("site content (src/lib/data)", () => {
  it("profile is complete", () => {
    expect(profile.name).toBe("Alex Rivera");
    expect(profile.role).toBeTruthy();
    expect(profile.email).toMatch(/^[^\s@]+@[^\s@]+\.[^\s@]+$/);
    expect(profile.location).toBeTruthy();
    expect(profile.availability).toBeTruthy();
  });

  it("stats all have a label and value", () => {
    expect(stats.length).toBeGreaterThanOrEqual(4);
    for (const s of stats) {
      expect(s.label.trim()).not.toBe("");
      expect(s.value.trim()).not.toBe("");
    }
  });

  it("skills groups are non-empty", () => {
    for (const [group, items] of Object.entries(skills)) {
      expect(group).toBeTruthy();
      expect(items.length).toBeGreaterThan(0);
      for (const item of items) expect(item.trim()).not.toBe("");
    }
  });

  it("projects are well-formed and unique", () => {
    expect(projects.length).toBeGreaterThan(0);
    const titles = projects.map((p) => p.title);
    expect(new Set(titles).size).toBe(titles.length);
    for (const p of projects) {
      expect(p.title.trim()).not.toBe("");
      expect(p.description.trim()).not.toBe("");
      expect(p.tags.length).toBeGreaterThan(0);
      expect(p.year).toMatch(/^\d{4}$/);
    }
  });

  it("experience is non-empty with distinct companies", () => {
    expect(experience.length).toBeGreaterThan(0);
    const companies = experience.map((e) => e.company);
    expect(new Set(companies).size).toBe(companies.length);
    for (const e of experience) {
      expect(e.role.trim()).not.toBe("");
      expect(e.summary.trim()).not.toBe("");
    }
  });

  it("socials have valid, unique URLs", () => {
    expect(socials.length).toBeGreaterThan(0);
    const hrefs = socials.map((s) => s.href);
    expect(new Set(hrefs).size).toBe(hrefs.length);
    for (const s of socials) {
      expect(s.label.trim()).not.toBe("");
      expect(s.href).toMatch(/^https?:\/\//);
    }
  });
});
