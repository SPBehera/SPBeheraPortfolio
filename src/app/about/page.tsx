import React from 'react';
import type { Metadata } from 'next';
import { Container } from '@/components/layout/Container';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { personalData } from '@/data/personal';
import { educationData } from '@/data/education';
import { achievementsData } from '@/data/achievements';
import { Badge } from '@/components/ui/Badge';
import { Button } from '@/components/ui/Button';
import {
  GraduationCap,
  Briefcase,
  Award,
  Compass,
  Target,
  MapPin,
  CheckCircle2,
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'About Me',
  description:
    'Learn about Siba Prasad Behera, a Full Stack & Mobile App Developer based in Bhubaneswar, Odisha. Education, career journey, and technical focus.',
};

export default function AboutPage() {
  const edu = educationData[0];

  return (
    <Container size="lg" className="py-12 sm:py-20 space-y-16">
      {/* Page Heading */}
      <SectionHeading
        eyebrow="Biography & Journey"
        title="About Siba Prasad Behera"
        description="Full Stack and Mobile App Developer with approximately 2 years of practical experience engineering web, mobile, and backend systems."
      />

      {/* Main Bio Card */}
      <div className="rounded-3xl border border-neutral-200 dark:border-neutral-800/80 bg-white dark:bg-neutral-900/40 p-6 sm:p-10 shadow-sm space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-neutral-100 dark:border-neutral-800/80">
          <div>
            <h2 className="text-2xl font-bold text-neutral-900 dark:text-neutral-50">
              {personalData.name}
            </h2>
            <p className="text-sm font-semibold text-emerald-600 dark:text-emerald-400 mt-0.5">
              {personalData.title}
            </p>
          </div>
          <div className="flex items-center gap-1.5 text-xs text-neutral-500 font-mono">
            <MapPin className="w-4 h-4 text-emerald-500" />
            <span>{personalData.location}</span>
          </div>
        </div>

        <div className="space-y-4 text-sm sm:text-base text-neutral-600 dark:text-neutral-300 leading-relaxed">
          {personalData.biography.map((para, i) => (
            <p key={i}>{para}</p>
          ))}
        </div>
      </div>

      {/* Career Journey Timeline */}
      <div className="space-y-6">
        <div className="flex items-center gap-2.5">
          <Briefcase className="w-5 h-5 text-emerald-500" />
          <h2 className="text-xl sm:text-2xl font-bold text-neutral-900 dark:text-neutral-50">
            Career Journey
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {personalData.careerJourney.map((step, idx) => (
            <div
              key={idx}
              className="rounded-2xl border border-neutral-200 dark:border-neutral-800/80 bg-white dark:bg-neutral-900/40 p-6 space-y-2.5 shadow-sm hover:border-neutral-300 dark:hover:border-neutral-700 transition-colors"
            >
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono font-semibold text-emerald-600 dark:text-emerald-400">
                  {step.period}
                </span>
                <span className="text-[11px] font-mono text-neutral-500">
                  Step {idx + 1}
                </span>
              </div>
              <h3 className="text-base font-bold text-neutral-900 dark:text-neutral-100">
                {step.title}
              </h3>
              <p className="text-xs font-semibold text-blue-600 dark:text-sky-400">
                {step.institution}
              </p>
              <p className="text-xs sm:text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed pt-1">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Education & Academic Foundation */}
      <div className="space-y-6">
        <div className="flex items-center gap-2.5">
          <GraduationCap className="w-5 h-5 text-blue-500" />
          <h2 className="text-xl sm:text-2xl font-bold text-neutral-900 dark:text-neutral-50">
            Education
          </h2>
        </div>

        <div className="rounded-3xl border border-neutral-200 dark:border-neutral-800/80 bg-white dark:bg-neutral-900/40 p-6 sm:p-8 shadow-sm">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-4 pb-4 border-b border-neutral-100 dark:border-neutral-800/80">
            <div>
              <h3 className="text-lg font-bold text-neutral-900 dark:text-neutral-100">
                {edu.degree}
              </h3>
              <p className="text-sm font-semibold text-blue-600 dark:text-emerald-400">
                {edu.institution}
              </p>
              <p className="text-xs text-neutral-500 font-mono mt-0.5">
                {edu.location}
              </p>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-xs font-mono text-neutral-500">
                Graduation: {edu.graduationYear}
              </span>
              <Badge variant="emerald" size="md">
                CGPA: {edu.cgpa}
              </Badge>
            </div>
          </div>

          <div className="space-y-2">
            <h4 className="text-xs font-bold uppercase tracking-wider text-neutral-700 dark:text-neutral-300">
              Academic Highlights & Key Subjects
            </h4>
            <ul className="space-y-1.5 text-xs sm:text-sm text-neutral-600 dark:text-neutral-400">
              {edu.highlights?.map((h, i) => (
                <li key={i} className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                  <span>{h}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Development Interests & Professional Goals */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Interests */}
        <div className="rounded-3xl border border-neutral-200 dark:border-neutral-800/80 bg-white dark:bg-neutral-900/40 p-6 sm:p-8 space-y-4 shadow-sm">
          <div className="flex items-center gap-2 text-emerald-500">
            <Compass className="w-5 h-5" />
            <h3 className="text-lg font-bold text-neutral-900 dark:text-neutral-100">
              Development Interests
            </h3>
          </div>
          <ul className="space-y-2.5 text-xs sm:text-sm text-neutral-600 dark:text-neutral-400">
            {personalData.developmentInterests.map((interest, i) => (
              <li key={i} className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                <span className="leading-relaxed">{interest}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Goals */}
        <div className="rounded-3xl border border-neutral-200 dark:border-neutral-800/80 bg-white dark:bg-neutral-900/40 p-6 sm:p-8 space-y-4 shadow-sm">
          <div className="flex items-center gap-2 text-blue-500">
            <Target className="w-5 h-5" />
            <h3 className="text-lg font-bold text-neutral-900 dark:text-neutral-100">
              Professional Goals
            </h3>
          </div>
          <ul className="space-y-2.5 text-xs sm:text-sm text-neutral-600 dark:text-neutral-400">
            {personalData.professionalGoals.map((goal, i) => (
              <li key={i} className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-blue-500 shrink-0 mt-0.5" />
                <span className="leading-relaxed">{goal}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Honors & Achievements */}
      <div className="space-y-6">
        <div className="flex items-center gap-2.5">
          <Award className="w-5 h-5 text-amber-500" />
          <h2 className="text-xl sm:text-2xl font-bold text-neutral-900 dark:text-neutral-50">
            Honors & Achievements
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          {achievementsData.map((item, idx) => (
            <div
              key={idx}
              className="rounded-2xl border border-neutral-200 dark:border-neutral-800/80 bg-white dark:bg-neutral-900/40 p-6 space-y-2 shadow-sm"
            >
              <div className="flex items-center justify-between">
                <Badge variant="blue" size="sm">
                  {item.year}
                </Badge>
                <Award className="w-4 h-4 text-amber-500" />
              </div>
              <h3 className="text-base font-bold text-neutral-900 dark:text-neutral-100">
                {item.title}
              </h3>
              <p className="text-xs sm:text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* CTA Footer */}
      <div className="rounded-3xl border border-neutral-200 dark:border-neutral-800 bg-gradient-to-r from-blue-950/20 via-neutral-900/40 to-emerald-950/20 p-8 sm:p-12 text-center space-y-4">
        <h3 className="text-xl sm:text-2xl font-bold text-neutral-900 dark:text-neutral-50">
          Interested in working together?
        </h3>
        <p className="text-sm text-neutral-600 dark:text-neutral-400 max-w-lg mx-auto">
          Explore my project case studies or reach out directly to discuss potential software engineering opportunities.
        </p>
        <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
          <Button href="/projects" variant="emerald" size="md">
            View Projects
          </Button>
          <Button href="/contact" variant="outline" size="md">
            Contact Me
          </Button>
        </div>
      </div>
    </Container>
  );
}
