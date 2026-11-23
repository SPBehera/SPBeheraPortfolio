import React from 'react';
import { projectsData } from '@/data/projects';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { ProjectGrid } from '@/components/projects/ProjectGrid';
import { Button } from '@/components/ui/Button';
import { ArrowRight } from 'lucide-react';

export const FeaturedProjectsSection: React.FC = () => {
  const featured = projectsData.filter((p) => p.featured).slice(0, 3);

  return (
    <section className="py-16 sm:py-24 border-t border-neutral-200 dark:border-neutral-800/80">
      <SectionHeading
        eyebrow="Selected Work"
        title="Featured Engineering Projects"
        description="Production systems, enterprise healthcare software, over-the-air update managers, and mobile applications."
      />

      <div className="mb-12">
        <ProjectGrid projects={featured} />
      </div>

      <div className="text-center">
        <Button
          href="/projects"
          variant="emerald"
          size="lg"
          rightIcon={<ArrowRight className="w-4 h-4" />}
        >
          View All {projectsData.length} Projects
        </Button>
      </div>
    </section>
  );
};
