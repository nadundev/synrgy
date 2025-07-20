import type { Metadata } from "next";
import { ppNeueMontreal, inter } from "./ui/fonts";
import "./globals.css";

export const metadata: Metadata = {
  title: "Synrgy - Design Agency",
  description: "Designing Brands and Experiences Worth Remembering",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${ppNeueMontreal.variable} ${inter.variable} font-sans antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
