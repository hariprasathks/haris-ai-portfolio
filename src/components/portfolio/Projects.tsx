import { profile, projects, type Project } from "@/data/portfolio";
import { LinkArrow, PaperPanel, Reveal, SectionHeading, TechBadge } from "./Shared";

/** StudyMate engineering pipeline, rendered as a numbered flow. */
function ArchitectureFlow() {
  const stages = [
    "PDF / DOCX",
    "Text extraction",
    "Chunking",
    "Embeddings",
    "ChromaDB",
    "Semantic retrieval",
    "Gemini",
    "Grounded answer + citations",
  ];

  return (
    <div className="project-flow relative mt-10 border-y border-rule py-8">
      <div className="mb-6 flex items-center justify-between gap-4">
        <p className="kicker">System flow</p>
        <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-soft-muted">input → answer</span>
      </div>
      <ol className="flex flex-wrap items-center gap-x-2 gap-y-3">
        {stages.map((stage, i) => (
          <li key={stage} className="flex items-center gap-2">
            <span className="flex items-baseline gap-1.5">
              <span className="font-mono text-[10px] text-accent-soft/80">
                {String(i + 1).padStart(2, "0")}
              </span>
              <span
                className={
                  i === stages.length - 1
                    ? "font-editorial text-base italic text-foreground"
                    : "font-mono text-[11px] uppercase tracking-[0.14em] text-soft"
                }
              >
                {stage}
              </span>
            </span>
            {i < stages.length - 1 && (
              <span aria-hidden="true" className="text-accent-soft/60">→</span>
            )}
          </li>
        ))}
      </ol>
    </div>
  );
}

function FlagshipCaseStudy({ project }: { project: Project }) {
  return (
    <Reveal>
              <PaperPanel className="overflow-hidden">
        {/* Index + status masthead */}
        <div className="flex items-start justify-between border-b border-rule px-6 py-5 sm:px-10 sm:py-6">
          <div className="flex items-baseline gap-4">
            <span className="font-mono text-xs text-accent-soft">01</span>
            <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-soft-muted">
              Flagship project
            </span>
          </div>
          <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-soft-muted">
            Deployed
          </span>
        </div>

        <div className="px-6 py-10 sm:px-10 sm:py-12">
          <h3 className="font-display text-4xl font-semibold tracking-tight text-foreground sm:text-5xl">
            {project.name}
          </h3>
          <p className="mt-3 font-mono text-xs uppercase tracking-[0.24em] text-accent-soft">
            {project.subtitle}
          </p>

          <p className="mt-7 max-w-2xl text-[15px] leading-[1.8] text-muted-foreground sm:text-base">
            {project.summary}
          </p>

          <ArchitectureFlow />

          <div className="mt-10 grid gap-10 md:grid-cols-[1fr_auto] md:items-end">
            {/* Stack */}
            <div>
              <p className="kicker mb-4">Stack</p>
              <div className="flex flex-wrap gap-2">
                {project.tech.map((tech) => (
                  <TechBadge key={tech}>{tech}</TechBadge>
                ))}
              </div>
            </div>

            {/* Links */}
            <div className="flex flex-wrap items-center gap-6 md:justify-end">
              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-2 border border-foreground bg-foreground px-6 py-3 text-sm font-semibold text-background transition-colors duration-300 hover:bg-transparent hover:text-foreground"
                >
                  Live Demo
                  <LinkArrow className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </a>
              )}
              <a
                href={project.repoUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${project.name} source code on GitHub`}
                className="group inline-flex items-center gap-2 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
              >
                <span className="underline decoration-rule underline-offset-8 group-hover:decoration-accent-soft">
                  Source
                </span>
                <span className="font-mono text-xs text-accent-soft">↗</span>
              </a>
            </div>
          </div>
        </div>
      </PaperPanel>
    </Reveal>
  );
}

function CompanionCaseStudy({ project }: { project: Project }) {
  return (
    <Reveal delay={0.1}>
      <PaperPanel className="h-full">
        <div className="flex items-start justify-between border-b border-rule px-6 py-5 sm:px-8">
          <div className="flex items-baseline gap-4">
            <span className="font-mono text-xs text-accent-soft">02</span>
            <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-soft-muted">
              Project
            </span>
          </div>
          <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-soft-muted">
            Bilingual · EN / TA
          </span>
        </div>

        <div className="px-6 py-8 sm:px-8">
          <h3 className="font-display text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">
            {project.name}
          </h3>
          <p className="mt-2 font-mono text-[11px] uppercase tracking-[0.22em] text-accent-soft">
            {project.subtitle}
          </p>

          <p className="mt-5 text-sm leading-[1.8] text-muted-foreground">
            {project.summary}
          </p>

          <ul className="mt-7 space-y-3 border-t border-rule pt-6">
            {project.highlights.map((highlight) => (
              <li
                key={highlight}
                className="flex items-baseline gap-3 text-sm text-soft-muted"
              >
                <span className="font-mono text-[10px] text-accent-soft/70">·</span>
                {highlight}
              </li>
            ))}
          </ul>

          <div className="mt-8 flex flex-wrap items-center justify-between gap-4 border-t border-rule pt-6">
            <div className="flex flex-wrap gap-2">
              {project.tech.map((tech) => (
                <TechBadge key={tech}>{tech}</TechBadge>
              ))}
            </div>
            <a
              href={project.repoUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${project.name} source code on GitHub`}
              className="group inline-flex items-center gap-2 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              <span className="underline decoration-rule underline-offset-8 group-hover:decoration-accent-soft">
                Source
              </span>
              <span className="font-mono text-xs text-accent-soft">↗</span>
            </a>
          </div>
        </div>
      </PaperPanel>
    </Reveal>
  );
}

export function Projects() {
  const [flagship, companion] = projects;

  return (
    <section id="projects" className="section-frame py-24 sm:py-32">
      <span className="edge-label" aria-hidden="true">Projects</span>

      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <SectionHeading
          kicker="02 · Featured Projects"
          title={
            <>
              Shipped, deployed,{" "}
              <span className="font-editorial font-normal italic text-accent-soft">
                in production.
              </span>
            </>
          }
          lede="Two full-stack AI products — from document ingestion to grounded answers, from the Claude API to a bilingual chat interface."
        />

        <div className="mt-16 space-y-8">
          {flagship && <FlagshipCaseStudy project={flagship} />}
          {companion && <CompanionCaseStudy project={companion} />}
        </div>

        <Reveal delay={0.1}>
          <p className="mt-10 border-t border-rule pt-6 font-mono text-[11px] leading-relaxed text-soft-muted">
            Case notes document the problem, system, and stack as built. Source
            repositories are public on{" "}
            <a
              href={profile.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-foreground underline decoration-rule underline-offset-4 hover:decoration-accent-soft"
            >
              GitHub
            </a>
            .
          </p>
        </Reveal>
      </div>
    </section>
  );
}
