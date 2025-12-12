import type React from "react";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
// REMINDER: Use '/react' instead of '/next' to avoid the "module not found" error
import { Analytics } from "@vercel/analytics/react";
import "./globals.css";

const _geist = Geist({ subsets: ["latin"] });
const _geistMono = Geist_Mono({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "zacst",
  description: "Professional Portfolio",
  generator: "v0.app",
  icons: {
    icon: [{ url: "/logo/logo.png", type: "image/png" }],

    apple: [{ url: "/logo/logo.png" }],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`font-sans antialiased bg-slate-900`}>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
