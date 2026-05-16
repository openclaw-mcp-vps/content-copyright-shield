import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Content Copyright Shield – Scan Before You Publish",
  description: "Scan blog posts, social media content, and marketing materials for potential copyright violations before publishing."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="a27c2fce-43ab-4e9e-8afb-3b5ad490e45c"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] antialiased">{children}</body>
    </html>
  );
}
