import type { Metadata } from "next";
import "./global.css";

export const metadata: Metadata = {
  title: "NomadNest Guest House",
  description: "NomadNest Guest House in Ulaanbaatar, Mongolia",
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
