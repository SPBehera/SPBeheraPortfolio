import React from 'react';
import { cn } from '@/lib/utils';

interface BadgeProps {
  children: React.ReactNode;
  variant?: 'default' | 'emerald' | 'blue' | 'purple' | 'outline' | 'neutral';
  size?: 'sm' | 'md';
  className?: string;
  icon?: React.ReactNode;
}

export const Badge: React.FC<BadgeProps> = ({
  children,
  variant = 'default',
  size = 'md',
  className,
  icon,
}) => {
  const baseStyles = 'inline-flex items-center font-medium rounded-full tracking-wide transition-colors';

  const sizeStyles = {
    sm: 'text-xs px-2.5 py-0.5 gap-1',
    md: 'text-xs px-3 py-1 gap-1.5',
  };

  const variantStyles = {
    default:
      'bg-blue-950/40 text-blue-400 border border-blue-800/50 dark:bg-blue-950/60 dark:text-blue-300 dark:border-blue-800/60',
    emerald:
      'bg-emerald-950/40 text-emerald-400 border border-emerald-800/50 dark:bg-emerald-950/60 dark:text-emerald-300 dark:border-emerald-800/60',
    blue:
      'bg-sky-950/40 text-sky-400 border border-sky-800/50 dark:bg-sky-950/60 dark:text-sky-300 dark:border-sky-800/60',
    purple:
      'bg-indigo-950/40 text-indigo-400 border border-indigo-800/50 dark:bg-indigo-950/60 dark:text-indigo-300 dark:border-indigo-800/60',
    neutral:
      'bg-neutral-800/60 text-neutral-300 border border-neutral-700/60 dark:bg-neutral-800/80 dark:text-neutral-300 dark:border-neutral-700',
    outline:
      'bg-transparent text-neutral-400 border border-neutral-700/80 dark:text-neutral-400 dark:border-neutral-700',
  };

  return (
    <span className={cn(baseStyles, sizeStyles[size], variantStyles[variant], className)}>
      {icon && <span className="inline-flex shrink-0">{icon}</span>}
      <span>{children}</span>
    </span>
  );
};
