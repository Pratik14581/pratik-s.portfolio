import React from 'react';
import { 
  ArrowRight, 
  Mail, 
  MapPin, 
  GraduationCap, 
  Sparkles, 
  Terminal, 
  Code2, 
  Cpu, 
  Github, 
  Linkedin,
  ChevronDown
} from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function Hero() {
  const { personal } = portfolioData;

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section 
      id="home" 
      className="relative min-h-screen pt-28 pb-16 flex items-center justify-center overflow-hidden"
    >
      {/* Background Decorative Gradient Orbs */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] bg-indigo-600/15 rounded-full blur-[130px] pointer-events-none" />
      <div className="absolute top-1/3 -left-32 w-96 h-96 bg-cyan-500/10 rounded-full blur-[110px] pointer-events-none" />
      <div className="absolute top-1/2 -right-32 w-96 h-96 bg-purple-500/10 rounded-full blur-[120px] pointer-events-none" />

      {/* Subtle Grid Pattern Overlay */}
      <div 
        className="absolute inset-0 bg-[linear-gradient(to_right,#1f293710_1px,transparent_1px),linear-gradient(to_bottom,#1f293710_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_40%,#000_70%,transparent_100%)] pointer-events-none" 
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Hero Text Content */}
          <div className="lg:col-span-7 text-center lg:text-left space-y-6">
            
            {/* Status Pill */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-300 text-xs sm:text-sm font-medium backdrop-blur-md animate-fade-in shadow-sm">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span>{personal.status}</span>
            </div>

            {/* Name & Title */}
            <div className="space-y-3">
              <h1 className="font-display text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white leading-[1.1]">
                Hi, I'm <br className="hidden sm:inline" />
                <span className="bg-gradient-to-r from-indigo-400 via-cyan-400 to-purple-400 bg-clip-text text-transparent">
                  {personal.name}
                </span>
              </h1>
              
              <h2 className="text-xl sm:text-2xl lg:text-3xl font-semibold text-slate-200 tracking-tight flex items-center justify-center lg:justify-start gap-2 flex-wrap">
                <span className="text-indigo-400 font-bold">B.Tech Student</span>
                <span className="text-slate-600">|</span>
                <span className="text-cyan-300">AI & Technology Enthusiast</span>
              </h2>
            </div>

            {/* Short Professional Introduction */}
            <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto lg:mx-0 leading-relaxed font-normal">
              {personal.shortBio}
            </p>

            {/* College & Location Badges */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3 text-xs sm:text-sm text-slate-400">
              <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/[0.03] border border-white/5">
                <GraduationCap className="w-4 h-4 text-indigo-400" />
                <span className="text-slate-200 font-medium">{personal.college}</span>
                <span className="text-slate-500">(Class of {personal.year})</span>
              </div>
              <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/[0.03] border border-white/5">
                <MapPin className="w-4 h-4 text-rose-400" />
                <span className="text-slate-200 font-medium">{personal.location}</span>
              </div>
            </div>

            {/* Hero Action Buttons */}
            <div className="pt-2 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              <button
                onClick={() => scrollToSection('projects')}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-xl bg-gradient-to-r from-indigo-500 via-indigo-600 to-cyan-500 text-white font-semibold text-base shadow-lg shadow-indigo-500/25 hover:shadow-indigo-500/40 hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200 group"
              >
                <span>View Projects</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>

              <button
                onClick={() => scrollToSection('contact')}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl bg-white/5 hover:bg-white/10 text-slate-200 hover:text-white font-semibold text-base border border-white/10 hover:border-white/20 transition-all duration-200"
              >
                <Mail className="w-4 h-4 text-cyan-400" />
                <span>Contact Me</span>
              </button>
            </div>

            {/* Social Links Quick Access */}
            <div className="pt-2 flex items-center justify-center lg:justify-start gap-4">
              <span className="text-xs uppercase tracking-wider text-slate-500 font-medium">
                Connect with me:
              </span>
              <a
                href={personal.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-400 hover:text-white transition-colors"
                aria-label="GitHub Profile"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href={personal.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-400 hover:text-[#0077b5] transition-colors"
                aria-label="LinkedIn Profile"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href={`mailto:${personal.email}`}
                className="text-slate-400 hover:text-cyan-400 transition-colors"
                aria-label="Send Email"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>

          </div>

          {/* Right Column: Interactive Card Showcase */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-full max-w-md">
              
              {/* Outer Decorative Glow Ring */}
              <div className="absolute -inset-1.5 bg-gradient-to-r from-indigo-500 via-cyan-500 to-purple-600 rounded-3xl blur-lg opacity-40 animate-pulse-slow" />
              
              {/* Main Profile Card Container */}
              <div className="relative glass-card rounded-2xl p-6 sm:p-8 border border-white/10 bg-[#111726]/80 shadow-2xl">
                
                {/* Header Window Bar */}
                <div className="flex items-center justify-between pb-5 border-b border-white/10 mb-6">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-rose-500/80" />
                    <div className="w-3 h-3 rounded-full bg-amber-500/80" />
                    <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
                  </div>
                  <div className="flex items-center gap-1.5 text-xs text-slate-400 font-mono">
                    <Terminal className="w-3.5 h-3.5 text-indigo-400" />
                    <span>pratik@portfolio:~</span>
                  </div>
                </div>

                {/* Profile Avatar / Monogram Visual */}
                <div className="flex flex-col items-center text-center space-y-4">
                  <div className="relative">
                    <div className="w-24 h-24 rounded-2xl bg-gradient-to-tr from-indigo-600 via-cyan-500 to-purple-500 p-1 shadow-lg shadow-indigo-500/30">
                      <div className="w-full h-full bg-[#0d121f] rounded-[14px] flex items-center justify-center">
                        <span className="font-display font-black text-4xl bg-gradient-to-r from-indigo-400 to-cyan-400 bg-clip-text text-transparent">
                          PM
                        </span>
                      </div>
                    </div>
                    {/* Badge Icon */}
                    <div className="absolute -bottom-1 -right-1 p-1.5 bg-indigo-600 rounded-lg text-white shadow-md">
                      <Sparkles className="w-3.5 h-3.5" />
                    </div>
                  </div>

                  <div>
                    <h3 className="font-display font-bold text-xl text-white">
                      {personal.name}
                    </h3>
                    <p className="text-xs text-indigo-400 font-medium">
                      B.Tech Undergrad • Class of 2026
                    </p>
                    <p className="text-xs text-slate-400 mt-0.5">
                      {personal.college}
                    </p>
                  </div>
                </div>

                {/* Tech Highlights Grid */}
                <div className="mt-6 pt-5 border-t border-white/5 grid grid-cols-2 gap-2.5">
                  <div className="p-3 rounded-xl bg-white/[0.02] border border-white/5 flex items-center gap-2.5">
                    <div className="p-2 rounded-lg bg-indigo-500/10 text-indigo-400">
                      <Cpu className="w-4 h-4" />
                    </div>
                    <div className="text-left">
                      <div className="text-[10px] text-slate-500 uppercase font-semibold">Focus</div>
                      <div className="text-xs font-semibold text-slate-200">AI & GenAI</div>
                    </div>
                  </div>

                  <div className="p-3 rounded-xl bg-white/[0.02] border border-white/5 flex items-center gap-2.5">
                    <div className="p-2 rounded-lg bg-cyan-500/10 text-cyan-400">
                      <Code2 className="w-4 h-4" />
                    </div>
                    <div className="text-left">
                      <div className="text-[10px] text-slate-500 uppercase font-semibold">Stack</div>
                      <div className="text-xs font-semibold text-slate-200">Web Dev & Python</div>
                    </div>
                  </div>
                </div>

                {/* Mini Stats Row */}
                <div className="mt-4 grid grid-cols-2 gap-2 text-center">
                  <div className="py-2 px-3 rounded-lg bg-indigo-500/5 border border-indigo-500/10">
                    <div className="font-display font-bold text-lg text-indigo-300">2026</div>
                    <div className="text-[10px] text-slate-400">Expected Graduation</div>
                  </div>
                  <div className="py-2 px-3 rounded-lg bg-cyan-500/5 border border-cyan-500/10">
                    <div className="font-display font-bold text-lg text-cyan-300">8+</div>
                    <div className="text-[10px] text-slate-400">Skills & Toolsets</div>
                  </div>
                </div>

              </div>

            </div>
          </div>

        </div>

        {/* Scroll Down Indicator */}
        <div className="pt-16 hidden md:flex flex-col items-center justify-center">
          <button 
            onClick={() => scrollToSection('about')}
            className="flex flex-col items-center gap-1.5 text-xs text-slate-500 hover:text-slate-300 transition-colors"
            aria-label="Scroll to About section"
          >
            <span>Explore Portfolio</span>
            <ChevronDown className="w-4 h-4 animate-bounce text-indigo-400" />
          </button>
        </div>

      </div>
    </section>
  );
}
