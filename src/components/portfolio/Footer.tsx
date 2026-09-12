import { ArrowUp } from "lucide-react";
import { navLinks, profile } from "@/data/portfolio";
import { GithubIcon, LinkedinIcon } from "./Navbar";
import { LinkArrow } from "./Shared";

export function Footer() {
  return (
    <footer className="relative border-t border-rule">
      <div className="mx-auto max-w-6xl px-5 py-14 sm:px-8">
        <div className="flex flex-col gap-12 md:flex-row md:items-start md:justify-between">
          <div className="max-w-sm">
            <a href="#top" className="text-base tracking-tight text-foreground">
              <span className="font-mono text-accent-soft">~/</span>
              <span className="font-display font-semibold">hari</span>
              <span className="font-editorial italic text-accent-soft">.prasath</span>
            </a>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
              AI &amp; Machine Learning developer building full-stack LLM
              products — RAG pipelines, vector search, and the web frontends
              that ship them.
            </p>
          </div>

          <nav aria-label="Footer" className="grid grid-cols-2 gap-x-16 gap-y-3">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm text-muted-foreground transition-colors hover:text-foreground"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <a
              href={profile.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub profile"
              className="flex h-9 w-9 items-center justify-center border border-rule text-muted-foreground transition-colors hover:border-accent-soft/50 hover:text-foreground"
            >
              <GithubIcon className="h-4 w-4" />
            </a>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn profile"
              className="flex h-9 w-9 items-center justify-center border border-rule text-muted-foreground transition-colors hover:border-accent-soft/50 hover:text-foreground"
            >
              <LinkedinIcon className="h-4 w-4" />
            </a>
            <a
              href={`mailto:${profile.email}`}
              aria-label="Email Hari Prasath"
              className="flex h-9 items-center justify-center gap-2 border border-rule px-4 text-xs font-medium text-muted-foreground transition-colors hover:border-accent-soft/50 hover:text-foreground"
            >
              Say hello
              <LinkArrow className="h-3 w-3" />
            </a>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-start justify-between gap-4 border-t border-rule pt-7 sm:flex-row sm:items-center">
          <p className="font-mono text-[11px] text-muted-foreground">
            © {new Date().getFullYear()} Hari Prasath · Pollachi, Tamil Nadu, India
          </p>
          <a
            href="#top"
            className="group inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.2em] text-muted-foreground transition-colors hover:text-foreground"
          >
            Back to top
            <ArrowUp className="h-3.5 w-3.5 transition-transform duration-300 group-hover:-translate-y-0.5" />
          </a>
        </div>
      </div>
    </footer>
  );
}
