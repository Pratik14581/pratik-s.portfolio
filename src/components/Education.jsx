import React from 'react';
import { 
  GraduationCap, 
  Calendar, 
  MapPin, 
  BookOpen, 
  CheckCircle2, 
  Sparkles,
  Layers,
  Award
} from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function Education() {
  const { education } = portfolioData;

  return (
    <section id="education" className="py-24 relative overflow-hidden bg-white/[0.01]">
      {/* Background Glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-96 h-96 bg-indigo-500/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-semibold tracking-wide uppercase">
            <GraduationCap className="w-3.5 h-3.5" />
            <span>Academic Background</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            My <span className="bg-gradient-to-r from-indigo-400 to-cyan-400 bg-clip-text text-transparent">Education</span>
          </h2>
          <p className="text-slate-400 text-base sm:text-lg">
            Engineering foundation, university journey, and core technical coursework
          </p>
        </div>

        {/* Main Degree Showcase Banner */}
        <div className="glass-card rounded-2xl p-6 sm:p-10 border border-white/10 mb-12 relative overflow-hidden">
          {/* Accent Top Border */}
          <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-indigo-500 via-cyan-400 to-purple-500" />
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Degree & College Info */}
            <div className="lg:col-span-7 space-y-4">
              <div className="flex flex-wrap items-center gap-2.5">
                <span className="px-3 py-1 rounded-full text-xs font-semibold bg-indigo-500/20 text-indigo-300 border border-indigo-500/30">
                  Undergraduate Degree
                </span>
                <span className="px-3 py-1 rounded-full text-xs font-semibold bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  Expected Graduation: {education.graduationYear}
                </span>
              </div>

              <div>
                <h3 className="font-display text-3xl sm:text-4xl font-black text-white tracking-tight">
                  {education.degree}
                </h3>
                <p className="text-xl sm:text-2xl font-bold text-indigo-400 mt-1">
                  {education.institution}
                </p>
              </div>

              <div className="flex flex-wrap items-center gap-4 text-xs sm:text-sm text-slate-300">
                <div className="flex items-center gap-1.5">
                  <Calendar className="w-4 h-4 text-indigo-400" />
                  <span>Timeline: <strong>{education.timeline}</strong></span>
                </div>
                <div className="flex items-center gap-1.5">
                  <MapPin className="w-4 h-4 text-rose-400" />
                  <span>Location: <strong>{education.location}</strong></span>
                </div>
              </div>

              <p className="text-slate-300 text-sm sm:text-base leading-relaxed pt-2">
                {education.description}
              </p>
            </div>

            {/* Academic Highlights Box */}
            <div className="lg:col-span-5 bg-white/[0.02] border border-white/5 rounded-xl p-5 sm:p-6 space-y-3">
              <h4 className="font-display font-semibold text-sm text-white uppercase tracking-wider flex items-center gap-2">
                <Award className="w-4 h-4 text-amber-400" />
                <span>Academic Highlights</span>
              </h4>
              <ul className="space-y-2.5 text-xs sm:text-sm text-slate-300">
                {education.highlights.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

          </div>
        </div>

        {/* Relevant Learning Areas Section */}
        <div className="space-y-6">
          <div className="flex items-center justify-between">
            <h3 className="font-display text-xl sm:text-2xl font-bold text-white flex items-center gap-2.5">
              <BookOpen className="w-5 h-5 text-indigo-400" />
              <span>Relevant Learning Areas & Coursework</span>
            </h3>
            <span className="text-xs text-slate-400 hidden sm:block">
              Continuous curriculum & skill exploration
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {education.learningAreas.map((area, index) => (
              <div
                key={index}
                className="glass-card glass-card-hover rounded-xl p-5 border border-white/10 flex flex-col justify-between group"
              >
                <div className="space-y-2.5">
                  <div className="flex items-center justify-between">
                    <span className="text-[11px] font-mono font-bold text-indigo-400 bg-indigo-500/10 px-2.5 py-1 rounded-md border border-indigo-500/20">
                      AREA 0{index + 1}
                    </span>
                    <Sparkles className="w-3.5 h-3.5 text-slate-600 group-hover:text-cyan-400 transition-colors" />
                  </div>
                  
                  <h4 className="font-display font-bold text-base text-white group-hover:text-indigo-300 transition-colors">
                    {area.topic}
                  </h4>
                  
                  <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                    {area.description}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-white/5 flex items-center justify-between text-[11px] text-slate-400">
                  <span>Semester Track</span>
                  <span className="text-emerald-400 font-medium">In Progress / Completed</span>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
