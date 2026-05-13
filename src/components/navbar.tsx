'use client';

import Link from 'next/link';
import type { MouseEvent } from 'react';
import { LanguageToggle } from '@/components/language-toggle';
import { ThemeToggle } from '@/components/theme-toggle';
import { usePortfolioCopy } from '@/components/use-portfolio-copy';

function scrollToSectionHash(hash: string) {
  const id = hash.startsWith('#') ? hash.slice(1) : hash;
  const element = document.getElementById(id);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' });
  }
}

function handleHashNavClick(e: MouseEvent<HTMLAnchorElement>, href: string) {
  e.preventDefault();
  scrollToSectionHash(href);
  window.history.replaceState(null, '', href);
}

export function Navbar() {
  const c = usePortfolioCopy();
  const links = [
    { href: '#skills', label: c.nav.skills },
    { href: '#experience', label: c.nav.experience },
    { href: '#projects', label: c.nav.projects },
  ] as const;

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-black/10 bg-[#f5f5f7]/70 backdrop-blur-xl backdrop-saturate-[180%] dark:border-white/20 dark:bg-[#161617]/60 dark:backdrop-blur-xl dark:backdrop-saturate-[180%]">
      <div className="mx-auto flex h-14 w-full max-w-5xl items-center justify-between gap-3 px-4 sm:h-16 sm:px-6 lg:px-8">
        <Link
          href="#top"
          onClick={(e) => handleHashNavClick(e, '#top')}
          className="shrink-0 text-sm font-semibold tracking-[-0.02em] text-slate-900 dark:text-white/90"
          aria-label={c.nav.homeAria}
        >
          Emre Çilo
        </Link>

        <nav
          className="hidden min-w-0 flex-1 md:flex md:items-center md:justify-end md:gap-x-6"
          aria-label="Primary navigation"
        >
          {links.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              onClick={(e) => handleHashNavClick(e, href)}
              className="rounded-lg px-2.5 py-2 text-xs font-medium tracking-tight text-slate-800 transition-colors hover:text-slate-900 sm:px-3 sm:text-sm dark:text-white/80 dark:hover:text-white/90"
            >
              {label}
            </Link>
          ))}
        </nav>

        <div className="flex shrink-0 items-center gap-2">
          <LanguageToggle />
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}
