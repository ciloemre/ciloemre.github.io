"use client";

import { motion } from "framer-motion";
import type { LocaleBlock } from "@/lib/portfolio-copy";
import { scrollReveal } from "@/lib/motion-presets";
import { usePortfolioCopy } from "@/components/use-portfolio-copy";
import { useDirectionalReveal } from "@/hooks/use-directional-reveal";

type ExperienceRole = LocaleBlock["experience"]["roles"][number];

function ExperienceRoleRow({
  role,
  index,
  isLast,
}: {
  role: ExperienceRole;
  index: number;
  isLast: boolean;
}) {
  const reveal = useDirectionalReveal<HTMLLIElement>({
    margin: "-40px",
    transition: {
      ...scrollReveal.item,
      delay: index * scrollReveal.stagger,
    },
    hidden: { opacity: 0, x: -8 },
    visible: { opacity: 1, x: 0 },
  });

  return (
    <motion.li
      ref={reveal.ref}
      initial={reveal.initial}
      animate={reveal.animate}
      transition={reveal.transition}
      className={`flex gap-6 ${isLast ? "" : "pb-12"}`}
    >
      <div className="flex w-3 shrink-0 flex-col items-center pt-1">
        <span
          className="h-2.5 w-2.5 shrink-0 rounded-full border-2 border-zinc-300 bg-[var(--background)] dark:border-zinc-600"
          aria-hidden
        />
        {!isLast && (
          <span className="mt-3 min-h-[3rem] w-px flex-1 bg-zinc-200 dark:bg-zinc-800" />
        )}
      </div>
      <div className="min-w-0 flex-1">
        <p className="text-xs font-medium uppercase tracking-[0.12em] text-slate-500 dark:text-white/70">
          {role.company}
        </p>
        <p className="mt-1.5 text-base font-semibold tracking-tight text-slate-900 dark:text-white/90">
          {role.title}
        </p>
        {role.period ? (
          <p className="mt-1.5 text-sm font-medium tracking-tight text-slate-500 dark:text-white/65">
            {role.period}
          </p>
        ) : null}

        {role.bullets && role.bullets.length > 0 ? (
          <ul
            className="mt-5 list-none space-y-4 pl-0 text-left"
            aria-label={`${role.company} responsibilities`}
          >
            {role.bullets.map((item) => (
              <li key={item.categoryLabel}>
                <p className="text-sm leading-relaxed tracking-tight text-slate-600 dark:text-white/80">
                  <span className="font-semibold tracking-tight text-slate-900 dark:text-white/90">
                    {item.categoryLabel}
                  </span>{" "}
                  {item.text}
                </p>
              </li>
            ))}
          </ul>
        ) : role.body ? (
          <p className="mt-5 max-w-xl text-sm leading-[1.68] tracking-tight text-slate-600 dark:text-white/80">
            {role.body}
          </p>
        ) : null}
      </div>
    </motion.li>
  );
}

export function ExperienceSection() {
  const c = usePortfolioCopy();

  return (
    <section
      id="experience"
      className="scroll-mt-24 border-t border-black/10 bg-white py-16 dark:border-white/20 dark:bg-black sm:py-20"
      aria-labelledby="experience-heading"
    >
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={scrollReveal.heading}
        >
          <h2
            id="experience-heading"
            className="text-2xl font-semibold tracking-[-0.02em] text-slate-900 sm:text-3xl dark:text-white/90"
          >
            {c.experience.title}
          </h2>
          {c.experience.subtitle ? (
            <p className="mt-4 max-w-2xl text-[15px] leading-[1.68] tracking-tight text-slate-600 dark:text-white/80 sm:text-base">
              {c.experience.subtitle}
            </p>
          ) : null}
        </motion.div>

        <ol className="mt-12 list-none space-y-0 pl-0">
          {c.experience.roles.map((role, index) => (
            <ExperienceRoleRow
              key={`${role.company}-${index}`}
              role={role}
              index={index}
              isLast={index === c.experience.roles.length - 1}
            />
          ))}
        </ol>
      </div>
    </section>
  );
}
