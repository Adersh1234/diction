"use client";

import { m, LazyMotion, domAnimation, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { FadeInView } from "@/components/motion/FadeInView";

/* ─── Feature 1: Personal Dictionary ─── */
function DictionaryMockup() {
  const words = ["Robyn", "Viktor", "SaaS", "Caltrain", "Mackey", "Nguyen", "Leong"];
  return (
    <div className="bg-dark rounded-3xl p-6 md:p-8 shadow-2xl w-full max-w-sm">
      <div className="flex items-center justify-between mb-6">
        <h4 className="text-white font-semibold text-lg">Your Dictionary</h4>
        <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center">
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M8 3v10M3 8h10" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" /></svg>
        </div>
      </div>
      <div className="flex flex-col gap-2.5">
        {words.map((word, i) => (
          <m.div
            key={word}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.08, duration: 0.4 }}
            className="bg-cyan/20 text-white text-sm font-medium px-4 py-3 rounded-xl border border-cyan/10"
          >
            {word}
          </m.div>
        ))}
      </div>
    </div>
  );
}

/* ─── Feature 2: Snippet Library ─── */
function SnippetMockup() {
  const snippets = [
    { name: "Calendar", expanded: true, text: "You can book a 30-minute call with me calendly.com/ve-demo" },
    { name: "Hours", expanded: false, text: "" },
    { name: "Support intro", expanded: false, text: "" },
    { name: "FAQ", expanded: false, text: "" },
    { name: "Careers link", expanded: false, text: "" },
    { name: "Elevator pitch", expanded: false, text: "" },
  ];
  return (
    <div className="bg-dark rounded-3xl p-6 md:p-8 shadow-2xl w-full max-w-sm">
      <div className="flex items-center justify-between mb-6">
        <h4 className="text-white font-semibold text-lg">Your Snippets</h4>
        <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center">
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M8 3v10M3 8h10" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" /></svg>
        </div>
      </div>
      <div className="flex flex-col gap-2.5">
        {snippets.map((s, i) => (
          <m.div
            key={s.name}
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.08, duration: 0.4 }}
          >
            <div className="bg-white/[0.06] text-white text-sm font-medium px-4 py-3 rounded-xl border border-white/[0.08]">
              {s.name}
            </div>
            {s.expanded && (
              <div className="mt-1.5 flex items-start gap-2 ml-2">
                <span className="text-chartreuse text-lg mt-0.5">🎙</span>
                <div className="bg-chartreuse/20 text-chartreuse text-xs px-3 py-2 rounded-lg border border-chartreuse/20 leading-relaxed">
                  {s.text}
                </div>
              </div>
            )}
          </m.div>
        ))}
      </div>
    </div>
  );
}

/* ─── Feature 3: Tone Adjustment ─── */
function ToneMockup() {
  const apps = [
    {
      name: "Slack",
      tone: "Casual & friendly",
      imgSrc: "https://us.images.ve.ai/public/desktop-app/slack.svg",
    },
    {
      name: "Gmail",
      tone: "Professional & clear",
      imgSrc: "https://us.images.ve.ai/public/desktop-app/gmail.svg",
    },
    {
      name: "Notion",
      tone: "Structured & concise",
      imgSrc: "https://us.images.ve.ai/public/desktop-app/notion.svg",
    },
  ];
  return (
    <div className="bg-dark rounded-3xl p-6 md:p-8 shadow-2xl w-full max-w-sm">
      <div className="flex items-center gap-3 mb-6">
        <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-white/10">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
            <rect x="2" y="6" width="5" height="14" rx="1" fill="#fff" opacity="0.4" />
            <rect x="9" y="3" width="5" height="17" rx="1" fill="#fff" opacity="0.6" />
            <rect x="16" y="8" width="5" height="12" rx="1" fill="#fff" opacity="0.4" />
          </svg>
        </div>
        <span className="text-white/60 text-sm font-medium">hello</span>
      </div>
      <div className="flex flex-col gap-3">
        {apps.map((app, i) => (
          <m.div
            key={app.name}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.12, duration: 0.4 }}
            className="flex items-center gap-4 bg-white/[0.04] rounded-xl p-4 border border-white/[0.06]"
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={app.imgSrc} alt={app.name} className="w-9 h-9 rounded-lg shrink-0" />
            <div>
              <p className="text-white text-sm font-medium">{app.name}</p>
              <p className="text-white/40 text-xs">{app.tone}</p>
            </div>
          </m.div>
        ))}
      </div>
    </div>
  );
}

/* ─── Zigzag Feature Row ─── */
function FeatureRow({
  title,
  description,
  mockup,
  reverse,
}: {
  title: string;
  description: string;
  mockup: React.ReactNode;
  reverse?: boolean;
}) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center center"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [60, 0]);
  const opacity = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <m.div
      ref={ref}
      style={{ y, opacity }}
      className={`flex flex-col ${reverse ? "md:flex-row-reverse" : "md:flex-row"} items-center gap-12 md:gap-20`}
    >
      {/* Text */}
      <div className="flex-1 text-center md:text-left">
        <h3 className="text-3xl md:text-4xl font-bold text-dark leading-tight">{title}</h3>
        <p className="mt-4 text-dark/60 text-lg leading-relaxed max-w-md mx-auto md:mx-0">{description}</p>
      </div>

      {/* Mockup */}
      <div className="flex-1 flex justify-center">
        {mockup}
      </div>
    </m.div>
  );
}

export function FeatureShowcase() {
  return (
    <LazyMotion features={domAnimation}>
      <section
        id="feature-showcase"
        className="bg-chartreuse text-dark px-5 py-24 md:py-32 lg:py-40 overflow-hidden"
      >
        <div className="mx-auto max-w-6xl space-y-24 md:space-y-32">
          <FeatureRow
            title="Personal dictionary"
            description="Ve automatically learns your unique words and adds them to your personal dictionary. Names, jargon, brand terms, all recognized instantly."
            mockup={<DictionaryMockup />}
          />

          <FeatureRow
            title="Snippet library"
            description="Create voice shortcuts for the things you say over and over. From scheduling links to FAQs, just speak a cue and get the full formatted text."
            mockup={<SnippetMockup />}
            reverse
          />

          <FeatureRow
            title="Different tones for each app"
            description="Ve automatically adjusts tone based on the app you're using. Sound like you, not a robot. Casual in Slack, professional in Gmail."
            mockup={<ToneMockup />}
          />
        </div>
      </section>
    </LazyMotion>
  );
}
