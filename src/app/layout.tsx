import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/hooks/useTheme";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { SITE_METADATA } from "@/lib/constants";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_METADATA.url),
  title: {
    default: "Siba Prasad Behera | Full Stack & Mobile App Developer",
    template: "%s | Siba Prasad Behera",
  },
  description: SITE_METADATA.description,
  keywords: [
    "Siba Prasad Behera",
    "Full Stack Developer",
    "Mobile App Developer",
    "Next.js Developer",
    "React Native",
    "Node.js",
    "TypeScript",
    "MySQL",
    "MongoDB",
    "Bhubaneswar",
    "India",
  ],
  authors: [{ name: SITE_METADATA.name, url: SITE_METADATA.url }],
  creator: SITE_METADATA.name,
  openGraph: {
    type: "website",
    locale: "en_US",
    url: SITE_METADATA.url,
    title: "Siba Prasad Behera | Full Stack & Mobile App Developer",
    description: SITE_METADATA.description,
    siteName: SITE_METADATA.name,
  },
  twitter: {
    card: "summary_large_image",
    title: "Siba Prasad Behera | Full Stack & Mobile App Developer",
    description: SITE_METADATA.description,
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  themeColor: "#080c14",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} dark`}
      suppressHydrationWarning
    >
      <body className="font-sans antialiased bg-[#080c14] text-neutral-100 min-h-screen flex flex-col selection:bg-emerald-500 selection:text-neutral-950">
        <ThemeProvider>
          <Navbar />
          <main className="flex-1">
            {children}
          </main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
