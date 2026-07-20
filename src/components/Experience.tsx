import { experience } from "~/lib/data";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";

export function Experience() {
  return (
    <section id="experience" className="border-t border-border py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <Reveal>
          <SectionHeading
            eyebrow="04 — Experience"
            title="Where I've practiced the craft."
          />
        </Reveal>

        <ol className="mt-14 space-y-0">
          {experience.map((job, i) => (
            <Reveal key={job.company} delay={((i % 3) + 1) as 1 | 2 | 3}>
              <li className="group grid gap-4 border-t border-border py-8 sm:grid-cols-12 sm:gap-8 sm:py-10">
                <div className="sm:col-span-3">
                  <p className="font-mono text-xs uppercase tracking-wider text-amber">
                    {job.period}
                  </p>
                </div>
                <div className="sm:col-span-4">
                  <h3 className="font-display text-2xl text-cream transition group-hover:text-amber-bright">
                    {job.role}
                  </h3>
                  <p className="mt-1 text-sm text-muted">{job.company}</p>
                </div>
                <div className="sm:col-span-5">
                  <p className="text-sm leading-relaxed text-muted sm:text-base">
                    {job.summary}
                  </p>
                </div>
              </li>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
