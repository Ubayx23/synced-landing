import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import { TallyScript } from "@/components/tally/TallyScript";
import { WaitlistListener } from "@/components/tally/WaitlistListener";
import { CookieConsent } from "@/components/CookieConsent";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Synced. Plan the week. Send the project.",
  description:
    "A training planner built for climbers. Weekly schedules that balance climbing, strength, and rest so you show up fresh and send harder. iOS, launching soon.",
  metadataBase: new URL("https://synced.page"),
  openGraph: {
    title: "Synced. Plan the week. Send the project.",
    description:
      "A training planner for climbers. Weekly schedules that balance climbing, strength, and rest so you send harder.",
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
        <main>{children}</main>
        <TallyScript />
        <WaitlistListener />
        <CookieConsent />
      </body>
    </html>
  );
}
