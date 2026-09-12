import { GraduationCap } from "lucide-react";
import { profile } from "@/data/portfolio";
import { HighlightCard, Reveal, SectionHeading } from "./Shared";

export function Education() {
  return (
    <section id="education" className="relative py-28 sm:py-36">
      <div className="hairline absolute inset-x-0 top-0 h-px" aria-hidden="true" />

      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <SectionHeading
          kicker="Education"
          title={
            <>
              Academic foundation in <span className="text-accent-soft">AI &amp; ML.</span>
            </>
          }
        />

        <Reveal delay={0.1} className="mt-12">
          <HighlightCard className="p-7 sm:p-10">
            <div className="flex flex-col gap-8 sm:flex-row sm:items-start sm:justify-between">
              <div className="flex items-start gap-5">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg border border-accent-soft/30 bg-accent/10">
                  <GraduationCap className="h-5 w-5 text-accent-soft" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold tracking-tight text-foreground sm:text-2xl">
                    {profile.education.degree}
                  </h3>
                  <p className="mt-2 text-[15px] text-muted-foreground">
                    {profile.education.college}
                  </p>
                  <p className="mt-1 font-mono text-xs uppercase tracking-[0.2em] text-accent-soft/90">
                    {profile.location}
                  </p>
                </div>
              </div>
              <div className="sm:text-right">
                <p className="font-mono text-sm text-soft-muted">Class of</p>
                <p className="mt-1 text-4xl font-bold tracking-tight text-foreground/90">
                  2028
                </p>
                <p className="mt-1 font-mono text-[11px] uppercase tracking-[0.2em] text-muted-foreground">
                  Expected graduation
                </p>
              </div>
            </div>
          </HighlightCard>
        </Reveal>
      </div>
    </section>
  );
}
