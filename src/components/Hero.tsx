import { motion } from "motion/react";
import { Link } from "react-router-dom";
import { ArrowRight, Linkedin, Code2, Stethoscope } from "lucide-react";

export const Hero = () => (
  <section className="min-h-screen flex items-center section-padding pt-32 relative overflow-hidden transition-colors duration-500">
    {/* Decorative Background Elements */}
    <div className="absolute top-1/4 -left-20 w-[500px] h-[500px] bg-emerald-500/10 dark:bg-emerald-500/5 rounded-full blur-[120px] pointer-events-none animate-pulse" />
    <div className="absolute bottom-1/4 -right-20 w-[500px] h-[500px] bg-teal-500/10 dark:bg-teal-500/5 rounded-full blur-[120px] pointer-events-none animate-pulse delay-1000" />

    <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center w-full relative z-10">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      >
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 dark:bg-emerald-500/10 border border-emerald-100 dark:border-emerald-500/20 text-emerald-700 dark:text-emerald-400 text-[11px] font-bold uppercase tracking-wider mb-8">
          <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-ping" />
          Disponible pour nouveaux projets
        </div>
        <h1 className="text-6xl md:text-8xl font-display font-black tracking-tight mb-8 leading-[0.9] text-slate-900 dark:text-white">
          Baraka <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-teal-500">Michael</span>
        </h1>
        <p className="text-lg md:text-xl text-slate-600 dark:text-slate-400 mb-10 max-w-xl leading-relaxed font-medium">
          Étudiant en Pharmacie (L3) à l'Université Officielle de Bukavu, passionné par la fusion entre la <span className="text-slate-900 dark:text-slate-100">santé</span> et la <span className="text-emerald-600 font-semibold">technologie</span>.
        </p>
        <div className="flex flex-wrap gap-4">
          <Link 
            to="/contact" 
            className="px-8 py-4 bg-emerald-600 text-white rounded-2xl font-bold hover:bg-emerald-700 transition-all flex items-center gap-2 shadow-lg shadow-emerald-500/25 hover:-translate-y-1 active:scale-95"
          >
            Me contacter <ArrowRight size={18} />
          </Link>
          <Link 
            to="/projects" 
            className="px-8 py-4 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl font-bold hover:bg-slate-50 dark:hover:bg-slate-800 text-slate-900 dark:text-slate-100 transition-all hover:-translate-y-1 active:scale-95 shadow-sm"
          >
            Voir mes projets
          </Link>
          <a 
            href="https://www.linkedin.com/in/baraka-michael-klg" 
            target="_blank"
            rel="noopener noreferrer"
            className="p-4 border border-slate-200 dark:border-slate-800 rounded-2xl font-bold hover:bg-emerald-50 dark:hover:bg-emerald-500/10 hover:border-emerald-500 hover:text-emerald-600 transition-all hover:-translate-y-1 active:scale-95 flex items-center justify-center text-slate-600 dark:text-slate-400 shadow-sm"
            title="Mon profil LinkedIn"
          >
            <Linkedin size={22} />
          </a>
        </div>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
        className="relative"
      >
        <div 
          className="relative z-10 w-full aspect-[4/5] rounded-[2.5rem] md:rounded-[4rem] shadow-2xl border-[8px] md:border-[16px] border-white dark:border-slate-900 bg-slate-100 dark:bg-slate-800 bg-cover bg-center group overflow-hidden"
          style={{ backgroundImage: 'url("https://wsrv.nl/?url=https://i.ibb.co/HpnQS3wh/IMG-4048.jpg&w=800&output=webp&q=80")' }}
        >
          <div className="absolute inset-0 bg-emerald-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        </div>
        
        {/* Floating UI Elements */}
        <motion.div 
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -bottom-6 -left-4 md:-bottom-8 md:-left-8 p-4 md:p-6 glass rounded-3xl z-20 border border-white/40 dark:border-white/10 shadow-xl"
        >
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-2xl bg-emerald-600 flex items-center justify-center text-white shadow-lg shadow-emerald-500/30">
              <Code2 size={24} />
            </div>
            <div>
              <p className="text-[10px] text-slate-400 dark:text-slate-500 uppercase font-bold tracking-wider mb-0.5">Spécialité</p>
              <p className="text-base md:text-lg font-display font-bold text-slate-900 dark:text-white leading-none">Fullstack Dev</p>
            </div>
          </div>
        </motion.div>

        <motion.div 
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          className="absolute top-10 -right-4 md:-right-8 p-4 md:p-5 glass rounded-2xl z-20 border border-white/40 dark:border-white/10 shadow-xl"
        >
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-teal-500 flex items-center justify-center text-white shadow-lg shadow-teal-500/30">
              <Stethoscope size={20} />
            </div>
            <div>
              <p className="text-[9px] text-slate-400 dark:text-slate-500 uppercase font-bold tracking-wider mb-0.5">Secteur</p>
              <p className="text-xs md:text-sm font-display font-bold text-slate-900 dark:text-white leading-none">Pharmacie (L3)</p>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </div>
  </section>
);
