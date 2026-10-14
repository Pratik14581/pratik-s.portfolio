import React, { useState } from 'react';
import { 
  Trophy, 
  Award, 
  Code, 
  BookOpen, 
  PlusCircle, 
  CheckCircle, 
  Sparkles,
  Calendar,
  Building
} from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function Achievements() {
  const { achievements } = portfolioData;
  const [activeCategory, setActiveCategory] = useState('all');

  const filteredItems = activeCategory === 'all'
    ? achievements.items
    : achievements.items.filter(item => item.category === activeCategory);

  const getCategoryIcon = (category) => {
    switch (category) {
      case 'certifications': return <Award className="w-5 h-5 text-amber-400" />;
      case 'hackathons': return <Code className="w-5 h-5 text-cyan-400" />;
      case 'courses': return <BookOpen className="w-5 h-5 text-indigo-400" />;
      case 'awards': return <Trophy className="w-5 h-5 text-yellow-400" />;
      default: return <Sparkles className="w-5 h-5 text-purple-400" />;
    }
  };

  return (
    <section id="achievements" className="py-24 relative overflow-hidden">
      {/* Decorative Blur Backgrounds */}
      <div className="absolute top-1/3 -right-32 w-80 h-80 bg-amber-500/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-10 -left-32 w-80 h-80 bg-indigo-500/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 text-xs font-semibold tracking-wide uppercase">
            <Trophy className="w-3.5 h-3.5" />
            <span>Honors & Milestones</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Achievements & <span className="bg-gradient-to-r from-amber-400 via-indigo-400 to-cyan-400 bg-clip-text text-transparent">Recognitions</span>
          </h2>
          <p className="text-slate-400 text-base sm:text-lg">
            Certifications, hackathon participations, courses, and honors accumulated along my learning path
          </p>
        </div>

        {/* Filter Categories Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {achievements.categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200 ${
                activeCategory === cat.id
                  ? 'bg-gradient-to-r from-amber-500 to-indigo-600 text-white shadow-lg shadow-indigo-500/20 scale-105'
                  : 'bg-white/5 hover:bg-white/10 text-slate-300 hover:text-white border border-white/5'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Achievements Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              className="glass-card glass-card-hover rounded-2xl p-6 border border-white/10 flex flex-col justify-between group"
            >
              <div>
                {/* Header: Icon & Badge */}
                <div className="flex items-center justify-between mb-4">
                  <div className="p-3 rounded-xl bg-white/5 border border-white/10 group-hover:scale-105 transition-transform">
                    {getCategoryIcon(item.category)}
                  </div>
                  <span className="text-[11px] font-semibold px-2.5 py-1 rounded-full bg-white/5 text-slate-300 border border-white/10">
                    {item.badge}
                  </span>
                </div>

                {/* Title */}
                <h3 className="font-display font-bold text-lg text-white group-hover:text-indigo-300 transition-colors mb-2">
                  {item.title}
                </h3>

                {/* Organization & Date */}
                <div className="space-y-1 mb-4 text-xs text-slate-400">
                  <div className="flex items-center gap-1.5">
                    <Building className="w-3.5 h-3.5 text-slate-500" />
                    <span>{item.organization}</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <Calendar className="w-3.5 h-3.5 text-slate-500" />
                    <span>{item.date}</span>
                  </div>
                </div>

                {/* Description */}
                <p className="text-slate-300 text-xs sm:text-sm leading-relaxed mb-4">
                  {item.description}
                </p>
              </div>

              {/* Tag Footer */}
              <div className="pt-3 border-t border-white/5 flex items-center justify-between">
                <span className="text-[11px] font-mono font-medium text-cyan-400">
                  #{item.tag}
                </span>
                <span className="text-[11px] text-slate-500 capitalize">
                  {item.category}
                </span>
              </div>
            </div>
          ))}

          {/* Quick-add Placeholder Card for Pratik */}
          <div className="rounded-2xl p-6 border-2 border-dashed border-white/10 flex flex-col items-center justify-center text-center bg-white/[0.01] hover:border-indigo-500/40 hover:bg-indigo-500/[0.02] transition-colors p-6 min-h-[220px]">
            <div className="p-3 rounded-full bg-white/5 text-indigo-400 mb-3">
              <PlusCircle className="w-6 h-6" />
            </div>
            <h4 className="font-display font-bold text-base text-white mb-1">
              More Milestones Coming Soon
            </h4>
            <p className="text-xs text-slate-400 max-w-xs mb-3">
              Actively preparing for upcoming hackathons, AI certifications, and engineering projects.
            </p>
            <span className="text-[11px] font-mono text-indigo-400 bg-indigo-500/10 px-3 py-1 rounded-full border border-indigo-500/20">
              Future Ready
            </span>
          </div>
        </div>

      </div>
    </section>
  );
}
