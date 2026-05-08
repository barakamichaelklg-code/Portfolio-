import { motion } from "motion/react";
import { GitBranch, Globe } from "lucide-react";

const TimelineItem = ({ year, title, institution, description }: { year: string, title: string, institution: string, description: string }) => (
  <div className="relative pl-12 pb-16 border-l-2 border-slate-100 dark:border-slate-800 last:pb-0">
    <div className="absolute left-[-9px] top-0 w-4 h-4 rounded-full bg-emerald-600 border-4 border-white dark:border-slate-950 shadow-lg shadow-emerald-500/30" />
    <span className="inline-block px-3 py-1 bg-emerald-50 dark:bg-emerald-500/10 text-emerald-700 dark:text-emerald-400 text-[11px] font-bold uppercase tracking-wider rounded-full mb-4 border border-emerald-100 dark:border-emerald-500/20">
      {year}
    </span>
    <h3 className="text-2xl font-display font-black mb-2 tracking-tight text-slate-900 dark:text-white">{title}</h3>
    <p className="text-lg text-emerald-600 dark:text-emerald-400 font-bold mb-4">{institution}</p>
    <p className="text-slate-500 dark:text-slate-400 text-base leading-relaxed font-medium max-w-xl">{description}</p>
  </div>
);

export const Education = () => (
  <section id="education" className="section-padding bg-white dark:bg-slate-950 transition-colors duration-500 relative overflow-hidden">
    <div className="absolute top-1/2 -right-20 w-64 h-64 bg-emerald-500/5 rounded-full blur-3xl" />
    
    <div className="grid lg:grid-cols-3 gap-16 lg:gap-24 relative z-10">
      <div className="lg:col-span-1">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 dark:bg-emerald-500/10 text-emerald-700 dark:text-emerald-400 text-[11px] font-bold uppercase tracking-wider mb-6">
          <GitBranch size={14} /> Éducation
        </div>
        <h2 className="text-4xl md:text-5xl font-display font-black mb-8 tracking-tighter leading-tight text-slate-900 dark:text-white">Parcours <br /><span className="text-emerald-600">Académique</span></h2>
        <p className="text-lg text-slate-500 dark:text-slate-400 mb-12 font-medium leading-relaxed">
          Mon cheminement à l'Université Officielle de Bukavu et mon auto-formation en technologies web.
        </p>
        <div className="p-8 bg-slate-50/50 dark:bg-slate-900/50 rounded-[2rem] border border-slate-100 dark:border-slate-800 glass-card">
          <h4 className="text-xl font-display font-bold text-slate-900 dark:text-white mb-6 flex items-center gap-3">
            <Globe size={24} className="text-emerald-600 dark:text-emerald-400" /> Langues
          </h4>
          <div className="space-y-5">
            {[
              { name: "Français", level: "Courant", progress: "w-full" },
              { name: "Anglais", level: "Technique", progress: "w-2/3" },
              { name: "Swahili", level: "Maternel", progress: "w-full" }
            ].map((lang, i) => (
              <div key={i}>
                <div className="flex justify-between text-[13px] font-bold mb-2 text-slate-900 dark:text-slate-100">
                  <span>{lang.name}</span>
                  <span className="text-emerald-600 dark:text-emerald-400">{lang.level}</span>
                </div>
                <div className="h-1.5 bg-slate-200 dark:bg-slate-800 rounded-full overflow-hidden">
                  <motion.div 
                    initial={{ width: 0 }}
                    whileInView={{ width: lang.progress.split('-')[1] === 'full' ? '100%' : '66.6%' }}
                    transition={{ duration: 1, ease: "easeOut" }}
                    className="h-full bg-emerald-600 dark:bg-emerald-500 rounded-full"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="lg:col-span-2">
        <div className="space-y-4">
          <TimelineItem 
            year="2025 - 2026 (Présent)"
            title="Baccalauréat 3 (L3) en Pharmacie"
            institution="Université Officielle de Bukavu (UOB)"
            description="Spécialisation en pharmacologie clinique, chimie médicinale et gestion de la chaîne d'approvisionnement des médicaments."
          />
          <TimelineItem 
            year="2024 - 2025"
            title="Baccalauréat 2 (L2) en Pharmacie"
            institution="Université Officielle de Bukavu (UOB)"
            description="Étude approfondie de la biochimie, de la physiologie humaine et début de l'intérêt pour l'informatique médicale."
          />
          <TimelineItem 
            year="2023 - 2024"
            title="Baccalauréat 1 (L1) en Pharmacie"
            institution="Université Officielle de Bukavu (UOB)"
            description="Bases des sciences pharmaceutiques et introduction aux systèmes d'information."
          />
        </div>
      </div>
    </div>
  </section>
);
