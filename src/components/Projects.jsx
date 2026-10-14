import React, { useState } from 'react';
import { 
  FolderGit2, 
  ExternalLink, 
  Github, 
  Sparkles, 
  Layers, 
  ArrowRight,
  Bot,
  User,
  CheckCircle2
} from 'lucide-react';
import { portfolioData } from '../data/portfolioData';
import ProjectModal from './ProjectModal';

export default function Projects() {
  const { projects } = portfolioData;
  const [selectedProject, setSelectedProject] = useState(null);

  const getProjectIcon = (iconName) => {
    switch (iconName) {
      case 'User': return <User className="w-6 h-6 text-indigo-400" />;
      case 'Bot': return <Bot className="w-6 h-6 text-cyan-400" />;
      case 'Layers': return <Layers className="w-6 h-6 text-purple-400" />;
      default: return <FolderGit2 className="w-6 h-6 text-indigo-400" />;
    }
  };

  return (
    <section id="projects" className="py-24 relative overflow-hidden bg-white/[0.01]">
      {/* Decorative Glow Elements */}
      <div className="absolute top-1/2 -left-48 w-96 h-96 bg-indigo-500/10 rounded-full blur-[130px] pointer-events-none" />
      <div className="absolute bottom-10 -right-48 w-96 h-96 bg-cyan-500/10 rounded-full blur-[130px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-xs font-semibold tracking-wide uppercase">
            <FolderGit2 className="w-3.5 h-3.5" />
            <span>Featured Work</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Featured <span className="bg-gradient-to-r from-indigo-400 to-cyan-400 bg-clip-text text-transparent">Projects</span>
          </h2>
          <p className="text-slate-400 text-base sm:text-lg">
            Practical applications built with modern web technologies, AI integration, and workflow design
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className="glass-card glass-card-hover rounded-2xl p-6 sm:p-7 border border-white/10 flex flex-col justify-between group relative overflow-hidden transition-all duration-300"
            >
              {/* Top Accent Gradient Line */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-indigo-500 via-cyan-400 to-purple-500 opacity-60 group-hover:opacity-100 transition-opacity" />

              <div>
                {/* Top Badge & Number */}
                <div className="flex items-center justify-between mb-5">
                  <div className="p-3 rounded-xl bg-white/5 border border-white/10 group-hover:bg-indigo-500/10 group-hover:border-indigo-500/30 transition-colors">
                    {getProjectIcon(project.icon)}
                  </div>
                  <span className="font-mono text-xs font-bold text-slate-500 bg-white/[0.03] px-2.5 py-1 rounded-md border border-white/5">
                    PROJECT 0{index + 1}
                  </span>
                </div>

                {/* Category Pill */}
                <span className="text-[11px] font-semibold text-cyan-400 uppercase tracking-wider block mb-2">
                  {project.category}
                </span>

                {/* Project Title */}
                <h3 className="font-display font-bold text-xl sm:text-2xl text-white group-hover:text-indigo-300 transition-colors mb-3">
                  {project.title}
                </h3>

                {/* Short Description */}
                <p className="text-slate-300 text-xs sm:text-sm leading-relaxed mb-6">
                  {project.shortDescription}
                </p>

                {/* Technologies Used Tags */}
                <div className="mb-6">
                  <div className="text-[11px] uppercase tracking-wider text-slate-500 font-semibold mb-2">
                    Technologies:
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-2.5 py-1 rounded-md text-xs font-medium bg-white/5 text-slate-300 border border-white/5"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-5 border-t border-white/10 flex items-center justify-between gap-3">
                <button
                  onClick={() => setSelectedProject(project)}
                  className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-gradient-to-r from-indigo-600 to-cyan-600 hover:from-indigo-500 hover:to-cyan-500 text-white text-xs sm:text-sm font-semibold shadow-md shadow-indigo-500/20 transition-all hover:shadow-indigo-500/30 active:scale-95"
                >
                  <span>View Project</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>

                <a
                  href={project.codeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-xl bg-white/5 hover:bg-white/10 text-slate-300 hover:text-white border border-white/10 transition-colors"
                  aria-label={`View ${project.title} code on GitHub`}
                  title="View on GitHub"
                >
                  <Github className="w-4 h-4" />
                </a>
              </div>

            </div>
          ))}
        </div>

        {/* GitHub Repositories Link */}
        <div className="mt-14 text-center">
          <a
            href={portfolioData.personal.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-white/5 hover:bg-white/10 text-slate-200 hover:text-white font-semibold text-sm border border-white/10 transition-all hover:border-white/25"
          >
            <Github className="w-4 h-4" />
            <span>Explore More on GitHub (Pratik14581)</span>
            <ExternalLink className="w-3.5 h-3.5 ml-1 text-slate-400" />
          </a>
        </div>

      </div>

      {/* Interactive Project Modal */}
      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </section>
  );
}
