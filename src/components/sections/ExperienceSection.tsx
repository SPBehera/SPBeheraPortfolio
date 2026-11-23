import React from 'react';
import { experiencesData } from '@/data/experience';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { ExperienceTimeline } from '@/components/experience/ExperienceTimeline';
import { Button } from '@/components/ui/Button';
import { ArrowRight } from 'lucide-react';

export const ExperienceSection: React.FC = () => {
  return (
    <section className="py-16 sm:py-24 border-t border-neutral-200 dark:border-neutral-800/80">
      <SectionHeading
        eyebrow="Career Timeline"
        title="Professional Experience"
        description="Authentic engineering timeline detailing roles, responsibilities, and technical contributions."
      />

      <div className="max-w-4xl mx-auto mb-10">
        <ExperienceTimeline experiences={experiencesData} />
      </div>

      <div className="text-center">
        <Button
          href="/experience"
          variant="outline"
          size="md"
          rightIcon={<ArrowRight className="w-4 h-4" />}
        >
          View Complete Career History
        </Button>
      </div>
    </section>
  );
};
