"use client";

import { motion } from "framer-motion";
import { usePortfolioCopy } from "@/components/use-portfolio-copy";

const ease = [0.22, 1, 0.36, 1] as const;

export function HeroSection() {
  const c = usePortfolioCopy();

  return (
    <section
      id="top"
      className="relative bg-white pt-28 pb-16 dark:bg-black sm:pt-36 sm:pb-24"
      aria-labelledby="hero-heading"
    >
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease }}
          className="mb-4 text-[13px] font-medium uppercase tracking-[0.2em] text-slate-500 dark:text-white/70"
        >
          {c.hero.kicker}
        </motion.p>
        <motion.h1
          id="hero-heading"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.05, ease }}
          className="text-4xl font-semibold tracking-[-0.03em] text-slate-900 sm:text-5xl sm:leading-[1.08] dark:text-white/90"
        >
          {c.hero.name}
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.1, ease }}
          className="mt-5 max-w-2xl text-lg font-medium leading-snug tracking-tight text-slate-600 sm:text-[1.125rem] dark:text-white/80"
        >
          {c.hero.title}
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.16, ease }}
          className="mt-8 max-w-3xl space-y-4 text-[15px] tracking-tight text-slate-600 dark:text-white/80 sm:text-base [&>p]:leading-relaxed"
        >
          <p>{c.hero.bioP1}</p>
          <p>{c.hero.bioP2}</p>
          <p>{c.hero.bioP3}</p>
        </motion.div>
      </div>
    </section>
  );
}
