import React from 'react';
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { projectsData } from '@/data/projects';
import { Container } from '@/components/layout/Container';
import { ProjectDetails } from '@/components/projects/ProjectDetails';

interface PageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  return projectsData.map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = projectsData.find((p) => p.slug === slug);

  if (!project) {
    return {
      title: 'Project Not Found',
    };
  }

  return {
    title: `${project.title} | Case Study`,
    description: project.description,
    openGraph: {
      title: project.title,
      description: project.description,
      type: 'article',
    },
  };
}

export default async function ProjectDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const project = projectsData.find((p) => p.slug === slug);

  if (!project) {
    notFound();
  }

  return (
    <Container size="lg" className="py-12 sm:py-20">
      <ProjectDetails project={project} />
    </Container>
  );
}
