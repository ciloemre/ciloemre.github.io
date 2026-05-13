"use client";

import { portfolioCopy } from "@/lib/portfolio-copy";
import { useLanguage } from "@/components/language-context";

export function usePortfolioCopy() {
  const { lang } = useLanguage();
  return portfolioCopy[lang];
}
