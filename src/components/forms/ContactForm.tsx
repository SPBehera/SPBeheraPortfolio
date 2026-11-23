'use client';

import React, { useState } from 'react';
import { Button } from '@/components/ui/Button';
import { Send, CheckCircle2, AlertCircle, Loader2 } from 'lucide-react';

interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [errors, setErrors] = useState<Partial<FormData>>({});
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [statusMessage, setStatusMessage] = useState('');

  const validate = (): boolean => {
    const newErrors: Partial<FormData> = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Please enter your name.';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Please enter your email address.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address.';
    }

    if (!formData.subject.trim()) {
      newErrors.subject = 'Please enter a subject.';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Please enter your message.';
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Message must be at least 10 characters long.';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof FormData]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setStatus('loading');

    // Safe simulated email dispatch / API endpoint placeholder
    try {
      await new Promise((resolve) => setTimeout(resolve, 1200));

      setStatus('success');
      setStatusMessage('Thank you for reaching out! Your message has been received. I will get back to you shortly.');
      setFormData({ name: '', email: '', subject: '', message: '' });
    } catch {
      setStatus('error');
      setStatusMessage('An error occurred while transmitting your message. Please reach out directly via email at sibaprasadbehera2003@gmail.com.');
    }
  };

  return (
    <div className="rounded-2xl border border-neutral-200 dark:border-neutral-800/80 bg-white dark:bg-neutral-900/40 p-6 sm:p-8 md:p-10 shadow-sm">
      <div className="mb-6">
        <h3 className="text-xl font-bold text-neutral-900 dark:text-neutral-100">
          Send a Direct Message
        </h3>
        <p className="text-xs sm:text-sm text-neutral-500 dark:text-neutral-400 mt-1">
          Have a project in mind, an engineering query, or a job opportunity? Leave a note below.
        </p>
      </div>

      {status === 'success' && (
        <div className="mb-6 p-4 rounded-xl bg-emerald-950/30 border border-emerald-800/60 text-emerald-400 flex items-start gap-3">
          <CheckCircle2 className="w-5 h-5 shrink-0 mt-0.5" />
          <div className="text-xs sm:text-sm leading-relaxed">
            <p className="font-semibold mb-0.5">Message Sent Successfully</p>
            <p className="text-emerald-300/90">{statusMessage}</p>
          </div>
        </div>
      )}

      {status === 'error' && (
        <div className="mb-6 p-4 rounded-xl bg-red-950/30 border border-red-800/60 text-red-400 flex items-start gap-3">
          <AlertCircle className="w-5 h-5 shrink-0 mt-0.5" />
          <div className="text-xs sm:text-sm leading-relaxed">
            <p className="font-semibold mb-0.5">Submission Error</p>
            <p className="text-red-300/90">{statusMessage}</p>
          </div>
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-5" noValidate>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          {/* Name */}
          <div>
            <label htmlFor="name" className="block text-xs font-semibold uppercase tracking-wider text-neutral-700 dark:text-neutral-300 mb-1.5">
              Your Name <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="e.g. John Doe"
              className={`w-full px-3.5 py-2.5 rounded-xl border text-sm text-neutral-900 dark:text-neutral-100 bg-neutral-50 dark:bg-neutral-800/60 focus:outline-none focus:ring-2 transition-all ${
                errors.name
                  ? 'border-red-500 focus:ring-red-500/50'
                  : 'border-neutral-200 dark:border-neutral-700 focus:ring-emerald-500/50 focus:border-emerald-500'
              }`}
            />
            {errors.name && <p className="text-xs text-red-400 mt-1">{errors.name}</p>}
          </div>

          {/* Email */}
          <div>
            <label htmlFor="email" className="block text-xs font-semibold uppercase tracking-wider text-neutral-700 dark:text-neutral-300 mb-1.5">
              Your Email <span className="text-red-500">*</span>
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="e.g. john@example.com"
              className={`w-full px-3.5 py-2.5 rounded-xl border text-sm text-neutral-900 dark:text-neutral-100 bg-neutral-50 dark:bg-neutral-800/60 focus:outline-none focus:ring-2 transition-all ${
                errors.email
                  ? 'border-red-500 focus:ring-red-500/50'
                  : 'border-neutral-200 dark:border-neutral-700 focus:ring-emerald-500/50 focus:border-emerald-500'
              }`}
            />
            {errors.email && <p className="text-xs text-red-400 mt-1">{errors.email}</p>}
          </div>
        </div>

        {/* Subject */}
        <div>
          <label htmlFor="subject" className="block text-xs font-semibold uppercase tracking-wider text-neutral-700 dark:text-neutral-300 mb-1.5">
            Subject <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            id="subject"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            placeholder="e.g. Full Stack Developer Opportunity"
            className={`w-full px-3.5 py-2.5 rounded-xl border text-sm text-neutral-900 dark:text-neutral-100 bg-neutral-50 dark:bg-neutral-800/60 focus:outline-none focus:ring-2 transition-all ${
              errors.subject
                ? 'border-red-500 focus:ring-red-500/50'
                : 'border-neutral-200 dark:border-neutral-700 focus:ring-emerald-500/50 focus:border-emerald-500'
            }`}
          />
          {errors.subject && <p className="text-xs text-red-400 mt-1">{errors.subject}</p>}
        </div>

        {/* Message */}
        <div>
          <label htmlFor="message" className="block text-xs font-semibold uppercase tracking-wider text-neutral-700 dark:text-neutral-300 mb-1.5">
            Message <span className="text-red-500">*</span>
          </label>
          <textarea
            id="message"
            name="message"
            rows={5}
            value={formData.message}
            onChange={handleChange}
            placeholder="Write your message here..."
            className={`w-full px-3.5 py-2.5 rounded-xl border text-sm text-neutral-900 dark:text-neutral-100 bg-neutral-50 dark:bg-neutral-800/60 focus:outline-none focus:ring-2 transition-all resize-y ${
              errors.message
                ? 'border-red-500 focus:ring-red-500/50'
                : 'border-neutral-200 dark:border-neutral-700 focus:ring-emerald-500/50 focus:border-emerald-500'
            }`}
          />
          {errors.message && <p className="text-xs text-red-400 mt-1">{errors.message}</p>}
        </div>

        <Button
          type="submit"
          variant="emerald"
          size="md"
          disabled={status === 'loading'}
          leftIcon={status === 'loading' ? <Loader2 className="w-4 h-4 animate-spin" /> : <Send className="w-4 h-4" />}
          className="w-full sm:w-auto"
        >
          {status === 'loading' ? 'Transmitting...' : 'Send Message'}
        </Button>
      </form>

      <p className="text-[11px] text-neutral-400 dark:text-neutral-500 mt-6 pt-4 border-t border-neutral-100 dark:border-neutral-800/80">
        Note: To route submissions to an external mailbox in production, attach an API route with providers like Resend, SendGrid, or Formspree without exposing API keys on the frontend.
      </p>
    </div>
  );
};
