import type { Metadata } from "next";
import "./globals.css";

import Navbar from "@/app/components/Header";
import Footer from "@/app/components/Footer";

export const metadata: Metadata = {
  title: "starsforlearning",
  description:
    "A community for students to learn, create, and share knowledge.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-white text-gray-900">
        <Navbar />

        <main>{children}</main>

        <Footer />
      </body>
    </html>
  );
}