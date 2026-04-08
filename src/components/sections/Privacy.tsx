"use client";

import { m } from "framer-motion";
import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { FadeInView } from "@/components/motion/FadeInView";
import {
  StaggerChildren,
  staggerItem,
} from "@/components/motion/StaggerChildren";
import { privacyIconMap } from "@/components/icons/PrivacyIcons";
import { copy } from "@/config/copy";

export function Privacy() {
  return (
    <SectionWrapper bg="dark" id="privacy">
      <FadeInView>
        <h2 id="privacy-heading" className="text-h2 text-text-on-dark">
          {copy.privacy.h2Line1}
          <br />
          <span className="text-cyan">{copy.privacy.h2Line2}</span>
        </h2>
      </FadeInView>

      <StaggerChildren
        className="mt-12 grid gap-6 md:grid-cols-3"
        stagger={0.1}
      >
        {copy.privacy.cards.map((card) => {
          const Icon = privacyIconMap[card.icon];
          return (
            <m.div
              key={card.title}
              variants={staggerItem}
              className="rounded-xl bg-dark-card border border-dark-border p-8 transition-colors hover:border-dark-border-hover group"
            >
              <div className="mb-5">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-cyan/10">
                  <Icon className="w-6 h-6" />
                </div>
              </div>
              <h3 className="text-lg font-semibold text-cyan">{card.title}</h3>
              <p className="mt-2 text-text-muted leading-relaxed text-sm">
                {card.body}
              </p>
            </m.div>
          );
        })}
      </StaggerChildren>
    </SectionWrapper>
  );
}
