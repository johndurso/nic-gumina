import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Nic Gumina | Cloud Security Consultant at AWS",
  description:
    "Cloud Security Consultant at AWS specializing in Enterprise App Pentesting, Source Code Reviews, AI/ML Penetration Testing, and more.",
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