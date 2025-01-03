import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Footer } from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Google clone",
  description: "Google clone create by NextJs 15",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <link rel="icon" href="/favicon.svg" />
      <body className={`${geistSans.variable} ${geistMono.variable} relative min-h-screen`}>
        {children}
        <Footer />
      </body>
    </html>
  );
}
