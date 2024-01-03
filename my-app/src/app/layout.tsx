import type { Metadata } from "next";
import { Mooli } from "next/font/google";

import "./globals.css";
import NavBar from "@/components/navbar";

const mooli = Mooli({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "B.G DREW BUILDERS",
  description: "Your engineer for different buildings all over Nigeria",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/logo.png" />
      </head>
      <body
        className={`${mooli.className} bg-gray-950 min-h-screen flex flex-col`}
      >
        <NavBar />
        {children}
      </body>
    </html>
  );
}
