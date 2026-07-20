import { ArrowDown, ArrowUpRight, Sparkles } from "lucide-react";
import { profile } from "~/lib/data";
import { Reveal } from "./Reveal";

export function Hero() {
  return (
    <section
      id="top"
      className="relative flex min-h-[100svh] flex-col justify-center overflow-hidden pt-24 pb-16"
    >
      <div className="pointer-events-none absolute inset-0 grid-bg opacity-60" />
      <div className="pointer-events-none absolute -right-24 top-1/4 h-80 w-80 rounded-full bg-amber/10 blur-3xl" />
      <div className="pointer-events-none absolute -left-20 bottom-1/4 h-64 w-64 rounded-full bg-copper/10 blur-3xl" />

      <div className="relative mx-auto w-full max-w-6xl px-5 sm:px-8">
        <Reveal>
          <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-border bg-panel/60 px-3.5 py-1.5 font-mono text-xs text-soft backdrop-blur">
            <Sparkles className="h-3.5 w-3.5 text-amber" />
            {profile.availability}
          </div>
        </Reveal>

        <Reveal delay={1}>
          <p className="mb-4 font-mono text-sm uppercase tracking-[0.2em] text-amber">
            {profile.role}
          </p>
        </Reveal>

        <Reveal delay={2}>
          <h1 className="max-w-4xl font-display text-[clamp(2.75rem,8vw,5.5rem)] leading-[0.95] tracking-tight text-cream">
            Building digital products with{" "}
            <span className="text-gradient-amber italic">clarity</span> &amp;{" "}
            <span className="italic text-soft">craft</span>.
          </h1>
        </Reveal>

        <Reveal delay={3}>
          <p className="mt-8 max-w-xl text-base leading-relaxed text-muted sm:text-lg">
            {profile.tagline}
          </p>
        </Reveal>

        <Reveal delay={4}>
          <div className="mt-10 flex flex-wrap items-center gap-3">
            <a
              href="#work"
              className="inline-flex items-center gap-2 rounded-full bg-amber px-6 py-3 text-sm font-semibold text-ink transition hover:bg-amber-bright"
            >
              View work
              <ArrowDown className="h-4 w-4" />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full border border-border bg-panel/50 px-6 py-3 text-sm font-medium text-cream transition hover:border-amber/40 hover:text-amber-bright"
            >
              Get in touch
              <ArrowUpRight className="h-4 w-4" />
            </a>
          </div>
        </Reveal>

        <Reveal delay={4}>
          <div className="mt-16 flex flex-wrap gap-x-10 gap-y-3 border-t border-border/70 pt-8 font-mono text-xs text-muted sm:text-sm">
            <span>
              Based in{" "}
              <span className="text-soft">{profile.location}</span>
            </span>
            <span>
              Focus{" "}
              <span className="text-soft">Frontend · Systems · Design eng</span>
            </span>
            <span>
              Currently{" "}
              <span className="text-soft">Horizon Labs</span>
            </span>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
