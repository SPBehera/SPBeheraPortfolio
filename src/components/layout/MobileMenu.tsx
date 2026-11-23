'use client';

import React, { useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { NAV_LINKS, SITE_METADATA } from '@/lib/constants';
import { SocialLinks } from '@/components/ui/SocialLinks';
import { X, ArrowRight, FileText } from 'lucide-react';
import { Button } from '@/components/ui/Button';

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export const MobileMenu: React.FC<MobileMenuProps> = ({ isOpen, onClose }) => {
  const pathname = usePathname();

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 md:hidden flex flex-col bg-neutral-950/95 dark:bg-neutral-950/95 backdrop-blur-xl transition-all duration-300">
      <div className="flex items-center justify-between p-4 border-b border-neutral-800">
        <Link
          href="/"
          onClick={onClose}
          className="flex items-center gap-2"
        >
          <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-blue-600 to-emerald-500 flex items-center justify-center text-white font-bold text-xs">
            SB
          </div>
          <span className="font-bold text-sm text-neutral-100">
            {SITE_METADATA.name}
          </span>
        </Link>
        <button
          onClick={onClose}
          className="p-2 rounded-lg border border-neutral-800 text-neutral-400 hover:text-white"
          aria-label="Close menu"
        >
          <X className="w-5 h-5" />
        </button>
      </div>

      <div className="flex-1 overflow-y-auto px-6 py-6 flex flex-col justify-between">
        <nav className="flex flex-col gap-2">
          {NAV_LINKS.map((link) => {
            const isActive =
              pathname === link.href ||
              (link.href !== '/' && pathname.startsWith(link.href));
            return (
              <Link
                key={link.name}
                href={link.href}
                onClick={onClose}
                className={`flex items-center justify-between px-4 py-3 rounded-xl text-base font-medium transition-all ${
                  isActive
                    ? 'bg-neutral-800/80 text-emerald-400 border border-emerald-500/30'
                    : 'text-neutral-300 hover:bg-neutral-900/60 hover:text-white'
                }`}
              >
                <span>{link.name}</span>
                <ArrowRight className="w-4 h-4 opacity-50" />
              </Link>
            );
          })}
        </nav>

        <div className="pt-6 border-t border-neutral-800/80 flex flex-col gap-4">
          <Button
            href="/resume"
            onClick={onClose}
            variant="emerald"
            size="md"
            leftIcon={<FileText className="w-4 h-4" />}
            className="w-full"
          >
            View Resume
          </Button>
          <div className="flex justify-center">
            <SocialLinks iconSize="md" />
          </div>
          <p className="text-center text-xs text-neutral-500">
            Bhubaneswar, Odisha, India
          </p>
        </div>
      </div>
    </div>
  );
};
