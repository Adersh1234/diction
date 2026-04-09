"use client";

import { m, LazyMotion, domAnimation, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { FadeInView } from "@/components/motion/FadeInView";
import { copy } from "@/config/copy";

function StepCard({
  step,
}: {
  step: { number: number; title: string; body: string };
}) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center center"],
  });
  const opacity = useTransform(scrollYProgress, [0, 1], [0.3, 1]);
  const y = useTransform(scrollYProgress, [0, 1], [40, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [0.95, 1]);

  return (
    <m.div
      ref={ref}
      style={{ opacity, y, scale }}
      className="group relative flex items-start gap-6 md:gap-8 p-6 md:p-8 rounded-2xl bg-white/[0.03] border border-white/[0.05] transition-all duration-300 hover:bg-white hover:border-white/20 hover:shadow-2xl hover:shadow-cyan/5"
    >
      {/* Number circle */}
      <div className="shrink-0 flex items-center justify-center w-14 h-14 rounded-full bg-cyan/10 border border-cyan/20 group-hover:bg-cyan group-hover:border-cyan transition-colors duration-300">
        <span className="text-base font-bold text-cyan group-hover:text-white transition-colors duration-300">
          {String(step.number).padStart(2, "0")}
        </span>
      </div>

      {/* Content */}
      <div className="pt-1">
        <h3 className="text-xl md:text-2xl font-bold text-white group-hover:text-dark transition-colors duration-300">{step.title}</h3>
        <p className="mt-2 text-white/40 group-hover:text-dark/50 leading-relaxed max-w-lg transition-colors duration-300">{step.body}</p>
      </div>
    </m.div>
  );
}

export function HowItWorks() {
  return (
    <LazyMotion features={domAnimation}>
      <section
        id="how-it-works"
        aria-labelledby="how-it-works-heading"
        className="relative bg-[#060e0e] text-white px-5 py-24 md:py-32 lg:py-40 overflow-hidden"
      >
        {/* Top border accent */}
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan/30 to-transparent" />

        {/* Subtle background glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-cyan/[0.03] rounded-full blur-[150px] pointer-events-none" />

        <div className="relative mx-auto max-w-3xl">
          <FadeInView>
            <p className="text-sm uppercase tracking-wider text-cyan font-medium mb-2">
              {copy.howItWorks.eyebrow}
            </p>
            <h2 id="how-it-works-heading" className="text-h2 text-white mb-12">
              Up in 2 minutes.
            </h2>
          </FadeInView>

          <div className="flex flex-col gap-5">
            {copy.howItWorks.steps.map((step) => (
              <StepCard key={step.number} step={step} />
            ))}
          </div>
        </div>

        {/* Bottom border accent */}
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan/30 to-transparent" />
      </section>
    </LazyMotion>
  );
}
