import type { Metadata } from "next";
import { Inter, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BackgroundShader from "@/components/BackgroundShader";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const plusJakarta = Plus_Jakarta_Sans({
  variable: "--font-headings",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://shsmaminnovations.com"),
  title: "SHSMAM Innovations | Building Intelligent Digital Solutions",
  description: "We help startups, enterprises, and businesses transform ideas into powerful digital products using AI, cloud technologies, and custom software.",
  keywords: ["AI solutions", "software architecture", "digital transformation", "SaaS development", "cloud computing", "machine learning"],
  authors: [{ name: "SHSMAM Innovations" }],
  openGraph: {
    title: "SHSMAM Innovations | Building Intelligent Digital Solutions",
    description: "Transform ideas into powerful digital products with our AI, cloud, and enterprise software engineering solutions.",
    url: "https://shsmaminnovations.com",
    siteName: "SHSMAM Innovations",
    images: [
      {
        url: "/images/hero-tech.png",
        width: 1200,
        height: 630,
        alt: "SHSMAM Innovations Technology Platform",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "SHSMAM Innovations | Building Intelligent Digital Solutions",
    description: "Transform ideas into powerful digital products with our AI, cloud, and enterprise software engineering solutions.",
    images: ["/images/hero-tech.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${plusJakarta.variable} scroll-smooth`}>
      <body className="min-h-screen flex flex-col antialiased text-on-surface dark:text-inverse-on-surface dark:bg-on-surface bg-background">
        <BackgroundShader />
        <Header />
        <main className="flex-grow pt-[72px]">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
