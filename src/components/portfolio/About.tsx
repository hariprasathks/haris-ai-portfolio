import { GraduationCap, MapPin, Sparkles } from "lucide-react";
import { profile } from "@/data/portfolio";
import { HighlightCard, Reveal, SectionHeading } from "./Shared";

export function About() {
  return (
    <section id="about" className="relative py-28 sm:py-36">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <div className="grid gap-12 md:grid-cols-[1.2fr_0.8fr] md:gap-16">
          <div>
            <SectionHeading
              kicker="About"
              title={
                <>
                  Building practical AI products,
                  <span className="text-accent-soft"> not demos.</span>
                </>
              }
            />
            <Reveal delay={0.1} className="mt-8 space-y-5 text-base leading-relaxed text-muted-foreground sm:text-lg">
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
            </Reveal>
          </div>

          <Reveal delay={0.2} className="md:pt-16">
            <HighlightCard className="p-6 sm:p-7">
              <div className="flex items-center justify-between border-b border-border pb-4">
                <div className="flex items-center gap-2">
                  <span className="h-2.5 w-2.5 rounded-full bg-red-400/70" />
                  <span className="h-2.5 w-2.5 rounded-full bg-amber-400/70" />
                  <span className="h-2.5 w-2.5 rounded-full bg-green-400/70" />
                </div>
                <span className="font-mono text-xs text-muted-foreground">hari — profile</span>
              </div>

              <div className="space-y-4 pt-6 font-mono text-[13px] leading-relaxed">
                <div className="flex items-start gap-3">
                  <Sparkles className="mt-0.5 h-4 w-4 shrink-0 text-accent-soft" />
                  <p>
                    <span className="text-muted-foreground">role:</span>{" "}
                    <span className="text-foreground">AI &amp; ML Developer</span>
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-accent-soft" />
                  <p>
                    <span className="text-muted-foreground">location:</span>{" "}
                    <span className="text-foreground">{profile.location}</span>
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <GraduationCap className="mt-0.5 h-4 w-4 shrink-0 text-accent-soft" />
                  <p>
                    <span className="text-muted-foreground">education:</span>{" "}
                    <span className="text-foreground">B.Sc. Artificial Intelligence &amp; Machine Learning</span>
                    <span className="block pl-0 text-muted-foreground">
                      Shri Nehru Maha Vidyalaya College of Arts and Science · 2028
                    </span>
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <span className="mt-0.5 text-accent-soft">λ</span>
                  <p>
                    <span className="text-muted-foreground">focus:</span>{" "}
                    <span className="text-foreground">RAG · LLMs · Vector Search</span>
                  </p>
                </div>
                <div className="border-t border-border pt-4">
                  <p className="text-muted-foreground">
                    <span className="text-accent-soft">&gt;</span> status:{" "}
                    <span className="text-foreground">open to internships &amp; collaborations</span>
                    <span className="ml-1 inline-block h-3.5 w-[7px] animate-pulse bg-accent-soft align-middle" />
                  </p>
                </div>
              </div>
            </HighlightCard>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
