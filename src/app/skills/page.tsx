import React from 'react';
import type { Metadata } from 'next';
import { Container } from '@/components/layout/Container';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { skillGroups } from '@/data/skills';
import { SkillCard } from '@/components/skills/SkillCard';
import { Layers, ShieldCheck, Zap } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Skills & Tech Stack',
  description:
    'Comprehensive technical skill set of Siba Prasad Behera across Frontend, Backend, Mobile, Database, and Developer Tooling.',
};

export default function SkillsPage() {
  const allSkillsCount = skillGroups.reduce(
    (acc, group) => acc + group.skills.length,
    0
  );

  return (
    <Container size="xl" className="py-12 sm:py-20 space-y-16">
      <SectionHeading
        eyebrow="Technical Capabilities"
        title="Skills & Technologies"
        description="Organized into clean architectural domains. Every technology listed has been utilized in production or real-world application builds."
      />

      {/* Architectural Principles Banner */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        <div className="rounded-2xl border border-neutral-200 dark:border-neutral-800/80 bg-white dark:bg-neutral-900/40 p-5 space-y-2 shadow-sm">
          <div className="flex items-center gap-2 text-emerald-500">
            <Zap className="w-4 h-4" />
            <h3 className="text-sm font-bold text-neutral-900 dark:text-neutral-100">
              Clean & Type-Safe
            </h3>
          </div>
          <p className="text-xs text-neutral-600 dark:text-neutral-400 leading-relaxed">
            Writing strict TypeScript across client and server layers to minimize runtime failures and maximize maintainability.
          </p>
        </div>

        <div className="rounded-2xl border border-neutral-200 dark:border-neutral-800/80 bg-white dark:bg-neutral-900/40 p-5 space-y-2 shadow-sm">
          <div className="flex items-center gap-2 text-blue-500">
            <Layers className="w-4 h-4" />
            <h3 className="text-sm font-bold text-neutral-900 dark:text-neutral-100">
              Modular Architecture
            </h3>
          </div>
          <p className="text-xs text-neutral-600 dark:text-neutral-400 leading-relaxed">
            Designing reusable UI components, structured REST controllers, and normalized schemas that scale with application complexity.
          </p>
        </div>

        <div className="rounded-2xl border border-neutral-200 dark:border-neutral-800/80 bg-white dark:bg-neutral-900/40 p-5 space-y-2 shadow-sm">
          <div className="flex items-center gap-2 text-purple-500">
            <ShieldCheck className="w-4 h-4" />
            <h3 className="text-sm font-bold text-neutral-900 dark:text-neutral-100">
              Enterprise Reliability
            </h3>
          </div>
          <p className="text-xs text-neutral-600 dark:text-neutral-400 leading-relaxed">
            Practical experience engineering healthcare and inventory workflows with role-based authorization and transactional integrity.
          </p>
        </div>
      </div>

      {/* Categorized Skills Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
        {skillGroups.map((group) => (
          <SkillCard key={group.category} group={group} />
        ))}
      </div>

      {/* Footer Info */}
      <div className="rounded-2xl border border-neutral-200 dark:border-neutral-800/80 bg-neutral-50 dark:bg-neutral-900/30 p-6 text-center text-xs text-neutral-500 max-w-2xl mx-auto">
        <p>
          Total of {allSkillsCount} specialized tools and frameworks. Focused on production engineering without arbitrary proficiency percentages.
        </p>
      </div>
    </Container>
  );
}
