import { ArrowUpRight, Github } from "lucide-react";
import { projects } from "~/lib/data";
import { cn } from "~/lib/utils";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";

export function Projects() {
  return (
    <section id="work" className="border-t border-border py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <Reveal>
          <SectionHeading
            eyebrow="03 — Selected work"
            title="Projects that balance ambition with restraint."
            description="A few recent builds — product surfaces, design systems, and tools where performance and polish both mattered."
          />
        </Reveal>

        <div className="mt-14 grid gap-4 sm:gap-5 md:grid-cols-6">
          {projects.map((project, i) => {
            const wide = project.featured;
            return (
              <Reveal
                key={project.title}
                delay={((i % 4) + 1) as 1 | 2 | 3 | 4}
                className={cn(
                  wide ? "md:col-span-3" : "md:col-span-3 lg:col-span-3",
                  i === 0 && "md:col-span-4",
                  i === 1 && "md:col-span-2",
                  i === 2 && "md:col-span-2",
                  i === 3 && "md:col-span-4",
                )}
              >
                <article className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-panel/40 transition hover:border-amber/35">
                  <div
                    className={cn(
                      "relative h-40 overflow-hidden border-b border-border bg-gradient-to-br sm:h-48",
                      project.accent,
                    )}
                  >
                    <div className="absolute inset-0 grid-bg opacity-50" />
                    <div className="absolute inset-0 flex items-end justify-between p-5">
                      <span className="font-mono text-xs text-soft/80">
                        {project.year}
                      </span>
                      <div className="flex gap-2 opacity-0 transition group-hover:opacity-100">
                        <a
                          href={project.github}
                          className="flex h-9 w-9 items-center justify-center rounded-full border border-border bg-ink/70 text-cream backdrop-blur transition hover:border-amber/40 hover:text-amber-bright"
                          aria-label={`${project.title} on GitHub`}
                        >
                          <Github className="h-4 w-4" />
                        </a>
                        <a
                          href={project.href}
                          className="flex h-9 w-9 items-center justify-center rounded-full border border-border bg-ink/70 text-cream backdrop-blur transition hover:border-amber/40 hover:text-amber-bright"
                          aria-label={`Open ${project.title}`}
                        >
                          <ArrowUpRight className="h-4 w-4" />
                        </a>
                      </div>
                    </div>
                    <div className="pointer-events-none absolute right-6 top-6 font-display text-5xl text-cream/10 transition group-hover:text-amber/20 sm:text-6xl">
                      0{i + 1}
                    </div>
                  </div>

                  <div className="flex flex-1 flex-col p-5 sm:p-6">
                    <h3 className="font-display text-2xl text-cream transition group-hover:text-amber-bright sm:text-[1.65rem]">
                      {project.title}
                    </h3>
                    <p className="mt-3 flex-1 text-sm leading-relaxed text-muted">
                      {project.description}
                    </p>
                    <div className="mt-5 flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="rounded-full border border-border bg-ink/50 px-2.5 py-1 font-mono text-[11px] text-soft"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
