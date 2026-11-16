import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";


const jakarta = Plus_Jakarta_Sans({ subsets: ["latin"], variable: "--font-jakarta" });


export const metadata: Metadata = {
  title: "Malik Seeds | Helping Farmers Grow with Confidence",
  description: "High-performance hybrid seed varieties for Bangladeshi farmers since 1969.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={jakarta.variable}>
      <body className="font-sans text-gray-800 antialiased">{children}</body>
    </html>
  );
}