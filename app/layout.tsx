import './globals.css';
import type { Metadata } from 'next';
import { Outfit } from 'next/font/google';
import Navbar from './components/Navbar';
import Preloader from './components/Preloader';

const outfit = Outfit({
  subsets: ['latin'],
  display: 'swap',
  weight: ['300', '400', '500', '600'],
});

export const metadata: Metadata = {
  title: 'Apple Vision Pro Clone',
  description: 'A beautiful dark product site clone',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={outfit.className}>
        <Preloader />
        <Navbar />
        {children}
      </body>
    </html>
  );
}
