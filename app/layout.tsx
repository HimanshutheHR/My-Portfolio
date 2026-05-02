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

export const metadata: Metadata = {
  title: "Himanshu Ranjan | Backend Engineer",
  description:
    "Portfolio of Himanshu Ranjan - Backend Engineer, Java, System Design",
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