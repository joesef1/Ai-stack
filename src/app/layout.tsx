import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { HeroHeader } from "@/components/header";
import { LanguageProvider } from "@/contexts/language-context";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "AI Stack",
  description: "softwear house",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                if (typeof window === 'undefined') return;
                
                const originalError = console.error;
                const originalWarn = console.warn;
                
                console.error = function(...args) {
                  const msg = String(args[0] || '');
                  if (
                    msg.includes('Hydration') || 
                    msg.includes('hydration') || 
                    msg.includes('jf-ext') ||
                    msg.includes('server rendered HTML') ||
                    msg.includes('client properties') ||
                    msg.includes('tree hydrated')
                  ) return;
                  originalError.apply(console, args);
                };
                
                console.warn = function(...args) {
                  const msg = String(args[0] || '');
                  if (
                    msg.includes('Hydration') || 
                    msg.includes('hydration') || 
                    msg.includes('jf-ext') ||
                    msg.includes('server rendered HTML')
                  ) return;
                  originalWarn.apply(console, args);
                };
              })();
            `,
          }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        suppressHydrationWarning
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem={true}
          disableTransitionOnChange={false}
        >
          <LanguageProvider>
            <HeroHeader />
            {children}
          </LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
