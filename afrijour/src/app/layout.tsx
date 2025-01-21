import type { Metadata } from "next";
// import { Inter } from "next/font/google";
import { Plus_Jakarta_Sans } from "next/font/google";
// import { Playfair_Display } from "next/font/google";
import "./globals.css";
import "./custom.css";
import "./style.css";

// const inter = Inter({ subsets: ["latin"] });
const plusJakartaSans = Plus_Jakarta_Sans({ subsets: ["latin"] });
// const playfairDisplay = Playfair_Display({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Afrika Journals",
  description: "Spotlighting African Journals",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={plusJakartaSans.className}>{children}</body>
    </html>
  );
}
