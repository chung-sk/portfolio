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
  title: "Rytix.tech",
  description:
    "Portfolio of Chung Seong Kah - Global Technology Senior Cloud Engineer at Deloitte. Specializing in Cloud Operations, AIOps, Infrastructure Automation, Vibe Coder, and Automation using n8n.",
  keywords: [
    "cloud engineer",
    "aws",
    "azure",
    "gcp",
    "aiops",
    "devops",
    "infrastructure automation",
    "vibe coder",
    "n8n",
    "deloitte",
  ],
  authors: [{ name: "Chung Seong Kah" }],
  openGraph: {
    title: "Rytix.tech",
    description:
      "Portfolio of Chung Seong Kah - Global Technology Senior Cloud Engineer at Deloitte. Specializing in Cloud Operations, AIOps, and Infrastructure Automation.",
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
