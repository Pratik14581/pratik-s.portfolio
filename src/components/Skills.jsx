import React, { useState } from 'react';
import { 
  Code2, 
  Palette, 
  FileCode, 
  Terminal, 
  Cpu, 
  Sparkles, 
  Layout, 
  CheckCircle2,
  Filter,
  Layers
} from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function Skills() {
  const { skills } = portfolioData;
  const [activeCategory, setActiveCategory] = useState('All');

  const categories = ['All', 'Web Development', 'Programming & AI', 'Productivity & Systems'];

  const filteredSkills = activeCategory === 'All' 
    ? skills 
    : skills.filter(s => s.category === activeCategory);

  const iconMap = {
    Code2: Code2,
    Palette: Palette,
    FileCode: FileCode,
    Terminal: Terminal,
    Cpu: Cpu,
    Sparkles: Sparkles,
    Layout: Layout,
    CheckCircle2: CheckCircle2
  };

  return (
    <section id="skills" className="py-24 relative overflow-hidden">
      {/* Decorative Blur Backgrounds */}
      <div className="absolute top-1/4 -right-32 w-80 h-80 bg-purple-500/10 rounded-full blur-[110px] pointer-events-none" />
      <div className="absolute bottom-10 -left-32 w-80 h-80 bg-cyan-500/10 rounded-full blur-[110px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-xs font-semibold tracking-wide uppercase">
            <Layers className="w-3.5 h-3.5" />
            <span>Technical Capabilities</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Skills & <span className="bg-gradient-to-r from-indigo-400 to-cyan-400 bg-clip-text text-transparent">Expertise</span>
          </h2>
          <p className="text-slate-400 text-base sm:text-lg">
            A balanced mix of modern web engineering, AI concepts, and digital workflow mastery
          </p>
        </div>

        {/* Category Filter Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2.5 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200 ${
                activeCategory === cat
                  ? 'bg-gradient-to-r from-indigo-600 to-cyan-600 text-white shadow-lg shadow-indigo-500/25 scale-105'
                  : 'bg-white/5 hover:bg-white/10 text-slate-300 hover:text-white border border-white/5'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Skills Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredSkills.map((skill, index) => {
            const IconComponent = iconMap[skill.iconName] || Code2;
            return (
              <div
                key={skill.name}
                className="glass-card glass-card-hover rounded-2xl p-6 border border-white/10 flex flex-col justify-between group relative overflow-hidden"
              >
                {/* Subtle Top Gradient Indicator */}
                <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${skill.badgeColor} opacity-70 group-hover:opacity-100 transition-opacity`} />

                <div>
                  {/* Icon & Category Header */}
                  <div className="flex items-center justify-between mb-5">
                    <div className={`p-3 rounded-xl bg-gradient-to-br ${skill.badgeColor} bg-opacity-10 text-white shadow-md shadow-black/20 group-hover:scale-110 transition-transform duration-300`}>
                      <IconComponent className="w-6 h-6" />
                    </div>
                    <span className="text-[11px] font-semibold text-slate-400 bg-white/5 px-2.5 py-1 rounded-full border border-white/5">
                      {skill.level}
                    </span>
                  </div>

                  {/* Skill Name */}
                  <h3 className="font-display font-bold text-xl text-white group-hover:text-cyan-300 transition-colors mb-2">
                    {skill.name}
                  </h3>

                  {/* Skill Category Tag */}
                  <span className="text-[11px] font-mono text-indigo-400 block mb-3">
                    {skill.category}
                  </span>

                  {/* Skill Description */}
                  <p className="text-xs sm:text-sm text-slate-400 leading-relaxed mb-6">
                    {skill.description}
                  </p>
                </div>

                {/* Progress Bar & Percentage */}
                <div className="space-y-2 pt-3 border-t border-white/5">
                  <div className="flex items-center justify-between text-xs">
                    <span className="text-slate-400 font-medium">Competency</span>
                    <span className="text-white font-mono font-semibold">{skill.levelPercent}%</span>
                  </div>
                  <div className="w-full h-2 rounded-full bg-white/5 overflow-hidden p-[1px]">
                    <div 
                      className={`h-full rounded-full bg-gradient-to-r ${skill.badgeColor} transition-all duration-1000 ease-out`}
                      style={{ width: `${skill.levelPercent}%` }}
                    />
                  </div>
                </div>

              </div>
            );
          })}
        </div>

        {/* Bottom Banner */}
        <div className="mt-14 glass-card rounded-2xl p-6 border border-white/10 text-center max-w-2xl mx-auto flex flex-col sm:flex-row items-center justify-center gap-4">
          <div className="p-3 rounded-full bg-indigo-500/10 text-indigo-400">
            <Sparkles className="w-5 h-5" />
          </div>
          <div className="text-center sm:text-left">
            <h4 className="text-sm font-bold text-white">Always Learning & Exploring</h4>
            <p className="text-xs text-slate-400">Expanding into modern AI APIs, full-stack frameworks, and automated student productivity stacks.</p>
          </div>
        </div>

      </div>
    </section>
  );
}
