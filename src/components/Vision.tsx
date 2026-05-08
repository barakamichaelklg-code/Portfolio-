import { motion } from "motion/react";
import { Zap, Cpu, Atom } from "lucide-react";

export const Vision = () => (
  <section className="section-padding bg-emerald-600 dark:bg-emerald-700 text-white overflow-hidden relative transition-colors duration-500">
    <div className="absolute top-0 right-0 w-full h-full opacity-10 pointer-events-none">
      <Cpu size={600} className="absolute -top-40 -right-40 rotate-12" />
      <Atom size={400} className="absolute -bottom-20 -left-20 opacity-20" />
    </div>
    <div className="max-w-5xl relative z-10">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      >
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/20 text-white text-[11px] font-bold uppercase tracking-wider mb-12">
          <Zap size={14} /> Ma Vision
        </div>
        <p className="text-4xl md:text-7xl font-display font-black leading-[0.9] tracking-tighter mb-12">
          "Je crois fermement que l'avenir de la pharmacie en Afrique passe par la <span className="text-emerald-200 underline decoration-white/30 underline-offset-[12px]">digitalisation</span>."
        </p>
        <p className="text-xl md:text-2xl font-medium opacity-80 max-w-2xl leading-relaxed">
          Mon but est de construire les ponts technologiques qui sauveront des vies et moderniseront notre système de santé.
        </p>
      </motion.div>
    </div>
  </section>
);
