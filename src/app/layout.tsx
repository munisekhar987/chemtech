import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Chemtech Water Technologies & Solutions",
  description: "Engineering Excellence in Water Treatment - Advanced water treatment solutions for industrial and municipal applications",
  keywords: "water treatment, RO systems, industrial filtration, chemical dosing, water purification",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="min-h-screen bg-sky-50">
          <Header />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}