import React from 'react';
import { skillGroups } from '@/data/skills';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { SkillCard } from '@/components/skills/SkillCard';
import { Button } from '@/components/ui/Button';
import { ArrowRight } from 'lucide-react';

export const SkillsSection: React.FC = () => {
  return (
    <section className="py-16 sm:py-24 border-t border-neutral-200 dark:border-neutral-800/80">
      <SectionHeading
        eyebrow="Technical Stack"
        title="Categorized Skills & Tooling"
        description="Comprehensive technical toolkit across client-side interfaces, server-side microservices, databases, and mobile frameworks."
      />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-10">
        {skillGroups.map((group) => (
          <SkillCard key={group.category} group={group} />
        ))}
      </div>

      <div className="text-center">
        <Button
          href="/skills"
          variant="outline"
          size="md"
          rightIcon={<ArrowRight className="w-4 h-4" />}
        >
          Explore All Categorized Skills
        </Button>
      </div>
    </section>
  );
};
