import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Luxuria Homes | Premium & Luxury Real Estate",
    template: "%s | Luxuria Homes",
  },
  description:
    "Luxuria Homes offers premium luxury villas, apartments, and high-end real estate properties designed for elegant and modern living.",
  keywords: [
    "luxuria homes",
    "luxury homes",
    "luxury real estate",
    "premium villas",
    "luxury apartments",
    "high-end properties",
    "dream homes",
  ],
  authors: [{ name: "Luxuria Homes" }],
  creator: "Luxuria Homes",
  publisher: "Luxuria Homes",

  openGraph: {
    title: "Luxuria Homes | Premium & Luxury Real Estate",
    description:
      "Discover premium villas, luxury apartments, and exclusive real estate with Luxuria Homes.",
    url: "https://www.luxuriahomes.com", // update if different
    siteName: "Luxuria Homes",
    images: [
      {
        url: "https://www.luxuriahomes.com/og-image.jpg", // add OG image
        width: 1200,
        height: 630,
        alt: "Luxuria Homes - Premium Luxury Real Estate",
      },
    ],
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Luxuria Homes | Premium & Luxury Real Estate",
    description:
      "Explore premium luxury homes, villas, and apartments with Luxuria Homes.",
    images: ["https://www.luxuriahomes.com/og-image.jpg"],
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },

  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
