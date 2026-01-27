import type { Metadata } from "next";
import { JetBrains_Mono, Inter } from "next/font/google";
import "./globals.css";

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Your Name | Software Developer",
  description:
    "Portfolio of a software developer showcasing projects, skills, and experience in modern web development.",
  keywords: [
    "software developer",
    "web development",
    "portfolio",
    "Next.js",
    "React",
    "TypeScript",
  ],
  authors: [{ name: "Your Name" }],
  openGraph: {
    title: "Your Name | Software Developer",
    description:
      "Portfolio of a software developer showcasing projects, skills, and experience in modern web development.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${jetbrainsMono.variable} ${inter.variable} font-sans antialiased crt-effect scan-line noise-texture`}
      >
        {children}
      </body>
    </html>
  );
}
