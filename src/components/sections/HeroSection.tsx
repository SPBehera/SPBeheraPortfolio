import React from 'react';
import Image from 'next/image';
import { personalData } from '@/data/personal';
import { Button } from '@/components/ui/Button';
import { Badge } from '@/components/ui/Badge';
import { SocialLinks } from '@/components/ui/SocialLinks';
import { ArrowRight, Download, Code2, MapPin } from 'lucide-react';

export const HeroSection: React.FC = () => {
  const highlightTech = [
    'React',
    'Next.js',
    'React Native',
    'Node.js',
    'TypeScript',
    'MySQL',
    'MongoDB',
    'REST APIs',
  ];

  return (
    <section className="relative pt-12 pb-20 sm:pt-20 sm:pb-28 overflow-hidden">
      {/* Subtle background ambient gradients */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] bg-gradient-to-tr from-blue-600/10 via-emerald-500/10 to-transparent blur-3xl -z-10 pointer-events-none" />
      <div className="absolute top-10 right-10 w-72 h-72 bg-blue-500/5 rounded-full blur-3xl -z-10 pointer-events-none" />

      <div className="max-w-4xl mx-auto text-center flex flex-col items-center">
        {/* Availability / Status Pill */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-neutral-200 dark:border-neutral-800 bg-white/80 dark:bg-neutral-900/80 backdrop-blur-sm shadow-sm mb-6 sm:mb-8 animate-fade-in">
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
          <span className="text-xs font-medium text-neutral-700 dark:text-neutral-300">
            Available for Software Engineering Roles
          </span>
          <span className="text-neutral-300 dark:text-neutral-700">•</span>
          <span className="inline-flex items-center gap-1 text-[11px] text-neutral-500 font-mono">
            <MapPin className="w-3 h-3 text-emerald-500" />
            Bhubaneswar, India
          </span>
        </div>

        {/* Profile Avatar / Monogram Card */}
        <div className="relative mb-6 group">
          <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-3xl bg-gradient-to-tr from-blue-600 via-indigo-600 to-emerald-500 p-[2px] shadow-xl shadow-blue-500/10">
            <div className="w-full h-full bg-neutral-950 rounded-3xl overflow-hidden relative">
              <Image
                src="/images/profile/profile-placeholder.png"
                alt={personalData.name}
                fill
                sizes="112px"
                className="object-cover group-hover:scale-105 transition-transform duration-300"
                priority
              />
            </div>
          </div>
          <div className="absolute -bottom-1 -right-1 p-1.5 rounded-xl bg-neutral-900 border border-neutral-700 text-emerald-400 shadow-md">
            <Code2 className="w-4 h-4" />
          </div>
        </div>

        {/* Name & Title */}
        <h2 className="text-sm sm:text-base font-semibold uppercase tracking-widest text-emerald-600 dark:text-emerald-400 mb-2">
          {personalData.name}
        </h2>

        <p className="text-xs sm:text-sm font-mono text-neutral-500 dark:text-neutral-400 mb-4">
          {personalData.title}
        </p>

        {/* Main Headline */}
        <h1 className="text-3xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-neutral-900 dark:text-neutral-50 leading-[1.15] max-w-3xl mb-6">
          {personalData.headline}
        </h1>

        {/* Intro */}
        <p className="text-sm sm:text-base md:text-lg text-neutral-600 dark:text-neutral-300 max-w-2xl leading-relaxed mb-8">
          {personalData.intro}
        </p>

        {/* Action Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-3.5 mb-8">
          <Button
            href="/projects"
            variant="emerald"
            size="lg"
            rightIcon={<ArrowRight className="w-4 h-4" />}
          >
            View Projects
          </Button>

          <Button
            href="/resume"
            variant="secondary"
            size="lg"
            leftIcon={<Download className="w-4 h-4" />}
          >
            Download Resume
          </Button>
        </div>

        {/* Social Links */}
        <div className="mb-12">
          <SocialLinks iconSize="md" />
        </div>

        {/* Core Tech Stack Badges */}
        <div className="w-full pt-8 border-t border-neutral-200 dark:border-neutral-800/80">
          <p className="text-xs font-mono uppercase tracking-wider text-neutral-400 dark:text-neutral-500 mb-3.5">
            Core Technical Specialties
          </p>
          <div className="flex flex-wrap items-center justify-center gap-2">
            {highlightTech.map((tech) => (
              <Badge key={tech} variant="neutral" size="sm">
                {tech}
              </Badge>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
