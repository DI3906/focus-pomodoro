import type { Metadata } from 'next';
import localFont from 'next/font/local'
import { Brygada_1918 } from 'next/font/google';
import './globals.css';

const brygada = Brygada_1918({
  subsets: ['latin'],
  variable: '--brygada',
});

const sevenSegments = localFont({
  src: '../public/font/seven-segments/seven-segments.ttf',
  variable: '--seven-segments',
});

export const metadata: Metadata = {
  title: "Focus Pomodoro",
  description: "To do with pomodoro",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${brygada.variable} ${sevenSegments.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
