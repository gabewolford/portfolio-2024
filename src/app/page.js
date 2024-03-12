import ContactSection from "./components/ContactSection";
import WorkSection from "./components/WorkSection";
import IntroSection from "./components/IntroSection";

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

export default function HomePage() {
  return (
    <main>
      <IntroSection />
      <WorkSection />
      <ContactSection />
    </main>
  );
}
