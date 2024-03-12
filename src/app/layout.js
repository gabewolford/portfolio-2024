import { Inter } from "next/font/google";
import "./globals.css";
import Globe from "./components/Globe";
import TheHeader from "./components/TheHeader";
import TheFooter from "./components/TheFooter";
import { Analytics } from "@vercel/analytics/react";
import { GoogleAnalytics } from "@next/third-parties/google";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400"],
});

export const metadata = {
  title: "Gabe Wolford",
  description:
    "Software developer and stargazer based in Portland, Oregon. Sweating the little details, putting the user first, and geeking out on good design.",
  keywords:
    "Software developer, software development, web developer, web development, frontend development, react, vue, next.js, nuxt, tailwind, sanity, marketing sites, portfolio sites, web design, portland",
  openGraph: {
    title: "Gabe Wolford",
    description:
      "Software developer and stargazer based in Portland, Oregon. Sweating the little details, putting the user first, and geeking out on good design.",
    siteName: "Gabe Wolford",
    type: "website",
    locale: "en_US",
    url: "https://gabewolford.com",
    images: [
      {
        url: "https://gabewolford.com/images/og-image.png",
        width: 1200,
        height: 630,
        alt: "Gabe Wolford",
      },
      {
        url: "https://gabewolford.com/images/og-image-square.png",
        width: 800,
        height: 800,
        alt: "Gabe Wolford",
      },
    ],
  },
  images: [
    {
      url: "https://gabewolford.com/images/og-image.png",
      width: 1200,
      height: 630,
      alt: "Gabe Wolford",
    },
    {
      url: "https://gabewolford.com/images/og-image-square.png",
      width: 800,
      height: 800,
      alt: "Gabe Wolford",
    },
  ],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`flex flex-col min-h-screen justify-between w-full relative ${inter.className}`}
      >
        <Globe />
        <TheHeader />
        {children}
        <TheFooter />
        <Analytics />
        <GoogleAnalytics gaId="G-MB47VFLXXK" />
      </body>
    </html>
  );
}
