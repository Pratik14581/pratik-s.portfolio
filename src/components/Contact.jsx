import React, { useState } from 'react';
import { 
  Mail, 
  Linkedin, 
  Github, 
  MapPin, 
  Copy, 
  Check, 
  Send, 
  Sparkles, 
  ArrowUpRight,
  GraduationCap,
  MessageSquare
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { portfolioData } from '../data/portfolioData';

export default function Contact() {
  const { contact, personal } = portfolioData;
  const [copied, setCopied] = useState(false);
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(contact.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleChange = (e) => {
    setFormState({ ...formState, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    // Simulate sending / preparing mailto
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);

      // Trigger celebratory confetti
      confetti({
        particleCount: 80,
        spread: 60,
        origin: { y: 0.7 }
      });

      // Construct mailto link as fallback
      const mailtoLink = `mailto:${contact.email}?subject=${encodeURIComponent(formState.subject || 'Portfolio Inquiry from ' + formState.name)}&body=${encodeURIComponent(`Hi Pratik,\n\nName: ${formState.name}\nEmail: ${formState.email}\n\nMessage:\n${formState.message}`)}`;
      
      window.open(mailtoLink, '_blank');
    }, 600);
  };

  return (
    <section id="contact" className="py-24 relative overflow-hidden bg-white/[0.01]">
      {/* Decorative Glow Elements */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-indigo-600/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-semibold tracking-wide uppercase">
            <Mail className="w-3.5 h-3.5" />
            <span>Get in Touch</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Contact <span className="bg-gradient-to-r from-indigo-400 to-cyan-400 bg-clip-text text-transparent">Me</span>
          </h2>
          <p className="text-slate-400 text-base sm:text-lg">
            {contact.subheading}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Column: Direct Contact Info & Socials */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Email Card with Copy button */}
            <div className="glass-card rounded-2xl p-6 border border-white/10 space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="p-3 rounded-xl bg-indigo-500/10 text-indigo-400 border border-indigo-500/20">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-xs uppercase tracking-wider text-slate-400 font-semibold">
                      Email Address
                    </h3>
                    <a 
                      href={`mailto:${contact.email}`}
                      className="text-white hover:text-indigo-400 font-semibold text-sm sm:text-base transition-colors break-all"
                    >
                      {contact.email}
                    </a>
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-2 pt-2">
                <button
                  onClick={handleCopyEmail}
                  className="flex-1 inline-flex items-center justify-center gap-2 px-3.5 py-2.5 rounded-xl bg-white/5 hover:bg-white/10 text-slate-200 text-xs font-semibold border border-white/10 transition-colors"
                >
                  {copied ? (
                    <>
                      <Check className="w-4 h-4 text-emerald-400" />
                      <span className="text-emerald-400">Copied to Clipboard!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-4 h-4 text-slate-400" />
                      <span>Copy Email</span>
                    </>
                  )}
                </button>
                <a
                  href={`mailto:${contact.email}`}
                  className="inline-flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-semibold transition-colors"
                >
                  <span>Send Mail</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>

            {/* Social Links Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {/* LinkedIn */}
              <a
                href={contact.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="glass-card glass-card-hover rounded-2xl p-5 border border-white/10 flex items-center justify-between group"
              >
                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-xl bg-[#0077b5]/10 text-[#0077b5] group-hover:scale-110 transition-transform">
                    <Linkedin className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs text-slate-400 block font-medium">Network</span>
                    <span className="text-sm font-bold text-white group-hover:text-[#0077b5] transition-colors">
                      LinkedIn
                    </span>
                  </div>
                </div>
                <ArrowUpRight className="w-4 h-4 text-slate-500 group-hover:text-white transition-colors" />
              </a>

              {/* GitHub */}
              <a
                href={contact.github}
                target="_blank"
                rel="noopener noreferrer"
                className="glass-card glass-card-hover rounded-2xl p-5 border border-white/10 flex items-center justify-between group"
              >
                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-xl bg-white/5 text-slate-200 group-hover:scale-110 transition-transform">
                    <Github className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs text-slate-400 block font-medium">Code</span>
                    <span className="text-sm font-bold text-white group-hover:text-indigo-400 transition-colors">
                      GitHub
                    </span>
                  </div>
                </div>
                <ArrowUpRight className="w-4 h-4 text-slate-500 group-hover:text-white transition-colors" />
              </a>
            </div>

            {/* Location & University Card */}
            <div className="glass-card rounded-2xl p-6 border border-white/10 space-y-3">
              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded-xl bg-rose-500/10 text-rose-400">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs text-slate-400 block">Based in</span>
                  <span className="text-sm font-bold text-white">{contact.location}</span>
                </div>
              </div>

              <div className="flex items-center gap-3 pt-2 border-t border-white/5">
                <div className="p-2.5 rounded-xl bg-indigo-500/10 text-indigo-400">
                  <GraduationCap className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs text-slate-400 block">Institution</span>
                  <span className="text-sm font-bold text-white">{contact.college}</span>
                </div>
              </div>
            </div>

          </div>

          {/* Right Column: Interactive Direct Message Form */}
          <div className="lg:col-span-7">
            <div className="glass-card rounded-2xl p-6 sm:p-8 border border-white/10 relative">
              <h3 className="font-display font-bold text-xl text-white mb-2 flex items-center gap-2">
                <MessageSquare className="w-5 h-5 text-indigo-400" />
                <span>Send a Direct Message</span>
              </h3>
              <p className="text-xs sm:text-sm text-slate-400 mb-6">
                Fill out the form below to initiate a conversation directly with Pratik.
              </p>

              {submitted ? (
                <div className="p-6 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 text-center space-y-3 animate-fade-in">
                  <div className="w-12 h-12 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto">
                    <Check className="w-6 h-6" />
                  </div>
                  <h4 className="font-display font-bold text-lg text-white">Thank You!</h4>
                  <p className="text-xs sm:text-sm text-slate-300">
                    Your email client has been launched with your message ready to send to <strong>{contact.email}</strong>.
                  </p>
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setFormState({ name: '', email: '', subject: '', message: '' });
                    }}
                    className="mt-2 px-4 py-2 text-xs font-semibold rounded-lg bg-white/10 hover:bg-white/15 text-white transition-colors"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-medium text-slate-300 mb-1.5">
                        Your Name *
                      </label>
                      <input
                        type="text"
                        name="name"
                        required
                        value={formState.name}
                        onChange={handleChange}
                        placeholder="John Doe"
                        className="w-full px-4 py-3 rounded-xl bg-white/[0.03] border border-white/10 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-medium text-slate-300 mb-1.5">
                        Your Email *
                      </label>
                      <input
                        type="email"
                        name="email"
                        required
                        value={formState.email}
                        onChange={handleChange}
                        placeholder="johndoe@example.com"
                        className="w-full px-4 py-3 rounded-xl bg-white/[0.03] border border-white/10 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-colors"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-slate-300 mb-1.5">
                      Subject
                    </label>
                    <input
                      type="text"
                      name="subject"
                      value={formState.subject}
                      onChange={handleChange}
                      placeholder="Internship opportunity / Collaboration inquiry"
                      className="w-full px-4 py-3 rounded-xl bg-white/[0.03] border border-white/10 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-slate-300 mb-1.5">
                      Message *
                    </label>
                    <textarea
                      name="message"
                      required
                      rows={4}
                      value={formState.message}
                      onChange={handleChange}
                      placeholder="Write your message here..."
                      className="w-full px-4 py-3 rounded-xl bg-white/[0.03] border border-white/10 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-colors resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-gradient-to-r from-indigo-500 via-indigo-600 to-cyan-500 hover:from-indigo-600 hover:to-cyan-600 text-white font-semibold text-sm shadow-lg shadow-indigo-500/25 transition-all duration-200 active:scale-[0.99] disabled:opacity-50"
                  >
                    {loading ? (
                      <span>Preparing message...</span>
                    ) : (
                      <>
                        <span>Send Message</span>
                        <Send className="w-4 h-4" />
                      </>
                    )}
                  </button>
                </form>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
