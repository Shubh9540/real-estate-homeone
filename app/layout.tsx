import type { Metadata } from "next";
import rawData from "@/data/templates.json";
import { FourHomelessTemplateData } from "@/types/templates.types";
import "./globals.css";

const templateData: FourHomelessTemplateData = rawData;
const primaryFont = templateData.common.font?.primary || 'Montserrat';

export const metadata: Metadata = {
  title: templateData.common.metadata.title,
  description: templateData.common.metadata.description,
  icons: {
    icon: templateData.common.metadata.icon,
    shortcut: templateData.common.metadata.icon,
    apple: templateData.common.metadata.icon,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const fontUrl = `https://fonts.googleapis.com/css2?family=${encodeURIComponent(primaryFont)}:wght@300;400;500;600;700;800&display=swap`;

  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href={fontUrl} rel="stylesheet" />
        <style dangerouslySetInnerHTML={{
          __html: `
            :root {
              --font-primary: '${primaryFont}', sans-serif;
              --font-heading: '${primaryFont}', sans-serif;
            }
          `
        }} />
      </head>
      <body className="antialiased" style={{ fontFamily: "var(--font-primary)" }}>
        {children}
      </body>
    </html>
  );
}
