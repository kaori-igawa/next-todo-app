import type { Metadata } from "next";
import { Noto_Sans_JP as NotoSansJP } from 'next/font/google';
import "../styles/globals.css";


const notoSansJp = NotoSansJP({
  display: 'swap',
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={notoSansJp.className}>{children}</body>
    </html>
  );
}
