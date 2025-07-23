import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Nathan Xu - Anthropic Ambassador Application",
  description: "AI enthusiast, MCP power user, and community builder applying for Anthropic's Ambassador Program",
  openGraph: {
    title: "Nathan Xu - Anthropic Ambassador",
    description: "From kitchen hand to AI advocate - my journey with Claude and MCPs",
    images: ["/og-image.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}