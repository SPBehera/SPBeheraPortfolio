'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { NAV_LINKS, SITE_METADATA } from '@/lib/constants';
import { ThemeToggle } from '@/components/ui/ThemeToggle';
import { Container } from './Container';
import { MobileMenu } from './MobileMenu';
import { Menu, X, FileText } from 'lucide-react';
import { Button } from '@/components/ui/Button';

export const Navbar: React.FC = () => {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <header
        className={`sticky top-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-neutral-950/85 dark:bg-neutral-950/85 bg-white/90 backdrop-blur-md border-b border-neutral-200 dark:border-neutral-800/80 shadow-sm'
            : 'bg-transparent border-b border-transparent'
        }`}
      >
        <Container size="xl">
          <div className="flex items-center justify-between h-16 sm:h-20">
            {/* Logo */}
            <Link
              href="/"
              className="flex items-center gap-2.5 group focus:outline-none"
            >
              <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-blue-600 to-emerald-500 flex items-center justify-center text-white font-bold text-sm tracking-wider shadow-md shadow-emerald-500/10 group-hover:scale-105 transition-transform duration-200">
                SB
              </div>
              <div className="flex flex-col">
                <span className="font-bold text-sm sm:text-base tracking-tight text-neutral-900 dark:text-neutral-100 group-hover:text-emerald-500 transition-colors">
                  {SITE_METADATA.name}
                </span>
                <span className="text-[10px] text-neutral-500 dark:text-neutral-400 hidden sm:block -mt-1 font-mono">
                  Full Stack & Mobile
                </span>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-1 bg-neutral-100/80 dark:bg-neutral-900/60 p-1.5 rounded-full border border-neutral-200 dark:border-neutral-800/80 backdrop-blur-sm">
              {NAV_LINKS.map((link) => {
                const isActive =
                  pathname === link.href ||
                  (link.href !== '/' && pathname.startsWith(link.href));
                return (
                  <Link
                    key={link.name}
                    href={link.href}
                    className={`relative px-3.5 py-1.5 text-xs sm:text-sm font-medium rounded-full transition-all duration-200 ${
                      isActive
                        ? 'text-white bg-blue-600 dark:bg-emerald-600 shadow-sm font-semibold'
                        : 'text-neutral-600 hover:text-neutral-950 dark:text-neutral-300 dark:hover:text-white hover:bg-neutral-200/50 dark:hover:bg-neutral-800/50'
                    }`}
                  >
                    {link.name}
                  </Link>
                );
              })}
            </nav>

            {/* Right Controls */}
            <div className="flex items-center gap-2.5">
              <ThemeToggle />

              <div className="hidden sm:block">
                <Button
                  href="/resume"
                  variant="outline"
                  size="sm"
                  leftIcon={<FileText className="w-3.5 h-3.5" />}
                  className="text-xs"
                >
                  Resume
                </Button>
              </div>

              {/* Mobile menu hamburger */}
              <button
                type="button"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="md:hidden inline-flex items-center justify-center p-2 rounded-lg border border-neutral-200 dark:border-neutral-800 text-neutral-600 dark:text-neutral-300 hover:bg-neutral-100 dark:hover:bg-neutral-800/80 focus:outline-none"
                aria-label="Toggle Navigation Menu"
              >
                {mobileMenuOpen ? (
                  <X className="w-5 h-5 text-neutral-900 dark:text-neutral-100" />
                ) : (
                  <Menu className="w-5 h-5 text-neutral-900 dark:text-neutral-100" />
                )}
              </button>
            </div>
          </div>
        </Container>
      </header>

      {/* Mobile Drawer */}
      <MobileMenu
        isOpen={mobileMenuOpen}
        onClose={() => setMobileMenuOpen(false)}
      />
    </>
  );
};
