import type { Metadata } from "next";
import "./globals.css";


export const metadata: Metadata = {
  title: "Paigham TV Live",
  description: "Wath Live Paigham TV",
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
