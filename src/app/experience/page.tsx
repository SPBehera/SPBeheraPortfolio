import React from 'react';
import type { Metadata } from 'next';
import { Container } from '@/components/layout/Container';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { experiencesData } from '@/data/experience';
import { ExperienceTimeline } from '@/components/experience/ExperienceTimeline';
import { Badge } from '@/components/ui/Badge';
import { Briefcase } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Professional Experience',
  description:
    'Experience history of Siba Prasad Behera at QSpiders, Juvenilia Technology, and OCAC. Detailed roles, responsibilities, and technical contributions.',
};

export default function ExperiencePage() {
  return (
    <Container size="lg" className="py-12 sm:py-20 space-y-16">
      <SectionHeading
        eyebrow="Career History"
        title="Work Experience"
        description="Authentic engineering timeline detailing roles, responsibilities, and technical contributions across software companies."
      />

      {/* Summary Stat Box */}
      <div className="rounded-2xl border border-neutral-200 dark:border-neutral-800/80 bg-white dark:bg-neutral-900/40 p-6 flex flex-col sm:flex-row items-center justify-between gap-4 shadow-sm">
        <div className="flex items-center gap-3">
          <div className="p-2.5 rounded-xl bg-emerald-950/40 border border-emerald-800/50 text-emerald-400">
            <Briefcase className="w-5 h-5" />
          </div>
          <div>
            <h3 className="text-base font-bold text-neutral-900 dark:text-neutral-100">
              Total Professional Experience
            </h3>
            <p className="text-xs text-neutral-500 font-mono">
              September 2023 – Present (~2 Years)
            </p>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <Badge variant="emerald" size="md">
            3 Engineering Roles
          </Badge>
          <Badge variant="blue" size="md">
            Bhubaneswar, India
          </Badge>
        </div>
      </div>

      {/* Experience Timeline */}
      <div className="max-w-3xl mx-auto">
        <ExperienceTimeline experiences={experiencesData} />
      </div>
    </Container>
  );
}
