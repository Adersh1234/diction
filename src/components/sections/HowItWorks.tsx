"use client";

import { m } from "framer-motion";
import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { FadeInView } from "@/components/motion/FadeInView";
import {
  StaggerChildren,
  staggerItem,
} from "@/components/motion/StaggerChildren";
import { copy } from "@/config/copy";

const stepIcons = [
  // Download icon
  <svg key="dl" width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <path d="M12 3v12m0 0l-4-4m4 4l4-4M4 17v2a2 2 0 002 2h12a2 2 0 002-2v-2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>,
  // Keyboard shortcut icon
  <svg key="kb" width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <rect x="2" y="6" width="20" height="12" rx="2" stroke="currentColor" strokeWidth="1.5" />
    <path d="M8 12h8M12 10v4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
  </svg>,
  // Mic icon
  <svg key="mic" width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <rect x="9" y="2" width="6" height="11" rx="3" stroke="currentColor" strokeWidth="1.5" />
    <path d="M5 10a7 7 0 0014 0M12 17v4m-3 0h6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
  </svg>,
];

export function HowItWorks() {
  return (
    <SectionWrapper bg="chartreuse" id="how-it-works">
      <FadeInView>
        <p className="text-sm uppercase tracking-wider text-dark/60 font-medium">
          {copy.howItWorks.eyebrow}
        </p>
      </FadeInView>

      <FadeInView delay={0.1}>
        <h2 id="how-it-works-heading" className="text-h2 mt-4">
          {copy.howItWorks.h2}
        </h2>
      </FadeInView>

      <StaggerChildren
        className="mt-12 grid gap-8 md:grid-cols-3"
        stagger={0.15}
      >
        {copy.howItWorks.steps.map((step, i) => (
          <m.div key={step.number} variants={staggerItem} className="flex flex-col">
            <div className="flex items-center gap-3 mb-4">
              <span className="flex items-center justify-center w-10 h-10 rounded-full bg-dark text-chartreuse font-bold text-lg">
                {step.number}
              </span>
              <span className="text-dark/50">{stepIcons[i]}</span>
            </div>
            <h3 className="text-xl font-semibold">{step.title}</h3>
            <p className="mt-2 text-dark/60 leading-relaxed">{step.body}</p>
          </m.div>
        ))}
      </StaggerChildren>
    </SectionWrapper>
  );
}
