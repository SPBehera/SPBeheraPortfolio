import React from 'react';
import { cn } from '@/lib/utils';

interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: 'left' | 'center' | 'right';
  className?: string;
}

export const SectionHeading: React.FC<SectionHeadingProps> = ({
  eyebrow,
  title,
  description,
  align = 'center',
  className,
}) => {
  const alignmentClass = {
    left: 'text-left items-start',
    center: 'text-center items-center',
    right: 'text-right items-end',
  }[align];

  return (
    <div className={cn('flex flex-col mb-12 sm:mb-16', alignmentClass, className)}>
      {eyebrow && (
        <span className="text-xs uppercase tracking-widest font-semibold text-emerald-400 dark:text-emerald-400 mb-2.5 px-3 py-1 rounded-full bg-emerald-950/40 border border-emerald-800/40 inline-block w-fit">
          {eyebrow}
        </span>
      )}
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-neutral-900 dark:text-neutral-50 max-w-3xl">
        {title}
      </h2>
      {description && (
        <p className="mt-3.5 text-sm sm:text-base text-neutral-600 dark:text-neutral-400 max-w-2xl leading-relaxed">
          {description}
        </p>
      )}
    </div>
  );
};
