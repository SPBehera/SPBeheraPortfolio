'use client';

import React from 'react';
import { ProjectCategory } from '@/types/project';

interface ProjectFilterProps {
  categories: ProjectCategory[];
  activeCategory: ProjectCategory;
  onSelectCategory: (category: ProjectCategory) => void;
  counts?: Record<string, number>;
}

export const ProjectFilter: React.FC<ProjectFilterProps> = ({
  categories,
  activeCategory,
  onSelectCategory,
  counts,
}) => {
  return (
    <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
      {categories.map((cat) => {
        const isActive = activeCategory === cat;
        return (
          <button
            key={cat}
            onClick={() => onSelectCategory(cat)}
            type="button"
            className={`px-4 py-2 rounded-full text-xs sm:text-sm font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-emerald-500/50 cursor-pointer ${
              isActive
                ? 'bg-blue-600 dark:bg-emerald-600 text-white shadow-md shadow-emerald-500/10'
                : 'bg-neutral-100 hover:bg-neutral-200 text-neutral-700 dark:bg-neutral-900/80 dark:hover:bg-neutral-800 dark:text-neutral-300 border border-neutral-200 dark:border-neutral-800'
            }`}
          >
            <span>{cat}</span>
            {counts && counts[cat] !== undefined && (
              <span
                className={`ml-2 text-[11px] px-1.5 py-0.5 rounded-full ${
                  isActive
                    ? 'bg-white/20 text-white'
                    : 'bg-neutral-200 dark:bg-neutral-800 text-neutral-600 dark:text-neutral-400'
                }`}
              >
                {counts[cat]}
              </span>
            )}
          </button>
        );
      })}
    </div>
  );
};
