import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import LanguageProvider from "./components/LanguageProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Rui Pereira | Developer Front-End",
  description:
    "Portfólio de Rui Pereira, developer front-end especializado em React, Next.js e TypeScript.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-PT">
      <body className={inter.className}>
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  );
}