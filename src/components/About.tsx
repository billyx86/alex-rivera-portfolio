import { stats } from "~/lib/data";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";

export function About() {
  return (
    <section id="about" className="relative border-t border-border py-24 sm:py-32">
      <div className="mx-auto grid max-w-6xl gap-12 px-5 sm:px-8 lg:grid-cols-12 lg:gap-16">
        <div className="lg:col-span-5">
          <Reveal>
            <SectionHeading
              eyebrow="01 — About"
              title="Interfaces that feel inevitable."
            />
          </Reveal>

          <Reveal delay={1}>
            <div className="mt-8 aspect-[4/5] overflow-hidden rounded-2xl border border-border bg-panel relative">
              <div className="absolute inset-0 bg-gradient-to-br from-amber/20 via-ink-3 to-copper/20" />
              <div className="absolute inset-0 grid-bg opacity-40" />
              <div className="absolute inset-6 rounded-xl border border-amber/20 bg-ink/40 backdrop-blur-sm" />
              <div className="absolute bottom-8 left-8 right-8">
                <div className="rounded-xl border border-border/80 bg-ink/80 p-5 backdrop-blur">
                  <p className="font-display text-2xl text-cream italic">
                    “Ship less. Mean more.”
                  </p>
                  <p className="mt-2 font-mono text-xs text-muted">
                    — design principle I return to
                  </p>
                </div>
              </div>
              <div className="absolute right-8 top-8 flex h-16 w-16 items-center justify-center rounded-full border border-amber/30 bg-amber/10 font-display text-2xl text-amber-bright">
                AR
              </div>
            </div>
          </Reveal>
        </div>

        <div className="flex flex-col justify-center lg:col-span-7">
          <Reveal delay={1}>
            <div className="space-y-5 text-base leading-relaxed text-muted sm:text-lg">
              <p>
                I'm Alex — a full-stack developer who cares as much about the{" "}
                <span className="text-soft">feel</span> of a product as the
                architecture underneath it. I started as a designer who learned
                to code, then a frontend engineer who refused to stop at the API
                boundary.
              </p>
              <p>
                Today I help teams ship polished web products: design systems that
                scale, dashboards people actually enjoy, and services that stay
                fast under load. I favor TypeScript, React, and boringly reliable
                backends.
              </p>
              <p>
                When I'm not in Figma or a terminal, I'm roasting coffee, hiking
                the Texas hill country, or contributing to open source tooling.
              </p>
            </div>
          </Reveal>

          <Reveal delay={2}>
            <dl className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-4">
              {stats.map((s) => (
                <div
                  key={s.label}
                  className="rounded-2xl border border-border bg-panel/50 p-4 sm:p-5"
                >
                  <dt className="font-mono text-[10px] uppercase tracking-wider text-muted sm:text-xs">
                    {s.label}
                  </dt>
                  <dd className="mt-2 font-display text-3xl text-amber-bright sm:text-4xl">
                    {s.value}
                  </dd>
                </div>
              ))}
            </dl>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
