import { motion } from "framer-motion";
import { ArrowDown, ArrowUpRight, Github } from "lucide-react";
import { profile } from "@/data/portfolio";
import { GithubIcon } from "./Navbar";

const easeOut = [0.22, 1, 0.36, 1] as const;

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12, delayChildren: 0.15 } },
};

const item = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: easeOut } },
};

export function Hero() {
  return (
    <section
      id="top"
      className="relative flex min-h-svh flex-col justify-center overflow-hidden"
    >
      {/* Cinematic horizon glow — single deliberate light source */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 h-[70vh]"
        style={{
          background:
            "radial-gradient(ellipse 80% 55% at 50% -12%, rgba(67, 59, 255, 0.28), transparent 62%)",
        }}
      />
      {/* Faint grid, fading toward bottom like stage light on a floor */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.05]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(222,220,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(222,220,255,0.5) 1px, transparent 1px)",
          backgroundSize: "72px 72px",
          maskImage:
            "radial-gradient(ellipse 70% 60% at 50% 0%, black 30%, transparent 75%)",
          WebkitMaskImage:
            "radial-gradient(ellipse 70% 60% at 50% 0%, black 30%, transparent 75%)",
        }}
      />

      <div className="relative mx-auto w-full max-w-6xl px-5 pt-32 pb-24 sm:px-8">
        <motion.div variants={container} initial="hidden" animate="visible">
          <motion.p
            variants={item}
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-border bg-card/50 px-3.5 py-1.5 font-mono text-[11px] uppercase tracking-[0.25em] text-soft-muted"
          >
            <span className="relative flex h-1.5 w-1.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent-soft opacity-60" />
              <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-accent-soft" />
            </span>
            Available for AI engineering roles
          </motion.p>

          <motion.h1
            variants={item}
            className="max-w-4xl text-5xl font-bold leading-[1.02] tracking-tight text-foreground sm:text-6xl md:text-7xl lg:text-[5.5rem]"
          >
            HARI
            <span className="block bg-gradient-to-b from-accent-soft via-accent-soft/85 to-accent/70 bg-clip-text text-transparent">
              PRASATH
            </span>
          </motion.h1>

          <motion.p
            variants={item}
            className="mt-6 font-mono text-sm uppercase tracking-[0.3em] text-accent-soft sm:text-[15px]"
          >
            AI &amp; Machine Learning Developer
          </motion.p>

          <motion.p
            variants={item}
            className="mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground sm:text-xl"
          >
            {profile.tagline}
          </motion.p>

          <motion.div variants={item} className="mt-10 flex flex-wrap items-center gap-4">
            <a
              href="#projects"
              className="group inline-flex items-center gap-2 rounded-md bg-foreground px-6 py-3 text-sm font-semibold text-background transition-all duration-300 hover:bg-accent-soft hover:text-background"
            >
              View Projects
              <ArrowDown className="h-4 w-4 transition-transform duration-300 group-hover:translate-y-0.5" />
            </a>
            <a
              href={profile.github}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2 rounded-md border border-border bg-card/40 px-6 py-3 text-sm font-semibold text-foreground transition-all duration-300 hover:border-accent-soft/50 hover:bg-accent/10"
            >
              <Github className="h-4 w-4" />
              GitHub
              <ArrowUpRight className="h-3.5 w-3.5 text-muted-foreground transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </a>
          </motion.div>
        </motion.div>
      </div>

      {/* Bottom scroll cue, editorial style */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 1 }}
        className="pointer-events-none absolute inset-x-0 bottom-8 hidden justify-center md:flex"
      >
        <div className="flex flex-col items-center gap-2 text-muted-foreground">
          <span className="font-mono text-[10px] uppercase tracking-[0.35em]">Scroll</span>
          <span className="h-10 w-px bg-gradient-to-b from-accent-soft/60 to-transparent" />
        </div>
      </motion.div>
    </section>
  );
}

export { GithubIcon };
