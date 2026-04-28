import "./globals.css";
import Script from "next/script";
import { Analytics } from "@vercel/analytics/next";
import { ThemeProvider } from "./context/theme-context";

export const metadata = {
  title: "GhostSEO - AI-Powered SEO Automation",
  description: "The first autonomous AI agent that optimizes, writes, and manages your site's SEO while you sleep.",
  icons: {
    icon: '/favicon.svg',
    shortcut: '/favicon.svg',
    apple: '/favicon.svg',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var t=localStorage.getItem('theme');if(t==='dark'||(!t&&window.matchMedia('(prefers-color-scheme:dark)').matches)){document.documentElement.classList.add('dark')}}catch(e){}})()`
          }}
        />
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-PB5HJ7D4T1"
          strategy="afterInteractive"
        />
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-TTS9ZEHCT8"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-PB5HJ7D4T1');
            gtag('config', 'G-TTS9ZEHCT8');
          `}
        </Script>
      </head>
      <body suppressHydrationWarning>
        <ThemeProvider>
          {children}
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  );
}
