import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@/globals/globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";
import NavigationContainer from "@/components/containers/navigationContainer/NavigationContainer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Sakura",
  description: "Social web app built with Next.js 14",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} md:max-w-xl mx-auto min-h-screen relative pt-4 pb-16`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
          <NavigationContainer />
        </ThemeProvider>
      </body>
    </html>
  );
}
