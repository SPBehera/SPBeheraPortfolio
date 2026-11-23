'use client';

import React from 'react';
import Link from 'next/link';
import { Container } from './Container';
import { NAV_LINKS, SITE_METADATA } from '@/lib/constants';
import { SocialLinks } from '@/components/ui/SocialLinks';
import { MapPin, Mail, ArrowUpRight } from 'lucide-react';

export const Footer: React.FC = () => {
  const currentYear = 2025;

  return (
    <footer className="border-t border-neutral-200 dark:border-neutral-800/80 bg-neutral-100/50 dark:bg-neutral-950/60 mt-20 transition-colors">
      <Container size="xl" className="py-12 sm:py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 lg:gap-12">
          {/* Column 1: Info */}
          <div className="md:col-span-2 flex flex-col">
            <div className="flex items-center gap-2 mb-3">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-blue-600 to-emerald-500 flex items-center justify-center text-white font-bold text-xs">
                SB
              </div>
              <span className="font-bold text-base text-neutral-900 dark:text-neutral-100">
                {SITE_METADATA.name}
              </span>
            </div>
            <p className="text-sm text-neutral-600 dark:text-neutral-400 max-w-md leading-relaxed mb-4">
              Full Stack & Mobile App Developer specializing in React, Next.js, React Native, Node.js, and TypeScript. Building scalable, production-grade applications.
            </p>
            <div className="flex items-center gap-2 text-xs text-neutral-500 dark:text-neutral-400 mb-6">
              <MapPin className="w-3.5 h-3.5 text-emerald-500" />
              <span>{SITE_METADATA.location}</span>
            </div>
            <SocialLinks iconSize="sm" />
          </div>

          {/* Column 2: Navigation Links */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-wider text-neutral-900 dark:text-neutral-200 mb-4">
              Navigation
            </h3>
            <ul className="space-y-2 text-sm">
              {NAV_LINKS.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-neutral-600 hover:text-emerald-500 dark:text-neutral-400 dark:hover:text-emerald-400 transition-colors inline-flex items-center gap-1"
                  >
                    <span>{link.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Get In Touch */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-wider text-neutral-900 dark:text-neutral-200 mb-4">
              Get in Touch
            </h3>
            <p className="text-xs text-neutral-600 dark:text-neutral-400 mb-3">
              Available for full-stack engineering opportunities and mobile development roles.
            </p>
            <a
              href={`mailto:${SITE_METADATA.email}`}
              className="inline-flex items-center gap-2 text-xs font-medium text-blue-600 dark:text-emerald-400 hover:underline mb-4"
            >
              <Mail className="w-3.5 h-3.5" />
              <span>{SITE_METADATA.email}</span>
            </a>
            <div className="pt-2">
              <Link
                href="/contact"
                className="inline-flex items-center gap-1.5 text-xs px-3 py-1.5 rounded-lg border border-neutral-300 dark:border-neutral-700 bg-white dark:bg-neutral-900 text-neutral-800 dark:text-neutral-200 hover:border-emerald-500 transition-colors"
              >
                <span>Send a Message</span>
                <ArrowUpRight className="w-3 h-3" />
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-neutral-200 dark:border-neutral-800/80 mt-12 pt-6 flex flex-col sm:flex-row items-center justify-between text-xs text-neutral-500 gap-4">
          <p>© {currentYear} {SITE_METADATA.name}. All rights reserved.</p>
          <p className="flex items-center gap-1 text-[11px]">
            Built with Next.js App Router, TypeScript & Tailwind CSS
          </p>
        </div>
      </Container>
    </footer>
  );
};
