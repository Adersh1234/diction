import Image from "next/image";

export function VeLogo({
  className = "h-8",
  variant = "blue",
}: {
  className?: string;
  variant?: "blue" | "dark" | "white";
}) {
  // The logo is natively blue — use CSS filter for dark/white variants
  const filterClass =
    variant === "dark"
      ? "brightness-0"
      : variant === "white"
        ? "brightness-0 invert"
        : "";

  return (
    <Image
      src="/ve-logo.png"
      alt="Ve"
      width={120}
      height={120}
      className={`${className} w-auto object-contain ${filterClass}`}
      priority
    />
  );
}
