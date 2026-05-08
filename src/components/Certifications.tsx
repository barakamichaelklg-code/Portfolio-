import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Zap, CheckCircle2, Wind, Eye, X, ExternalLink } from "lucide-react";

export const Certifications = ({ showTitle = true }: { showTitle?: boolean }) => {
  const [selectedCert, setSelectedCert] = useState<number | null>(null);

  const certifications = [
    {
      title: "Plaidoyer pour la Santé Communautaire",
      issuer: "Community Health Impact Coalition & Stanford Center for Health Education",
      date: "Décembre 2025",
      icon: CheckCircle2,
      description: "Ce certificat atteste de ma maîtrise des techniques de plaidoyer visant à renforcer les systèmes de santé de proximité. La formation couvre la mobilisation communautaire, l'influence des politiques publiques et la défense des droits des agents de santé pour une couverture sanitaire universelle plus équitable.",
      fullDescription: "Cette formation, sponsorisée par la Community Health Impact Coalition et le Stanford Center for Health Education, m'a permis d'approfondir les dynamiques de la santé mondiale. J'ai appris à structurer des messages de plaidoyer percutants, à analyser les lacunes des systèmes de santé locaux et à proposer des solutions basées sur des preuves pour améliorer les conditions de travail des agents de santé communautaires, piliers de la résilience sanitaire.",
      color: "bg-emerald-500",
      image: "https://i.ibb.co/N6n8d3qT/Whats-App-Image-2026-05-08-at-23-28-05.jpg", // Lien direct (Certificat 1)
      directLink: "https://ibb.co/WWpb43XV"
    },
    {
      title: "Lutte contre les Déchets Plastiques",
      issuer: "Mboka Rising Voices - Campagne Youth Plastic 7 Days",
      date: "Avril 2026",
      icon: Wind,
      description: "Participation active à la campagne de sensibilisation et d'action directe contre la pollution plastique. Un engagement concret pour la préservation de l'écosystème urbain et la promotion de la gestion circulaire des déchets.",
      fullDescription: "Dans le cadre de l'initiative 'Youth Plastic 7 Days', j'ai contribué à une campagne intensive de 7 jours visant à transformer la perception des déchets plastiques. Mon rôle a consisté à éduquer les jeunes sur les dangers de la pollution plastique pour la nappe phréatique et à promouvoir le tri sélectif. Ce certificat souligne mon dévouement à la cause environnementale, indissociable de la santé publique.",
      color: "bg-teal-500",
      image: "https://i.ibb.co/MrTmkh6/Whats-App-Image-2026-05-08-at-23-30-40.jpg", // Lien direct (Certificat 2)
      directLink: "https://ibb.co/11VkGn6"
    }
  ];

  return (
    <section id="certifications" className={`${showTitle ? 'section-padding bg-white dark:bg-slate-950' : ''} transition-colors duration-500 overflow-hidden relative`}>
      {showTitle && (
        <div className="max-w-4xl mx-auto mb-20 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 dark:bg-emerald-500/10 text-emerald-700 dark:text-emerald-400 text-[11px] font-bold uppercase tracking-wider mb-6">
            <Zap size={14} /> Reconnaissance & Expertise
          </div>
          <h2 className="text-4xl md:text-6xl font-display font-black mb-6 tracking-tighter text-slate-900 dark:text-white">Certifications & <span className="text-emerald-600">Engagements</span></h2>
          <p className="text-lg text-slate-500 dark:text-slate-400 font-medium leading-relaxed max-w-3xl mx-auto">
            Mon expertise se nourrit d'une formation continue auprès d'institutions internationales et d'un engagement militant pour la santé et l'environnement.
          </p>
        </div>
      )}

      <div className="grid md:grid-cols-2 gap-8 lg:gap-12 relative z-10">
        {certifications.map((cert, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: i * 0.2 }}
            className="group p-8 md:p-10 rounded-[3rem] bg-slate-50/50 dark:bg-slate-900/50 border border-slate-100 dark:border-slate-800 glass-card relative overflow-hidden"
          >
            <div className="relative z-10">
              <div className="flex justify-between items-start mb-8">
                <div className={`w-14 h-14 rounded-2xl ${cert.color} flex items-center justify-center text-white shadow-lg group-hover:scale-110 transition-transform`}>
                  <cert.icon size={28} />
                </div>
                <button 
                  onClick={() => setSelectedCert(i)}
                  className="flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-emerald-600 dark:text-emerald-400 hover:text-emerald-700 dark:hover:text-emerald-300 transition-colors"
                >
                  <Eye size={16} /> Voir le Certificat
                </button>
              </div>
              <div className="inline-block px-3 py-1 bg-emerald-50 dark:bg-emerald-500/10 text-emerald-700 dark:text-emerald-400 text-[10px] font-bold uppercase tracking-wider rounded-full mb-4">
                {cert.date}
              </div>
              <h3 className="text-2xl font-display font-black mb-4 tracking-tight text-slate-900 dark:text-white leading-tight">{cert.title}</h3>
              <p className="text-emerald-600 dark:text-emerald-400 font-bold mb-6 text-sm">Par {cert.issuer}</p>
              <p className="text-slate-500 dark:text-slate-400 text-base leading-relaxed font-medium mb-6">
                {cert.description}
              </p>
              
              <div className="pt-6 border-t border-slate-100 dark:border-slate-800">
                <p className="text-xs text-slate-400 dark:text-slate-500 italic leading-relaxed">
                  {cert.fullDescription}
                </p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedCert !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedCert(null)}
            className="fixed inset-0 z-[100] bg-slate-950/90 flex items-center justify-center p-4 backdrop-blur-sm"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-5xl w-full bg-slate-900 border border-slate-800 rounded-[2rem] overflow-hidden shadow-2xl"
            >
                <button 
                  onClick={() => setSelectedCert(null)}
                  className="absolute top-6 right-6 z-10 p-2 bg-white/10 hover:bg-white/20 text-white rounded-full transition-colors"
                >
                  <X size={24} />
                </button>
                <a 
                  href={certifications[selectedCert].directLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="absolute top-6 right-20 z-10 p-2 bg-white/10 hover:bg-white/20 text-white rounded-full transition-colors"
                  title="Ouvrir le lien direct"
                >
                  <ExternalLink size={24} />
                </a>
              <div className="grid lg:grid-cols-2">
                <div className="bg-slate-800 aspect-[4/3] lg:aspect-auto overflow-hidden">
                  <img 
                    src={certifications[selectedCert].image} 
                    alt={certifications[selectedCert].title}
                    className="w-full h-full object-contain"
                  />
                </div>
                <div className="p-8 md:p-12 self-center">
                  <div className="inline-block px-3 py-1 bg-emerald-500/10 text-emerald-400 text-[10px] font-bold uppercase tracking-wider rounded-full mb-6">
                    {certifications[selectedCert].date}
                  </div>
                  <h3 className="text-3xl md:text-4xl font-display font-black mb-4 tracking-tighter text-white">
                    {certifications[selectedCert].title}
                  </h3>
                  <p className="text-emerald-400 font-bold mb-8 text-lg">
                    {certifications[selectedCert].issuer}
                  </p>
                  <p className="text-slate-400 text-lg leading-relaxed font-medium">
                    {certifications[selectedCert].fullDescription}
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};
