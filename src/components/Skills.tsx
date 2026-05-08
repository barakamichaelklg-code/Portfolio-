import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Layout, Server, Wrench } from "lucide-react";

const SkillCard = ({ icon: Icon, title, description, skills }: { icon: any, title: string, description: string, skills: string[] }) => (
  <div className="p-8 bg-white dark:bg-slate-900/50 rounded-[2rem] border border-slate-200 dark:border-slate-800 hover:border-emerald-500/50 hover:shadow-xl hover:shadow-emerald-500/5 transition-all duration-500 group relative overflow-hidden glass-card">
    <div className="absolute -top-10 -right-10 w-32 h-32 bg-emerald-500/5 rounded-full blur-2xl group-hover:bg-emerald-500/10 transition-colors" />
    <div className="w-14 h-14 rounded-2xl bg-emerald-50 dark:bg-emerald-500/10 flex items-center justify-center text-emerald-600 dark:text-emerald-400 mb-6 group-hover:scale-110 group-hover:rotate-3 transition-all duration-500">
      <Icon size={28} />
    </div>
    <h3 className="text-xl font-display font-bold mb-2 tracking-tight text-slate-900 dark:text-white">{title}</h3>
    <p className="text-slate-500 dark:text-slate-400 text-sm mb-6 leading-relaxed font-medium">{description}</p>
    <div className="flex flex-wrap gap-2">
      {skills.map(skill => (
        <span key={skill} className="px-3 py-1 bg-slate-50 dark:bg-slate-800/50 text-slate-600 dark:text-slate-300 text-[10px] font-bold uppercase tracking-wider rounded-full border border-slate-100 dark:border-slate-700 group-hover:border-emerald-200 dark:group-hover:border-emerald-500/30 transition-colors">
          {skill}
        </span>
      ))}
    </div>
  </div>
);

export const Skills = ({ showTitle = true }: { showTitle?: boolean }) => {
  const [filter, setFilter] = useState('All');
  const categories = [
    { id: 'All', label: 'Tout' },
    { id: 'Frontend', label: 'Frontend' },
    { id: 'Backend', label: 'Backend' },
    { id: 'Tools & API', label: 'Outils & API' }
  ];

  const skillCards = [
    {
      category: 'Frontend',
      icon: Layout,
      title: "Frontend",
      description: "Création d'interfaces utilisateur réactives et intuitives.",
      skills: ["HTML5", "CSS3", "JavaScript", "React", "Tailwind CSS"]
    },
    {
      category: 'Backend',
      icon: Server,
      title: "Backend",
      description: "Gestion des données et logique serveur.",
      skills: ["Python", "Node.js", "Express", "SQL"]
    },
    {
      category: 'Tools & API',
      icon: Wrench,
      title: "Outils & API",
      description: "Intégration de services tiers et workflow de développement.",
      skills: ["REST APIs", "Git", "VS Code", "Postman"]
    }
  ];

  const filteredCards = filter === 'All' 
    ? skillCards 
    : skillCards.filter(card => card.category === filter);

  return (
    <section id="skills" className={`${showTitle ? 'section-padding bg-white dark:bg-slate-950' : ''} transition-colors duration-500`}>
      {showTitle && (
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-display font-black mb-4 text-slate-900 dark:text-white">Mes Compétences</h2>
          <p className="text-slate-500 dark:text-slate-400 mb-8 font-medium">Un aperçu des technologies que j'apprends et utilise pour construire des applications modernes.</p>
          
          <div className="flex flex-wrap justify-center gap-2">
            {categories.map(cat => (
              <button
                key={cat.id}
                onClick={() => setFilter(cat.id)}
                className={`px-6 py-2 rounded-full text-[13px] font-bold transition-all ${
                  filter === cat.id 
                    ? 'bg-emerald-600 text-white shadow-lg shadow-emerald-500/20' 
                    : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>
      )}

      {/* If no title, still show the filter buttons but simplified */}
      {!showTitle && (
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map(cat => (
            <button
              key={cat.id}
              onClick={() => setFilter(cat.id)}
              className={`px-6 py-2 rounded-full text-[13px] font-bold transition-all ${
                filter === cat.id 
                  ? 'bg-emerald-600 text-white shadow-lg shadow-emerald-500/20' 
                  : 'border border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>
      )}

      <div className="grid md:grid-cols-3 gap-8 min-h-[400px]">
        <AnimatePresence mode="popLayout">
          {filteredCards.map(card => (
            <motion.div
              key={card.title}
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            >
              <SkillCard {...card} />
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </section>
  );
};
