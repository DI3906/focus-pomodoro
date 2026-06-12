import type { Metadata } from "next";
import { Brygada_1918 } from 'next/font/google';
import "./globals.css";

const brygada = Brygada_1918({
  subsets: ['latin'],
})

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
      className={`${brygada.className} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
