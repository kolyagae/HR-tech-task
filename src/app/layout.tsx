import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "HarmonyHR",
  description: "Create by https://github.com/kolyagae",
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
