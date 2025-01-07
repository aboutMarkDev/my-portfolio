import type { Metadata } from "next";
import { Domine, Inter, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const domine = Domine({
  variable: "--font-domine",
  subsets: ["latin"],
});

const inter = Inter({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Mark Laurence Guyada",
  description: "Mark Laurence Guyada's Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} ${domine.variable} antialiased custom-scrollbar`}
      >
        {children}
      </body>
    </html>
  );
}
