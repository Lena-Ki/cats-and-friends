import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Cats & Friends — 23 August, Novi Sad",
  description: "A warm charity evening for seven special cats.",
  icons: {
    icon: [{ url: "/favicon.png", type: "image/png", sizes: "256x256" }],
    shortcut: "/favicon.png",
    apple: "/favicon.png",
  },
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
