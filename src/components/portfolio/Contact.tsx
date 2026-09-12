import { ArrowUpRight, Mail, MapPin } from "lucide-react";
import { profile } from "@/data/portfolio";
import { GithubIcon, LinkedinIcon } from "./Navbar";
import { Reveal, SectionHeading } from "./Shared";

export function Contact() {
  return (
    <section id="contact" className="relative py-28 sm:py-36">
      {/* Closing cinematic light */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 bottom-0 h-[50vh]"
        style={{
          background:
            "radial-gradient(ellipse 70% 60% at 50% 115%, rgba(47, 39, 206, 0.22), transparent 65%)",
        }}
      />

      <div className="relative mx-auto max-w-6xl px-5 sm:px-8">
        <SectionHeading
          align="center"
          kicker="Contact"
          title={
            <>
              Let's build something <span className="text-accent-soft">intelligent.</span>
            </>
          }
          description="Open to internships, AI engineering roles, and collaborations on LLM-powered products. The fastest way to reach me is email."
        />

        <Reveal delay={0.1} className="mx-auto mt-12 max-w-xl">
          <a
            href={`mailto:${profile.email}`}
            className="group flex items-center justify-between gap-4 rounded-xl border border-border bg-card/50 px-6 py-5 backdrop-blur-sm transition-all duration-300 hover:border-accent-soft/50"
          >
            <span className="flex min-w-0 items-center gap-4">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-accent-soft/30 bg-accent/10">
                <Mail className="h-4 w-4 text-accent-soft" />
              </span>
              <span className="truncate text-sm font-medium text-foreground sm:text-base">
                {profile.email}
              </span>
            </span>
            <ArrowUpRight className="h-4 w-4 shrink-0 text-muted-foreground transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-accent-soft" />
          </a>

          <div className="mt-4 grid grid-cols-2 gap-4">
            <a
              href={profile.github}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-center gap-2.5 rounded-xl border border-border bg-card/30 px-4 py-4 text-sm font-medium text-foreground transition-all duration-300 hover:border-accent-soft/50"
            >
              <GithubIcon className="h-4 w-4" />
              GitHub
            </a>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-center gap-2.5 rounded-xl border border-border bg-card/30 px-4 py-4 text-sm font-medium text-foreground transition-all duration-300 hover:border-accent-soft/50"
            >
              <LinkedinIcon className="h-4 w-4" />
              LinkedIn
            </a>
          </div>

          <p className="mt-8 flex items-center justify-center gap-2 font-mono text-xs uppercase tracking-[0.25em] text-muted-foreground">
            <MapPin className="h-3.5 w-3.5 text-accent-soft/80" />
            {profile.location}
          </p>
        </Reveal>
      </div>
    </section>
  );
}
