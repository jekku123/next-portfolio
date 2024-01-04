export const metadata = {
  title: 'CMS | Portfolio',
  description: 'CMS for my portfolio',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
