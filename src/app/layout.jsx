import { Geist, Geist_Mono } from "next/font/google";
import "@/app/globals.css";
import Navbar from "@/components/Navbar";
import { Toaster } from "sonner";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Jakaria Finance",
  description: "Grow your money with Jakaria Finance.",
  openGraph: {
    title: "Jakaria Finance",
    description: "Grow your money with Jakaria Finance.",
    url: "https://jakaria.finance",
    siteName: "Jakaria Finance",
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <Toaster position="bottom-right" richColors />
        {children}
      </body>
    </html>
  );
}
