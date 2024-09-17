import type { Metadata } from "next";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";
import { SessionProvider } from "next-auth/react";

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
    <html className='max-w-[1440px] my-0 mx-auto' lang='en'>
      <body>
        <SessionProvider>{children}</SessionProvider>
        <Toaster />
      </body>
    </html>
  );
}
