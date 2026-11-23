export interface ExperienceItem {
  company: string;
  position: string;
  location: string;
  duration: string;
  startDate: string;
  endDate: string;
  type: 'Full-time' | 'Internship' | 'Contract';
  description: string;
  responsibilities: string[];
  technologies: string[];
  contributions: string[];
}

export interface EducationItem {
  degree: string;
  institution: string;
  location: string;
  graduationYear: number;
  cgpa: string;
  highlights?: string[];
}

export interface AchievementItem {
  title: string;
  competition: string;
  year: number;
  description?: string;
}
