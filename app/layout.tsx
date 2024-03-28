import { GeistSans } from "geist/font/sans";
import "./globals.css";

const defaultUrl = process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : "http://localhost:3000";

export const metadata = {
  metadataBase: new URL(defaultUrl),
  title: "Chug - The Ultimate Party Challenge Game",
  description: "Dive into 'Chug', a thrilling party game where every choice might lead you to cheers or challenges. Perfect for livening up gatherings, 'Chug' tests your luck and bravery. Ready for an unforgettable party experience? Play 'Chug' now.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={GeistSans.className}>
      <body className="text-slate-50">
      <div className="bg-gradient-to-r from-red-500 to-orange-500 absolute inset-0"> {/* This div helps for the height of mobile devices */}
        <main className="h-full flex flex-col justify-center items-center">
          {children}
        </main>
      </div>
      </body>
    </html>
  );
}
