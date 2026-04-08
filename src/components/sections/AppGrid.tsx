"use client";

import { FadeInView } from "@/components/motion/FadeInView";
import { copy } from "@/config/copy";

/* ─── App tile — macOS dock style ─── */
function Tile({ children, bg }: { children: React.ReactNode; bg: string }) {
  return (
    <div className="shrink-0 w-[64px] h-[64px] md:w-[80px] md:h-[80px] rounded-[18px] md:rounded-[22px] shadow-xl flex items-center justify-center" style={{ background: bg }}>
      {children}
    </div>
  );
}

/* Gmail */
const Gmail = () => (
  <Tile bg="linear-gradient(145deg, #ffffff, #f0f0f0)">
    <svg width="34" height="34" viewBox="0 0 32 32" fill="none">
      <path d="M4 8h24v16H4z" fill="#F6F6F6"/><path d="M28 8L16 18 4 8" fill="none" stroke="#EA4335" strokeWidth="2"/><path d="M4 8v16" stroke="#4285F4" strokeWidth="2"/><path d="M28 8v16" stroke="#34A853" strokeWidth="2"/><path d="M4 24l8-8" stroke="#FBBC05" strokeWidth="2"/><path d="M28 24l-8-8" stroke="#34A853" strokeWidth="2"/>
    </svg>
  </Tile>
);

/* Slack */
const Slack = () => (
  <Tile bg="linear-gradient(145deg, #4A154B, #3a1040)">
    <svg width="30" height="30" viewBox="0 0 28 28" fill="none">
      <path d="M10.5 3a2 2 0 100 4h2V5a2 2 0 00-2-2M5 10.5a2 2 0 104 0v-2H7a2 2 0 00-2 2" fill="#E01E5A"/><path d="M17.5 3a2 2 0 110 4h-2V5a2 2 0 012-2M23 10.5a2 2 0 10-4 0v-2h2a2 2 0 012 2" fill="#36C5F0"/><path d="M17.5 25a2 2 0 100-4h-2v2a2 2 0 002 2M23 17.5a2 2 0 10-4 0v2h2a2 2 0 012-2" fill="#2EB67D"/><path d="M10.5 25a2 2 0 110-4h2v2a2 2 0 01-2 2M5 17.5a2 2 0 114 0v2H7a2 2 0 01-2-2" fill="#ECB22E"/>
    </svg>
  </Tile>
);

/* Notion */
const Notion = () => (
  <Tile bg="linear-gradient(145deg, #ffffff, #f5f5f0)">
    <svg width="28" height="28" viewBox="0 0 26 26" fill="none">
      <path d="M5.5 4.5l13.2-.8c.8-.1 1 0 1 .5l.1 1.4c.1.4-.1.6-.5.7L7.8 7.8c-.5.1-.7 0-.7-.4V5.2c0-.4.2-.7.4-.7z" fill="#000"/><path d="M7 9v12c0 .6.3.8.9.8l10.2-.6c.6 0 .9-.3.9-.9V9.3c0-.4-.2-.6-.5-.5l-11 .7c-.4 0-.5.2-.5.5z" fill="#000"/><path d="M10 12h6M10 15h4" stroke="#fff" strokeWidth="1.2" strokeLinecap="round"/>
    </svg>
  </Tile>
);

/* WhatsApp */
const WhatsApp = () => (
  <Tile bg="linear-gradient(145deg, #25D366, #1da851)">
    <svg width="30" height="30" viewBox="0 0 26 26" fill="none">
      <path d="M13 3a10 10 0 00-8.5 15.2L3 23l4.9-1.3A10 10 0 1013 3z" fill="none" stroke="#fff" strokeWidth="1.5"/><path d="M9.5 8.5c.3-.5.6-.5.9-.5s.6 0 .8.5l1 2.3c.1.3 0 .6-.2.8l-.6.7c.5 1 1.3 1.8 2.3 2.3l.7-.6c.2-.2.5-.3.8-.2l2.3 1c.3.2.5.4.5.9 0 .5-.5 1.5-1.5 1.5S10 15 9 11.5s-.5-2.5.5-3z" fill="#fff"/>
    </svg>
  </Tile>
);

/* Google Docs */
const GDocs = () => (
  <Tile bg="linear-gradient(145deg, #ffffff, #f0f4ff)">
    <svg width="24" height="30" viewBox="0 0 22 28" fill="none">
      <path d="M2 3a2 2 0 012-2h10l6 6v18a2 2 0 01-2 2H4a2 2 0 01-2-2V3z" fill="#4285F4"/><path d="M14 1v6h6" fill="#A1C2FA"/><path d="M6 14h10M6 17h7M6 20h8" stroke="#fff" strokeWidth="1" strokeLinecap="round"/>
    </svg>
  </Tile>
);

/* Twitter/X */
const TwitterX = () => (
  <Tile bg="linear-gradient(145deg, #0f0f0f, #1a1a1a)">
    <svg width="26" height="26" viewBox="0 0 24 24" fill="none">
      <path d="M4 4l6.5 8L4 20h2l5.5-6.8L16 20h5l-7-8.5L20 4h-2l-5 6.2L9 4H4z" fill="#fff"/>
    </svg>
  </Tile>
);

/* Discord */
const Discord = () => (
  <Tile bg="linear-gradient(145deg, #5865F2, #4752c4)">
    <svg width="30" height="30" viewBox="0 0 28 28" fill="none">
      <path d="M10.7 11.5a1.5 1.5 0 100 3 1.5 1.5 0 000-3zM17.3 11.5a1.5 1.5 0 100 3 1.5 1.5 0 000-3z" fill="#fff"/><path d="M20.3 7.2S18.7 6 16.8 5.8l-.2.5a13 13 0 00-5.2 0l-.2-.5C9.3 6 7.7 7.2 7.7 7.2A22 22 0 005 19.4c2.1 1.6 4.2 2.6 4.2 2.6l.5-.7a10 10 0 01-2.4-1.2l.6-.5a12 12 0 0012.2 0l.6.5a10 10 0 01-2.4 1.2l.5.7s2.1-1 4.2-2.6A22 22 0 0020.3 7.2z" fill="#fff"/>
    </svg>
  </Tile>
);

/* Linear */
const Linear = () => (
  <Tile bg="linear-gradient(145deg, #5E6AD2, #4b55b5)">
    <svg width="28" height="28" viewBox="0 0 26 26" fill="none">
      <path d="M3.5 15.8l6.7 6.7a10 10 0 01-6.7-6.7z" fill="#fff"/><path d="M3 13a10 10 0 0110-10l.5 1L4 13.5 3 13z" fill="#fff"/><path d="M5.7 19.7L19.7 5.7A10 10 0 015.7 19.7z" fill="#fff" opacity="0.8"/>
    </svg>
  </Tile>
);

/* Telegram */
const Telegram = () => (
  <Tile bg="linear-gradient(145deg, #2AABEE, #229ED9)">
    <svg width="28" height="28" viewBox="0 0 26 26" fill="none">
      <path d="M3 12.5l19.5-7.5-4 19-7-5.5-4.5 3.5 1.5-5L3 12.5z" fill="#fff"/><path d="M22.5 5L8.5 17l-1.5 5 1.5-5L22.5 5z" fill="#D2E5F1"/><path d="M8.5 17l2 6.5 4.5-3.5" fill="#B5CFE4"/>
    </svg>
  </Tile>
);

/* Figma */
const Figma = () => (
  <Tile bg="linear-gradient(145deg, #1e1e1e, #2d2d2d)">
    <svg width="22" height="30" viewBox="0 0 20 28" fill="none">
      <circle cx="6" cy="6" r="4" fill="#F24E1E"/><circle cx="14" cy="6" r="4" fill="#FF7262"/><circle cx="6" cy="14" r="4" fill="#A259FF"/><circle cx="14" cy="14" r="4" fill="#1ABCFE"/><circle cx="6" cy="22" r="4" fill="#0ACF83"/>
    </svg>
  </Tile>
);

/* Row compositions — 5 per row, different mixes */
const Row1 = () => (<><Gmail /><Slack /><Notion /><WhatsApp /><Figma /></>);
const Row2 = () => (<><GDocs /><TwitterX /><Discord /><Linear /><Telegram /></>);

/* ─── Marquee row ─── */
function MarqueeRow({
  children,
  direction,
  speed,
}: {
  children: React.ReactNode;
  direction: "left" | "right";
  speed: number;
}) {
  const animationName = direction === "left" ? "marquee-left" : "marquee-right";
  return (
    <div className="relative overflow-hidden py-3">
      <div
        className="marquee-row flex items-center gap-6 md:gap-8"
        style={{
          animation: `${animationName} ${speed}s linear infinite`,
          width: "max-content",
        }}
      >
        {children}{children}{children}{children}{children}{children}
      </div>
    </div>
  );
}

export function AppGrid() {
  return (
    <section
      id="apps"
      aria-labelledby="apps-heading"
      className="relative bg-dark text-text-on-dark py-20 md:py-28 lg:py-36 overflow-hidden"
    >
      {/* 2 marquee rows — opposing directions */}
      <div className="relative space-y-6 md:space-y-8" aria-hidden="true">
        <MarqueeRow direction="left" speed={25}>
          <Row1 />
        </MarqueeRow>
        <MarqueeRow direction="right" speed={28}>
          <Row2 />
        </MarqueeRow>
      </div>

      {/* Edge fades */}
      <div className="absolute inset-y-0 left-0 w-16 md:w-32 lg:w-48 bg-gradient-to-r from-dark to-transparent pointer-events-none z-10" />
      <div className="absolute inset-y-0 right-0 w-16 md:w-32 lg:w-48 bg-gradient-to-l from-dark to-transparent pointer-events-none z-10" />

      {/* Heading */}
      <div className="relative z-20 mt-14 md:mt-20 text-center px-5 max-w-3xl mx-auto">
        <FadeInView>
          <h2
            id="apps-heading"
            className="text-h2 bg-gradient-to-b from-white to-white/60 bg-clip-text text-transparent"
          >
            {copy.appGrid.h2}
          </h2>
        </FadeInView>
        <FadeInView delay={0.1}>
          <p className="mt-5 text-lg text-text-muted max-w-xl mx-auto leading-relaxed">
            {copy.appGrid.body}
          </p>
        </FadeInView>
        <FadeInView delay={0.2}>
          <p className="mt-3 text-cyan font-semibold text-lg">
            {copy.appGrid.accent}
          </p>
        </FadeInView>
      </div>
    </section>
  );
}
