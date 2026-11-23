import React from 'react';
import { Container } from '@/components/layout/Container';
import { Button } from '@/components/ui/Button';
import { ArrowLeft, Home, HelpCircle } from 'lucide-react';

export default function NotFound() {
  return (
    <Container size="md" className="py-24 sm:py-32 text-center">
      <div className="rounded-3xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900/40 p-8 sm:p-14 shadow-lg">
        <div className="w-16 h-16 rounded-2xl bg-neutral-100 dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 flex items-center justify-center text-emerald-500 mx-auto mb-6">
          <HelpCircle className="w-8 h-8" />
        </div>

        <span className="text-xs font-mono font-bold tracking-widest text-emerald-500 uppercase px-3 py-1 rounded-full bg-emerald-950/40 border border-emerald-800/40 inline-block mb-3">
          404 Error
        </span>

        <h1 className="text-3xl sm:text-4xl font-bold text-neutral-900 dark:text-neutral-50 mb-3">
          Page Not Found
        </h1>

        <p className="text-sm sm:text-base text-neutral-600 dark:text-neutral-400 max-w-md mx-auto mb-8 leading-relaxed">
          The requested page or project case study could not be located. It may have been moved, renamed, or is unavailable.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-3">
          <Button
            href="/"
            variant="emerald"
            size="md"
            leftIcon={<Home className="w-4 h-4" />}
          >
            Return to Home
          </Button>
          <Button
            href="/projects"
            variant="outline"
            size="md"
            leftIcon={<ArrowLeft className="w-4 h-4" />}
          >
            Browse Projects
          </Button>
        </div>
      </div>
    </Container>
  );
}
