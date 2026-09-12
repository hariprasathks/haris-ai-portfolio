import { profile } from "@/data/portfolio";
import { PaperPanel, Reveal, SectionHeading } from "./Shared";

export function About() {
  return (
    <section id="about" className="section-frame py-24 sm:py-32">
      <span className="edge-label" aria-hidden="true">About</span>

      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <SectionHeading
          kicker="01 · About"
          title={
            <>
              Building practical AI products,{" "}
              <span className="font-editorial font-normal italic text-accent-soft">
                not demos.
              </span>
            </>
          }
        />

        <div className="mt-14 grid gap-12 lg:grid-cols-[1.25fr_0.75fr] lg:gap-20">
          <Reveal delay={0.08}>
            <div className="space-y-6 text-[15px] leading-[1.85] text-muted-foreground sm:text-base">
              <p>
                I'm Hari Prasath, an AI &amp; Machine Learning developer based in
                Pollachi, Tamil Nadu. I'm pursuing a B.Sc. in Artificial
                Intelligence and Machine Learning at Shri Nehru Maha Vidyalaya
                College of Arts and Science, graduating in 2028 — but most of
                what I ship comes from building real products end to end.
              </p>
              <p>
                My work sits at the intersection of applied AI and web
                engineering: taking an LLM from an API call to a production
                feature — document ingestion, chunking, embeddings, vector
                indexing, semantic retrieval, and grounded answers users can
                actually trust.
              </p>
              <p>
                Right now I'm focused on RAG systems, LLM API integrations, and
                the full-stack craft that turns them into tools people use —
                like StudyMate AI, a deployed RAG study assistant, and WorkSkills
                AIRA, a bilingual career guidance chatbot.
              </p>
            </div>
          </Reveal>

          {/* Technical identity panel */}
          <Reveal delay={0.16}>
            <PaperPanel className="p-6 sm:p-7">
              <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-soft-muted">
                Identity
              </p>

              <dl className="mt-6 space-y-5">
                {[
                  ["Name", profile.name],
                  ["Role", "AI & ML Developer"],
                  ["Location", profile.location],
                  ["Education", "B.Sc. AI & ML, 2028"],
                  ["Focus", "RAG · LLMs · Vector search"],
                ].map(([term, value]) => (
                  <div
                    key={term}
                    className="flex items-baseline justify-between gap-6 border-b border-rule pb-4 last:border-0 last:pb-0"
                  >
                    <dt className="shrink-0 font-mono text-[10px] uppercase tracking-[0.2em] text-soft-muted">
                      {term}
                    </dt>
                    <dd className="text-right text-[13px] font-medium text-foreground">
                      {value}
                    </dd>
                  </div>
                ))}
              </dl>

              <p className="mt-6 font-mono text-[11px] leading-relaxed text-muted-foreground">
                <span className="text-accent-soft">&gt;</span> open to
                internships &amp; collaborations
                <span className="ml-2 inline-block h-3 w-[6px] animate-pulse bg-accent-soft align-middle" />
              </p>
            </PaperPanel>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
