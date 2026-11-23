import React from 'react';
import { Container } from '@/components/layout/Container';
import { HeroSection } from '@/components/sections/HeroSection';
import { FeaturedProjectsSection } from '@/components/sections/FeaturedProjectsSection';
import { SkillsSection } from '@/components/sections/SkillsSection';
import { AboutSection } from '@/components/sections/AboutSection';
import { ExperienceSection } from '@/components/sections/ExperienceSection';
import { ContactSection } from '@/components/sections/ContactSection';

export default function HomePage() {
  return (
    <Container size="xl">
      <HeroSection />
      <FeaturedProjectsSection />
      <SkillsSection />
      <AboutSection />
      <ExperienceSection />
      <ContactSection />
    </Container>
  );
}
