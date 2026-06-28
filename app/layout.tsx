import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "TOXII — Modified Wife · Modified Life",
  description:
    "Toxii Daniëlle — Dutch-born body modification artist and model. Extreme, intentional, unapologetic transformation. Bookings, gallery and links.",
  metadataBase: new URL("https://toxii.bodymod"),
  openGraph: {
    title: "TOXII — Modified Wife · Modified Life",
    description:
      "Dutch-born body modification artist and model. Extreme, intentional, unapologetic.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "TOXII — Modified Wife · Modified Life",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Inter:wght@300;400;500;600&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <div className="grain" aria-hidden="true" />
        {children}
      </body>
    </html>
  );
}
