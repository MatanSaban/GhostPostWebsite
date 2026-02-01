import "./globals.css";
import { ThemeProvider } from "./context/theme-context";

export const metadata = {
  title: "Ghost Post - AI-Powered SEO Automation",
  description: "The first autonomous AI agent that optimizes, writes, and manages your site's SEO while you sleep.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body suppressHydrationWarning>
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
