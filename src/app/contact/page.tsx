import React from 'react';
import type { Metadata } from 'next';
import { Container } from '@/components/layout/Container';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { ContactForm } from '@/components/forms/ContactForm';
import { personalData } from '@/data/personal';
import { Mail, MapPin, Clock } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from '@/components/ui/BrandIcons';

export const metadata: Metadata = {
  title: 'Contact',
  description:
    'Get in touch with Siba Prasad Behera for full stack development, mobile app projects, or engineering inquiries.',
};

export default function ContactPage() {
  return (
    <Container size="lg" className="py-12 sm:py-20 space-y-12">
      <SectionHeading
        eyebrow="Get In Touch"
        title="Contact Siba Prasad Behera"
        description="I am actively looking for full-stack and mobile app development opportunities. Feel free to send a message or connect through professional networks."
      />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Info Column */}
        <div className="lg:col-span-5 space-y-5">
          <div className="rounded-3xl border border-neutral-200 dark:border-neutral-800/80 bg-white dark:bg-neutral-900/40 p-6 sm:p-8 space-y-6 shadow-sm">
            <div>
              <h3 className="text-lg font-bold text-neutral-900 dark:text-neutral-100">
                Contact Details
              </h3>
              <p className="text-xs text-neutral-500 mt-1">
                Reach out directly via email or social links.
              </p>
            </div>

            <div className="space-y-4">
              <a
                href={personalData.socials.email}
                className="flex items-start gap-3 p-3 rounded-xl border border-neutral-100 dark:border-neutral-800 bg-neutral-50 dark:bg-neutral-800/40 hover:border-emerald-500/40 transition-colors group"
              >
                <div className="p-2 rounded-lg bg-emerald-950/40 text-emerald-400 shrink-0">
                  <Mail className="w-4 h-4" />
                </div>
                <div className="overflow-hidden">
                  <p className="text-xs text-neutral-500 font-mono">Email</p>
                  <p className="text-xs sm:text-sm font-semibold text-neutral-900 dark:text-neutral-100 truncate group-hover:text-emerald-400 transition-colors">
                    {personalData.socials.emailAddress}
                  </p>
                </div>
              </a>

              <div className="flex items-start gap-3 p-3 rounded-xl border border-neutral-100 dark:border-neutral-800 bg-neutral-50 dark:bg-neutral-800/40">
                <div className="p-2 rounded-lg bg-blue-950/40 text-blue-400 shrink-0">
                  <MapPin className="w-4 h-4" />
                </div>
                <div>
                  <p className="text-xs text-neutral-500 font-mono">Location</p>
                  <p className="text-xs sm:text-sm font-semibold text-neutral-900 dark:text-neutral-100">
                    {personalData.location}
                  </p>
                </div>
              </div>

              <a
                href={personalData.socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-3 p-3 rounded-xl border border-neutral-100 dark:border-neutral-800 bg-neutral-50 dark:bg-neutral-800/40 hover:border-sky-500/40 transition-colors group"
              >
                <div className="p-2 rounded-lg bg-sky-950/40 text-sky-400 shrink-0">
                  <LinkedinIcon className="w-4 h-4" />
                </div>
                <div>
                  <p className="text-xs text-neutral-500 font-mono">LinkedIn</p>
                  <p className="text-xs sm:text-sm font-semibold text-neutral-900 dark:text-neutral-100 group-hover:text-sky-400 transition-colors">
                    in/siba-prasad-behera
                  </p>
                </div>
              </a>

              <a
                href={personalData.socials.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-3 p-3 rounded-xl border border-neutral-100 dark:border-neutral-800 bg-neutral-50 dark:bg-neutral-800/40 hover:border-neutral-500 transition-colors group"
              >
                <div className="p-2 rounded-lg bg-neutral-800 text-neutral-300 shrink-0">
                  <GithubIcon className="w-4 h-4" />
                </div>
                <div>
                  <p className="text-xs text-neutral-500 font-mono">GitHub</p>
                  <p className="text-xs sm:text-sm font-semibold text-neutral-900 dark:text-neutral-100 group-hover:text-white transition-colors">
                    github.com/SPBehera
                  </p>
                </div>
              </a>
            </div>

            <div className="pt-4 border-t border-neutral-100 dark:border-neutral-800/80 flex items-center gap-2 text-xs text-neutral-500">
              <Clock className="w-4 h-4 text-emerald-500 shrink-0" />
              <span>Typical response time: within 24 hours.</span>
            </div>
          </div>
        </div>

        {/* Contact Form Column */}
        <div className="lg:col-span-7">
          <ContactForm />
        </div>
      </div>
    </Container>
  );
}
