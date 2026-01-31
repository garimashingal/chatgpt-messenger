import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Sidebar from "@/component/Sidebar";
import { getServerSession } from "next-auth";
import SessionProvider from "@/component/SessionProvider";
import Login from "@/component/Login";
import ClientProvider from "@/component/ClientProvider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "ChatGPT Messenger",
  description:
    "ChatGPT Messenger built with Next.js, TailwindCSS, and Firebase",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const session = await getServerSession();
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <SessionProvider session={session}>
          {!session ? (
            <div>
              <Login />
            </div>
          ) : (
            <div className="flex">
              {/* Sidebar */}
              <Sidebar />

              {/* ClientProvider - Notification */}
              <ClientProvider />

              {/* Chat */}
              <div className="bg-[#343641] flex-1 ">{children}</div>
            </div>
          )}
        </SessionProvider>
      </body>
    </html>
  );
}
