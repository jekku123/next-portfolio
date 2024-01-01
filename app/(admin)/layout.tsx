import StudioNav from '@/components/studio-nav';
import './globals.css';

export const metadata = {
  title: 'CMS | Portfolio',
  description: 'CMS for my portfolio',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <StudioNav />
        {children}
      </body>
    </html>
  );
}
