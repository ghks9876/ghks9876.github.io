import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Jeonghwan Kim | Satellite Edge Intelligence",
  description:
    "Jeonghwan Kim is an Integrated M.S.-Ph.D. student at DGIST researching LEO satellite edge computing, network optimization, and autonomous-vehicle systems.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
