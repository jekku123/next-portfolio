import PageAnimatePresence from '@/components/HOC/page-animate-presence';
import Footer from '@/components/footer';
import Header from '@/components/header';
import { ThemeProvider } from '@/components/theme-provider';
import { getCommonPageProps } from '@/lib/get-common-page-props';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Portfolio | Jesse Manninen',
  description: 'Portfolio of Jesse Manninen',
};

export const revalidate = 60;

export default async function RootLayout({ children }: { children: React.ReactNode }) {
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
          <div className="min-h-screen flex flex-col">
            <Header menu={menus.main} />
            <div className="grow flex flex-col">
              <PageAnimatePresence>{children}</PageAnimatePresence>
            </div>
            <Footer menu={menus.social} />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
