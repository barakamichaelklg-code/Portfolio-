import { motion } from "motion/react";
import { Database, Terminal, Code, Github } from "lucide-react";

export const Projects = ({ showTitle = true }: { showTitle?: boolean }) => {
  const projects = [
    {
      id: "pharmastock",
      icon: Database,
      title: "PharmaStock Manager",
      desc: "Système de gestion d'inventaire pour petites officines.",
      fullDesc: "Une application web permettant de suivre les stocks, d'alerter sur les péremptions imminentes et de générer des rapports de vente quotidiens.",
      tags: ["Node.js", "Express", "React"]
    },
    {
      id: "druginfo",
      icon: Terminal,
      title: "DrugInfo API",
      desc: "API REST pour la consultation rapide des interactions médicamenteuses.",
      fullDesc: "Développement d'une API backend avec Python/Flask pour interroger une base de données de médicaments et vérifier les contre-indications.",
      tags: ["Python", "Flask", "SQLite"]
    }
  ];

  return (
    <section id="projects" className={`${showTitle ? 'section-padding bg-slate-50/50 dark:bg-slate-900/20' : ''} transition-colors duration-500 relative`}>
      {showTitle && (
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 dark:bg-emerald-500/10 text-emerald-700 dark:text-emerald-400 text-[11px] font-bold uppercase tracking-wider mb-6">
              <Code size={14} /> Portfolio
            </div>
            <h2 className="text-4xl md:text-6xl font-display font-black mb-6 tracking-tighter text-slate-900 dark:text-white">Projets & <span className="text-emerald-600">Réalisations</span></h2>
            <p className="text-lg text-slate-500 dark:text-slate-400 font-medium">Des solutions concrètes alliant programmation et besoins du monde réel.</p>
          </div>
          <a 
            href="https://github.com/barakamichaelklg-code" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="group px-6 py-3 bg-white dark:bg-slate-800 rounded-2xl font-bold border border-slate-200 dark:border-slate-700 flex items-center gap-3 hover:bg-emerald-600 hover:text-white transition-all duration-300 text-slate-900 dark:text-slate-100 shadow-sm"
          >
            GitHub <Github size={18} className="group-hover:rotate-12 transition-transform" />
          </a>
        </div>
      )}
      <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
        {projects.map((project, i) => (
          <motion.div 
            key={i}
            whileHover={{ y: -8 }}
            className="group relative overflow-hidden rounded-[2.5rem] bg-white/50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 p-8 md:p-10 shadow-sm hover:shadow-2xl transition-all duration-500 glass-card"
          >
            <div className="w-14 h-14 rounded-2xl bg-emerald-50 dark:bg-emerald-500/10 flex items-center justify-center text-emerald-600 dark:text-emerald-400 mb-8 group-hover:scale-110 transition-transform">
              <project.icon size={28} />
            </div>
            <h3 className="text-2xl font-display font-black mb-4 tracking-tight text-slate-900 dark:text-white">{project.title}</h3>
            <p className="text-slate-500 dark:text-slate-400 font-medium mb-8 text-base leading-relaxed">{project.fullDesc}</p>
            <div className="flex flex-wrap gap-2">
              {project.tags.map(tag => (
                <span key={tag} className="px-3 py-1 bg-slate-100 dark:bg-slate-700/50 rounded-full text-[10px] font-bold uppercase tracking-wider text-slate-600 dark:text-slate-300 border border-slate-200/50 dark:border-slate-600/50">
                  {tag}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};
