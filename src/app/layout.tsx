import type { Metadata } from "next";
import "./globals.css";
import Footer from "../components/layout/Footer";
import Navbar from "../components/layout/Navbar";

export const metadata: Metadata = {
  title: "Science Alliance",
  description: "Science Alliance For Life And Technology",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="antialiased">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
