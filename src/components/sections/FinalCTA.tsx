"use client";

import { Button } from "@/components/ui/Button";
import { ChipRow } from "@/components/ui/Chip";
import { FadeInView } from "@/components/motion/FadeInView";
import { copy } from "@/config/copy";

export function FinalCTA() {
  return (
    <section
      id="download"
      aria-labelledby="download-heading"
      className="bg-chartreuse text-dark px-5 py-20 md:py-28 lg:py-32"
    >
      <div className="mx-auto max-w-3xl text-center">
        <FadeInView>
          <h2 id="download-heading" className="text-h2">
            {copy.finalCta.h2}
          </h2>
        </FadeInView>

        <FadeInView delay={0.1}>
          <p className="mt-4 text-lg text-dark/70 leading-relaxed">
            {copy.finalCta.body}
          </p>
        </FadeInView>

        <FadeInView delay={0.2}>
          <div className="mt-8 flex flex-col items-center gap-4">
            <Button variant="primary" href={copy.finalCta.ctaLink}>
              {copy.finalCta.cta}
            </Button>
            <ChipRow items={copy.finalCta.trustChips} variant="dark" />
          </div>
        </FadeInView>
      </div>
    </section>
  );
}
