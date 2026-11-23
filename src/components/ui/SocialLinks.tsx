import React from 'react';
import { Mail } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from '@/components/ui/BrandIcons';
import { personalData } from '@/data/personal';
import { cn } from '@/lib/utils';

interface SocialLinksProps {
  className?: string;
  iconSize?: 'sm' | 'md' | 'lg';
  showLabels?: boolean;
}

export const SocialLinks: React.FC<SocialLinksProps> = ({
  className,
  iconSize = 'md',
  showLabels = false,
}) => {
  const sizeMap = {
    sm: 'w-4 h-4',
    md: 'w-5 h-5',
    lg: 'w-6 h-6',
  };

  const links = [
    {
      name: 'GitHub',
      href: personalData.socials.github,
      icon: <GithubIcon className={sizeMap[iconSize]} />,
      label: 'github.com/SPBehera',
    },
    {
      name: 'LinkedIn',
      href: personalData.socials.linkedin,
      icon: <LinkedinIcon className={sizeMap[iconSize]} />,
      label: 'LinkedIn Profile',
    },
    {
      name: 'Email',
      href: personalData.socials.email,
      icon: <Mail className={sizeMap[iconSize]} />,
      label: personalData.socials.emailAddress,
    },
  ];

  return (
    <div className={cn('flex items-center gap-3', className)}>
      {links.map((link) => (
        <a
          key={link.name}
          href={link.href}
          target={link.name !== 'Email' ? '_blank' : undefined}
          rel={link.name !== 'Email' ? 'noopener noreferrer' : undefined}
          aria-label={link.name}
          title={link.name}
          className="inline-flex items-center gap-2 p-2.5 rounded-lg border border-neutral-300 bg-neutral-100 hover:bg-neutral-200 text-neutral-700 hover:text-neutral-950 dark:border-neutral-800 dark:bg-neutral-900/70 dark:text-neutral-400 dark:hover:text-emerald-400 dark:hover:border-emerald-500/40 dark:hover:bg-neutral-800/80 transition-all duration-200"
        >
          {link.icon}
          {showLabels && <span className="text-xs font-medium">{link.label}</span>}
        </a>
      ))}
    </div>
  );
};
