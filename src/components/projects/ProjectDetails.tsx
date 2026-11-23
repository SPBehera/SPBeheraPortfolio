import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Project } from '@/types/project';
import { Badge } from '@/components/ui/Badge';
import { Button } from '@/components/ui/Button';
import {
  ArrowLeft,
  CheckCircle2,
  AlertTriangle,
  Lightbulb,
  UserCheck,
  ExternalLink,
  Calendar,
  Layers,
} from 'lucide-react';
import { GithubIcon } from '@/components/ui/BrandIcons';

interface ProjectDetailsProps {
  project: Project;
}

export const ProjectDetails: React.FC<ProjectDetailsProps> = ({ project }) => {
  return (
    <article className="max-w-4xl mx-auto space-y-12">
      {/* Back button */}
      <div>
        <Link
          href="/projects"
          className="inline-flex items-center gap-2 text-xs sm:text-sm font-medium text-neutral-500 hover:text-emerald-500 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to All Projects</span>
        </Link>
      </div>

      {/* Header section */}
      <header className="space-y-4">
        <div className="flex flex-wrap items-center gap-2.5">
          <Badge variant="emerald" size="md">
            {project.category}
          </Badge>
          {project.completionDate && (
            <span className="inline-flex items-center gap-1 text-xs text-neutral-500 dark:text-neutral-400 font-mono">
              <Calendar className="w-3.5 h-3.5" />
              Completed {project.completionDate}
            </span>
          )}
        </div>

        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-neutral-900 dark:text-neutral-50 leading-tight">
          {project.title}
        </h1>

        <p className="text-base sm:text-lg text-neutral-600 dark:text-neutral-300 leading-relaxed max-w-3xl">
          {project.tagline}
        </p>

        {/* Action Links */}
        <div className="flex flex-wrap items-center gap-3 pt-2">
          {project.githubUrl && (
            <Button
              href={project.githubUrl}
              external
              variant="outline"
              size="sm"
              leftIcon={<GithubIcon className="w-4 h-4" />}
            >
              View Repository
            </Button>
          )}
          {project.liveDemoUrl && (
            <Button
              href={project.liveDemoUrl}
              external
              variant="emerald"
              size="sm"
              rightIcon={<ExternalLink className="w-4 h-4" />}
            >
              Live Demo / Details
            </Button>
          )}
        </div>
      </header>

      {/* Project Mockup Graphic Banner */}
      <div className="rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-neutral-950 h-72 sm:h-96 relative overflow-hidden shadow-xl">
        {project.image ? (
          <Image
            src={project.image}
            alt={project.title}
            fill
            sizes="(max-width: 1024px) 100vw, 896px"
            className="object-cover"
            priority
          />
        ) : (
          <div className="w-full h-full flex flex-col items-center justify-center bg-gradient-to-br from-neutral-900 via-neutral-950 to-neutral-900 text-center p-6">
            <div className="w-16 h-16 rounded-2xl bg-neutral-800 border border-neutral-700 flex items-center justify-center text-emerald-400 mb-4 shadow-xl">
              <Layers className="w-8 h-8" />
            </div>
            <span className="text-xs font-mono text-emerald-400 tracking-wider uppercase mb-1">
              Architecture & Case Study
            </span>
            <p className="text-xs text-neutral-400">
              {project.category}
            </p>
          </div>
        )}
      </div>

      {/* Tech Stack Pills */}
      <section className="rounded-2xl border border-neutral-200 dark:border-neutral-800/80 bg-white dark:bg-neutral-900/40 p-6 sm:p-7 shadow-sm">
        <h2 className="text-sm font-bold uppercase tracking-wider text-neutral-800 dark:text-neutral-200 mb-3">
          Technologies & Tools
        </h2>
        <div className="flex flex-wrap gap-2">
          {project.technologies.map((tech) => (
            <Badge key={tech} variant="blue" size="md">
              {tech}
            </Badge>
          ))}
        </div>
      </section>

      {/* Overview & Description */}
      <section className="space-y-4">
        <h2 className="text-xl sm:text-2xl font-bold text-neutral-900 dark:text-neutral-100">
          Project Overview
        </h2>
        <p className="text-sm sm:text-base text-neutral-600 dark:text-neutral-300 leading-relaxed">
          {project.description}
        </p>
      </section>

      {/* Key Features */}
      <section className="space-y-4">
        <h2 className="text-xl sm:text-2xl font-bold text-neutral-900 dark:text-neutral-100">
          Core Features & Capabilities
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {project.features.map((feature, i) => (
            <div
              key={i}
              className="flex items-start gap-2.5 p-3.5 rounded-xl border border-neutral-200 dark:border-neutral-800/70 bg-white dark:bg-neutral-900/30"
            >
              <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
              <span className="text-xs sm:text-sm text-neutral-700 dark:text-neutral-300 leading-relaxed">
                {feature}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* My Role & Responsibilities */}
      <section className="rounded-2xl border border-neutral-200 dark:border-neutral-800/80 bg-white dark:bg-neutral-900/40 p-6 sm:p-8 space-y-3 shadow-sm">
        <div className="flex items-center gap-2 text-emerald-500 dark:text-emerald-400">
          <UserCheck className="w-5 h-5" />
          <h2 className="text-lg font-bold text-neutral-900 dark:text-neutral-100">
            My Role & Engineering Responsibilities
          </h2>
        </div>
        <p className="text-sm sm:text-base text-neutral-600 dark:text-neutral-300 leading-relaxed">
          {project.role}
        </p>
      </section>

      {/* Challenges & Solutions */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="rounded-2xl border border-amber-900/30 dark:border-amber-900/40 bg-amber-950/10 dark:bg-amber-950/20 p-6 space-y-3">
          <div className="flex items-center gap-2 text-amber-500">
            <AlertTriangle className="w-5 h-5 shrink-0" />
            <h3 className="font-bold text-base text-neutral-900 dark:text-neutral-100">
              Technical Challenge
            </h3>
          </div>
          <p className="text-xs sm:text-sm text-neutral-700 dark:text-neutral-300 leading-relaxed">
            {project.challenges}
          </p>
        </div>

        <div className="rounded-2xl border border-emerald-900/30 dark:border-emerald-900/40 bg-emerald-950/10 dark:bg-emerald-950/20 p-6 space-y-3">
          <div className="flex items-center gap-2 text-emerald-500">
            <Lightbulb className="w-5 h-5 shrink-0" />
            <h3 className="font-bold text-base text-neutral-900 dark:text-neutral-100">
              Implemented Solution
            </h3>
          </div>
          <p className="text-xs sm:text-sm text-neutral-700 dark:text-neutral-300 leading-relaxed">
            {project.solutions}
          </p>
        </div>
      </div>

      {/* Next / Back navigation */}
      <div className="pt-8 border-t border-neutral-200 dark:border-neutral-800/80 flex items-center justify-between">
        <Link
          href="/projects"
          className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-neutral-600 dark:text-neutral-300 hover:text-emerald-500 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Explore All Projects</span>
        </Link>
        <Link
          href="/contact"
          className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-blue-600 dark:text-emerald-400 hover:underline"
        >
          <span>Discuss This Project</span>
        </Link>
      </div>
    </article>
  );
};
