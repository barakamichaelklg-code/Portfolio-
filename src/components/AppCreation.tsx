import { motion } from "motion/react";
import { Globe, Code2, Database } from "lucide-react";

export const AppCreation = () => (
  <section className="section-padding bg-slate-50/30 dark:bg-slate-950/30 transition-colors duration-500 relative overflow-hidden">
    <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-emerald-500/5 to-transparent pointer-events-none" />
    
    <div className="grid md:grid-cols-2 gap-16 lg:gap-24 items-center relative z-10">
      <div className="order-2 md:order-1">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 dark:bg-emerald-500/10 text-emerald-700 dark:text-emerald-400 text-[11px] font-bold uppercase tracking-wider mb-6">
          <Globe size={14} /> Services & Solutions
        </div>
        <h2 className="text-4xl md:text-6xl font-display font-black mb-8 tracking-tighter leading-[0.9] text-slate-900 dark:text-white">
          Création de Sites & <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-teal-500">Applications</span>
        </h2>
        <p className="text-lg text-slate-500 dark:text-slate-400 mb-12 leading-relaxed font-medium">
          Je conçois et développe des solutions web sur mesure, allant du simple site vitrine à l'application web complexe. Mon approche combine design moderne et technologies robustes.
        </p>
        <div className="grid gap-4">
          {[
            { icon: Globe, title: "Sites Web Vitrines", desc: "Présence en ligne élégante et optimisée pour votre activité ou projet." },
            { icon: Code2, title: "Applications Web", desc: "Outils interactifs et plateformes sur mesure (SaaS, Dashboards)." },
            { icon: Database, title: "Gestion de Données", desc: "Systèmes d'inventaire et bases de données pour le secteur pharmaceutique." }
          ].map((item, i) => (
            <motion.div 
              key={i}
              whileHover={{ x: 8 }}
              className="flex items-start gap-6 p-6 bg-white/50 dark:bg-slate-900/50 rounded-3xl border border-slate-100 dark:border-slate-800 shadow-sm hover:shadow-md transition-all glass-card"
            >
              <div className="p-3.5 bg-emerald-50 dark:bg-emerald-500/10 rounded-2xl text-emerald-600 dark:text-emerald-400">
                <item.icon size={24} />
              </div>
              <div>
                <h4 className="text-lg font-display font-bold mb-1 text-slate-900 dark:text-white">{item.title}</h4>
                <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed font-medium">{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
      <div className="order-1 md:order-2">
        <div className="relative group">
          <div className="absolute -inset-4 bg-emerald-600/10 rounded-[4rem] blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
          <div 
            className="aspect-square rounded-[3rem] md:rounded-[5rem] bg-slate-100 dark:bg-slate-800 overflow-hidden shadow-2xl relative z-10 border-[8px] md:border-[16px] border-white dark:border-slate-900 bg-cover bg-center"
            style={{ backgroundImage: 'url("https://wsrv.nl/?url=https://i.ibb.co/qYM35KWh/IMG-5410.jpg&w=1200&output=webp&q=80")' }}
          />
          <motion.div 
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="absolute -top-10 -right-10 w-32 h-32 md:w-48 md:h-48 border-2 border-dashed border-emerald-600/20 rounded-full flex items-center justify-center pointer-events-none"
          >
            <div className="w-3 h-3 bg-emerald-600 rounded-full" />
          </motion.div>
        </div>
      </div>
    </div>
  </section>
);
