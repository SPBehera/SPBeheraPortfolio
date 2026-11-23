import React from 'react';
import { SkillGroup } from '@/types/skill';
import { Badge } from '@/components/ui/Badge';
import { Layers, Server, Smartphone, Database, Wrench, CheckCircle2 } from 'lucide-react';

interface SkillCardProps {
  group: SkillGroup;
}

export const SkillCard: React.FC<SkillCardProps> = ({ group }) => {
  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'Frontend':
        return <Layers className="w-5 h-5 text-blue-500" />;
      case 'Backend':
        return <Server className="w-5 h-5 text-emerald-500" />;
      case 'Mobile':
        return <Smartphone className="w-5 h-5 text-purple-500" />;
      case 'Database':
        return <Database className="w-5 h-5 text-amber-500" />;
      case 'Tools':
        return <Wrench className="w-5 h-5 text-sky-500" />;
      default:
        return <Layers className="w-5 h-5 text-neutral-400" />;
    }
  };

  return (
    <div className="rounded-2xl border border-neutral-200 dark:border-neutral-800/80 bg-white dark:bg-neutral-900/40 p-6 sm:p-7 hover:border-neutral-300 dark:hover:border-neutral-700/80 transition-all duration-300 shadow-sm hover:shadow-md flex flex-col justify-between">
      <div>
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-xl bg-neutral-100 dark:bg-neutral-800/80 border border-neutral-200 dark:border-neutral-700/60">
              {getCategoryIcon(group.category)}
            </div>
            <div>
              <h3 className="text-lg font-bold text-neutral-900 dark:text-neutral-100">
                {group.category}
              </h3>
              <span className="text-xs text-neutral-500 dark:text-neutral-400 font-mono">
                {group.skills.length} Technologies
              </span>
            </div>
          </div>
        </div>

        <p className="text-xs sm:text-sm text-neutral-600 dark:text-neutral-400 mb-6 leading-relaxed">
          {group.description}
        </p>

        <div className="flex flex-wrap gap-2">
          {group.skills.map((skill) => (
            <Badge
              key={skill.name}
              variant={skill.highlight ? 'emerald' : 'neutral'}
              size="sm"
              icon={skill.highlight ? <CheckCircle2 className="w-3 h-3 text-emerald-500" /> : undefined}
            >
              {skill.name}
            </Badge>
          ))}
        </div>
      </div>
    </div>
  );
};
