export type SkillCategory = 
  | 'Frontend' 
  | 'Backend' 
  | 'Mobile' 
  | 'Database' 
  | 'Tools';

export interface SkillItem {
  name: string;
  iconName?: string;
  highlight?: boolean;
}

export interface SkillGroup {
  category: SkillCategory;
  description: string;
  skills: SkillItem[];
}
