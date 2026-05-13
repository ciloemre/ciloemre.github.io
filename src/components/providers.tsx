"use client";

import { ThemeProvider } from "next-themes";
import type { ReactNode } from "react";
import { LanguageProvider } from "@/components/language-context";
import { ScrollDirectionProvider } from "@/components/scroll-direction-context";

export function Providers({ children }: { children: ReactNode }) {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="dark"
      enableSystem
      disableTransitionOnChange
    >
      <ScrollDirectionProvider>
        <LanguageProvider>{children}</LanguageProvider>
      </ScrollDirectionProvider>
    </ThemeProvider>
  );
}
