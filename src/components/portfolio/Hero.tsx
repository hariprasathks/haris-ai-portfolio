import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";
import { profile } from "@/data/portfolio";

const easeOut = [0.22, 1, 0.36, 1] as const;

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.09, delayChildren: 0.1 } },
};

const item = {
  hidden: { opacity: 0, y: 26 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: easeOut } },
};

export function Hero() {
  return (
    <section
      id="top"
      className="relative flex min-h-svh flex-col justify-center overflow-hidden"
    >
      {/* Single cinematic light source on the horizon */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 h-[65vh]"
        style={{
          background:
            "radial-gradient(ellipse 75% 50% at 50% -10%, rgba(47, 39, 206, 0.22), transparent 62%)",
        }}
      />
      {/* Sparse engineering grid, fading like stage light */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.045]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(222,220,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(222,220,255,0.5) 1px, transparent 1px)",
          backgroundSize: "88px 88px",
          maskImage:
            "radial-gradient(ellipse 65% 55% at 50% 0%, black 25%, transparent 72%)",
          WebkitMaskImage:
            "radial-gradient(ellipse 65% 55% at 50% 0%, black 25%, transparent 72%)",
        }}
      />

      <div className="relative mx-auto w-full max-w-6xl px-5 pt-36 pb-28 sm:px-8">
        <motion.div variants={container} initial="hidden" animate="visible">
          {/* Mono identity row: who, where, status */}
          <motion.p
            variants={item}
            className="mb-10 flex flex-wrap items-center gap-x-3 gap-y-2 font-mono text-[11px] uppercase tracking-[0.22em] text-soft-muted"
          >
            <span>Portfolio 2026</span>
            <span aria-hidden="true" className="text-accent-soft/70">/</span>
            <span>{profile.location}</span>
            <span aria-hidden="true" className="text-accent-soft/70">/</span>
            <span className="text-foreground">Open to internships &amp; collaborations</span>
          </motion.p>

          <motion.h1
            variants={item}
            className="font-display text-[17vw] font-bold leading-[0.94] tracking-[-0.02em] text-foreground sm:text-7xl md:text-8xl lg:text-[7.5rem]"
          >
            HARI PRASATH
          </motion.h1>

          <motion.p
            variants={item}
            className="mt-6 font-mono text-xs uppercase tracking-[0.32em] text-accent-soft sm:text-sm"
          >
            AI &amp; Machine Learning Developer
          </motion.p>

          <motion.p
            variants={item}
            className="mt-8 max-w-2xl text-lg leading-relaxed text-muted-foreground sm:text-xl"
          >
            I build and ship full-stack AI products —{" "}
            <span className="text-foreground">LLM applications</span>,{" "}
            <span className="text-foreground">RAG pipelines</span>, and{" "}
            <span className="text-foreground">vector search</span> — on modern
            web technologies.
          </motion.p>

          <motion.div
            variants={item}
            className="mt-12 flex flex-wrap items-center gap-x-8 gap-y-4"
          >
            <a
              href="#projects"
              className="group inline-flex items-center gap-2 border border-foreground bg-foreground px-6 py-3 text-sm font-semibold text-background transition-colors duration-300 hover:bg-transparent hover:text-foreground"
            >
              View Projects
              <ArrowDown className="h-4 w-4 transition-transform duration-300 group-hover:translate-y-0.5" />
            </a>
            <a
              href={profile.github}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-1.5 text-sm font-medium text-muted-foreground transition-colors duration-300 hover:text-foreground"
            >
              <span className="underline decoration-rule underline-offset-8 transition-colors group-hover:decoration-accent-soft">
                GitHub
              </span>
              <span className="font-mono text-xs text-accent-soft">↗</span>
            </a>
            <a
              href={`mailto:${profile.email}`}
              className="group inline-flex items-center gap-1.5 text-sm font-medium text-muted-foreground transition-colors duration-300 hover:text-foreground"
            >
              <span className="underline decoration-rule underline-offset-8 transition-colors group-hover:decoration-accent-soft">
                Email
              </span>
              <span className="font-mono text-xs text-accent-soft">↗</span>
            </a>
          </motion.div>
        </motion.div>
      </div>

      {/* Editorial scroll cue */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4, duration: 1 }}
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
