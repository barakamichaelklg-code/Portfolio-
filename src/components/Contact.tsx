import { motion } from "motion/react";
import { Send, Mail, Phone, Github, Linkedin } from "lucide-react";

export const Contact = ({ showTitle = true }: { showTitle?: boolean }) => (
  <section id="contact" className={`${showTitle ? 'section-padding bg-white dark:bg-slate-950 px-6' : ''} transition-colors duration-500 relative overflow-hidden`}>
    {showTitle && (
      <div className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none">
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-emerald-500 rounded-full blur-[150px]" />
      </div>
    )}
    
    <div className={`max-w-6xl mx-auto ${showTitle ? 'glass rounded-[3rem] p-10 md:p-20 border border-white/40 dark:border-white/10 shadow-2xl' : ''} text-center relative z-10`}>
      {showTitle && (
        <>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 dark:bg-emerald-500/10 text-emerald-700 dark:text-emerald-400 text-[11px] font-bold uppercase tracking-wider mb-8">
            <Send size={14} /> Contact
          </div>
          <h2 className="text-5xl md:text-7xl font-display font-black mb-8 tracking-tighter leading-tight text-slate-900 dark:text-white">Travaillons <br /><span className="text-emerald-600">ensemble</span></h2>
          <p className="text-lg md:text-xl text-slate-500 dark:text-slate-400 mb-16 max-w-2xl mx-auto font-medium leading-relaxed">
            Vous avez un projet en tête ou vous voulez simplement discuter de la tech et de la pharmacie ?
          </p>
        </>
      )}
      <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto">
        <a 
          href="mailto:barakamichaelklg@gmail.com" 
          className="group flex flex-col items-center p-8 rounded-[2.5rem] bg-white/50 dark:bg-slate-900/50 border border-slate-100 dark:border-slate-800 hover:border-emerald-500 hover:shadow-xl transition-all duration-500 glass-card"
        >
          <div className="w-16 h-16 rounded-2xl bg-emerald-50 dark:bg-emerald-500/10 flex items-center justify-center text-emerald-600 dark:text-emerald-400 mb-6 group-hover:scale-110 transition-transform">
            <Mail size={28} />
          </div>
          <span className="text-[10px] font-bold text-slate-400 dark:text-slate-500 uppercase tracking-wider mb-2">Email</span>
          <span className="text-base font-bold break-all text-slate-900 dark:text-white">barakamichaelklg@gmail.com</span>
        </a>
        <a 
          href="tel:0979307569" 
          className="group flex flex-col items-center p-8 rounded-[2.5rem] bg-white/50 dark:bg-slate-900/50 border border-slate-100 dark:border-slate-800 hover:border-emerald-500 hover:shadow-xl transition-all duration-500 glass-card"
        >
          <div className="w-16 h-16 rounded-2xl bg-emerald-50 dark:bg-emerald-500/10 flex items-center justify-center text-emerald-600 dark:text-emerald-400 mb-6 group-hover:scale-110 transition-transform">
            <Phone size={28} />
          </div>
          <span className="text-[10px] font-bold text-slate-400 dark:text-slate-500 uppercase tracking-wider mb-2">Téléphone</span>
          <span className="text-xl font-black text-slate-900 dark:text-white">0979307569</span>
        </a>
      </div>
      <div className="mt-16 flex flex-wrap justify-center gap-6">
        <a 
          href="https://github.com/barakamichaelklg-code" 
          target="_blank" 
          rel="noopener noreferrer"
          className="group p-4 rounded-2xl bg-white/50 dark:bg-slate-900/50 border border-slate-100 dark:border-slate-800 hover:bg-emerald-600 hover:text-white transition-all duration-300 flex items-center gap-3 shadow-sm text-slate-900 dark:text-slate-100 glass-card"
        >
          <Github size={24} className="group-hover:rotate-12 transition-transform" />
          <span className="text-[11px] font-bold uppercase tracking-wider">GitHub Profile</span>
        </a>
        <a 
          href="https://www.linkedin.com/in/baraka-michael-klg" 
          target="_blank" 
          rel="noopener noreferrer"
          className="group p-4 rounded-2xl bg-white/50 dark:bg-slate-900/50 border border-slate-100 dark:border-slate-800 hover:bg-[#0A66C2] hover:text-white transition-all duration-300 flex items-center gap-3 shadow-sm text-slate-900 dark:text-slate-100 glass-card"
        >
          <Linkedin size={24} className="group-hover:-rotate-12 transition-transform" />
          <span className="text-[11px] font-bold uppercase tracking-wider">LinkedIn Profile</span>
        </a>
      </div>
    </div>
  </section>
);
