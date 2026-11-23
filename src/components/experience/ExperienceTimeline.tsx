import React from 'react';
import { ExperienceItem } from '@/types/experience';
import { Badge } from '@/components/ui/Badge';
import { Briefcase, Calendar, MapPin, CheckCircle, ChevronRight } from 'lucide-react';

interface ExperienceTimelineProps {
  experiences: ExperienceItem[];
}

export const ExperienceTimeline: React.FC<ExperienceTimelineProps> = ({ experiences }) => {
  return (
    <div className="relative border-l-2 border-neutral-200 dark:border-neutral-800 ml-4 sm:ml-6 md:ml-8 space-y-12">
      {experiences.map((exp, index) => (
        <div key={`${exp.company}-${index}`} className="relative pl-6 sm:pl-8 md:pl-10 group">
          {/* Bullet node */}
          <div className="absolute -left-[9px] top-1.5 w-4 h-4 rounded-full bg-neutral-900 border-2 border-emerald-500 group-hover:scale-125 group-hover:bg-emerald-500 transition-all duration-200 shadow-sm shadow-emerald-500/20" />

          {/* Timeline Card */}
          <div className="rounded-2xl border border-neutral-200 dark:border-neutral-800/80 bg-white dark:bg-neutral-900/40 p-6 sm:p-8 hover:border-neutral-300 dark:hover:border-neutral-700/80 transition-all duration-300 shadow-sm hover:shadow-md">
            {/* Header info */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2.5 mb-4">
              <div>
                <div className="flex items-center gap-2">
                  <h3 className="text-lg sm:text-xl font-bold text-neutral-900 dark:text-neutral-100">
                    {exp.position}
                  </h3>
                  <Badge variant={exp.type === 'Full-time' ? 'emerald' : 'blue'} size="sm">
                    {exp.type}
                  </Badge>
                </div>
                <div className="flex items-center gap-2 text-sm font-semibold text-blue-600 dark:text-emerald-400 mt-1">
                  <Briefcase className="w-4 h-4 shrink-0" />
                  <span>{exp.company}</span>
                  <span className="text-neutral-400 dark:text-neutral-600">•</span>
                  <span className="inline-flex items-center gap-1 text-xs text-neutral-500 font-normal">
                    <MapPin className="w-3.5 h-3.5" />
                    {exp.location}
                  </span>
                </div>
              </div>

              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-medium text-neutral-600 dark:text-neutral-300 bg-neutral-100 dark:bg-neutral-800/80 border border-neutral-200 dark:border-neutral-700 w-fit">
                <Calendar className="w-3.5 h-3.5 text-neutral-400" />
                <span>{exp.duration}</span>
              </div>
            </div>

            <p className="text-sm text-neutral-600 dark:text-neutral-400 mb-5 leading-relaxed">
              {exp.description}
            </p>

            {/* Responsibilities */}
            <div className="mb-5">
              <h4 className="text-xs font-bold uppercase tracking-wider text-neutral-700 dark:text-neutral-300 mb-2.5">
                Key Responsibilities
              </h4>
              <ul className="space-y-2 text-xs sm:text-sm text-neutral-600 dark:text-neutral-400">
                {exp.responsibilities.map((resp, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <ChevronRight className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                    <span className="leading-relaxed">{resp}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contributions */}
            {exp.contributions && exp.contributions.length > 0 && (
              <div className="mb-5">
                <h4 className="text-xs font-bold uppercase tracking-wider text-neutral-700 dark:text-neutral-300 mb-2.5">
                  Key Technical Impact
                </h4>
                <ul className="space-y-1.5 text-xs sm:text-sm text-neutral-600 dark:text-neutral-400">
                  {exp.contributions.map((item, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <CheckCircle className="w-3.5 h-3.5 text-blue-500 shrink-0 mt-0.5" />
                      <span className="leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Tech stack badges */}
            <div>
              <h4 className="text-[11px] font-mono uppercase tracking-wider text-neutral-500 mb-2">
                Technologies Used
              </h4>
              <div className="flex flex-wrap gap-1.5">
                {exp.technologies.map((tech) => (
                  <Badge key={tech} variant="neutral" size="sm">
                    {tech}
                  </Badge>
                ))}
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
