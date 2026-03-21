import { useState, useEffect, useRef, ReactNode } from "react";
import { 
  Github, 
  Mail, 
  Phone, 
  Code2, 
  Database, 
  Globe, 
  Stethoscope, 
  Layout,
  Server,
  Wrench,
  ChevronRight,
  ExternalLink,
  Terminal,
  Cpu,
  FileCode,
  Palette,
  Zap,
  Atom,
  Wind,
  Code,
  Hexagon,
  FastForward,
  GitBranch,
  Monitor,
  Send,
  Sun,
  Moon,
  Search,
  AlertTriangle,
  CheckCircle2,
  Plus,
  Minus,
  X,
  ArrowRight
} from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

const Navbar = ({ isDark, toggleTheme }: { isDark: boolean, toggleTheme: () => void }) => (
  <nav className="fixed top-0 left-0 right-0 z-50 glass h-16 flex items-center justify-between px-6 md:px-12 transition-colors duration-300">
    <div className="font-mono font-bold text-xl tracking-tighter dark:text-white">
      BARAKA<span className="text-emerald-600">.DEV</span>
    </div>
    <div className="flex items-center gap-4 md:gap-8">
      <div className="hidden md:flex gap-8 text-sm font-medium uppercase tracking-widest text-neutral-500 dark:text-neutral-400">
        <a href="#about" className="hover:text-emerald-600 transition-colors">À propos</a>
        <a href="#education" className="hover:text-emerald-600 transition-colors">Parcours</a>
        <a href="#skills" className="hover:text-emerald-600 transition-colors">Compétences</a>
        <a href="#projects" className="hover:text-emerald-600 transition-colors">Projets</a>
        <a href="#contact" className="hover:text-emerald-600 transition-colors">Contact</a>
      </div>
      <button 
        onClick={toggleTheme}
        className="p-2 rounded-xl bg-neutral-100 dark:bg-neutral-800 text-neutral-600 dark:text-neutral-300 hover:bg-neutral-200 dark:hover:bg-neutral-700 transition-all"
        aria-label="Toggle theme"
      >
        {isDark ? <Sun size={20} /> : <Moon size={20} />}
      </button>
    </div>
  </nav>
);

const Hero = () => (
  <section className="min-h-screen flex items-center section-padding pt-32 relative overflow-hidden bg-white dark:bg-neutral-950 transition-colors duration-300">
    {/* Decorative Background Elements */}
    <div className="absolute top-1/4 -left-20 w-96 h-96 bg-emerald-400/10 dark:bg-emerald-600/5 rounded-full blur-[120px] pointer-events-none" />
    <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-blue-400/10 dark:bg-blue-600/5 rounded-full blur-[120px] pointer-events-none" />

    <div className="grid lg:grid-cols-2 gap-16 items-center w-full relative z-10">
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-50 dark:bg-emerald-900/20 border border-emerald-100 dark:border-emerald-800/50 text-emerald-700 dark:text-emerald-400 text-[10px] font-black uppercase tracking-[0.2em] mb-8 animate-float">
          <Zap size={14} /> Disponible pour nouveaux projets
        </div>
        <h1 className="text-6xl md:text-8xl font-black tracking-tighter mb-8 leading-[0.9] dark:text-white">
          Baraka <br />
          <span className="text-emerald-600">Michael</span>
        </h1>
        <p className="text-xl md:text-2xl text-neutral-500 dark:text-neutral-400 mb-10 max-w-xl leading-relaxed font-medium">
          Étudiant en Pharmacie (L3) à l'Université Officielle de Bukavu, passionné par la fusion entre la <span className="text-neutral-900 dark:text-white">santé</span> et la <span className="text-emerald-600">technologie</span>.
        </p>
        <div className="flex flex-wrap gap-6">
          <a 
            href="#contact" 
            className="px-10 py-5 bg-neutral-900 dark:bg-emerald-600 text-white rounded-2xl font-bold hover:bg-emerald-600 dark:hover:bg-emerald-500 transition-all flex items-center gap-3 shadow-[0_20px_50px_rgba(16,185,129,0.3)] dark:shadow-none hover:-translate-y-1 active:scale-95"
          >
            Me contacter <ChevronRight size={20} />
          </a>
          <a 
            href="#projects" 
            className="px-10 py-5 border-2 border-neutral-200 dark:border-neutral-800 rounded-2xl font-bold hover:bg-neutral-100 dark:hover:bg-neutral-900 transition-all hover:-translate-y-1 dark:text-white active:scale-95"
          >
            Voir mes projets
          </a>
        </div>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
        className="relative"
      >
        <div 
          className="relative z-10 w-full aspect-[3/4] rounded-[3rem] md:rounded-[5rem] shadow-[0_50px_100px_-20px_rgba(0,0,0,0.2)] border-[12px] md:border-[24px] border-white dark:border-neutral-900 bg-neutral-100 dark:bg-neutral-900 bg-cover bg-center group overflow-hidden"
          style={{ backgroundImage: 'url("https://wsrv.nl/?url=https://i.ibb.co/HpnQS3wh/IMG-4048.jpg&w=800&output=webp&q=80")' }}
        >
          <div className="absolute inset-0 bg-emerald-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        </div>
        
        {/* Floating UI Elements (Figma style) */}
        <motion.div 
          animate={{ y: [0, -15, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -bottom-6 -left-4 md:-bottom-10 md:-left-10 p-4 md:p-8 glass rounded-3xl md:rounded-[2.5rem] z-20 border border-white/20 dark:border-neutral-800"
        >
          <div className="flex items-center gap-3 md:gap-5">
            <div className="w-10 h-10 md:w-16 md:h-16 rounded-2xl bg-emerald-600 flex items-center justify-center text-white shadow-xl shadow-emerald-500/30">
              <Code2 size={20} className="md:w-8 md:h-8" />
            </div>
            <div>
              <p className="text-[10px] md:text-xs text-neutral-400 uppercase font-black tracking-[0.2em] mb-0.5 md:mb-1">Spécialité</p>
              <p className="text-sm md:text-xl font-black text-neutral-900 dark:text-white">Fullstack Dev</p>
            </div>
          </div>
        </motion.div>

        <motion.div 
          animate={{ y: [0, 15, 0] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          className="absolute top-10 -right-4 md:-right-10 p-4 md:p-6 glass rounded-2xl md:rounded-3xl z-20 border border-white/20 dark:border-neutral-800"
        >
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 md:w-12 md:h-12 rounded-xl bg-blue-500 flex items-center justify-center text-white">
              <Stethoscope size={16} className="md:w-6 md:h-6" />
            </div>
            <div>
              <p className="text-[8px] md:text-[10px] text-neutral-400 uppercase font-black tracking-[0.2em]">Secteur</p>
              <p className="text-xs md:text-sm font-bold text-neutral-900 dark:text-white">Pharmacie (L3)</p>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </div>
  </section>
);

const About = () => (
  <section id="about" className="section-padding bg-neutral-100 dark:bg-neutral-900 transition-colors duration-300 relative overflow-hidden">
    <div className="absolute -top-24 -right-24 w-64 h-64 bg-emerald-500/5 rounded-full blur-3xl" />
    
    <div className="grid md:grid-cols-2 gap-16 items-center relative z-10">
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
      >
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-100 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-400 text-[10px] font-black uppercase tracking-widest mb-6">
          <Stethoscope size={14} /> Qui suis-je ?
        </div>
        <h2 className="text-4xl md:text-5xl font-black mb-8 tracking-tight dark:text-white leading-tight">
          L'alliance de la <span className="text-emerald-600">Santé</span> et du <span className="text-emerald-600">Code</span>
        </h2>
        <div className="space-y-6 text-neutral-600 dark:text-neutral-400 leading-relaxed text-lg">
          <p>
            Actuellement en 3ème année de Pharmacie (L3) à l'Université Officielle de Bukavu, j'explore comment le développement web peut transformer le secteur pharmaceutique.
          </p>
          <p>
            Débutant passionné, je me spécialise dans le développement web et backend, avec un intérêt particulier pour l'automatisation et la gestion de données via Python et Node.js.
          </p>
          <p className="font-medium text-neutral-900 dark:text-white">
            Mon objectif est de créer des solutions numériques innovantes qui répondent aux défis de santé publique et facilitent la gestion pharmaceutique.
          </p>
        </div>
      </motion.div>
      <div className="relative">
        <div 
          className="aspect-[4/5] rounded-[3rem] md:rounded-[4rem] bg-neutral-100 dark:bg-neutral-800 border-[12px] md:border-[24px] border-white dark:border-neutral-800 shadow-2xl flex items-center justify-center overflow-hidden relative group bg-cover bg-center"
          style={{ backgroundImage: 'url("https://wsrv.nl/?url=https://i.ibb.co/5hyM915h/IMG-5749.jpg&w=1000&output=webp&q=80")' }}
        >
          <div className="absolute inset-0 bg-neutral-900/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          <div className="absolute bottom-4 left-4 md:bottom-10 md:left-10 p-6 md:p-10 glass rounded-[2rem] md:rounded-[2.5rem] shadow-2xl z-10 max-w-[220px] md:max-w-xs border border-white/20 dark:border-neutral-800">
            <div className="flex gap-2 mb-4 md:mb-8">
              <div className="w-3 h-3 md:w-4 md:h-4 rounded-full bg-red-400" />
              <div className="w-3 h-3 md:w-4 md:h-4 rounded-full bg-yellow-400" />
              <div className="w-3 h-3 md:w-4 md:h-4 rounded-full bg-green-400" />
            </div>
            <code className="text-xs md:text-lg font-mono text-emerald-950 dark:text-emerald-50 leading-relaxed">
              <span className="text-emerald-700/50 dark:text-emerald-400/50 block mb-2 md:mb-4">// Bukavu, RDC</span>
              <span className="text-blue-600 dark:text-blue-400">const</span> baraka = &#123;<br />
              &nbsp;&nbsp;studies: <span className="text-emerald-600">"Pharmacy"</span>,<br />
              &nbsp;&nbsp;level: <span className="text-emerald-600">"L3"</span>,<br />
              &nbsp;&nbsp;passion: <span className="text-emerald-600">"Web Dev"</span>,<br />
              &nbsp;&nbsp;status: <span className="text-emerald-600">"Learning"</span><br />
              &#125;;
            </code>
          </div>
        </div>
      </div>
    </div>
  </section>
);

const SkillCard = ({ icon: Icon, title, description, skills }: { icon: any, title: string, description: string, skills: string[] }) => (
  <div className="p-10 bg-white dark:bg-neutral-900 rounded-[2.5rem] border border-neutral-200 dark:border-neutral-800 hover:border-emerald-500 dark:hover:border-emerald-500 hover:shadow-[0_20px_50px_rgba(0,0,0,0.05)] transition-all duration-500 group relative overflow-hidden">
    <div className="absolute -top-10 -right-10 w-32 h-32 bg-emerald-500/5 rounded-full blur-2xl group-hover:bg-emerald-500/10 transition-colors" />
    <div className="w-16 h-16 rounded-2xl bg-emerald-50 dark:bg-emerald-900/20 flex items-center justify-center text-emerald-600 mb-8 group-hover:scale-110 group-hover:rotate-3 transition-all duration-500">
      <Icon size={32} />
    </div>
    <h3 className="text-2xl font-black mb-3 dark:text-white tracking-tight">{title}</h3>
    <p className="text-neutral-500 dark:text-neutral-400 text-sm mb-8 leading-relaxed font-medium">{description}</p>
    <div className="flex flex-wrap gap-2">
      {skills.map(skill => (
        <span key={skill} className="px-4 py-1.5 bg-neutral-50 dark:bg-neutral-800/50 text-neutral-600 dark:text-neutral-400 text-[10px] font-black uppercase tracking-widest rounded-full border border-neutral-100 dark:border-neutral-700/50 group-hover:border-emerald-200 dark:group-hover:border-emerald-800 transition-colors">
          {skill}
        </span>
      ))}
    </div>
  </div>
);

const AppCreation = () => (
  <section className="section-padding bg-neutral-50 dark:bg-neutral-950 transition-colors duration-300 relative overflow-hidden">
    <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-emerald-500/5 to-transparent pointer-events-none" />
    
    <div className="grid md:grid-cols-2 gap-20 items-center relative z-10">
      <div className="order-2 md:order-1">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-100 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-400 text-[10px] font-black uppercase tracking-widest mb-6">
          <Globe size={14} /> Services & Solutions
        </div>
        <h2 className="text-4xl md:text-6xl font-black mb-8 dark:text-white tracking-tighter leading-[0.9]">
          Création de Sites & <br />
          <span className="text-emerald-600">Applications</span>
        </h2>
        <p className="text-xl text-neutral-500 dark:text-neutral-400 mb-12 leading-relaxed font-medium">
          Je conçois et développe des solutions web sur mesure, allant du simple site vitrine à l'application web complexe. Mon approche combine design moderne et technologies robustes.
        </p>
        <div className="grid gap-6">
          {[
            { icon: Globe, title: "Sites Web Vitrines", desc: "Présence en ligne élégante et optimisée pour votre activité ou projet." },
            { icon: Code2, title: "Applications Web", desc: "Outils interactifs et plateformes sur mesure (SaaS, Dashboards)." },
            { icon: Database, title: "Gestion de Données", desc: "Systèmes d'inventaire et bases de données pour le secteur pharmaceutique." }
          ].map((item, i) => (
            <motion.div 
              key={i}
              whileHover={{ x: 10 }}
              className="flex items-start gap-6 p-6 bg-white dark:bg-neutral-900 rounded-3xl border border-neutral-100 dark:border-neutral-800 shadow-sm hover:shadow-md transition-all"
            >
              <div className="p-4 bg-emerald-50 dark:bg-emerald-900/20 rounded-2xl text-emerald-600">
                <item.icon size={28} />
              </div>
              <div>
                <h4 className="text-lg font-black dark:text-white mb-1">{item.title}</h4>
                <p className="text-sm text-neutral-500 dark:text-neutral-400 leading-relaxed font-medium">{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
      <div className="order-1 md:order-2">
        <div className="relative group">
          <div className="absolute -inset-4 bg-emerald-600/20 rounded-[4rem] blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
          <div 
            className="aspect-square rounded-[3rem] md:rounded-[5rem] bg-neutral-100 dark:bg-neutral-800 overflow-hidden shadow-2xl relative z-10 border-[12px] md:border-[24px] border-white dark:border-neutral-800 bg-cover bg-center"
            style={{ backgroundImage: 'url("https://wsrv.nl/?url=https://i.ibb.co/qYM35KWh/IMG-5410.jpg&w=1200&output=webp&q=80")' }}
          />
          <motion.div 
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="absolute -top-10 -right-10 w-32 h-32 md:w-48 md:h-48 border-4 border-dashed border-emerald-600/20 rounded-full flex items-center justify-center pointer-events-none"
          >
            <div className="w-4 h-4 bg-emerald-600 rounded-full" />
          </motion.div>
        </div>
      </div>
    </div>
  </section>
);

const Skills = () => {
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
    <section id="skills" className="section-padding dark:bg-neutral-950 transition-colors duration-300">
      <div className="text-center max-w-2xl mx-auto mb-16">
        <h2 className="text-3xl font-bold mb-4 dark:text-white">Mes Compétences</h2>
        <p className="text-neutral-500 dark:text-neutral-400 mb-8">Un aperçu des technologies que j'apprends et utilise pour construire des applications modernes.</p>
        
        <div className="flex flex-wrap justify-center gap-3">
          {categories.map(cat => (
            <button
              key={cat.id}
              onClick={() => setFilter(cat.id)}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${
                filter === cat.id 
                  ? 'bg-emerald-600 text-white shadow-lg shadow-emerald-200 dark:shadow-none' 
                  : 'bg-neutral-100 dark:bg-neutral-900 text-neutral-600 dark:text-neutral-400 hover:bg-neutral-200 dark:hover:bg-neutral-800'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>
      </div>

      <div className="grid md:grid-cols-3 gap-8 min-h-[400px]">
        <AnimatePresence mode="popLayout">
          {filteredCards.map(card => (
            <motion.div
              key={card.title}
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3 }}
            >
              <SkillCard {...card} />
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </section>
  );
};

const Vision = () => (
  <section className="section-padding bg-emerald-600 text-white overflow-hidden relative">
    <div className="absolute top-0 right-0 w-full h-full opacity-10 pointer-events-none">
      <Cpu size={600} className="absolute -top-40 -right-40 rotate-12" />
      <Atom size={400} className="absolute -bottom-20 -left-20 opacity-20" />
    </div>
    <div className="max-w-5xl relative z-10">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/20 text-white text-[10px] font-black uppercase tracking-[0.2em] mb-12">
          <Zap size={14} /> Ma Vision
        </div>
        <p className="text-4xl md:text-7xl font-black leading-[0.9] tracking-tighter mb-12">
          "Je crois fermement que l'avenir de la pharmacie en Afrique passe par la <span className="text-emerald-200 underline decoration-white/30 underline-offset-[12px]">digitalisation</span>."
        </p>
        <p className="text-xl md:text-2xl font-medium opacity-80 max-w-2xl leading-relaxed">
          Mon but est de construire les ponts technologiques qui sauveront des vies et moderniseront notre système de santé.
        </p>
      </motion.div>
    </div>
  </section>
);

const TimelineItem = ({ year, title, institution, description }: { year: string, title: string, institution: string, description: string }) => (
  <div className="relative pl-12 pb-16 border-l-2 border-neutral-100 dark:border-neutral-800 last:pb-0">
    <div className="absolute left-[-9px] top-0 w-4 h-4 rounded-full bg-emerald-600 border-4 border-white dark:border-neutral-950 shadow-lg shadow-emerald-500/30" />
    <span className="inline-block px-3 py-1 bg-emerald-50 dark:bg-emerald-900/20 text-emerald-700 dark:text-emerald-400 text-[10px] font-black uppercase tracking-widest rounded-full mb-4 border border-emerald-100 dark:border-emerald-800/50">
      {year}
    </span>
    <h3 className="text-2xl font-black mb-2 dark:text-white tracking-tight">{title}</h3>
    <p className="text-lg text-emerald-600 dark:text-emerald-400 font-bold mb-4">{institution}</p>
    <p className="text-neutral-500 dark:text-neutral-400 text-base leading-relaxed font-medium max-w-xl">{description}</p>
  </div>
);

const Education = () => (
  <section id="education" className="section-padding bg-white dark:bg-neutral-950 transition-colors duration-300 relative overflow-hidden">
    <div className="absolute top-1/2 -right-20 w-64 h-64 bg-blue-500/5 rounded-full blur-3xl" />
    
    <div className="grid lg:grid-cols-3 gap-20 relative z-10">
      <div className="lg:col-span-1">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-100 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-400 text-[10px] font-black uppercase tracking-widest mb-6">
          <GitBranch size={14} /> Éducation
        </div>
        <h2 className="text-4xl md:text-5xl font-black mb-8 dark:text-white tracking-tighter leading-tight">Parcours <br /><span className="text-emerald-600">Académique</span></h2>
        <p className="text-xl text-neutral-500 dark:text-neutral-400 mb-12 font-medium leading-relaxed">
          Mon cheminement à l'Université Officielle de Bukavu et mon auto-formation en technologies web.
        </p>
        <div className="p-8 bg-neutral-50 dark:bg-neutral-900 rounded-[2.5rem] border border-neutral-100 dark:border-neutral-800">
          <h4 className="text-xl font-black text-neutral-900 dark:text-white mb-6 flex items-center gap-3">
            <Globe size={24} className="text-emerald-600" /> Langues
          </h4>
          <div className="space-y-4">
            {[
              { name: "Français", level: "Courant", progress: "w-full" },
              { name: "Anglais", level: "Technique", progress: "w-2/3" },
              { name: "Swahili", level: "Maternel", progress: "w-full" }
            ].map((lang, i) => (
              <div key={i}>
                <div className="flex justify-between text-sm font-bold mb-2 dark:text-white">
                  <span>{lang.name}</span>
                  <span className="text-emerald-600">{lang.level}</span>
                </div>
                <div className="h-2 bg-neutral-200 dark:bg-neutral-800 rounded-full overflow-hidden">
                  <motion.div 
                    initial={{ width: 0 }}
                    whileInView={{ width: lang.progress.split('-')[1] === 'full' ? '100%' : '66.6%' }}
                    className="h-full bg-emerald-600 rounded-full"
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

const Projects = () => {
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
    <section id="projects" className="section-padding bg-neutral-100 dark:bg-neutral-900 transition-colors duration-300 relative">
      <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
        <div className="max-w-2xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-100 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-400 text-[10px] font-black uppercase tracking-widest mb-6">
            <Code size={14} /> Portfolio
          </div>
          <h2 className="text-4xl md:text-6xl font-black mb-6 dark:text-white tracking-tighter">Projets & <span className="text-emerald-600">Réalisations</span></h2>
          <p className="text-xl text-neutral-500 dark:text-neutral-400 font-medium">Des solutions concrètes alliant programmation et besoins du monde réel.</p>
        </div>
        <a 
          href="https://github.com/barakamichaelklg-code" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="group px-8 py-4 bg-white dark:bg-neutral-800 rounded-2xl font-bold border border-neutral-200 dark:border-neutral-700 flex items-center gap-3 hover:bg-emerald-600 hover:text-white transition-all duration-300 dark:text-white"
        >
          GitHub <Github size={20} className="group-hover:rotate-12 transition-transform" />
        </a>
      </div>
      <div className="grid md:grid-cols-2 gap-12">
        {projects.map((project, i) => (
          <motion.div 
            key={i}
            whileHover={{ y: -10 }}
            className="group relative overflow-hidden rounded-[3rem] bg-white dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 p-8 md:p-12 shadow-sm hover:shadow-2xl transition-all duration-500"
          >
            <div className="w-16 h-16 rounded-2xl bg-emerald-50 dark:bg-emerald-900/20 flex items-center justify-center text-emerald-600 mb-8">
              <project.icon size={32} />
            </div>
            <h3 className="text-3xl font-black mb-4 dark:text-white tracking-tight">{project.title}</h3>
            <p className="text-neutral-500 dark:text-neutral-400 font-medium mb-8 text-lg leading-relaxed">{project.fullDesc}</p>
            <div className="flex flex-wrap gap-3">
              {project.tags.map(tag => (
                <span key={tag} className="px-4 py-1.5 bg-neutral-100 dark:bg-neutral-700 rounded-full text-[10px] font-black uppercase tracking-widest text-neutral-600 dark:text-neutral-300">
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

const Contact = () => (
  <section id="contact" className="section-padding bg-neutral-50 dark:bg-neutral-950 transition-colors duration-300 relative overflow-hidden">
    <div className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none">
      <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-emerald-500 rounded-full blur-[150px]" />
    </div>
    
    <div className="max-w-6xl mx-auto glass rounded-[4rem] p-12 md:p-24 text-center relative z-10 border border-white/20 dark:border-neutral-800">
      <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-100 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-400 text-[10px] font-black uppercase tracking-widest mb-8">
        <Send size={14} /> Contact
      </div>
      <h2 className="text-5xl md:text-7xl font-black mb-8 dark:text-white tracking-tighter leading-tight">Travaillons <br /><span className="text-emerald-600">ensemble</span></h2>
      <p className="text-xl md:text-2xl text-neutral-500 dark:text-neutral-400 mb-16 max-w-2xl mx-auto font-medium leading-relaxed">
        Vous avez un projet en tête ou vous voulez simplement discuter de la tech et de la pharmacie ?
      </p>
      <div className="grid md:grid-cols-2 gap-8 max-w-3xl mx-auto">
        <a 
          href="mailto:barakamichaelklg@gmail.com" 
          className="group flex flex-col items-center p-10 rounded-[3rem] bg-white dark:bg-neutral-900 border border-neutral-100 dark:border-neutral-800 hover:border-emerald-500 dark:hover:border-emerald-500 hover:shadow-2xl transition-all duration-500"
        >
          <div className="w-20 h-20 rounded-3xl bg-emerald-50 dark:bg-emerald-900/20 flex items-center justify-center text-emerald-600 mb-6 group-hover:scale-110 transition-transform">
            <Mail size={36} />
          </div>
          <span className="text-xs font-black text-neutral-400 uppercase tracking-[0.2em] mb-2">Email</span>
          <span className="text-lg font-bold dark:text-white break-all">barakamichaelklg@gmail.com</span>
        </a>
        <a 
          href="tel:0979307569" 
          className="group flex flex-col items-center p-10 rounded-[3rem] bg-white dark:bg-neutral-900 border border-neutral-100 dark:border-neutral-800 hover:border-emerald-500 dark:hover:border-emerald-500 hover:shadow-2xl transition-all duration-500"
        >
          <div className="w-20 h-20 rounded-3xl bg-emerald-50 dark:bg-emerald-900/20 flex items-center justify-center text-emerald-600 mb-6 group-hover:scale-110 transition-transform">
            <Phone size={36} />
          </div>
          <span className="text-xs font-black text-neutral-400 uppercase tracking-[0.2em] mb-2">Téléphone</span>
          <span className="text-2xl font-black dark:text-white">0979307569</span>
        </a>
      </div>
      <div className="mt-20 flex justify-center gap-8">
        <a 
          href="https://github.com/barakamichaelklg-code" 
          target="_blank" 
          rel="noopener noreferrer"
          className="group p-5 rounded-3xl bg-white dark:bg-neutral-900 border border-neutral-100 dark:border-neutral-800 hover:bg-emerald-600 hover:text-white transition-all duration-300 flex items-center gap-4 dark:text-white shadow-sm"
        >
          <Github size={28} className="group-hover:rotate-12 transition-transform" />
          <span className="text-sm font-black uppercase tracking-widest">GitHub Profile</span>
        </a>
      </div>
    </div>
  </section>
);

const Footer = () => (
  <footer className="bg-white dark:bg-neutral-950 text-neutral-900 dark:text-white section-padding transition-colors duration-300 border-t border-neutral-100 dark:border-neutral-800 relative overflow-hidden">
    <div className="absolute bottom-0 right-0 w-64 h-64 bg-emerald-500/5 rounded-full blur-3xl pointer-events-none" />
    
    <div className="max-w-7xl mx-auto relative z-10">
      <div className="grid md:grid-cols-2 gap-20 items-start mb-24 text-left">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-neutral-100 dark:bg-neutral-900 text-neutral-500 dark:text-neutral-400 text-[10px] font-black uppercase tracking-widest mb-8">
            Ressources
          </div>
          <h2 className="text-3xl font-black mb-8 dark:text-white tracking-tighter">Vérification des Photos</h2>
          <p className="text-lg text-neutral-500 dark:text-neutral-400 mb-10 font-medium leading-relaxed">
            Si vous ne voyez pas les photos sur le site, cliquez sur les liens ci-dessous pour vérifier qu'elles sont accessibles sur votre réseau :
          </p>
          <div className="grid gap-4">
            {[
              { label: "Photo de Profil Optimisée (WebP)", url: "https://wsrv.nl/?url=https://i.ibb.co/HpnQS3wh/IMG-4048.jpg&w=800&output=webp" },
              { label: "Photo À Propos Optimisée (WebP)", url: "https://wsrv.nl/?url=https://i.ibb.co/5hyM915h/IMG-5749.jpg&w=1000&output=webp" },
              { label: "Photo Création Optimisée (WebP)", url: "https://wsrv.nl/?url=https://i.ibb.co/qYM35KWh/IMG-5410.jpg&w=1200&output=webp" }
            ].map((link, i) => (
              <a key={i} href={link.url} target="_blank" rel="noreferrer" className="group flex items-center gap-4 text-emerald-600 dark:text-emerald-400 hover:text-emerald-500 transition-colors font-bold">
                <div className="w-8 h-8 rounded-lg bg-emerald-50 dark:bg-emerald-900/20 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <ChevronRight size={16} />
                </div>
                {link.label}
              </a>
            ))}
          </div>
        </div>
        <div className="md:text-right">
          <div className="text-5xl font-black mb-6 dark:text-white tracking-tighter">
            BARAKA<span className="text-emerald-600">.DEV</span>
          </div>
          <p className="text-xl text-neutral-500 dark:text-neutral-400 font-medium mb-4">© {new Date().getFullYear()} Tous droits réservés.</p>
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-2xl bg-neutral-50 dark:bg-neutral-900 border border-neutral-100 dark:border-neutral-800 text-neutral-400 dark:text-neutral-500 text-xs italic font-medium">
            Fait avec passion à Bukavu, RDC.
          </div>
        </div>
      </div>
      <div className="pt-12 border-t border-neutral-100 dark:border-neutral-800 text-center">
        <p className="text-sm font-black uppercase tracking-[0.3em] text-neutral-300 dark:text-neutral-700">
          Innovation • Santé • Technologie
        </p>
      </div>
    </div>
  </footer>
);

export default function App() {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDark]);

  const toggleTheme = () => {
    setIsDark(!isDark);
  };

  return (
    <div className="min-h-screen transition-colors duration-300">
      <Navbar isDark={isDark} toggleTheme={toggleTheme} />
      <Hero />
      <About />
      <Vision />
      <AppCreation />
      <Skills />
      <Education />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}
