import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import { twMerge } from "tailwind-merge";
import { LayoutProps } from "../../.next/types/app/layout";

const inter = Montserrat({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Panie Kolego Projekt",
  description: "Panie Kolego Projekt HomePage",
};

export default function RootLayout({ children }: LayoutProps) {
  return (
    <html lang="en">
      <body className={twMerge(inter.className, "overflow-hidden")}>
        {children}
      </body>
    </html>
  );
}
