import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@/globals/globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";
import NavigationContainer from "@/components/containers/navigationContainer/NavigationContainer";
import { SessionProvider } from "next-auth/react";
import { auth } from "@/auth/auth";

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
      <body className={`${inter.className} md:max-w-xl mx-auto min-h-screen relative pt-4 pb-16`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <SessionProvider session={session}>
          {children}
          <NavigationContainer />
          </SessionProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
