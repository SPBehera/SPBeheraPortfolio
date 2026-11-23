import React from 'react';
import { personalData } from '@/data/personal';
import { educationData } from '@/data/education';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Button } from '@/components/ui/Button';
import { Badge } from '@/components/ui/Badge';
import { ArrowRight, GraduationCap, Briefcase } from 'lucide-react';

export const AboutSection: React.FC = () => {
  const edu = educationData[0];

  return (
    <section className="py-16 sm:py-24 border-t border-neutral-200 dark:border-neutral-800/80">
      <SectionHeading
        eyebrow="Profile Overview"
        title="Background & Engineering Focus"
        description="A look into my practical experience, academic foundation, and full-stack software development journey."
      />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left Column: Summary narrative */}
        <div className="lg:col-span-7 space-y-5">
          <div className="rounded-2xl border border-neutral-200 dark:border-neutral-800/80 bg-white dark:bg-neutral-900/40 p-6 sm:p-8 space-y-4 shadow-sm">
            <h3 className="text-lg font-bold text-neutral-900 dark:text-neutral-100">
              Who I Am
            </h3>
            {personalData.biography.slice(0, 2).map((paragraph, index) => (
              <p
                key={index}
                className="text-sm sm:text-base text-neutral-600 dark:text-neutral-300 leading-relaxed"
              >
                {paragraph}
              </p>
            ))}

            <div className="pt-2">
              <Button
                href="/about"
                variant="outline"
                size="sm"
                rightIcon={<ArrowRight className="w-3.5 h-3.5" />}
              >
                Read Full Biography & Journey
              </Button>
            </div>
          </div>
        </div>

        {/* Right Column: Key credentials */}
        <div className="lg:col-span-5 space-y-4">
          {/* Education Card */}
          <div className="rounded-2xl border border-neutral-200 dark:border-neutral-800/80 bg-white dark:bg-neutral-900/40 p-6 shadow-sm">
            <div className="flex items-center gap-3 mb-3">
              <div className="p-2.5 rounded-xl bg-blue-950/40 border border-blue-800/50 text-blue-400">
                <GraduationCap className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-sm font-bold text-neutral-900 dark:text-neutral-100">
                  {edu.degree}
                </h4>
                <p className="text-xs text-neutral-500 font-mono">
                  {edu.institution}
                </p>
              </div>
            </div>
            <div className="flex items-center justify-between text-xs pt-2 border-t border-neutral-100 dark:border-neutral-800/80">
              <span className="text-neutral-500">Graduation: {edu.graduationYear}</span>
              <Badge variant="emerald" size="sm">
                CGPA: {edu.cgpa}
              </Badge>
            </div>
          </div>

          {/* Practical Experience Pill Card */}
          <div className="rounded-2xl border border-neutral-200 dark:border-neutral-800/80 bg-white dark:bg-neutral-900/40 p-6 shadow-sm">
            <div className="flex items-center gap-3 mb-3">
              <div className="p-2.5 rounded-xl bg-emerald-950/40 border border-emerald-800/50 text-emerald-400">
                <Briefcase className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-sm font-bold text-neutral-900 dark:text-neutral-100">
                  Professional Experience
                </h4>
                <p className="text-xs text-neutral-500 font-mono">
                  Approx. 2 Years Development
                </p>
              </div>
            </div>
            <p className="text-xs text-neutral-600 dark:text-neutral-400 leading-relaxed mb-3">
              Track record across software engineering at QSpiders, Juvenilia Technology, and OCAC.
            </p>
            <div className="pt-2 border-t border-neutral-100 dark:border-neutral-800/80">
              <Button
                href="/experience"
                variant="ghost"
                size="sm"
                className="text-xs font-semibold text-blue-600 dark:text-emerald-400 hover:underline p-0 h-auto"
                rightIcon={<ArrowRight className="w-3 h-3" />}
              >
                View Timeline & Roles
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
