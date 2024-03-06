import { SpeedInsights } from '@vercel/speed-insights/next';
import { Analytics } from '@vercel/analytics/react';
import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/header/Header";
import { Footer } from "@/components/footer/Footer";

import '@fortawesome/fontawesome-svg-core/styles.css';
import { config } from '@fortawesome/fontawesome-svg-core';
config.autoAddCss = false;

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const poppins = Poppins({
  weight: "400",
  subsets: ["latin"],
  display: 'swap',
});

export const metadata: Metadata = {
  title: "KhojGurbani",
  description: "Managed by TcaT",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${poppins.className} antialiased flex flex-col min-h-screen relative`}>
        <Header />
        <main className="grow">
          {children}
        </main>
        <Footer />
        <ToastContainer />
        <SpeedInsights />
        <Analytics />
      </body>
    </html>
  );
}
