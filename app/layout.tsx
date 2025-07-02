"use client";
import { ReactNode } from 'react';
import CssBaseline from "@mui/material/CssBaseline";
import AppTheme from "../shared-theme/AppTheme";
import TopNavigation from "@/components/TopNavigation";
import Footer from "@/components/Footer";
import CookieConsent from "@/components/CookieConsent";

interface RootLayoutProps {
  children: ReactNode;
  disableCustomTheme?: boolean;
}

const RootLayout = ({ children, disableCustomTheme }: RootLayoutProps) => {
  return (
    <html lang="tr">
      <body>
    <AppTheme disableCustomTheme={disableCustomTheme}>
      <CssBaseline enableColorScheme />
      <TopNavigation />
      <main>
        {children}
      </main>
      <Footer />
      <CookieConsent />
    </AppTheme>
      </body>
    </html>
  );
};

export default RootLayout; 