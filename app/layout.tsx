import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/general/Navbar";
import { AuthProvider } from "@/components/general/AuthProvider";
import { ReactNode } from "react";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Mountain Recipes App",
  description: "created by Shatylo4ka and abr-ya",
};

interface IRootLayout {
  children: ReactNode;
}

const RootLayout = ({ children }: Readonly<IRootLayout>) => (
  <AuthProvider>
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <Navbar />
        {children}
      </body>
    </html>
  </AuthProvider>
);

export default RootLayout;
