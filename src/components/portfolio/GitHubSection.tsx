import { ArrowUpRight, GitBranch } from "lucide-react";
import { projects, profile } from "@/data/portfolio";
import { Reveal, SectionHeading } from "./Shared";

export function GitHubSection() {
  return (
    <section id="github" className="relative py-28 sm:py-36">
      <div className="hairline absolute inset-x-0 top-0 h-px" aria-hidden="true" />

      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <div className="grid gap-12 md:grid-cols-[0.9fr_1.1fr] md:gap-16">
          <div>
            <SectionHeading
              kicker="GitHub"
              title={
                <>
                  Code lives <span className="text-accent-soft">in the open.</span>
                </>
              }
              description="Every project I build starts as a public repository. Explore the source, the commits, and how each system is structured."
            />
            <Reveal delay={0.15} className="mt-8">
              <a
                href={profile.github}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2 rounded-md bg-foreground px-6 py-3 text-sm font-semibold text-background transition-colors duration-300 hover:bg-accent-soft"
              >
                Visit GitHub Profile
                <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </a>
            </Reveal>
          </div>

          <div className="flex flex-col gap-4">
            {projects.map((project, i) => (
              <Reveal key={project.name} delay={i * 0.08}>
                <a
                  href={project.repoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group block rounded-xl border border-border bg-card/40 p-6 transition-colors duration-300 hover:border-accent-soft/40"
                >
                  <div className="flex items-center justify-between gap-4">
                    <div className="flex min-w-0 items-center gap-3">
                      <GitBranch className="h-4 w-4 shrink-0 text-accent-soft" />
                      <span className="truncate font-mono text-sm font-medium text-foreground">
                        hariprasathks/{project.repoUrl.split("/").pop()}
                      </span>
                    </div>
                    <ArrowUpRight className="h-4 w-4 shrink-0 text-muted-foreground transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-accent-soft" />
                  </div>
                  <p className="mt-3 pl-7 text-sm text-muted-foreground">
                    {project.subtitle}
                  </p>
                </a>
              </Reveal>
            ))}

            <Reveal delay={0.2}>
              <a
                href={`${profile.github}?tab=repositories`}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-between rounded-xl border border-dashed border-border p-6 text-sm text-muted-foreground transition-colors duration-300 hover:border-accent-soft/50 hover:text-foreground"
              >
                <span>See all repositories on GitHub</span>
                <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </a>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
