export function ShieldIcon({ className = "w-8 h-8" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 32 32" fill="none" aria-hidden="true">
      <path
        d="M16 4L6 9v7c0 6.075 4.25 11.425 10 13 5.75-1.575 10-6.925 10-13V9L16 4z"
        stroke="#00C8FF"
        strokeWidth="1.5"
        fill="none"
      />
      <path
        d="M12 16l3 3 5-6"
        stroke="#00C8FF"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function LockIcon({ className = "w-8 h-8" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 32 32" fill="none" aria-hidden="true">
      <rect x="8" y="14" width="16" height="12" rx="2" stroke="#00C8FF" strokeWidth="1.5" />
      <path
        d="M12 14v-4a4 4 0 118 0v4"
        stroke="#00C8FF"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <circle cx="16" cy="20" r="1.5" fill="#00C8FF" />
    </svg>
  );
}

export function NoCloudIcon({ className = "w-8 h-8" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 32 32" fill="none" aria-hidden="true">
      <path
        d="M8 22h14a5 5 0 002-9.584A7 7 0 0010.07 14 4 4 0 008 22z"
        stroke="#00C8FF"
        strokeWidth="1.5"
        fill="none"
      />
      <path
        d="M6 6l20 20"
        stroke="#00C8FF"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );
}

export const privacyIconMap = {
  shield: ShieldIcon,
  lock: LockIcon,
  noCloud: NoCloudIcon,
} as const;
