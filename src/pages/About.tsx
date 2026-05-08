import { motion } from "motion/react";
import { Stethoscope, User } from "lucide-react";
import { PageLayout } from "../components/PageLayout";

export const About = () => (
  <PageLayout 
    title="À Propos" 
    subtitle="Découvrez mon parcours à l'intersection de la santé et du développement web."
    icon={User}
  >
    <div className="grid md:grid-cols-2 gap-16 items-center">
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 dark:bg-emerald-500/10 text-emerald-700 dark:text-emerald-400 text-[11px] font-bold uppercase tracking-wider mb-6">
          <Stethoscope size={14} /> Mon Histoire
        </div>
        <div className="space-y-6 text-slate-600 dark:text-slate-400 leading-relaxed text-lg">
          <p>
            Actuellement en 3ème année de Pharmacie (L3) à l'Université Officielle de Bukavu, j'explore comment le développement web peut transformer le secteur pharmaceutique.
          </p>
          <p>
            Débutant passionné, je me spécialise dans le développement web et backend, avec un intérêt particulier pour l'automatisation et la gestion de données via Python et Node.js.
          </p>
          <p className="font-semibold text-slate-900 dark:text-slate-200">
            Mon objectif est de créer des solutions numériques innovantes qui répondent aux défis de santé publique et facilitent la gestion pharmaceutique.
          </p>
        </div>
      </motion.div>
      <div className="relative">
        <div 
          className="aspect-[4/5] rounded-[2.5rem] md:rounded-[4rem] bg-slate-100 dark:bg-slate-800 border-[8px] md:border-[16px] border-white dark:border-slate-900 shadow-2xl flex items-center justify-center overflow-hidden relative group bg-cover bg-center"
          style={{ backgroundImage: 'url("https://wsrv.nl/?url=https://i.ibb.co/5hyM915h/IMG-5749.jpg&w=1000&output=webp&q=80")' }}
        >
          <div className="absolute inset-0 bg-slate-900/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          <div className="absolute bottom-4 left-4 md:bottom-8 md:left-8 p-6 md:p-8 glass rounded-[2rem] shadow-2xl z-10 max-w-[220px] md:max-w-xs border border-white/40 dark:border-white/10">
            <div className="flex gap-2 mb-4 md:mb-6">
              <div className="w-3 h-3 rounded-full bg-rose-400" />
              <div className="w-3 h-3 rounded-full bg-amber-400" />
              <div className="w-3 h-3 rounded-full bg-emerald-400" />
            </div>
            <code className="text-xs md:text-base font-mono text-emerald-950 dark:text-emerald-100 leading-relaxed">
              <span className="text-emerald-700/50 dark:text-emerald-500/50 block mb-2 md:mb-4">// Bukavu, RDC</span>
              <span className="text-emerald-600 dark:text-emerald-400">const</span> baraka = &#123;<br />
              &nbsp;&nbsp;studies: <span className="text-emerald-600 dark:text-emerald-400">"Pharmacy"</span>,<br />
              &nbsp;&nbsp;level: <span className="text-emerald-600 dark:text-emerald-400">"L3"</span>,<br />
              &nbsp;&nbsp;passion: <span className="text-emerald-600 dark:text-emerald-400">"Web Dev"</span>,<br />
              &nbsp;&nbsp;status: <span className="text-emerald-600 dark:text-emerald-400">"Learning"</span><br />
              &#125;;
            </code>
          </div>
        </div>
      </div>
    </div>
  </PageLayout>
);

