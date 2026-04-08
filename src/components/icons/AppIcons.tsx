export function GmailIcon({ className = "w-8 h-8" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 32 32" fill="none" aria-hidden="true">
      <rect width="32" height="32" rx="6" fill="#fff" />
      <path d="M6 10l10 7 10-7" stroke="#EA4335" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <rect x="5" y="8" width="22" height="16" rx="2" stroke="#4285F4" strokeWidth="1.5" fill="none" />
      <path d="M5 10l11 7.5L27 10" stroke="#EA4335" strokeWidth="1.5" fill="none" />
    </svg>
  );
}

export function SlackIcon({ className = "w-8 h-8" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 32 32" fill="none" aria-hidden="true">
      <rect width="32" height="32" rx="6" fill="#fff" />
      <path d="M11 19a2 2 0 11-4 0 2 2 0 014 0zm0 0v-6a2 2 0 114 0v6" stroke="#E01E5A" strokeWidth="1.5" />
      <path d="M13 11a2 2 0 110-4 2 2 0 010 4zm0 0h6a2 2 0 110 4h-6" stroke="#36C5F0" strokeWidth="1.5" />
      <path d="M21 13a2 2 0 114 0 2 2 0 01-4 0zm0 0v6a2 2 0 11-4 0v-6" stroke="#2EB67D" strokeWidth="1.5" />
      <path d="M19 21a2 2 0 110 4 2 2 0 010-4zm0 0h-6a2 2 0 110-4h6" stroke="#ECB22E" strokeWidth="1.5" />
    </svg>
  );
}

export function NotionIcon({ className = "w-8 h-8" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 32 32" fill="none" aria-hidden="true">
      <rect width="32" height="32" rx="6" fill="#fff" />
      <path d="M9 7h10l4 4v14a1 1 0 01-1 1H9a1 1 0 01-1-1V8a1 1 0 011-1z" stroke="#000" strokeWidth="1.5" />
      <path d="M12 13h8M12 17h6M12 21h4" stroke="#000" strokeWidth="1.2" strokeLinecap="round" />
    </svg>
  );
}

export function TwitterIcon({ className = "w-8 h-8" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 32 32" fill="none" aria-hidden="true">
      <rect width="32" height="32" rx="6" fill="#fff" />
      <path d="M10 9l12 14M22 9L10 23" stroke="#000" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

export function GDocsIcon({ className = "w-8 h-8" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 32 32" fill="none" aria-hidden="true">
      <rect width="32" height="32" rx="6" fill="#fff" />
      <path d="M10 6h8l5 5v15a1 1 0 01-1 1H10a1 1 0 01-1-1V7a1 1 0 011-1z" fill="#4285F4" />
      <path d="M18 6v5h5" fill="#A1C2FA" />
      <path d="M13 15h7M13 18h5M13 21h6" stroke="#fff" strokeWidth="1" strokeLinecap="round" />
    </svg>
  );
}

export function LinearIcon({ className = "w-8 h-8" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 32 32" fill="none" aria-hidden="true">
      <rect width="32" height="32" rx="6" fill="#fff" />
      <circle cx="16" cy="16" r="8" stroke="#5E6AD2" strokeWidth="2" />
      <path d="M12 16l3 3 5-6" stroke="#5E6AD2" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function AnyAppIcon({ className = "w-8 h-8" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 32 32" fill="none" aria-hidden="true">
      <rect width="32" height="32" rx="6" fill="#0A1A1A" />
      <circle cx="10" cy="12" r="2" fill="#00C8FF" />
      <circle cx="16" cy="12" r="2" fill="#00C8FF" />
      <circle cx="22" cy="12" r="2" fill="#00C8FF" />
      <circle cx="10" cy="20" r="2" fill="#00C8FF" opacity="0.5" />
      <circle cx="16" cy="20" r="2" fill="#00C8FF" opacity="0.5" />
      <circle cx="22" cy="20" r="2" fill="#00C8FF" opacity="0.5" />
    </svg>
  );
}

export const appIconMap: Record<string, React.FC<{ className?: string }>> = {
  gmail: GmailIcon,
  slack: SlackIcon,
  notion: NotionIcon,
  twitter: TwitterIcon,
  gdocs: GDocsIcon,
  linear: LinearIcon,
  any: AnyAppIcon,
};
