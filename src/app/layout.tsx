import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import { Providers } from '@/components/providers';
import './globals.css';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Emre Çilo — Systems Architect & Senior Full Stack Developer',
  description:
    'Systems architect and senior full stack developer: modernization, Next.js/Node.js platforms, CRM and commerce—end-to-end ownership from data modeling to production UI.',
  openGraph: {
    title: 'Emre Çilo — Building robust systems. Modernizing the web.',
    description:
      'Taking legacy business complexity and shipping fast, reliable modern applications—with clear accountability across the stack.',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <body className="min-h-full flex flex-col bg-[var(--background)]">
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
