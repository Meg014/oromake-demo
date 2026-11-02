import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "OROMAKE — Japanese Kitchen",
  description:
    "OROMAKE é um conceito fictício de cozinha japonesa. Cada detalhe tem sabor.",
  applicationName: "OROMAKE — Japanese Kitchen",
  openGraph: {
    title: "OROMAKE — Japanese Kitchen",
    description: "Cada detalhe tem sabor.",
    type: "website",
    locale: "pt_BR",
  },
  robots: {
    index: false,
    follow: false,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}
