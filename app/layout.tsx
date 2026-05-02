import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Sidebar from "./Sidebar";
import "./globals.css";



const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Himanshu Ranjan | Backend Engineer",
  description:
    "Backend Engineer specializing in Java, distributed systems, and scalable APIs",

  openGraph: {
    title: "Himanshu Ranjan",
    description:
      "Backend Engineer | Java | Distributed Systems",
    url: "https://himanshuranjan.work",
    siteName: "Himanshu Ranjan",
    images: [
      {
        url: "/og-image.png", // IMPORTANT
        width: 1200,
        height: 630,
      },
    ],
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Himanshu Ranjan",
    description: "Backend Engineer | System Design",
    images: [
  {
    url: "/og-image.png",
    width: 1200,
    height: 630,
  },
],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="bg-gray-900 text-gray-100">

        {/* Sidebar overlay */}
        <Sidebar />

        {/* Full width content */}
        <div>{children}</div>

      </body>
    </html>
  );
}