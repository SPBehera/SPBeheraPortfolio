'use client';

import React, { useState, useMemo } from 'react';
import { Container } from '@/components/layout/Container';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { projectsData } from '@/data/projects';
import { ProjectCategory } from '@/types/project';
import { ProjectFilter } from '@/components/projects/ProjectFilter';
import { ProjectGrid } from '@/components/projects/ProjectGrid';

const CATEGORIES: ProjectCategory[] = [
  'All',
  'Full Stack',
  'Web Development',
  'Mobile Development',
  'Backend Development',
];

export default function ProjectsPage() {
  const [activeCategory, setActiveCategory] = useState<ProjectCategory>('All');

  // Compute counts
  const counts = useMemo(() => {
    const map: Record<string, number> = { All: projectsData.length };
    CATEGORIES.forEach((cat) => {
      if (cat !== 'All') {
        map[cat] = projectsData.filter((p) => p.category === cat).length;
      }
    });
    return map;
  }, []);

  // Filtered list
  const filteredProjects = useMemo(() => {
    if (activeCategory === 'All') return projectsData;
    return projectsData.filter((p) => p.category === activeCategory);
  }, [activeCategory]);

  return (
    <Container size="xl" className="py-12 sm:py-20 space-y-12">
      <SectionHeading
        eyebrow="Portfolio & Case Studies"
        title="Featured Software Projects"
        description="A showcase of real-world production systems, over-the-air update managers, clinic workflows, and mobile applications."
      />

      {/* Filter Tabs */}
      <ProjectFilter
        categories={CATEGORIES}
        activeCategory={activeCategory}
        onSelectCategory={setActiveCategory}
        counts={counts}
      />

      {/* Grid */}
      <ProjectGrid projects={filteredProjects} />
    </Container>
  );
}
