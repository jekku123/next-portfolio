import PageAnimatePresence from "@/components/HOC/page-animate-presence";
import Footer from "@/components/footer";
import Header from "@/components/header";
import { ThemeProvider } from "@/components/theme-provider";
import { Toaster } from "@/components/ui/sonner";
import { getCommonPageProps } from "@/lib/get-common-page-props";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

import { ScrollTop } from "@/components/scroll-top";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Portfolio | Jesse Manninen",
  description: "Portfolio of Jesse Manninen",
};

export const revalidate = 60;

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { menus } = await getCommonPageProps();

  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <div className="flex min-h-screen flex-col">
            <Header menu={menus.main} />

            <div className="flex grow flex-col overflow-hidden">
              <PageAnimatePresence>{children}</PageAnimatePresence>
            </div>

            <Footer menu={menus.social} />
          </div>
        </ThemeProvider>
        <ScrollTop />
        <Toaster />
      </body>
    </html>
  );
}
