import type { Metadata } from "next";
import "./globals.css";
import localFont from "next/font/local";
import Header from "../components/header/Header";

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
  title: "RE Manager",
  description: "Luka Chubinidze @ Redberry Bootcamp",
};

export default function RootLayout({ children }: LayoutProps) {
  return (
    <html lang="en">
      <body
        className={`${fira_go.className} w-full text-primaryBlack bg-white`}
      >
        <Header />
        {children}
        <div id="add-agent-modal"></div>
      </body>
    </html>
  );
}
