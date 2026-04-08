"use client";

import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { FadeInView } from "@/components/motion/FadeInView";
import { copy } from "@/config/copy";

function TypingDemo() {
  return (
    <div className="mt-12 grid gap-6 md:grid-cols-2">
      {/* Slow typing side */}
      <div className="rounded-xl bg-dark-card border border-dark-border p-6">
        <p className="text-xs uppercase tracking-wider text-text-muted mb-3">
          Without Ve
        </p>
        <div className="font-mono text-sm text-text-muted">
          <span className="inline-block overflow-hidden whitespace-nowrap border-r-2 border-cyan animate-[typing_4s_steps(40)_infinite]">
            {copy.problem.slowText}
          </span>
        </div>
        <p className="text-xs text-text-muted/60 mt-3">⌨️ 12 seconds of typing...</p>
      </div>

      {/* Instant side */}
      <div className="rounded-xl bg-dark-card border border-cyan/30 p-6">
        <p className="text-xs uppercase tracking-wider text-cyan mb-3">
          With Ve
        </p>
        <p className="text-sm text-text-on-dark leading-relaxed">
          {copy.problem.fastText}
        </p>
        <p className="text-xs text-cyan/60 mt-3">🎙️ Spoken in 3 seconds</p>
      </div>
    </div>
  );
}

export function ProblemAgitation() {
  return (
    <SectionWrapper bg="dark" id="why">
      <FadeInView>
        <p className="text-sm uppercase tracking-wider text-cyan font-medium">
          {copy.problem.eyebrow}
        </p>
      </FadeInView>

      <FadeInView delay={0.1}>
        <h2 id="why-heading" className="text-h2 mt-4 text-text-on-dark">
          {copy.problem.h2}
        </h2>
      </FadeInView>

      <FadeInView delay={0.2}>
        <p className="mt-4 text-lg text-text-muted max-w-2xl leading-relaxed">
          {copy.problem.body}
        </p>
      </FadeInView>

      <FadeInView delay={0.3}>
        <TypingDemo />
      </FadeInView>
    </SectionWrapper>
  );
}
