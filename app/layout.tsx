import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Chug - The Ultimate Party Challenge Game",
  description: "Dive into 'Chug', a thrilling party game where every choice might lead you to cheers or challenges. Perfect for livening up gatherings, 'Chug' tests your luck and bravery. Ready for an unforgettable party experience? Play 'Chug' now.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={
        inter.className +
        " bg-gradient-to-r from-red-500 to-orange-500" +
        " "
      }>
        {children}
      </body>
    </html>
  );
}
