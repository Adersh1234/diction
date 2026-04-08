"use client";

import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { FadeInView } from "@/components/motion/FadeInView";
import { Accordion } from "@/components/ui/Accordion";
import { faqItems } from "@/config/faq";

export function FAQ() {
  return (
    <SectionWrapper bg="dark" id="faq">
      <FadeInView>
        <h2 id="faq-heading" className="text-h2 text-text-on-dark text-center">
          Common questions
        </h2>
      </FadeInView>

      <FadeInView delay={0.15}>
        <div className="mt-10">
          <Accordion items={faqItems} />
        </div>
      </FadeInView>
    </SectionWrapper>
  );
}
