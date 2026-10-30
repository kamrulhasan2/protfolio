import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import { ThemeProvider } from "@/components/ThemeProvider";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://kamrulhasan.dev"),
  title: "Md. Kamrul Hasan — WordPress Plugin Developer & Full-Stack Engineer",
  description:
    "Full-stack engineer who ships production WordPress platforms and custom plugins for healthcare and travel businesses in Bangladesh. Expertise in MERN stack, AI backend (LangChain, OpenAI), WooCommerce, and modern web technologies.",
  keywords: [
    "Kamrul Hasan",
    "WordPress Plugin Developer",
    "Full-Stack Engineer",
    "MERN Stack",
    "React",
    "Next.js",
    "Node.js",
    "PHP",
    "WooCommerce",
    "LangChain",
    "AI Backend",
    "Bangladesh",
    "Software Engineer",
  ],
  authors: [{ name: "Md. Kamrul Hasan" }],
  creator: "Md. Kamrul Hasan",
  openGraph: {
    type: "website",
    locale: "en_US",
    title:
      "Md. Kamrul Hasan — WordPress Plugin Developer & Full-Stack Engineer",
    description:
      "Full-stack engineer shipping production WordPress platforms and custom plugins for healthcare and travel businesses. MERN + AI backend expertise.",
    siteName: "Kamrul Hasan Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Md. Kamrul Hasan — WordPress Plugin Developer & Full-Stack Engineer",
    description:
      "Full-stack engineer shipping production WordPress platforms and custom plugins. MERN + AI backend expertise.",
    creator: "@kamrulkh3778",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${inter.variable} ${jetbrainsMono.variable} antialiased`}
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Md. Kamrul Hasan",
              jobTitle: "WordPress Plugin Developer & Full-Stack Engineer",
              url: "https://kamrulhasan.dev",
              email: "kamrulhasan20656@gmail.com",
              telephone: "+8801601780015",
              address: {
                "@type": "PostalAddress",
                addressLocality: "Mirpur, Dhaka",
                addressCountry: "BD",
              },
              sameAs: [
                "https://github.com/kamrulhasan2",
                "https://www.linkedin.com/in/kamrulhasan20656/",
                "https://www.facebook.com/kamrulhasan3778/",
                "https://x.com/kamrulkh3778",
              ],
              knowsAbout: [
                "WordPress Plugin Development",
                "Full-Stack Engineering",
                "MERN Stack",
                "AI Backend Development",
                "WooCommerce",
                "React",
                "Next.js",
                "Node.js",
                "PHP",
              ],
            }),
          }}
        />
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
