import React from 'react';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { ContactForm } from '@/components/forms/ContactForm';
import { personalData } from '@/data/personal';
import { Mail, MapPin } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from '@/components/ui/BrandIcons';

export const ContactSection: React.FC = () => {
  return (
    <section className="py-16 sm:py-24 border-t border-neutral-200 dark:border-neutral-800/80">
      <SectionHeading
        eyebrow="Get In Touch"
        title="Let's Build Something Together"
        description="Whether you have an upcoming project, an open developer role, or want to discuss full-stack engineering, feel free to reach out."
      />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start max-w-5xl mx-auto">
        {/* Contact Info Column */}
        <div className="lg:col-span-5 space-y-4">
          <div className="rounded-2xl border border-neutral-200 dark:border-neutral-800/80 bg-white dark:bg-neutral-900/40 p-6 sm:p-7 shadow-sm">
            <h3 className="text-lg font-bold text-neutral-900 dark:text-neutral-100 mb-2">
              Contact Information
            </h3>
            <p className="text-xs sm:text-sm text-neutral-600 dark:text-neutral-400 mb-6 leading-relaxed">
              Based in Bhubaneswar, Odisha, open to full-time remote and on-site software engineering positions.
            </p>

            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="p-2 rounded-lg bg-neutral-100 dark:bg-neutral-800 text-emerald-500 shrink-0 mt-0.5">
                  <Mail className="w-4 h-4" />
                </div>
                <div>
                  <p className="text-xs text-neutral-400 font-mono">Email Address</p>
                  <a
                    href={personalData.socials.email}
                    className="text-xs sm:text-sm font-semibold text-neutral-800 dark:text-neutral-200 hover:text-emerald-500 transition-colors"
                  >
                    {personalData.socials.emailAddress}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="p-2 rounded-lg bg-neutral-100 dark:bg-neutral-800 text-blue-500 shrink-0 mt-0.5">
                  <MapPin className="w-4 h-4" />
                </div>
                <div>
                  <p className="text-xs text-neutral-400 font-mono">Location</p>
                  <p className="text-xs sm:text-sm font-semibold text-neutral-800 dark:text-neutral-200">
                    {personalData.location}
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="p-2 rounded-lg bg-neutral-100 dark:bg-neutral-800 text-sky-500 shrink-0 mt-0.5">
                  <LinkedinIcon className="w-4 h-4" />
                </div>
                <div>
                  <p className="text-xs text-neutral-400 font-mono">LinkedIn</p>
                  <a
                    href={personalData.socials.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs sm:text-sm font-semibold text-neutral-800 dark:text-neutral-200 hover:text-emerald-500 transition-colors"
                  >
                    in/siba-prasad-behera
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="p-2 rounded-lg bg-neutral-100 dark:bg-neutral-800 text-neutral-400 shrink-0 mt-0.5">
                  <GithubIcon className="w-4 h-4" />
                </div>
                <div>
                  <p className="text-xs text-neutral-400 font-mono">GitHub</p>
                  <a
                    href={personalData.socials.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs sm:text-sm font-semibold text-neutral-800 dark:text-neutral-200 hover:text-emerald-500 transition-colors"
                  >
                    github.com/SPBehera
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Form Column */}
        <div className="lg:col-span-7">
          <ContactForm />
        </div>
      </div>
    </section>
  );
};
