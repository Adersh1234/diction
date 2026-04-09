import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Ve,Your cursor reads your mind",
  description:
    "Speak and Ve types,in any app, any window, instantly. Free forever.",
  icons: {
    icon: "https://us.images.ve.ai/public/dashboard/image.png",
    apple: "https://us.images.ve.ai/public/dashboard/image.png",
  },
  openGraph: {
    title: "Ve,Your cursor reads your mind",
    description:
      "Speak and Ve types,in any app, any window, instantly. Free forever.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} antialiased`}>
      <body className="min-h-dvh flex flex-col">{children}</body>
    </html>
  );
}
