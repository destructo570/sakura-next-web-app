import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Providers from "@/app/providers";
import NavigationContainer from "@/components/containers/navigationContainer/NavigationContainer";
import { Toaster } from "sonner";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Sakura",
  description: "Social media app built with Next.js 14",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} md:max-w-xl mx-auto min-h-screen relative pt-4 pb-16`}
      >
        <Providers>
          <main className="dark">{children}</main>
          <NavigationContainer />
          <Toaster />
        </Providers>
      </body>
    </html>
  );
}
