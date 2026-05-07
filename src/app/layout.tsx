import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/context/ThemeProvider";
import Navbar from "@/components/Navbar"; // Navbar import karein

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Krishna Shivare | Cyber Command Center",
  description: "Advanced Cybersecurity Portfolio with 10 Integrated Modules",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className} bg-background text-foreground antialiased`}>
        <ThemeProvider attribute="class" defaultTheme="dark">
          <Navbar /> {/* Navbar yahan place karein */}
          <main>{children}</main>
        </ThemeProvider>
      </body>
    </html>
  );
}