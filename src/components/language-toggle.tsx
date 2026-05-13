"use client";

import { motion } from "framer-motion";
import type { Lang } from "@/lib/portfolio-copy";
import { useLanguage } from "@/components/language-context";

const options: Lang[] = ["en", "tr"];

export function LanguageToggle() {
  const { lang, setLang } = useLanguage();

  return (
    <div
      className="flex h-9 items-center rounded-full border border-zinc-200/80 bg-white/70 p-0.5 backdrop-blur-md dark:border-zinc-800 dark:bg-zinc-900/70"
      role="group"
      aria-label={lang === "tr" ? "Dil seçimi" : "Language"}
    >
      {options.map((code) => {
        const active = lang === code;
        return (
          <button
            key={code}
            type="button"
            onClick={() => setLang(code)}
            className="relative flex min-h-8 min-w-[38px] items-center justify-center rounded-full px-2.5 py-1 text-xs font-semibold tracking-tight uppercase text-zinc-500 transition-colors hover:text-zinc-800 dark:text-zinc-400 dark:hover:text-zinc-200"
            aria-pressed={active}
            aria-label={code === "en" ? "English" : "Türkçe"}
          >
            {active ? (
              <motion.span
                layoutId="lang-toggle-pill"
                className="absolute inset-0 rounded-full bg-zinc-200/95 dark:bg-zinc-800/95"
                transition={{ type: "spring", stiffness: 480, damping: 32 }}
              />
            ) : null}
            <span
              className={`relative z-10 ${active ? "text-zinc-950 dark:text-zinc-50" : ""}`}
            >
              {code}
            </span>
          </button>
        );
      })}
    </div>
  );
}
