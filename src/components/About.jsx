import React from 'react';
import { 
  Brain, 
  Globe, 
  Zap, 
  GraduationCap, 
  MapPin, 
  UserCheck, 
  Sparkles,
  ArrowRight
} from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function About() {
  const { about, personal } = portfolioData;

  const iconMap = {
    Brain: Brain,
    Globe: Globe,
    Zap: Zap,
    GraduationCap: GraduationCap
  };

  return (
    <section id="about" className="py-24 relative overflow-hidden">
      {/* Decorative Blur Backgrounds */}
      <div className="absolute top-1/2 -right-48 w-80 h-80 bg-indigo-500/10 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-10 -left-48 w-80 h-80 bg-cyan-500/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-xs font-semibold tracking-wide uppercase">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Get to Know Me</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            About <span className="bg-gradient-to-r from-indigo-400 to-cyan-400 bg-clip-text text-transparent">Me</span>
          </h2>
          <p className="text-slate-400 text-base sm:text-lg">
            Engineering student, curious problem solver, and tech builder
          </p>
        </div>

        {/* Content Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Narrative Story & Key Facts */}
          <div className="lg:col-span-7 space-y-8">
            <div className="glass-card rounded-2xl p-6 sm:p-8 space-y-5 border border-white/10">
              <h3 className="font-display text-2xl font-bold text-white flex items-center gap-2.5">
                <span className="w-2.5 h-6 rounded-full bg-gradient-to-b from-indigo-500 to-cyan-500 inline-block" />
                Passionate B.Tech Student & Lifelong Learner
              </h3>
              
              <p className="text-slate-300 text-base leading-relaxed">
                {about.leadParagraph}
              </p>
              
              <p className="text-slate-300 text-base leading-relaxed">
                {about.secondaryParagraph}
              </p>

              {/* Quick Key Badges */}
              <div className="pt-3 border-t border-white/10 grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-xl bg-indigo-500/10 text-indigo-400">
                    <GraduationCap className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs text-slate-400">University</div>
                    <div className="text-sm font-semibold text-slate-200">{personal.college}</div>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-xl bg-cyan-500/10 text-cyan-400">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs text-slate-400">Location</div>
                    <div className="text-sm font-semibold text-slate-200">{personal.location}</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Facts Grid */}
            <div className="glass-card rounded-2xl p-6 sm:p-8 border border-white/10">
              <h4 className="font-display text-lg font-bold text-white mb-4 flex items-center gap-2">
                <UserCheck className="w-4 h-4 text-cyan-400" />
                <span>Quick Facts</span>
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm">
                {about.quickFacts.map((fact, index) => (
                  <div 
                    key={index} 
                    className="p-3 rounded-xl bg-white/[0.02] border border-white/5 hover:border-white/10 transition-colors"
                  >
                    <span className="text-xs text-slate-400 block font-medium">{fact.label}</span>
                    <span className="text-slate-200 font-semibold mt-0.5 block">{fact.value}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: 4 Core Focus Areas Cards */}
          <div className="lg:col-span-5 space-y-4">
            <h3 className="text-lg font-display font-bold text-white mb-2 flex items-center gap-2">
              <span className="text-indigo-400">#</span> What I'm Focused On
            </h3>

            {about.focusAreas.map((area, index) => {
              const IconComponent = iconMap[area.icon] || Sparkles;
              return (
                <div 
                  key={index}
                  className="glass-card glass-card-hover rounded-2xl p-5 border border-white/10 flex items-start gap-4 group"
                >
                  <div className="p-3 rounded-xl bg-gradient-to-tr from-indigo-500/20 to-cyan-500/20 text-indigo-400 group-hover:text-cyan-300 transition-colors shrink-0">
                    <IconComponent className="w-5 h-5" />
                  </div>
                  <div className="space-y-1">
                    <h4 className="font-display font-bold text-base text-white group-hover:text-indigo-300 transition-colors">
                      {area.title}
                    </h4>
                    <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                      {area.description}
                    </p>
                  </div>
                </div>
              );
            })}

            {/* Action Callout Box */}
            <div className="rounded-2xl p-5 bg-gradient-to-r from-indigo-900/40 via-purple-900/30 to-cyan-900/30 border border-indigo-500/30 text-center sm:text-left flex flex-col sm:flex-row items-center justify-between gap-4 mt-6">
              <div>
                <p className="text-sm font-semibold text-white">Interested in collaborating?</p>
                <p className="text-xs text-slate-400">Open to student internships and creative projects.</p>
              </div>
              <a
                href="#contact"
                className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-semibold rounded-lg bg-indigo-600 hover:bg-indigo-500 text-white shrink-0 shadow-md transition-colors"
              >
                <span>Say Hello</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
