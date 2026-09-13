import { profile, projects } from "@/data/portfolio";
import { LinkArrow, Reveal, SectionHeading } from "./Shared";

export function GitHubSection() {
  return (
    <section id="github" className="section-frame py-24 sm:py-32">
      <span className="edge-label" aria-hidden="true">GitHub</span>

      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20">
          <div>
            <SectionHeading
              kicker="06 · GitHub"
              title={
                <>
                  Code lives{" "}
                  <span className="font-editorial font-normal italic text-accent-soft">
                    in the open.
                  </span>
                </>
              }
              lede="Every project starts as a public repository. Explore the source, the commits, and how each system is structured."
            />
            <Reveal delay={0.15} className="mt-9">
              <a
                href={profile.github}
                target="_blank"
                rel="noopener noreferrer"
                className="custom-btn group inline-flex items-center gap-2 rounded-full bg-foreground px-6 py-3 text-sm font-semibold text-background hover:bg-transparent hover:text-foreground"
              >
                Visit GitHub Profile
                <LinkArrow className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
            </Reveal>
          </div>

          {/* Repository index */}
          <div className="border-t border-rule">
            {projects.map((project, i) => (
              <Reveal key={project.name} delay={i * 0.07}>
                <a
                  href={project.repoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center justify-between gap-6 border-b border-rule py-6 transition-colors hover:bg-white/[0.015]"
                >
                  <span className="min-w-0">
                    <span className="block truncate font-mono text-sm text-foreground sm:text-[15px]">
                      <span className="text-muted-foreground">hariprasathks/</span>
                      {project.repoUrl.split("/").pop()}
                    </span>
                    <span className="mt-1.5 block text-sm text-muted-foreground">
                      {project.subtitle}
                    </span>
                  </span>
                  <LinkArrow className="shrink-0 text-muted-foreground transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-accent-soft" />
                </a>
              </Reveal>
            ))}

            <Reveal delay={0.16}>
              <a
                href={`${profile.github}?tab=repositories`}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-between gap-6 border-b border-rule py-6 transition-colors hover:bg-white/[0.015]"
              >
                <span className="font-mono text-[11px] uppercase tracking-[0.22em] text-muted-foreground transition-colors group-hover:text-foreground">
                  All repositories
                </span>
                <LinkArrow className="shrink-0 text-muted-foreground transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-accent-soft" />
              </a>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
