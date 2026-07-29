import { Geist, Geist_Mono } from "next/font/google";
import "@/styles/globals.css";
import ThemeProvider from "@/components/providers/ThemeProvider";

import Header from "@/components/templates/header/Header";
import Loading from "./loading";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: {
    default: "Atlas UI",
    template: "%s | Atlas UI",
  },

  description:
    "A modern React component library built with accessibility and flexibility in mind.",

  keywords: [
    "React",
    "UI Library",
    "Components",
    "Tailwind CSS",
    "Design System",
  ],
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${geistSans.variable} ${geistMono.variable} antialiased`}
    >
      <body className="bg-background text-foreground selection:bg-primary min-h-screen font-sans selection:text-white">
        <ThemeProvider>
          <div className="mx-auto flex min-h-screen w-full max-w-384 flex-col px-4 sm:px-6 lg:px-8 xl:px-10">
            <Header />
            <main className="flex-1">{children}</main>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
