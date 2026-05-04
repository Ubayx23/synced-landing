import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import { TallyScript } from "@/components/tally/TallyScript";
import { WaitlistListener } from "@/components/tally/WaitlistListener";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Synced. Train, fuel, decode the connection.",
  description:
    "The first recovery tracker that links what you ate before a workout to how you felt and performed during it. iOS, launching soon.",
  metadataBase: new URL("https://synced.page"),
  openGraph: {
    title: "Synced. Train, fuel, decode the connection.",
    description:
      "Recovery and readiness for serious lifters, with a fuel x performance loop nobody else tracks.",
    url: "https://synced.page",
    siteName: "Synced",
    type: "website",
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: "#0A0A0A",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`dark ${inter.variable}`}>
      <body className="font-sans antialiased">
        <div
          aria-hidden
          className="pointer-events-none fixed inset-0 -z-10 syn-vignette"
        />
        <div
          aria-hidden
          className="pointer-events-none fixed inset-0 -z-10 syn-ambient-halo"
        />
        <main>{children}</main>
        <TallyScript />
        <WaitlistListener />
      </body>
    </html>
  );
}
