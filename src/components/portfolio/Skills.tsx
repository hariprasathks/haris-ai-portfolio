import { Cpu } from "lucide-react";
import { capabilities, skillGroups } from "@/data/portfolio";
import { Reveal, SectionHeading } from "./Shared";

export function Skills() {
  return (
    <section id="skills" className="relative py-28 sm:py-36">
      <div className="hairline absolute inset-x-0 top-0 h-px" aria-hidden="true" />

      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <SectionHeading
          kicker="Technical Skills"
          title={
            <>
              The stack behind <span className="text-accent-soft">the systems.</span>
            </>
          }
        />

        <div className="mt-12 grid gap-4 sm:grid-cols-2">
          {skillGroups.map((group, i) => (
            <Reveal key={group.label} delay={i * 0.06}>
              <div className="group rounded-xl border border-border bg-card/40 p-6 transition-colors duration-300 hover:border-accent-soft/40 sm:p-7">
                <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-accent-soft/90">
                  {group.label}
                </p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {group.skills.map((skill) => (
                    <span
                      key={skill}
                      className="rounded-md border border-border bg-background/60 px-3 py-1.5 text-[13px] text-soft-muted transition-colors hover:border-accent-soft/50 hover:text-foreground"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        {/* AI Engineering Capabilities */}
        <div className="mt-28">
          <SectionHeading
            kicker="AI Engineering Capabilities"
            title={
              <>
                From document to <span className="text-accent-soft">grounded answer.</span>
              </>
            }
            description="The end-to-end capabilities I use to take an AI feature from idea to production."
          />

          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {capabilities.map((capability, i) => (
              <Reveal key={capability.title} delay={i * 0.05}>
                <div className="group relative h-full overflow-hidden rounded-xl border border-border bg-card/40 p-6 transition-colors duration-300 hover:border-accent-soft/40">
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-[11px] text-muted-foreground">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <Cpu className="h-4 w-4 text-accent-soft/70 transition-colors group-hover:text-accent-soft" />
                  </div>
                  <h3 className="mt-5 text-base font-semibold tracking-tight text-foreground">
                    {capability.title}
                  </h3>
                  <p className="mt-2.5 text-sm leading-relaxed text-muted-foreground">
                    {capability.description}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
