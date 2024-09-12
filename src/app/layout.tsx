import type { Metadata } from "next";
import "./globals.css";
import localFont from "next/font/local";

const fira_go = localFont({
  src: [
    {
      path: "./fonts/firago-latin-400-normal.woff",
      weight: "400",
      style: "normal",
    },
    {
      path: "./fonts/firago-latin-400-normal.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "./fonts/firago-latin-500-normal.woff",
      weight: "500",
      style: "normal",
    },
    {
      path: "./fonts/firago-latin-500-normal.woff2",
      weight: "500",
      style: "normal",
    },
    {
      path: "./fonts/firago-latin-700-normal.woff",
      weight: "700",
      style: "normal",
    },
    {
      path: "./fonts/firago-latin-700-normal.woff2",
      weight: "700",
      style: "normal",
    },
  ],
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${fira_go.className} text-primaryBlack`}>
        {children}
      </body>
    </html>
  );
}
