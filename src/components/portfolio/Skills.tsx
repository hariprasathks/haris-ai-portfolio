import { capabilities, skillGroups } from "@/data/portfolio";
import { Reveal, SectionHeading } from "./Shared";

export function Skills() {
  return (
    <section id="skills" className="section-frame py-24 sm:py-32">
      <span className="edge-label" aria-hidden="true">Capabilities</span>

      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <SectionHeading
          kicker="03 · Technical Skills"
          title={
            <>
              The stack behind{" "}
              <span className="font-editorial font-normal italic text-accent-soft">
                the systems.
              </span>
            </>
          }
        />

        {/* Typographic skill groups: label rail + terms, no badge wall */}
        <div className="mt-16 border-t border-rule">
          {skillGroups.map((group, i) => (
            <Reveal key={group.label} delay={i * 0.05}>
              <div className="skill-row group relative grid gap-3 border-b border-rule py-7 transition-colors sm:grid-cols-[220px_1fr] sm:gap-10 sm:py-8">
                <div className="flex items-baseline gap-4">
                  <span className="font-mono text-[10px] text-accent-soft/80">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3 className="font-mono text-[11px] uppercase tracking-[0.24em] text-foreground">
                    {group.label}
                  </h3>
                </div>
                <p className="text-[15px] leading-[2] text-soft-muted transition-colors group-hover:text-soft sm:text-base">
                  {group.skills.join("   ·   ")}
                </p>
              </div>
            </Reveal>
          ))}
        </div>

        {/* AI Engineering Capabilities — numbered editorial index */}
        <div className="mt-28">
          <SectionHeading
            kicker="04 · AI Engineering Capabilities"
            title={
              <>
                From document to{" "}
                <span className="font-editorial font-normal italic text-accent-soft">
                  grounded answer.
                </span>
              </>
            }
            lede="The end-to-end capabilities I use to take an AI feature from idea to production."
          />

          <div className="mt-14 border-t border-rule">
            {capabilities.map((capability, i) => (
              <Reveal key={capability.title} delay={i * 0.04}>
                <div className="capability-row group relative grid gap-2 border-b border-rule py-7 transition-colors hover:bg-white/[0.015] sm:grid-cols-[72px_260px_1fr] sm:items-baseline sm:gap-8 sm:py-8">
                  <span className="font-mono text-sm text-accent-soft transition-colors group-hover:text-accent-soft/70">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3 className="font-display text-lg font-semibold tracking-tight text-foreground sm:text-xl">
                    {capability.title}
                  </h3>
                  <p className="text-sm leading-[1.85] text-muted-foreground sm:text-[15px]">
                    {capability.description}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal delay={0.1}>
            <p className="mt-10 font-mono text-[11px] leading-relaxed text-soft-muted">
              Each capability maps to a stage of a production RAG system —
              ingest, index, retrieve, ground, serve, ship.
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
