import { ChevronRight } from "lucide-react";

export const Footer = () => (
  <footer className="bg-white dark:bg-slate-950 text-slate-900 dark:text-slate-100 section-padding transition-colors duration-500 border-t border-slate-100 dark:border-slate-800 relative overflow-hidden">
    <div className="absolute bottom-0 right-0 w-64 h-64 bg-emerald-500/5 rounded-full blur-3xl pointer-events-none" />
    
    <div className="max-w-7xl mx-auto relative z-10">
      <div className="grid md:grid-cols-2 gap-16 items-start mb-20 text-left">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-500 dark:text-slate-400 text-[11px] font-bold uppercase tracking-wider mb-8">
            Ressources
          </div>
          <h2 className="text-3xl font-display font-black mb-8 tracking-tighter text-slate-900 dark:text-white">Vérification des Photos</h2>
          <p className="text-base text-slate-500 dark:text-slate-400 mb-8 font-medium leading-relaxed">
            Si vous ne voyez pas les photos sur le site, cliquez sur les liens ci-dessous pour vérifier qu'elles sont accessibles sur votre réseau :
          </p>
          <div className="grid gap-3">
            {[
              { label: "Photo de Profil Optimisée (WebP)", url: "https://wsrv.nl/?url=https://i.ibb.co/HpnQS3wh/IMG-4048.jpg&w=800&output=webp" },
              { label: "Photo À Propos Optimisée (WebP)", url: "https://wsrv.nl/?url=https://i.ibb.co/5hyM915h/IMG-5749.jpg&w=1000&output=webp" },
              { label: "Photo Création Optimisée (WebP)", url: "https://wsrv.nl/?url=https://i.ibb.co/qYM35KWh/IMG-5410.jpg&w=1200&output=webp" }
            ].map((link, i) => (
              <a key={i} href={link.url} target="_blank" rel="noreferrer" className="group flex items-center gap-3 text-emerald-600 dark:text-emerald-400 hover:text-emerald-500 transition-colors font-bold text-sm">
                <div className="w-7 h-7 rounded-lg bg-emerald-50 dark:bg-emerald-500/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <ChevronRight size={14} />
                </div>
                {link.label}
              </a>
            ))}
          </div>
        </div>
        <div className="md:text-right">
          <div className="text-4xl font-display font-black mb-6 tracking-tighter text-slate-900 dark:text-white">
            BARAKA<span className="text-emerald-600">.DEV</span>
          </div>
          <p className="text-lg text-slate-500 dark:text-slate-400 font-medium mb-4">© {new Date().getFullYear()} Tous droits réservés.</p>
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-2xl bg-slate-50 dark:bg-slate-800 border border-slate-100 dark:border-slate-800 text-slate-400 text-xs italic font-medium">
            Fait avec passion à Bukavu, RDC.
          </div>
        </div>
      </div>
      <div className="pt-10 border-t border-slate-100 dark:border-slate-800 text-center">
        <p className="text-[10px] font-bold uppercase tracking-[0.4em] text-slate-300 dark:text-slate-600">
          Innovation • Santé • Technologie
        </p>
      </div>
    </div>
  </footer>
);
