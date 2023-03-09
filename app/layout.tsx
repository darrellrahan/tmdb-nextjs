import "./globals.css";
import React from "react";

export const metadata = {
  title: "Simple TMDB App",
  description: "Powered by Next.js and TMDB API",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
