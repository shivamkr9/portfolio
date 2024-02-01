import type { Metadata } from "next";
import { Inter as FontSans, } from "next/font/google";
import localFont from "next/font/local";
import "@/style/globals.css";
import { cn } from "@/lib/utils";
import { SiteConfig } from "@/config/site-config";

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

// Font files can be colocated inside of `pages`
const fontHeading = localFont({
  src: "../assets/fonts/CalSans-SemiBold.woff2",
  variable: "--font-heading",
})

export const metadata: Metadata = {
  title: {
    default: SiteConfig.name,
    template: `%s | ${SiteConfig.name}`,
  },
  description: SiteConfig.description,
  keywords: [
    "Shivam Kumar",
    "Portfolio",
    "Web Developer",
    "Next.js",
    "React",
    "Tailwind CSS",
    "Server Components",
    "Radix UI",
  ],
  authors: [
    {
      name: "shivam",
      url: SiteConfig.url,
    },
  ],
  creator: "shivam",
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: SiteConfig.url,
    title: SiteConfig.name,
    description: SiteConfig.description,
    siteName: SiteConfig.name,
  },
  twitter: {
    card: "summary_large_image",
    title: SiteConfig.name,
    description: SiteConfig.description,
    images: [`${SiteConfig.url}/og.jpg`],
    creator: "@shivam",
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
  manifest: `${SiteConfig.url}/site.webmanifest`,
}


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={cn(
        "min-h-screen font-sans antialiased",
        fontSans.variable,
        fontHeading.variable
      )}>
        {children}
      </body>
    </html>
  );
}
