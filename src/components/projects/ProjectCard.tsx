import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Project } from '@/types/project';
import { Badge } from '@/components/ui/Badge';
import { ArrowUpRight } from 'lucide-react';
import { GithubIcon } from '@/components/ui/BrandIcons';

interface ProjectCardProps {
  project: Project;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  return (
    <div className="group rounded-2xl border border-neutral-200 dark:border-neutral-800/80 bg-white dark:bg-neutral-900/40 overflow-hidden hover:border-neutral-300 dark:hover:border-neutral-700 transition-all duration-300 flex flex-col justify-between shadow-sm hover:shadow-xl hover:-translate-y-1">
      {/* Project Mockup Graphic Banner */}
      <div className="relative h-48 w-full bg-neutral-950 border-b border-neutral-200 dark:border-neutral-800/80 overflow-hidden">
        {project.image ? (
          <Image
            src={project.image}
            alt={project.title}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover group-hover:scale-105 transition-transform duration-500 opacity-90 group-hover:opacity-100"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-neutral-900 to-neutral-950">
            <span className="text-xs font-mono text-neutral-400">{project.category}</span>
          </div>
        )}

        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent pointer-events-none" />

        {/* Top Badges */}
        <div className="absolute top-3 left-3 z-10 flex items-center gap-1.5">
          <Badge variant="neutral" size="sm" className="bg-neutral-950/80 backdrop-blur-md text-white border-neutral-700">
            {project.category}
          </Badge>
          {project.featured && (
            <Badge variant="emerald" size="sm" className="bg-emerald-950/80 backdrop-blur-md border-emerald-700/80">
              Featured
            </Badge>
          )}
        </div>
      </div>

      {/* Content */}
      <div className="p-6 flex-1 flex flex-col justify-between">
        <div>
          <h3 className="text-lg font-bold text-neutral-900 dark:text-neutral-100 group-hover:text-emerald-500 dark:group-hover:text-emerald-400 transition-colors line-clamp-1 mb-2">
            <Link href={`/projects/${project.slug}`}>
              {project.title}
            </Link>
          </h3>

          <p className="text-xs sm:text-sm text-neutral-600 dark:text-neutral-400 line-clamp-3 mb-5 leading-relaxed">
            {project.description}
          </p>

          {/* Tech Badges */}
          <div className="flex flex-wrap gap-1.5 mb-6">
            {project.technologies.slice(0, 5).map((tech) => (
              <Badge key={tech} variant="neutral" size="sm">
                {tech}
              </Badge>
            ))}
            {project.technologies.length > 5 && (
              <span className="text-[10px] text-neutral-500 font-mono self-center">
                +{project.technologies.length - 5}
              </span>
            )}
          </div>
        </div>

        {/* Card Actions */}
        <div className="pt-4 border-t border-neutral-100 dark:border-neutral-800/80 flex items-center justify-between">
          <Link
            href={`/projects/${project.slug}`}
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-blue-600 dark:text-emerald-400 hover:text-blue-500 dark:hover:text-emerald-300 transition-colors group/link"
          >
            <span>View Case Study</span>
            <ArrowUpRight className="w-3.5 h-3.5 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform" />
          </Link>

          <div className="flex items-center gap-2">
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`GitHub repository for ${project.title}`}
                className="p-1.5 rounded-lg border border-neutral-200 dark:border-neutral-800 text-neutral-600 dark:text-neutral-400 hover:text-neutral-950 dark:hover:text-white hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors"
              >
                <GithubIcon className="w-4 h-4" />
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
