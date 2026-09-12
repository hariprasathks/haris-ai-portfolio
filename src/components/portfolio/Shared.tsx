import { motion, type Variants } from "framer-motion";
import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

const easeOut = [0.22, 1, 0.36, 1] as const;

export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: easeOut },
  },
};

export function Reveal({
  children,
  className,
  delay = 0,
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
}) {
  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-60px" }}
      variants={fadeUp}
      transition={{ delay }}
    >
      {children}
    </motion.div>
  );
}

/** Editorial section header: mono kicker + display heading + optional lede. */
export function SectionHeading({
  kicker,
  title,
  lede,
  align = "left",
  className,
}: {
  kicker: string;
  title: ReactNode;
  lede?: string;
  align?: "left" | "center";
  className?: string;
}) {
  return (
    <Reveal
      className={cn(
        "max-w-2xl",
        align === "center" && "mx-auto text-center",
        className,
      )}
    >
      <p className="kicker">{kicker}</p>
      <h2 className="mt-5 font-display text-3xl font-semibold tracking-tight text-foreground sm:text-4xl md:text-[2.75rem] md:leading-[1.08]">
        {title}
      </h2>
      {lede ? (
        <p className="mt-5 text-[15px] leading-relaxed text-muted-foreground sm:text-base">
          {lede}
        </p>
      ) : null}
    </Reveal>
  );
}

/** Raised panel on the deep-space background. No glow, no glass. */
export function PaperPanel({
  className,
  children,
}: {
  className?: string;
  children: ReactNode;
}) {
  return (
    <div
      className={cn(
        "rounded-lg border border-paper-edge bg-paper",
        className,
      )}
    >
      {children}
    </div>
  );
}

/** Small technical term chip used sparingly (tech stacks, metadata). */
export function TechBadge({ children }: { children: ReactNode }) {
  return (
    <span className="inline-flex items-center border border-rule px-2.5 py-1 font-mono text-[11px] tracking-wide text-soft-muted">
      {children}
    </span>
  );
}

/** Shared typographic link arrow treatment for outbound links. */
export function LinkArrow({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 16 16"
      fill="none"
      aria-hidden="true"
      className={cn("h-3.5 w-3.5", className)}
    >
      <path
        d="M4.5 11.5 11.5 4.5M11.5 4.5H5.75M11.5 4.5v5.75"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
