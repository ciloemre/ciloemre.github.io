"use client";

import { motion } from "framer-motion";
import { LayoutGrid, Rows3 } from "lucide-react";
import type { LocaleBlock } from "@/lib/portfolio-copy";
import { scrollReveal, scrollRevealEase } from "@/lib/motion-presets";
import { usePortfolioCopy } from "@/components/use-portfolio-copy";
import { useDirectionalReveal } from "@/hooks/use-directional-reveal";

const iconBox =
  "mb-4 flex h-10 w-10 items-center justify-center rounded-xl border border-slate-200/90 bg-slate-100/90 text-slate-700 dark:border-white/10 dark:bg-zinc-900 dark:text-white/85";

const icons = [LayoutGrid, Rows3] as const;

type ProjectItem = LocaleBlock["projects"]["items"][number];

function ProjectCard({
  project,
  index,
}: {
  project: ProjectItem;
  index: number;
}) {
  const Icon = icons[index] ?? LayoutGrid;

  const reveal = useDirectionalReveal<HTMLLIElement>({
    margin: "-40px",
    transition: {
      ...scrollReveal.item,
      delay: index * scrollReveal.stagger,
    },
    hidden: { opacity: 0, y: 18 },
    visible: { opacity: 1, y: 0 },
  });

  return (
    <motion.li
      ref={reveal.ref}
      initial={reveal.initial}
      animate={reveal.animate}
      transition={reveal.transition}
      whileHover={{
        scale: 1.008,
        transition: { duration: 0.32, ease: scrollRevealEase },
      }}
      className="origin-center"
    >
      <div
        className="flex h-full min-h-[200px] flex-col rounded-2xl border border-slate-200/90 bg-white p-6 shadow-sm dark:border-white/12 dark:bg-zinc-950"
      >
        <div className={iconBox}>
          <Icon className="h-5 w-5" strokeWidth={1.5} />
        </div>
        <h3 className="text-[15px] font-semibold leading-snug tracking-[-0.02em] text-slate-900 dark:text-white/90">
          {project.title}
        </h3>
        <p className="mt-3 flex-1 text-sm leading-[1.68] tracking-tight text-slate-600 dark:text-white/80">
          {project.description}
        </p>
      </div>
    </motion.li>
  );
}

export function ProjectsSection() {
  const c = usePortfolioCopy();

  return (
    <section
      id="projects"
      className="scroll-mt-24 border-t border-black/10 bg-white py-16 dark:border-white/20 dark:bg-black sm:py-20"
      aria-labelledby="projects-heading"
    >
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={scrollReveal.heading}
        >
          <h2
            id="projects-heading"
            className="text-2xl font-semibold tracking-[-0.02em] text-slate-900 sm:text-3xl dark:text-white/90"
          >
            {c.projects.title}
          </h2>
          <p className="mt-4 max-w-2xl text-[15px] leading-[1.68] tracking-tight text-slate-600 dark:text-white/80 sm:text-base">
            {c.projects.subtitle}
          </p>
        </motion.div>

        <ul className="mt-12 grid grid-cols-1 gap-4 md:grid-cols-2">
          {c.projects.items.map((project, index) => (
            <ProjectCard key={project.slug} project={project} index={index} />
          ))}
        </ul>
      </div>
    </section>
  );
}
