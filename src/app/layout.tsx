import type { Metadata } from "next";
import { Geist, Geist_Mono, Poppins } from "next/font/google";
import 'swiper/css';
import 'swiper/css/grid';
import 'swiper/css/pagination';
import "./globals.css";
//import '@uigovpe/styles';

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Pernambuco Digital",
  description: "Jornada do cidadão",
  manifest: '/manifest.json',
  themeColor: '#0f172a',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${poppins.className} animationHome  antialiased`}>
        {children}
      </body>
    </html>
  );
}
