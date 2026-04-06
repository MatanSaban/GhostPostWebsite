import "./globals.css";
import Script from "next/script";
import { ThemeProvider } from "./context/theme-context";

export const metadata = {
  title: "Ghost Post - AI-Powered SEO Automation",
  description: "The first autonomous AI agent that optimizes, writes, and manages your site's SEO while you sleep.",
  icons: {
    icon: '/ghostpost_logo.png',
    shortcut: '/ghostpost_logo.png',
    apple: '/ghostpost_logo.png',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-PB5HJ7D4T1"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-PB5HJ7D4T1');
          `}
        </Script>
      </head>
      <body suppressHydrationWarning>
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
