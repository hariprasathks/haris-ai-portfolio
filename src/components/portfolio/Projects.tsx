import { ArrowUpRight, ExternalLink, Github } from "lucide-react";
import { projects, type Project } from "@/data/portfolio";
import { Reveal, SectionHeading, TechBadge } from "./Shared";

function ProjectCard({ project }: { project: Project }) {
  return (
    <Reveal>
      <article className="group relative overflow-hidden rounded-xl border border-border bg-card/40 backdrop-blur-sm transition-colors duration-300 hover:border-accent-soft/40">
        {/* Hover light sweep */}
        <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
          <div className="absolute -top-28 left-1/2 h-44 w-[130%] -translate-x-1/2 rounded-full bg-accent/10 blur-3xl" />
        </div>

        <div className="relative flex flex-col gap-6 p-6 sm:p-8">
          <div className="flex items-start justify-between gap-4">
            <span className="font-mono text-4xl font-semibold text-foreground/10 transition-colors duration-300 group-hover:text-accent-soft/25 sm:text-5xl">
              {project.index}
            </span>
            <div className="flex items-center gap-2">
              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 rounded-md bg-foreground px-3.5 py-2 text-xs font-semibold text-background transition-colors hover:bg-accent-soft"
                >
                  <ExternalLink className="h-3.5 w-3.5" />
                  Live Demo
                </a>
              )}
              <a
                href={project.repoUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${project.name} source code on GitHub`}
                className="inline-flex items-center gap-1.5 rounded-md border border-border px-3.5 py-2 text-xs font-semibold text-foreground transition-colors hover:border-accent-soft/50 hover:bg-accent/10"
              >
                <Github className="h-3.5 w-3.5" />
                Code
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-semibold tracking-tight text-foreground sm:text-2xl">
              {project.name}
            </h3>
            <p className="mt-1 font-mono text-xs uppercase tracking-[0.2em] text-accent-soft/90">
              {project.subtitle}
            </p>
          </div>

          <p className="text-sm leading-relaxed text-muted-foreground sm:text-[15px]">
            {project.summary}
          </p>

          <ul className="space-y-2.5">
            {project.highlights.map((highlight) => (
              <li key={highlight} className="flex items-start gap-3 text-sm text-soft-muted">
                <span className="mt-[7px] h-1 w-1 shrink-0 rounded-full bg-accent-soft/80" />
                {highlight}
              </li>
            ))}
          </ul>

          <div className="mt-auto flex flex-wrap gap-2 pt-2 border-t border-border">
            {project.tech.map((tech) => (
              <TechBadge key={tech}>{tech}</TechBadge>
            ))}
          </div>
        </div>
      </article>
    </Reveal>
  );
}

export function Projects() {
  return (
    <section id="projects" className="relative py-28 sm:py-36">
      {/* Subtle section divider light */}
      <div className="hairline absolute inset-x-0 top-0 h-px" aria-hidden="true" />

      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <SectionHeading
          kicker="Featured Projects"
          title={
            <>
              Shipped, deployed, <span className="text-accent-soft">in production.</span>
            </>
          }
          description="Two full-stack AI products — from document ingestion to grounded answers, from Claude API to a bilingual chat interface."
        />

        <div className="mt-14 grid gap-6 lg:grid-cols-2">
          {projects.map((project) => (
            <ProjectCard key={project.name} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
