import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { auth } from "@/auth/auth";
import Providers from "@/app/providers";
import NavigationContainer from "@/components/containers/navigationContainer/NavigationContainer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Sakura",
  description: "Social web app built with Next.js 14",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await auth();

  return (
    <html lang="en">
      <body
        className={`${inter.className} md:max-w-xl mx-auto min-h-screen relative pt-4 pb-16`}
      >
        <Providers>
          <main className="dark">{children}</main>
          <NavigationContainer />
        </Providers>
      </body>
    </html>
  );
}
