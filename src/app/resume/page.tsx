import React from 'react';
import type { Metadata } from 'next';
import { Container } from '@/components/layout/Container';
import { personalData } from '@/data/personal';
import { skillGroups } from '@/data/skills';
import { experiencesData } from '@/data/experience';
import { educationData } from '@/data/education';
import { achievementsData } from '@/data/achievements';
import { Button } from '@/components/ui/Button';
import {
  Download,
  Mail,
  MapPin,
  Award,
  AlertCircle,
} from 'lucide-react';
import { GithubIcon, LinkedinIcon } from '@/components/ui/BrandIcons';

export const metadata: Metadata = {
  title: 'Resume & Curriculum Vitae',
  description:
    'Curriculum Vitae and professional credentials of Siba Prasad Behera. Education, technical skills, and software development history.',
};

export default function ResumePage() {
  const edu = educationData[0];

  return (
    <Container size="lg" className="py-12 sm:py-20 space-y-12">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-neutral-200 dark:border-neutral-800">
        <div>
          <span className="text-xs font-mono uppercase tracking-widest text-emerald-500 font-semibold mb-1 block">
            Curriculum Vitae
          </span>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-neutral-900 dark:text-neutral-50 tracking-tight">
            Professional Resume
          </h1>
        </div>

        <div className="flex items-center gap-3">
          <Button
            href="/resume.pdf"
            variant="emerald"
            size="md"
            leftIcon={<Download className="w-4 h-4" />}
            external
          >
            Download Resume (PDF)
          </Button>
        </div>
      </div>

      {/* PDF availability notice */}
      <div className="rounded-xl border border-blue-900/30 bg-blue-950/20 p-4 text-xs sm:text-sm text-neutral-400 flex items-start gap-3">
        <AlertCircle className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
        <p className="leading-relaxed">
          The download button links directly to <code className="text-blue-300 font-mono">/resume.pdf</code>. To ensure the download provides your latest PDF, simply place your compiled <code className="text-blue-300 font-mono">resume.pdf</code> inside the <code className="text-blue-300 font-mono">public/</code> directory. In the meantime, the full authentic credentials are documented below.
        </p>
      </div>

      {/* Printable Sheet View */}
      <div className="rounded-3xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900/60 p-8 sm:p-12 shadow-sm space-y-10">
        {/* Header */}
        <div className="border-b border-neutral-200 dark:border-neutral-800 pb-8">
          <h2 className="text-3xl font-extrabold text-neutral-900 dark:text-neutral-50">
            {personalData.name}
          </h2>
          <p className="text-base font-semibold text-emerald-600 dark:text-emerald-400 mt-1">
            {personalData.title}
          </p>

          <div className="flex flex-wrap items-center gap-y-2 gap-x-6 text-xs text-neutral-600 dark:text-neutral-400 mt-4">
            <span className="flex items-center gap-1.5">
              <MapPin className="w-3.5 h-3.5 text-emerald-500" />
              {personalData.location}
            </span>
            <a
              href={personalData.socials.email}
              className="flex items-center gap-1.5 hover:text-emerald-500 transition-colors"
            >
              <Mail className="w-3.5 h-3.5 text-blue-500" />
              {personalData.socials.emailAddress}
            </a>
            <a
              href={personalData.socials.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 hover:text-emerald-500 transition-colors"
            >
              <GithubIcon className="w-3.5 h-3.5" />
              github.com/SPBehera
            </a>
            <a
              href={personalData.socials.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 hover:text-emerald-500 transition-colors"
            >
              <LinkedinIcon className="w-3.5 h-3.5 text-sky-500" />
              LinkedIn Profile
            </a>
          </div>
        </div>

        {/* Professional Summary */}
        <div className="space-y-3">
          <h3 className="text-xs font-bold uppercase tracking-widest text-neutral-500 dark:text-neutral-400">
            Professional Summary
          </h3>
          <p className="text-sm sm:text-base text-neutral-700 dark:text-neutral-300 leading-relaxed">
            {personalData.summary}
          </p>
        </div>

        {/* Technical Skills */}
        <div className="space-y-4">
          <h3 className="text-xs font-bold uppercase tracking-widest text-neutral-500 dark:text-neutral-400">
            Technical Skills
          </h3>
          <div className="space-y-2.5">
            {skillGroups.map((group) => (
              <div key={group.category} className="text-xs sm:text-sm">
                <span className="font-semibold text-neutral-900 dark:text-neutral-100 mr-2">
                  {group.category}:
                </span>
                <span className="text-neutral-600 dark:text-neutral-400">
                  {group.skills.map((s) => s.name).join(', ')}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Experience */}
        <div className="space-y-6">
          <h3 className="text-xs font-bold uppercase tracking-widest text-neutral-500 dark:text-neutral-400">
            Professional Experience
          </h3>
          <div className="space-y-6">
            {experiencesData.map((exp, idx) => (
              <div key={idx} className="space-y-2">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                  <div>
                    <h4 className="text-base font-bold text-neutral-900 dark:text-neutral-100">
                      {exp.position} — <span className="text-emerald-600 dark:text-emerald-400">{exp.company}</span>
                    </h4>
                    <span className="text-xs text-neutral-500">{exp.location}</span>
                  </div>
                  <span className="text-xs font-mono text-neutral-500">
                    {exp.duration}
                  </span>
                </div>
                <ul className="list-disc list-inside space-y-1 text-xs sm:text-sm text-neutral-600 dark:text-neutral-300">
                  {exp.responsibilities.map((r, ri) => (
                    <li key={ri}>{r}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Education */}
        <div className="space-y-4">
          <h3 className="text-xs font-bold uppercase tracking-widest text-neutral-500 dark:text-neutral-400">
            Education
          </h3>
          <div>
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
              <div>
                <h4 className="text-base font-bold text-neutral-900 dark:text-neutral-100">
                  {edu.degree}
                </h4>
                <p className="text-xs text-neutral-600 dark:text-neutral-400">
                  {edu.institution}, {edu.location}
                </p>
              </div>
              <div className="text-xs font-mono text-neutral-500">
                Graduation: {edu.graduationYear} | CGPA: {edu.cgpa}
              </div>
            </div>
          </div>
        </div>

        {/* Honors & Awards */}
        <div className="space-y-4">
          <h3 className="text-xs font-bold uppercase tracking-widest text-neutral-500 dark:text-neutral-400">
            Achievements & Awards
          </h3>
          <ul className="space-y-1.5 text-xs sm:text-sm text-neutral-600 dark:text-neutral-300">
            {achievementsData.map((item, idx) => (
              <li key={idx} className="flex items-start gap-2">
                <Award className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" />
                <span>
                  <strong className="text-neutral-900 dark:text-neutral-100">{item.title}</strong> ({item.year}) — {item.description}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Container>
  );
}
