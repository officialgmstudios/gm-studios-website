import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "GM Studios — A Home for Youth, Creators & Communities",
  description:
    "We empower youth, creators, and community leaders through real-world projects, mentorship, collaboration, and opportunities. Join the GM Studios family and build the future with us.",
  keywords: [
    "GM Studios",
    "youth empowerment",
    "creator communities",
    "developer communities",
    "mentorship",
    "real-world projects",
    "collaboration",
    "innovation",
    "startup ecosystem",
    "community growth"
  ],
  openGraph: {
    title: "GM Studios — A Home for Youth, Creators & Communities",
    description:
      "We are building a space where youth and communities learn by doing — supported by guidance, teamwork, and real opportunities. Be part of the GM Studios family.",
    url: "https://gmstudios.vercel.app",
    siteName: "GM Studios",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "GM Studios — Empowering Youth & Communities"
      }
    ],
    locale: "en_US",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "GM Studios — A Home for Youth, Creators & Communities",
    description:
      "Join a circle of communities that grow together. We help youth and community leaders build real projects, unlock opportunities, and create impact.",
    images: ["/og-image.png"]
  }
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <div className="main-content-wrapper">
          {children}
        </div>
      </body>
    </html>
  );
}
