import { describe, it, expect } from "vitest";
import { cn } from "../src/lib/utils";

describe("cn (clsx + tailwind-merge)", () => {
  it("joins class names", () => {
    expect(cn("a", "b", "c")).toBe("a b c");
  });

  it("respects falsy values and objects", () => {
    expect(cn("a", false && "b", { c: true, d: false })).toBe("a c");
  });

  it("de-duplicates conflicting tailwind classes (last wins)", () => {
    expect(cn("p-2", "p-4")).toBe("p-4");
    expect(cn("text-red-500", "text-blue-500")).toBe("text-blue-500");
  });
});
