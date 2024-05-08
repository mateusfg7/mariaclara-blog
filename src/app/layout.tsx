import type { Metadata } from "next";
import { Inter, Merienda } from "next/font/google";

import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

const merienda = Merienda({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-merienda",
});

export const metadata: Metadata = {
  title: "Maria Clara's Blog",
  description: "Blog e notas de Maria Clara",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body className={`${inter.variable} ${merienda.variable}`}>
        {children}
      </body>
    </html>
  );
}
