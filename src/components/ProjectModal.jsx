import React, { useEffect } from 'react';
import { 
  X, 
  ExternalLink, 
  Github, 
  CheckCircle2, 
  Sparkles, 
  Code2, 
  Cpu, 
  Layers 
} from 'lucide-react';

export default function ProjectModal({ project, onClose }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [onClose]);

  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-black/80 backdrop-blur-sm transition-opacity" 
        onClick={onClose} 
      />

      {/* Modal Dialog Content */}
      <div className="relative w-full max-w-2xl bg-[#111726] border border-white/15 rounded-3xl p-6 sm:p-8 shadow-2xl z-10 my-8 overflow-hidden animate-slide-up text-left">
        
        {/* Accent Glow */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-500/10 rounded-full blur-[80px] pointer-events-none" />

        {/* Header Bar */}
        <div className="flex items-start justify-between gap-4 pb-4 border-b border-white/10">
          <div>
            <span className="text-xs font-semibold px-3 py-1 rounded-full bg-indigo-500/15 text-indigo-300 border border-indigo-500/30 inline-block mb-2">
              {project.category}
            </span>
            <h3 className="font-display text-2xl sm:text-3xl font-extrabold text-white">
              {project.title}
            </h3>
          </div>
          <button
            onClick={onClose}
            className="p-2 text-slate-400 hover:text-white hover:bg-white/10 rounded-full transition-colors focus:outline-none"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="py-5 space-y-6">
          {/* Full Description */}
          <div>
            <h4 className="text-xs uppercase font-bold tracking-wider text-slate-400 mb-2">
              Overview & Objectives
            </h4>
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              {project.fullDescription || project.shortDescription}
            </p>
          </div>

          {/* Key Features & Highlights */}
          {project.highlights && project.highlights.length > 0 && (
            <div>
              <h4 className="text-xs uppercase font-bold tracking-wider text-slate-400 mb-3 flex items-center gap-1.5">
                <Sparkles className="w-4 h-4 text-cyan-400" />
                <span>Key Highlights & Engineering Feats</span>
              </h4>
              <ul className="grid grid-cols-1 gap-2.5">
                {project.highlights.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300 bg-white/[0.02] p-3 rounded-xl border border-white/5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Tech Stack Pills */}
          <div>
            <h4 className="text-xs uppercase font-bold tracking-wider text-slate-400 mb-2.5 flex items-center gap-1.5">
              <Code2 className="w-4 h-4 text-indigo-400" />
              <span>Technologies Used</span>
            </h4>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1.5 rounded-lg text-xs font-semibold bg-white/5 text-slate-200 border border-white/10"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Modal Footer Actions */}
        <div className="pt-4 border-t border-white/10 flex flex-wrap items-center justify-end gap-3">
          <a
            href={project.codeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-white/5 hover:bg-white/10 text-slate-200 hover:text-white text-xs sm:text-sm font-semibold border border-white/10 transition-colors"
          >
            <Github className="w-4 h-4" />
            <span>View Code on GitHub</span>
          </a>
          <button
            onClick={onClose}
            className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-indigo-500 to-cyan-500 hover:from-indigo-600 hover:to-cyan-600 text-white text-xs sm:text-sm font-semibold transition-all shadow-md shadow-indigo-500/25"
          >
            Done
          </button>
        </div>

      </div>
    </div>
  );
}
