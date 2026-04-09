"use client";

import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { ChipRow } from "@/components/ui/Chip";
import { FadeInView } from "@/components/motion/FadeInView";
import { copy } from "@/config/copy";
import {
  GmailIcon,
  SlackIcon,
  NotionIcon,
  GDocsIcon,
} from "@/components/icons/AppIcons";

export function Hero() {
  return (
    <section
      id="hero"
      aria-labelledby="hero-heading"
      className="relative bg-chartreuse text-dark overflow-hidden px-5 min-h-dvh flex flex-col items-center justify-center"
    >
      {/* Floating app icons — decorative */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
        <div className="float-1 absolute top-[18%] left-[8%] opacity-20 hidden md:block">
          <GmailIcon className="w-12 h-12" />
        </div>
        <div className="float-2 absolute top-[25%] right-[10%] opacity-20 hidden md:block">
          <SlackIcon className="w-12 h-12" />
        </div>
        <div className="float-3 absolute bottom-[22%] left-[15%] opacity-15 hidden lg:block">
          <NotionIcon className="w-10 h-10" />
        </div>
        <div className="float-1 absolute bottom-[18%] right-[18%] opacity-15 hidden lg:block">
          <GDocsIcon className="w-10 h-10" />
        </div>
      </div>

      <div className="relative mx-auto max-w-4xl text-center">
        <FadeInView y={-8}>
          <Badge>{copy.hero.badge}</Badge>
        </FadeInView>

        <FadeInView delay={0.1}>
          <h1 id="hero-heading" className="text-hero mt-8">
            {copy.hero.h1Line1}
            <br />
            {copy.hero.h1Line2}
          </h1>
        </FadeInView>

        <FadeInView delay={0.25}>
          <p className="text-hero text-cyan mt-2">{copy.hero.h1Accent}</p>
        </FadeInView>

        <FadeInView delay={0.4}>
          <p className="mt-6 text-lg md:text-xl text-dark/70 max-w-2xl mx-auto leading-relaxed">
            {copy.hero.subhead}
          </p>
        </FadeInView>

        <FadeInView delay={0.5}>
          <div className="mt-8 flex flex-col items-center gap-4">
            <Button variant="primary" href={copy.hero.ctaLink}>
              {copy.hero.cta}
            </Button>
            <ChipRow items={copy.hero.trustChips} variant="dark" />
          </div>
        </FadeInView>

        <FadeInView delay={0.6}>
          <p className="mt-6 flex items-center justify-center gap-2 text-sm text-dark/60">
            <svg
              width="14"
              height="14"
              viewBox="0 0 14 14"
              fill="none"
              aria-hidden="true"
            >
              <rect
                x="3"
                y="6"
                width="8"
                height="6"
                rx="1"
                stroke="currentColor"
                strokeWidth="1.2"
              />
              <path
                d="M5 6V4.5a2 2 0 114 0V6"
                stroke="currentColor"
                strokeWidth="1.2"
                strokeLinecap="round"
              />
            </svg>
            {copy.hero.privacyLine}
          </p>
        </FadeInView>
      </div>
    </section>
  );
}
