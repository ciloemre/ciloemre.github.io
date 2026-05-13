"use client";

import { Code2, Link2, Mail } from "lucide-react";
import { motion } from "framer-motion";
import { scrollReveal } from "@/lib/motion-presets";
import { usePortfolioCopy } from "@/components/use-portfolio-copy";
import { useDirectionalReveal } from "@/hooks/use-directional-reveal";

const links = [
  {
    href: "https://github.com/ciloemre",
    label: "GitHub",
    icon: Code2,
  },
  {
    href: "https://www.linkedin.com/in/ciloemre",
    label: "LinkedIn",
    icon: Link2,
  },
  {
    href: "mailto:emrecilo@hotmail.com",
    label: "emrecilo@hotmail.com",
    icon: Mail,
  },
];

export function SiteFooter() {
  const c = usePortfolioCopy();

  const reveal = useDirectionalReveal<HTMLElement>({
    transition: scrollReveal.heading,
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  });

  return (
    <motion.footer
      ref={reveal.ref}
      initial={reveal.initial}
      animate={reveal.animate}
      transition={reveal.transition}
      className="border-t border-black/10 bg-[#f5f5f7] py-12 dark:border-white/20 dark:bg-[#161617]"
      aria-label={c.footer.ariaLabel}
    >
      <div className="mx-auto flex max-w-5xl flex-col items-start justify-between gap-8 px-4 sm:flex-row sm:items-center sm:px-6 lg:px-8">
        <p className="text-sm tracking-tight text-slate-900 dark:text-white/90">
          © {new Date().getFullYear()} Emre Çilo
        </p>
        <ul className="flex flex-col gap-4 sm:flex-row sm:items-center sm:gap-8">
          {links.map(({ href, label, icon: Icon }) => (
            <li key={href}>
              <a
                href={href}
                target={href.startsWith("http") ? "_blank" : undefined}
                rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
                className="inline-flex items-center gap-2 text-sm font-medium tracking-tight text-slate-800 transition-colors hover:text-slate-900 dark:text-white/80 dark:hover:text-white/90"
              >
                <Icon
                  className="h-4 w-4 shrink-0 opacity-70"
                  strokeWidth={1.75}
                />
                {label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </motion.footer>
  );
}
