import { profile } from "@/data/portfolio";
import { Reveal, SectionHeading } from "./Shared";

export function Education() {
  return (
    <section id="education" className="section-frame py-24 sm:py-32">
      <span className="edge-label" aria-hidden="true">Education</span>

      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <SectionHeading
          kicker="05 · Education"
          title={
            <>
              Academic foundation in{" "}
              <span className="font-editorial font-normal italic text-accent-soft">
                AI &amp; ML.
              </span>
            </>
          }
        />

        <Reveal delay={0.1}>
          <div className="mt-14 grid gap-8 border-y border-rule py-10 md:grid-cols-[1fr_auto] md:items-end md:gap-16">
            <div>
              <h3 className="font-display text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">
                {profile.education.degree}
              </h3>
              <p className="mt-3 text-[15px] text-muted-foreground sm:text-base">
                {profile.education.college}
              </p>
              <p className="mt-4 font-mono text-[11px] uppercase tracking-[0.24em] text-soft-muted">
                {profile.location}
              </p>
            </div>

            <div className="flex items-baseline gap-3 md:flex-col md:items-end md:gap-1">
              <span className="font-mono text-[10px] uppercase tracking-[0.24em] text-soft-muted">
                Class of
              </span>
              <span className="font-display text-5xl font-semibold tracking-tight text-foreground sm:text-6xl">
                2028
              </span>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
