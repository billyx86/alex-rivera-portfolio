import { Code2, Server, Wrench } from "lucide-react";
import { skills } from "~/lib/data";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";

const icons = {
  Frontend: Code2,
  Backend: Server,
  Tools: Wrench,
} as const;

export function Skills() {
  return (
    <section id="skills" className="border-t border-border py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <Reveal>
          <SectionHeading
            eyebrow="02 — Skills"
            title="A stack chosen for craft and velocity."
            description="I specialize in modern TypeScript full-stack work — sharp UIs, typed APIs, and infrastructure that doesn't fight you."
          />
        </Reveal>

        <div className="mt-14 grid gap-5 md:grid-cols-3">
          {(Object.keys(skills) as Array<keyof typeof skills>).map((group, i) => {
            const Icon = icons[group];
            return (
              <Reveal key={group} delay={(i + 1) as 1 | 2 | 3}>
                <div className="h-full rounded-2xl border border-border bg-panel/40 p-6 transition hover:border-amber/30 hover:bg-panel/70 sm:p-7">
                  <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-xl border border-amber/25 bg-amber/10 text-amber-bright">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="font-display text-2xl text-cream">{group}</h3>
                  <ul className="mt-5 space-y-2.5">
                    {skills[group].map((item) => (
                      <li
                        key={item}
                        className="flex items-center gap-2.5 text-sm text-muted"
                      >
                        <span className="h-1 w-1 rounded-full bg-amber" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
