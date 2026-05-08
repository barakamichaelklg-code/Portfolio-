import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Send, Mail, Phone, Github, Linkedin, Loader2, CheckCircle2 } from "lucide-react";

export const Contact = ({ showTitle = true }: { showTitle?: boolean }) => {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");

    try {
      const response = await fetch("https://formspree.io/f/barakamichaelklg@gmail.com", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          message: formData.message,
          _subject: `Nouveau message de ${formData.name} - Portfolio`
        })
      });

      if (response.ok) {
        setStatus("success");
        setFormData({ name: "", email: "", message: "" });
        setTimeout(() => setStatus("idle"), 5000);
      } else {
        setStatus("error");
      }
    } catch (error) {
      console.error("Submission error:", error);
      setStatus("error");
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <section id="contact" className={`${showTitle ? 'section-padding bg-white dark:bg-slate-950 px-6' : ''} transition-colors duration-500 relative overflow-hidden`}>
      {showTitle && (
        <div className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none">
          <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-emerald-500 rounded-full blur-[150px]" />
        </div>
      )}
      
      <div className={`max-w-6xl mx-auto ${showTitle ? 'glass rounded-[3rem] p-8 md:p-20 border border-white/40 dark:border-white/10 shadow-2xl' : ''} relative z-10`}>
        {showTitle && (
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 dark:bg-emerald-500/10 text-emerald-700 dark:text-emerald-400 text-[11px] font-bold uppercase tracking-wider mb-8">
              <Send size={14} /> Contact
            </div>
            <h2 className="text-5xl md:text-7xl font-display font-black mb-8 tracking-tighter leading-tight text-slate-900 dark:text-white">Travaillons <br /><span className="text-emerald-600">ensemble</span></h2>
            <p className="text-lg md:text-xl text-slate-500 dark:text-slate-400 max-w-2xl mx-auto font-medium leading-relaxed">
              Vous avez un projet en tête ou vous voulez simplement discuter de la tech et de la pharmacie ?
            </p>
          </div>
        )}

        <div className="grid lg:grid-cols-2 gap-12 items-start max-w-5xl mx-auto">
          {/* Info Cards */}
          <div className="space-y-6">
            <div className="grid md:grid-cols-2 lg:grid-cols-1 gap-6">
              <a 
                href="mailto:barakamichaelklg@gmail.com" 
                className="group flex flex-col items-center lg:items-start p-8 rounded-[2.5rem] bg-white/50 dark:bg-slate-900/50 border border-slate-100 dark:border-slate-800 hover:border-emerald-500 hover:shadow-xl transition-all duration-500 glass-card"
              >
                <div className="w-16 h-16 rounded-2xl bg-emerald-50 dark:bg-emerald-500/10 flex items-center justify-center text-emerald-600 dark:text-emerald-400 mb-6 group-hover:scale-110 transition-transform">
                  <Mail size={28} />
                </div>
                <span className="text-[10px] font-bold text-slate-400 dark:text-slate-500 uppercase tracking-wider mb-2 text-center lg:text-left w-full">Email</span>
                <span className="text-base font-bold break-all text-slate-900 dark:text-white text-center lg:text-left w-full">barakamichaelklg@gmail.com</span>
              </a>
              <a 
                href="tel:0979307569" 
                className="group flex flex-col items-center lg:items-start p-8 rounded-[2.5rem] bg-white/50 dark:bg-slate-900/50 border border-slate-100 dark:border-slate-800 hover:border-emerald-500 hover:shadow-xl transition-all duration-500 glass-card"
              >
                <div className="w-16 h-16 rounded-2xl bg-emerald-50 dark:bg-emerald-500/10 flex items-center justify-center text-emerald-600 dark:text-emerald-400 mb-6 group-hover:scale-110 transition-transform">
                  <Phone size={28} />
                </div>
                <span className="text-[10px] font-bold text-slate-400 dark:text-slate-500 uppercase tracking-wider mb-2 text-center lg:text-left w-full">Téléphone</span>
                <span className="text-xl font-black text-slate-900 dark:text-white text-center lg:text-left w-full">0979307569</span>
              </a>
            </div>

            <div className="flex flex-wrap justify-center lg:justify-start gap-4">
              <a href="https://github.com/barakamichaelklg-code" target="_blank" rel="noopener noreferrer" className="p-4 rounded-2xl bg-slate-100 dark:bg-slate-800 hover:bg-emerald-600 hover:text-white transition-all text-slate-600 dark:text-slate-400">
                <Github size={24} />
              </a>
              <a href="https://www.linkedin.com/in/baraka-michael-klg" target="_blank" rel="noopener noreferrer" className="p-4 rounded-2xl bg-slate-100 dark:bg-slate-800 hover:bg-[#0A66C2] hover:text-white transition-all text-slate-600 dark:text-slate-400">
                <Linkedin size={24} />
              </a>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white dark:bg-slate-900 p-8 md:p-10 rounded-[2.5rem] border border-slate-100 dark:border-slate-800 shadow-xl relative overflow-hidden">
            <AnimatePresence mode="wait">
              {status === "success" ? (
                <motion.div 
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  key="success"
                  className="text-center py-12"
                >
                  <div className="w-20 h-20 bg-emerald-100 dark:bg-emerald-500/10 text-emerald-600 rounded-full flex items-center justify-center mx-auto mb-6">
                    <CheckCircle2 size={40} />
                  </div>
                  <h3 className="text-2xl font-display font-black text-slate-900 dark:text-white mb-2">Message envoyé !</h3>
                  <p className="text-slate-500 dark:text-slate-400 font-medium">Merci, je vous répondrai très prochainement.</p>
                  <button 
                    onClick={() => setStatus("idle")}
                    className="mt-8 text-emerald-600 font-bold hover:underline"
                  >
                    Envoyer un autre message
                  </button>
                </motion.div>
              ) : (
                <motion.form 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  key="form"
                  onSubmit={handleSubmit}
                  className="space-y-6"
                >
                  <div>
                    <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500 mb-2 ml-1">Nom complet</label>
                    <input 
                      required
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Votre nom"
                      className="w-full px-6 py-4 rounded-2xl bg-slate-50 dark:bg-slate-800/50 border border-slate-100 dark:border-slate-800 focus:border-emerald-500 outline-none transition-all text-slate-900 dark:text-white font-medium"
                    />
                  </div>
                  <div>
                    <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500 mb-2 ml-1">Adresse Email</label>
                    <input 
                      required
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="exemple@email.com"
                      className="w-full px-6 py-4 rounded-2xl bg-slate-50 dark:bg-slate-800/50 border border-slate-100 dark:border-slate-800 focus:border-emerald-500 outline-none transition-all text-slate-900 dark:text-white font-medium"
                    />
                  </div>
                  <div>
                    <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500 mb-2 ml-1">Message</label>
                    <textarea 
                      required
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={5}
                      placeholder="En quoi puis-je vous aider ?"
                      className="w-full px-6 py-4 rounded-2xl bg-slate-50 dark:bg-slate-800/50 border border-slate-100 dark:border-slate-800 focus:border-emerald-500 outline-none transition-all text-slate-900 dark:text-white font-medium resize-none"
                    />
                  </div>
                  <button 
                    disabled={status === "loading"}
                    type="submit"
                    className="w-full py-5 bg-emerald-600 hover:bg-emerald-700 text-white rounded-2xl font-bold transition-all shadow-lg shadow-emerald-500/25 flex items-center justify-center gap-3 disabled:opacity-70 disabled:cursor-not-allowed group"
                  >
                    {status === "loading" ? (
                      <>
                        <Loader2 size={20} className="animate-spin" />
                        Envoi en cours...
                      </>
                    ) : (
                      <>
                        <Send size={20} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                        Envoyer le message
                      </>
                    )}
                  </button>
                  {status === "error" && (
                    <p className="text-red-500 text-center text-sm font-bold mt-4">Une erreur est survenue. Veuillez réessayer.</p>
                  )}
                </motion.form>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
};
