import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import NavBar from "../components/NavBar";
import Footer from "@/components/Footer";
// import NavBar from "./components/NavBar";
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Chatify",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-theme="light">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased `}
      > 
      <nav className="pl-5 pr-5"> 
        <NavBar></NavBar>
      </nav>

      <div className="p-5 mx-auto">
      <div className="min-h-[calc(100vh-289px)]">
        {children}
        </div>
      </div>

        <footer>
          <Footer></Footer>
        </footer>
      </body>
    </html>
  );
}
