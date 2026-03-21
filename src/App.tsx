import { useState } from "react";
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
  Send
} from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

const Navbar = () => (
  <nav className="fixed top-0 left-0 right-0 z-50 glass h-16 flex items-center justify-between px-6 md:px-12">
    <div className="font-mono font-bold text-xl tracking-tighter">
      BARAKA<span className="text-emerald-600">.DEV</span>
    </div>
    <div className="hidden md:flex gap-8 text-sm font-medium uppercase tracking-widest text-neutral-500">
      <a href="#about" className="hover:text-emerald-600 transition-colors">À propos</a>
      <a href="#education" className="hover:text-emerald-600 transition-colors">Parcours</a>
      <a href="#skills" className="hover:text-emerald-600 transition-colors">Compétences</a>
      <a href="#projects" className="hover:text-emerald-600 transition-colors">Projets</a>
      <a href="#contact" className="hover:text-emerald-600 transition-colors">Contact</a>
    </div>
  </nav>
);

const Hero = () => (
  <section className="min-h-screen flex items-center section-padding pt-32 bg-white">
    <div className="grid lg:grid-cols-2 gap-16 items-center w-full">
      <motion.div 
        initial={{ opacity: 0, x: -30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
      >
        <div className="inline-block px-4 py-1.5 rounded-full bg-emerald-100 text-emerald-700 text-sm font-bold uppercase tracking-widest mb-8">
          Étudiant & Développeur
        </div>
        <h1 className="text-6xl md:text-8xl font-bold tracking-tight mb-8 leading-[1.1]">
          Baraka Kaloge <br />
          <span className="text-emerald-600">Michael</span>
        </h1>
        <p className="text-xl md:text-2xl text-neutral-600 mb-10 max-w-xl leading-relaxed">
          Étudiant en Pharmacie (L3) à l'Université Officielle de Bukavu, passionné par la fusion entre la santé et la technologie.
        </p>
        <div className="flex flex-wrap gap-6">
          <a 
            href="#contact" 
            className="px-10 py-5 bg-neutral-900 text-white rounded-2xl font-bold hover:bg-emerald-600 transition-all flex items-center gap-3 shadow-2xl shadow-neutral-300 hover:-translate-y-1"
          >
            Me contacter <ChevronRight size={20} />
          </a>
          <a 
            href="#projects" 
            className="px-10 py-5 border-2 border-neutral-200 rounded-2xl font-bold hover:bg-neutral-100 transition-all hover:-translate-y-1"
          >
            Voir mes projets
          </a>
        </div>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, delay: 0.2 }}
        className="relative"
      >
        <div 
          className="relative z-10 w-full aspect-[3/4] rounded-[2.5rem] md:rounded-[4rem] shadow-2xl border-8 md:border-[16px] border-neutral-100 bg-neutral-100 bg-cover bg-center"
          style={{ backgroundImage: 'url("https://wsrv.nl/?url=https://i.ibb.co/HpnQS3wh/IMG-4048.jpg&w=800&output=webp&q=80")' }}
        >
          <div className="absolute inset-0 flex items-center justify-center text-neutral-400 text-sm font-mono opacity-20 pointer-events-none">
            Photo de Profil
          </div>
        </div>
        <div className="absolute -bottom-6 -left-4 md:-bottom-10 md:-left-10 p-4 md:p-8 bg-white rounded-2xl md:rounded-[2.5rem] shadow-2xl z-20 border border-neutral-100">
          <div className="flex items-center gap-3 md:gap-5">
            <div className="w-10 h-10 md:w-16 md:h-16 rounded-xl bg-emerald-600 flex items-center justify-center text-white shadow-lg shadow-emerald-200">
              <Code2 size={20} className="md:w-8 md:h-8" />
            </div>
            <div>
              <p className="text-[10px] md:text-xs text-neutral-400 uppercase font-black tracking-[0.2em] mb-0.5 md:mb-1">Spécialité</p>
              <p className="text-sm md:text-xl font-bold text-neutral-900">Fullstack Dev</p>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  </section>
);

const About = () => (
  <section id="about" className="section-padding bg-neutral-100">
    <div className="grid md:grid-cols-2 gap-12 items-center">
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
          <Stethoscope className="text-emerald-600" /> Mon Parcours
        </h2>
        <div className="space-y-4 text-neutral-600 leading-relaxed">
          <p>
            Actuellement en 3ème année de Pharmacie (L3) à l'Université Officielle de Bukavu, j'explore comment le développement web peut transformer le secteur pharmaceutique.
          </p>
          <p>
            Débutant passionné, je me spécialise dans le développement web et backend, avec un intérêt particulier pour l'automatisation et la gestion de données via Python et Node.js.
          </p>
          <p>
            Mon objectif est de créer des solutions numériques innovantes qui répondent aux défis de santé publique et facilitent la gestion pharmaceutique.
          </p>
        </div>
      </motion.div>
      <div className="relative">
        <div 
          className="aspect-[4/5] rounded-[2rem] md:rounded-[3rem] bg-neutral-100 border-8 md:border-[16px] border-neutral-100 shadow-2xl flex items-center justify-center overflow-hidden relative group bg-cover bg-center"
          style={{ backgroundImage: 'url("https://wsrv.nl/?url=https://i.ibb.co/5hyM915h/IMG-5749.jpg&w=1000&output=webp&q=80")' }}
        >
          <div className="absolute inset-0 flex items-center justify-center text-neutral-400 text-sm font-mono opacity-20 pointer-events-none">
            Photo À Propos
          </div>
          <div className="absolute bottom-4 left-4 md:bottom-10 md:left-10 p-4 md:p-8 bg-white/95 backdrop-blur-sm rounded-2xl md:rounded-[2rem] shadow-2xl z-10 max-w-[200px] md:max-w-xs border border-neutral-100">
            <div className="flex gap-1.5 md:gap-2.5 mb-3 md:mb-6">
              <div className="w-2.5 h-2.5 md:w-4 md:h-4 rounded-full bg-red-400" />
              <div className="w-2.5 h-2.5 md:w-4 md:h-4 rounded-full bg-yellow-400" />
              <div className="w-2.5 h-2.5 md:w-4 md:h-4 rounded-full bg-green-400" />
            </div>
            <code className="text-xs md:text-base font-mono text-emerald-950">
              <span className="text-emerald-700/50 block mb-1 md:mb-2">// Bukavu, RDC</span>
              const baraka = &#123;<br />
              &nbsp;&nbsp;studies: "Pharmacy",<br />
              &nbsp;&nbsp;level: "L3",<br />
              &nbsp;&nbsp;passion: "Web Dev",<br />
              &nbsp;&nbsp;status: "Learning"<br />
              &#125;;
            </code>
          </div>
        </div>
      </div>
    </div>
  </section>
);

const SkillCard = ({ icon: Icon, title, description, skills }: { icon: any, title: string, description: string, skills: string[] }) => (
  <div className="p-8 bg-white rounded-3xl border border-neutral-200 hover:border-emerald-200 hover:shadow-xl transition-all group">
    <div className="w-14 h-14 rounded-2xl bg-emerald-50 flex items-center justify-center text-emerald-600 mb-6 group-hover:scale-110 transition-transform">
      <Icon size={28} />
    </div>
    <h3 className="text-xl font-bold mb-2">{title}</h3>
    <p className="text-neutral-500 text-sm mb-6">{description}</p>
    <div className="flex flex-wrap gap-2">
      {skills.map(skill => (
        <span key={skill} className="px-3 py-1 bg-neutral-100 text-neutral-600 text-xs font-mono rounded-full">
          {skill}
        </span>
      ))}
    </div>
  </div>
);

const AppCreation = () => (
  <section className="section-padding bg-neutral-50">
    <div className="grid md:grid-cols-2 gap-12 items-center">
      <div className="order-2 md:order-1">
        <div className="inline-block px-3 py-1 rounded-full bg-emerald-100 text-emerald-700 text-xs font-bold uppercase tracking-widest mb-6">
          Services
        </div>
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          Création de Sites & <span className="text-emerald-600">Applications</span>
        </h2>
        <p className="text-neutral-600 mb-8 leading-relaxed">
          Je conçois et développe des solutions web sur mesure, allant du simple site vitrine à l'application web complexe. Mon approche combine design moderne et technologies robustes pour répondre à vos besoins spécifiques.
        </p>
        <div className="space-y-6">
          <div className="flex items-start gap-4">
            <div className="p-3 bg-white rounded-xl shadow-sm text-emerald-600">
              <Globe size={24} />
            </div>
            <div>
              <h4 className="font-bold">Sites Web Vitrines</h4>
              <p className="text-sm text-neutral-500">Présence en ligne élégante et optimisée pour votre activité ou projet.</p>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <div className="p-3 bg-white rounded-xl shadow-sm text-emerald-600">
              <Code2 size={24} />
            </div>
            <div>
              <h4 className="font-bold">Applications Web</h4>
              <p className="text-sm text-neutral-500">Outils interactifs et plateformes sur mesure (SaaS, Dashboards).</p>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <div className="p-3 bg-white rounded-xl shadow-sm text-emerald-600">
              <Database size={24} />
            </div>
            <div>
              <h4 className="font-bold">Gestion de Données</h4>
              <p className="text-sm text-neutral-500">Systèmes d'inventaire et bases de données pour le secteur pharmaceutique.</p>
            </div>
          </div>
        </div>
      </div>
      <div className="order-1 md:order-2">
        <div className="relative">
          <div 
            className="aspect-video rounded-[2rem] md:rounded-[3rem] bg-neutral-100 overflow-hidden shadow-2xl relative group border-8 md:border-[16px] border-neutral-100 bg-cover bg-center"
            style={{ backgroundImage: 'url("https://wsrv.nl/?url=https://i.ibb.co/qYM35KWh/IMG-5410.jpg&w=1200&output=webp&q=80")' }}
          >
             <div className="absolute inset-0 flex items-center justify-center text-neutral-400 text-sm font-mono opacity-20 pointer-events-none">
               Photo Création App
             </div>
          </div>
          <div className="absolute -top-4 -left-4 md:-top-8 md:-left-8 p-3 md:p-6 bg-white rounded-2xl md:rounded-3xl shadow-xl border border-neutral-100">
             <Zap className="text-emerald-600 w-6 h-6 md:w-8 md:h-8" />
          </div>
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
    <section id="skills" className="section-padding">
      <div className="text-center max-w-2xl mx-auto mb-16">
        <h2 className="text-3xl font-bold mb-4">Mes Compétences</h2>
        <p className="text-neutral-500 mb-8">Un aperçu des technologies que j'apprends et utilise pour construire des applications modernes.</p>
        
        <div className="flex flex-wrap justify-center gap-3">
          {categories.map(cat => (
            <button
              key={cat.id}
              onClick={() => setFilter(cat.id)}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${
                filter === cat.id 
                  ? 'bg-emerald-600 text-white shadow-lg shadow-emerald-200' 
                  : 'bg-neutral-100 text-neutral-600 hover:bg-neutral-200'
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
    <div className="absolute top-0 right-0 w-1/2 h-full opacity-10 pointer-events-none">
      <Cpu size={400} className="absolute -top-20 -right-20 rotate-12" />
    </div>
    <div className="max-w-4xl relative z-10">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <h2 className="text-sm font-bold uppercase tracking-[0.2em] mb-6 opacity-80">Ma Vision</h2>
        <p className="text-3xl md:text-5xl font-light leading-tight italic">
          "Je crois fermement que l'avenir de la pharmacie en Afrique passe par la <span className="font-bold underline decoration-emerald-400 underline-offset-8">digitalisation</span>. Mon but est de construire les ponts technologiques qui sauveront des vies."
        </p>
      </motion.div>
    </div>
  </section>
);

const TimelineItem = ({ year, title, institution, description }: { year: string, title: string, institution: string, description: string }) => (
  <div className="relative pl-8 pb-12 border-l border-neutral-200 last:pb-0">
    <div className="absolute left-[-5px] top-0 w-2.5 h-2.5 rounded-full bg-emerald-600 shadow-[0_0_0_4px_rgba(16,185,129,0.1)]" />
    <span className="text-xs font-bold text-emerald-600 uppercase tracking-widest mb-1 block">{year}</span>
    <h3 className="text-lg font-bold mb-1">{title}</h3>
    <p className="text-sm text-neutral-500 font-medium mb-3">{institution}</p>
    <p className="text-neutral-600 text-sm leading-relaxed">{description}</p>
  </div>
);

const Education = () => (
  <section id="education" className="section-padding">
    <div className="grid md:grid-cols-3 gap-12">
      <div className="md:col-span-1">
        <h2 className="text-3xl font-bold mb-6">Parcours Académique</h2>
        <p className="text-neutral-500 mb-8">
          Mon cheminement à l'Université Officielle de Bukavu et mon auto-formation en technologies web.
        </p>
        <div className="p-6 bg-emerald-50 rounded-2xl border border-emerald-100">
          <h4 className="font-bold text-emerald-900 mb-2 flex items-center gap-2">
            <Globe size={18} /> Langues
          </h4>
          <ul className="text-sm text-emerald-800 space-y-2">
            <li>• Français (Courant)</li>
            <li>• Anglais (Technique)</li>
            <li>• Swahili (Maternel)</li>
          </ul>
        </div>
      </div>
      <div className="md:col-span-2">
        <TimelineItem 
          year="2023 - Présent"
          title="Baccalauréat 3 (L3) en Pharmacie"
          institution="Université Officielle de Bukavu (UOB)"
          description="Spécialisation en pharmacologie clinique, chimie médicinale et gestion de la chaîne d'approvisionnement des médicaments."
        />
        <TimelineItem 
          year="2022 - 2023"
          title="Baccalauréat 2 (L2) en Pharmacie"
          institution="Université Officielle de Bukavu (UOB)"
          description="Étude approfondie de la biochimie, de la physiologie humaine et début de l'intérêt pour l'informatique médicale."
        />
        <TimelineItem 
          year="2021 - 2022"
          title="Baccalauréat 1 (L1) en Pharmacie"
          institution="Université Officielle de Bukavu (UOB)"
          description="Bases des sciences pharmaceutiques et introduction aux systèmes d'information."
        />
      </div>
    </div>
  </section>
);

const Projects = () => (
  <section id="projects" className="section-padding bg-neutral-900 text-white">
    <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
      <div className="max-w-xl">
        <h2 className="text-3xl font-bold mb-4">Projets & Réalisations</h2>
        <p className="text-neutral-400">Des solutions concrètes alliant programmation et besoins du monde réel.</p>
      </div>
      <a 
        href="https://github.com/barakamichaelklg-code" 
        target="_blank" 
        rel="noopener noreferrer" 
        className="text-emerald-400 flex items-center gap-2 hover:underline"
      >
        Voir tout sur GitHub <ExternalLink size={16} />
      </a>
    </div>
    <div className="grid md:grid-cols-2 gap-8">
      <div className="group relative overflow-hidden rounded-3xl bg-neutral-800 border border-neutral-700 aspect-video flex items-center justify-center">
        <div className="text-center p-8">
          <Database size={48} className="mx-auto mb-4 text-emerald-500/50" />
          <h3 className="text-xl font-bold mb-2">PharmaStock Manager</h3>
          <p className="text-neutral-500 text-sm">Système de gestion d'inventaire pour petites officines.</p>
        </div>
        <div className="absolute inset-0 bg-emerald-600 translate-y-full group-hover:translate-y-0 transition-transform duration-500 flex flex-col justify-center p-8">
          <h3 className="text-2xl font-bold mb-2">PharmaStock Manager</h3>
          <p className="mb-6 opacity-90 text-sm">
            Une application web permettant de suivre les stocks, d'alerter sur les péremptions imminentes et de générer des rapports de vente quotidiens.
          </p>
          <div className="flex gap-4">
            <span className="px-3 py-1 bg-white/20 rounded-full text-[10px] font-mono">Node.js</span>
            <span className="px-3 py-1 bg-white/20 rounded-full text-[10px] font-mono">Express</span>
            <span className="px-3 py-1 bg-white/20 rounded-full text-[10px] font-mono">React</span>
          </div>
        </div>
      </div>

      <div className="group relative overflow-hidden rounded-3xl bg-neutral-800 border border-neutral-700 aspect-video flex items-center justify-center">
        <div className="text-center p-8">
          <Terminal size={48} className="mx-auto mb-4 text-emerald-500/50" />
          <h3 className="text-xl font-bold mb-2">DrugInfo API</h3>
          <p className="text-neutral-500 text-sm">API REST pour la consultation rapide des interactions médicamenteuses.</p>
        </div>
        <div className="absolute inset-0 bg-emerald-600 translate-y-full group-hover:translate-y-0 transition-transform duration-500 flex flex-col justify-center p-8">
          <h3 className="text-2xl font-bold mb-2">DrugInfo API</h3>
          <p className="mb-6 opacity-90 text-sm">
            Développement d'une API backend avec Python/Flask pour interroger une base de données de médicaments et vérifier les contre-indications.
          </p>
          <div className="flex gap-4">
            <span className="px-3 py-1 bg-white/20 rounded-full text-[10px] font-mono">Python</span>
            <span className="px-3 py-1 bg-white/20 rounded-full text-[10px] font-mono">Flask</span>
            <span className="px-3 py-1 bg-white/20 rounded-full text-[10px] font-mono">SQLite</span>
          </div>
        </div>
      </div>
    </div>
  </section>
);

const Contact = () => (
  <section id="contact" className="section-padding">
    <div className="max-w-5xl mx-auto glass rounded-[3rem] p-12 md:p-20 text-center">
      <h2 className="text-4xl font-bold mb-6">Travaillons ensemble</h2>
      <p className="text-xl text-neutral-600 mb-12 max-w-2xl mx-auto">
        Vous avez un projet en tête ou vous voulez simplement discuter de la tech et de la pharmacie ?
      </p>
      <div className="grid md:grid-cols-2 gap-8 max-w-2xl mx-auto">
        <a 
          href="mailto:barakamichaelklg@gmail.com" 
          className="flex flex-col items-center p-8 rounded-3xl bg-neutral-50 border border-neutral-100 hover:border-emerald-200 hover:bg-emerald-50 transition-all"
        >
          <Mail className="text-emerald-600 mb-4" size={32} />
          <span className="text-sm font-medium text-neutral-500 mb-1">Email</span>
          <span className="font-bold">barakamichaelklg@gmail.com</span>
        </a>
        <a 
          href="tel:0979307569" 
          className="flex flex-col items-center p-8 rounded-3xl bg-neutral-50 border border-neutral-100 hover:border-emerald-200 hover:bg-emerald-50 transition-all"
        >
          <Phone className="text-emerald-600 mb-4" size={32} />
          <span className="text-sm font-medium text-neutral-500 mb-1">Téléphone</span>
          <span className="font-bold">0979307569</span>
        </a>
      </div>
      <div className="mt-16 flex justify-center gap-6">
        <a 
          href="https://github.com/barakamichaelklg-code" 
          target="_blank" 
          rel="noopener noreferrer"
          className="p-3 rounded-full bg-neutral-100 hover:bg-neutral-200 transition-colors flex items-center gap-2"
          title="GitHub Profile"
        >
          <Github size={24} />
          <span className="text-sm font-medium hidden md:inline">GitHub</span>
        </a>
      </div>
    </div>
  </section>
);

const Footer = () => (
  <footer className="bg-neutral-900 text-white section-padding">
    <div className="max-w-7xl mx-auto">
      <div className="grid md:grid-cols-2 gap-12 items-center mb-16 text-left">
        <div>
          <h2 className="text-3xl font-bold mb-6">Vérification des Photos</h2>
          <p className="text-neutral-400 mb-8">
            Si vous ne voyez pas les photos sur le site, cliquez sur les liens ci-dessous pour vérifier qu'elles sont accessibles sur votre réseau :
          </p>
          <div className="flex flex-col gap-4">
            <a href="https://wsrv.nl/?url=https://i.ibb.co/HpnQS3wh/IMG-4048.jpg&w=800&output=webp" target="_blank" rel="noreferrer" className="text-emerald-400 hover:underline flex items-center gap-2">
              <ChevronRight size={16} /> Photo de Profil Optimisée (WebP)
            </a>
            <a href="https://wsrv.nl/?url=https://i.ibb.co/5hyM915h/IMG-5749.jpg&w=1000&output=webp" target="_blank" rel="noreferrer" className="text-emerald-400 hover:underline flex items-center gap-2">
              <ChevronRight size={16} /> Photo À Propos Optimisée (WebP)
            </a>
            <a href="https://wsrv.nl/?url=https://i.ibb.co/qYM35KWh/IMG-5410.jpg&w=1200&output=webp" target="_blank" rel="noreferrer" className="text-emerald-400 hover:underline flex items-center gap-2">
              <ChevronRight size={16} /> Photo Création Optimisée (WebP)
            </a>
          </div>
        </div>
        <div className="md:text-right">
          <div className="text-4xl font-bold mb-4">Baraka <span className="text-emerald-500">Michael</span></div>
          <p className="text-neutral-500">© {new Date().getFullYear()} Tous droits réservés.</p>
          <p className="text-neutral-600 text-xs mt-2 italic">Fait avec passion à Bukavu, RDC.</p>
        </div>
      </div>
      <div className="pt-8 border-t border-white/10 text-center text-neutral-500 text-sm">
        Conçu avec passion pour l'innovation.
      </div>
    </div>
  </footer>
);

export default function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
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
