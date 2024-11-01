import type { Metadata } from "next";
import "../app/styles.css";

export const metadata: Metadata = {
  title: "Tez Shifo",
  description: "Website developed by InterSoft",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}</body>
    </html>
  );
}
