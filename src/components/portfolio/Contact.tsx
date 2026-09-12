import { profile } from "@/data/portfolio";
import { GithubIcon, LinkedinIcon } from "./Navbar";
import { LinkArrow, Reveal, SectionHeading } from "./Shared";

export function Contact() {
  return (
    <section id="contact" className="section-frame relative overflow-hidden py-28 sm:py-36">
      {/* Closing cinematic light */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 bottom-0 h-[45vh]"
        style={{
          background:
            "radial-gradient(ellipse 65% 55% at 50% 112%, rgba(47, 39, 206, 0.2), transparent 65%)",
        }}
      />

      <div className="relative mx-auto max-w-6xl px-5 sm:px-8">
        <SectionHeading
          align="center"
          kicker="07 · Contact"
          title={
            <>
              Let's build something{" "}
              <span className="font-editorial font-normal italic text-accent-soft">
                intelligent.
              </span>
            </>
          }
          lede="Open to internships, AI engineering roles, and collaborations on LLM-powered products. The fastest way to reach me is email."
        />

        <Reveal delay={0.1} className="mx-auto mt-14 max-w-xl">
          <a
            href={`mailto:${profile.email}`}
            className="contact-primary group relative flex items-center justify-between gap-4 overflow-hidden border border-paper-edge bg-paper px-6 py-5 transition-[border-color,transform,box-shadow] duration-500 hover:-translate-y-1 hover:border-accent-soft/60 hover:shadow-[0_20px_60px_rgba(25,18,90,0.22)]"
          >
            <span aria-hidden="true" className="absolute inset-y-0 left-0 w-1 bg-gradient-to-b from-accent-soft via-[#5c8dff] to-transparent" />
            <span className="min-w-0">
              <span className="block font-mono text-[10px] uppercase tracking-[0.24em] text-soft-muted">
                Email
              </span>
              <span className="mt-1 block truncate text-[15px] font-medium text-foreground">
                {profile.email}
              </span>
            </span>
            <LinkArrow className="shrink-0 text-muted-foreground transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-accent-soft" />
          </a>

          <div className="mt-4 grid grid-cols-2 gap-4">
            <a
              href={profile.github}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-between gap-3 border border-rule px-5 py-4 text-sm font-medium text-foreground transition-colors duration-300 hover:border-accent-soft/50"
            >
              <span className="flex items-center gap-2.5">
                <GithubIcon className="h-4 w-4 text-muted-foreground" />
                GitHub
              </span>
              <span className="font-mono text-xs text-accent-soft opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                ↗
              </span>
            </a>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-between gap-3 border border-rule px-5 py-4 text-sm font-medium text-foreground transition-colors duration-300 hover:border-accent-soft/50"
            >
              <span className="flex items-center gap-2.5">
                <LinkedinIcon className="h-4 w-4 text-muted-foreground" />
                LinkedIn
              </span>
              <span className="font-mono text-xs text-accent-soft opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                ↗
              </span>
            </a>
          </div>

          <p className="mt-10 text-center font-mono text-[11px] uppercase tracking-[0.26em] text-soft-muted">
            {profile.location}
          </p>

          <p className="mt-5 text-center text-sm text-muted-foreground">
            Prefer a document?{" "}
            <a
              href={`${import.meta.env.BASE_URL}Hari-Prasath-Portfolio.pdf`}
              download="Hari-Prasath-Portfolio.pdf"
              className="font-medium text-foreground underline decoration-rule underline-offset-4 transition-colors hover:decoration-accent-soft"
            >
              Download this portfolio as a PDF
            </a>
          </p>
        </Reveal>
      </div>
    </section>
  );
}
