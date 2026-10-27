import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title:
    "ASK Geospatial Strategies Limited | Land Surveying & Geo-Information in Lagos",
  description:
    "SURCON-registered land surveying, cadastral mapping, C of O charting, engineering setting-out, and GIS services along the Ibeju-Lekki corridor and across Lagos, Nigeria.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="antialiased">{children}</body>
    </html>
  );
}
