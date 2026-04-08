import { VeLogo } from "@/components/icons/VeLogo";

const links = [
  { label: "Privacy", href: "/privacy" },
  { label: "Terms", href: "/terms" },
  { label: "Twitter / X", href: "https://x.com/ve_ai" },
];

export function Footer() {
  return (
    <footer className="bg-dark border-t border-dark-border px-5 py-8">
      <div className="mx-auto max-w-6xl flex flex-col md:flex-row items-center justify-between gap-4">
        <a href="/" aria-label="Ve home">
          <VeLogo className="h-6" variant="white" />
        </a>

        <nav aria-label="Footer" className="flex items-center gap-6">
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-sm text-text-muted hover:text-text-on-dark transition-colors"
              {...(link.href.startsWith("http")
                ? { target: "_blank", rel: "noopener noreferrer" }
                : {})}
            >
              {link.label}
            </a>
          ))}
        </nav>

        <p className="text-xs text-text-muted">
          &copy; {new Date().getFullYear()} Ve. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
