import { Geist, Geist_Mono } from "next/font/google";
import "@/app/globals.css";
import Navbar from "@/components/Navbar";
import { Toaster } from "sonner";
import Providers from "@/libs/Providers";
import Script from "next/script"; // ✅ Import Script

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
      <head>
        {/* ✅ Google Analytics Script */}
        <Script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-SK61CDXL9G"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-SK61CDXL9G');
          `}
        </Script>
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <Providers>
          <Toaster position="bottom-right" richColors />
          {children}
        </Providers>
      </body>
    </html>
  );
}




















// import { Geist, Geist_Mono } from "next/font/google";
// import "@/app/globals.css";
// import Navbar from "@/components/Navbar";
// import { Toaster } from "sonner";
// import Providers from "@/libs/Providers";

// const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// });

// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });

// export const metadata = {
//   title: "Jakaria Finance",
//   description: "Grow your money with Jakaria Finance.",
//   openGraph: {
//     title: "Jakaria Finance",
//     description: "Grow your money with Jakaria Finance.",
//     url: "https://jakaria.finance",
//     siteName: "Jakaria Finance",
//     locale: "en_US",
//     type: "website",
//   },
// };

// export default function RootLayout({ children }) {
//   return (
//     <html lang="en">
//       <Providers>
//         <body className={`${geistSans.variable} ${geistMono.variable}`}>
//           <Toaster position="bottom-right" richColors />
//           {children}
//         </body>
//       </Providers>
//     </html>
//   );
// }
