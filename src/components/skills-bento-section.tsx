'use client';

import { motion } from 'framer-motion';
import { useCallback, useRef, useState } from 'react';
import type { SkillCard } from '@/lib/portfolio-copy';
import { scrollReveal } from '@/lib/motion-presets';
import { usePortfolioCopy } from '@/components/use-portfolio-copy';
import { useDirectionalReveal } from '@/hooks/use-directional-reveal';

function SkillChip({ children }: { children: string }) {
  return (
    <span className="rounded-lg border border-zinc-200/80 bg-zinc-100/90 px-3 py-1.5 text-sm font-medium tracking-tight text-zinc-800 dark:border-white/[0.12] dark:bg-white/[0.06] dark:text-white/85">
      {children}
    </span>
  );
}

const cardKeys = ['core', 'backend', 'architecture', 'ecosystem'] as const;

function SkillBentoCard({
  card,
  index,
  overlayWhatLabel,
  overlayExperienceLabel,
}: {
  card: SkillCard;
  index: number;
  overlayWhatLabel: string;
  overlayExperienceLabel: string;
}) {
  const reveal = useDirectionalReveal({
    margin: '-30px',
    transition: {
      ...scrollReveal.item,
      delay: index * scrollReveal.stagger,
    },
    hidden: { opacity: 0, y: 16 },
    visible: { opacity: 1, y: 0 },
  });

  const scrollRef = useRef<HTMLDivElement>(null);
  const [activeSlide, setActiveSlide] = useState(0);

  const onCarouselScroll = useCallback(
    (e: React.UIEvent<HTMLDivElement>) => {
      const el = e.currentTarget;
      const maxScroll = el.scrollWidth - el.clientWidth;
      if (maxScroll <= 0) {
        setActiveSlide(0);
        return;
      }
      const ratio = el.scrollLeft / maxScroll;
      setActiveSlide(ratio > 0.5 ? 1 : 0);
    },
    [],
  );

  return (
    <motion.div
      ref={reveal.ref}
      initial={reveal.initial}
      animate={reveal.animate}
      transition={reveal.transition}
      className="min-h-0"
    >
      <div className="group relative flex min-h-[248px] max-md:pb-8 flex-col overflow-hidden rounded-2xl border border-zinc-200/85 bg-zinc-50/90 shadow-sm dark:border-zinc-700/45 dark:bg-gradient-to-b dark:from-zinc-950 dark:to-zinc-950/92">
        {/* Desktop: unchanged layout + hover overlay (md+) */}
        <div className="relative z-10 hidden flex-1 flex-col p-6 md:flex">
          <div className="mb-4 flex flex-wrap items-center gap-2.5">
            <h3 className="text-[15px] font-semibold tracking-[-0.02em] text-slate-900 dark:text-white/90">
              {card.title}
            </h3>
            {'badge' in card && card.badge ? (
              <span className="rounded-full border border-zinc-300/90 bg-white/80 px-2.5 py-0.5 text-[11px] font-semibold tracking-wide text-slate-600 dark:border-white/10 dark:bg-white/[0.08] dark:text-white/75">
                {card.badge}
              </span>
            ) : null}
          </div>
          <div className="mt-auto flex flex-wrap justify-start gap-2">
            {card.items.map((item) => (
              <SkillChip key={item}>{item}</SkillChip>
            ))}
          </div>
        </div>

        <div className="absolute inset-0 z-20 hidden min-h-0 flex-col justify-start bg-zinc-950/78 px-5 pb-5 pt-6 opacity-0 backdrop-blur-md transition-opacity duration-300 ease-out group-hover:opacity-100 dark:bg-black/82 md:flex">
          <div className="h-full max-h-full w-full space-y-3 overflow-y-auto overscroll-contain pr-0.5">
            <div>
              <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-zinc-400">
                {overlayWhatLabel}
              </p>
              <p className="mt-2 text-sm leading-snug tracking-tight text-zinc-100">
                {card.overlayWhat}
              </p>
            </div>
            <div>
              <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-zinc-400">
                {overlayExperienceLabel}
              </p>
              <p className="mt-2 text-sm leading-snug tracking-tight text-zinc-100">
                {card.overlayExperience}
              </p>
            </div>
          </div>
        </div>

        {/* Mobile: horizontal carousel + dot indicators (below md only) */}
        <div className="flex min-h-0 flex-1 flex-col md:hidden">
          <div
            ref={scrollRef}
            onScroll={onCarouselScroll}
            className="flex h-full min-h-0 w-full flex-row snap-x snap-mandatory overflow-x-auto [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
          >
            <div className="box-border flex min-h-[200px] w-full min-w-full shrink-0 snap-center flex-col justify-between px-6 pt-6">
              <div className="mb-4 flex flex-wrap items-center gap-2.5">
                <h3 className="text-[15px] font-semibold tracking-[-0.02em] text-slate-900 dark:text-white/90">
                  {card.title}
                </h3>
                {'badge' in card && card.badge ? (
                  <span className="rounded-full border border-zinc-300/90 bg-white/80 px-2.5 py-0.5 text-[11px] font-semibold tracking-wide text-slate-600 dark:border-white/10 dark:bg-white/[0.08] dark:text-white/75">
                    {card.badge}
                  </span>
                ) : null}
              </div>
              <div className="flex flex-wrap justify-start gap-2">
                {card.items.map((item) => (
                  <SkillChip key={item}>{item}</SkillChip>
                ))}
              </div>
            </div>

            <div className="box-border w-full min-w-full shrink-0 snap-center px-6 pb-5 pt-4 max-md:pt-8 max-md:flex max-md:flex-col max-md:justify-center max-md:h-full md:mt-4 md:block">
              <div className="space-y-3">
                <div>
                  <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-slate-500 dark:text-zinc-400">
                    {overlayWhatLabel}
                  </p>
                  <p className="mt-2 text-sm leading-snug tracking-tight text-slate-700 dark:text-zinc-200">
                    {card.overlayWhat}
                  </p>
                </div>
                <div>
                  <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-slate-500 dark:text-zinc-400">
                    {overlayExperienceLabel}
                  </p>
                  <p className="mt-2 text-sm leading-snug tracking-tight text-slate-700 dark:text-zinc-200">
                    {card.overlayExperience}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div
          className="hidden max-md:flex absolute bottom-3 left-1/2 -translate-x-1/2 justify-center items-center gap-1.5 z-10"
          aria-hidden
        >
          <span
            className={`h-1.5 w-1.5 rounded-full transition-colors ${
              activeSlide === 0
                ? 'bg-slate-900/80 dark:bg-white/80'
                : 'bg-slate-900/20 dark:bg-white/20'
            }`}
          />
          <span
            className={`h-1.5 w-1.5 rounded-full transition-colors ${
              activeSlide === 1
                ? 'bg-slate-900/80 dark:bg-white/80'
                : 'bg-slate-900/20 dark:bg-white/20'
            }`}
          />
        </div>
      </div>
    </motion.div>
  );
}

export function SkillsBentoSection() {
  const c = usePortfolioCopy();

  const gridReveal = useDirectionalReveal({
    margin: '-40px',
    transition: scrollReveal.group,
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  });

  return (
    <section
      id="skills"
      className="scroll-mt-24 border-t border-black/10 bg-[#f5f5f7] py-16 dark:border-white/20 dark:bg-[#161617] sm:py-20"
      aria-labelledby="skills-heading"
    >
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={scrollReveal.heading}
        >
          <h2
            id="skills-heading"
            className="text-2xl font-semibold tracking-[-0.02em] text-slate-900 sm:text-3xl dark:text-white/90"
          >
            {c.skills.title}
          </h2>
          <p className="mt-4 max-w-2xl text-[15px] leading-[1.68] tracking-tight text-slate-600 dark:text-white/80 sm:text-base">
            {c.skills.subtitle}
          </p>
        </motion.div>

        <motion.div
          ref={gridReveal.ref}
          initial={gridReveal.initial}
          animate={gridReveal.animate}
          transition={gridReveal.transition}
          className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2"
        >
          {cardKeys.map((key, index) => {
            const card = c.skills.cards[key];
            const whatLabel =
              card.overlayWhatLabel ?? c.skills.overlayWhatLabel;
            const experienceLabel =
              card.overlayExperienceLabel ?? c.skills.overlayExperienceLabel;

            return (
              <SkillBentoCard
                key={key}
                card={card}
                index={index}
                overlayWhatLabel={whatLabel}
                overlayExperienceLabel={experienceLabel}
              />
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
