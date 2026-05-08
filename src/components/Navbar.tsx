import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { 
  Sun, 
  Moon, 
  Monitor, 
  Code
} from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

export type Theme = "light" | "dark" | "system";

export const Navbar = ({ theme, setTheme }: { theme: Theme, setTheme: (t: Theme) => void }) => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const themes: { id: Theme; icon: any; label: string }[] = [
    { id: "light", icon: Sun, label: "Clair" },
    { id: "dark", icon: Moon, label: "Sombre" },
    { id: "system", icon: Monitor, label: "Système" }
  ];

  const navLinks = [
    { path: "/", label: "Accueil" },
    { path: "/about", label: "À propos" },
    { path: "/skills", label: "Compétences" },
    { path: "/projects", label: "Projets" },
    { path: "/certifications", label: "Certifications" },
    { path: "/contact", label: "Contact" },
  ];

  return (
    <nav className="fixed top-6 left-1/2 -translate-x-1/2 z-50 glass h-14 flex items-center justify-between px-6 rounded-full w-[calc(100%-3rem)] max-w-5xl transition-all duration-500 border border-white/40 dark:border-white/10 shadow-lg">
      <Link to="/" className="font-display font-bold text-lg tracking-tight flex items-center gap-2">
        <div className="w-8 h-8 rounded-lg bg-emerald-600 flex items-center justify-center text-white shadow-lg shadow-emerald-500/20">
          <Code size={18} />
        </div>
        <span className="hidden sm:inline">BARAKA<span className="text-emerald-600">.DEV</span></span>
      </Link>
      
      <div className="flex items-center gap-3 md:gap-6">
        <div className="hidden md:flex gap-6 text-[13px] font-semibold text-slate-600 dark:text-slate-400">
          {navLinks.map((link) => (
            <Link 
              key={link.path} 
              to={link.path} 
              className={`hover:text-emerald-600 transition-colors ${location.pathname === link.path ? 'text-emerald-600' : ''}`}
            >
              {link.label}
            </Link>
          ))}
        </div>

        <div className="h-4 w-px bg-slate-200 dark:bg-slate-800 hidden md:block" />

        <div className="relative">
          <button 
            onClick={() => setIsOpen(!isOpen)}
            className="p-2 rounded-full bg-slate-100/50 dark:bg-slate-800/50 text-slate-600 dark:text-slate-300 hover:bg-white dark:hover:bg-slate-700 transition-all border border-slate-200 dark:border-slate-700"
            title="Changer le thème"
          >
            {theme === "light" && <Sun size={18} />}
            {theme === "dark" && <Moon size={18} />}
            {theme === "system" && <Monitor size={18} />}
          </button>

          <AnimatePresence>
            {isOpen && (
              <>
                <div className="fixed inset-0 z-[-1]" onClick={() => setIsOpen(false)} />
                <motion.div
                  initial={{ opacity: 0, y: 10, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 10, scale: 0.95 }}
                  className="absolute right-0 mt-3 w-40 glass rounded-2xl p-1.5 shadow-2xl border border-white/40 dark:border-white/10 overflow-hidden"
                >
                  {themes.map((t) => (
                    <button
                      key={t.id}
                      onClick={() => {
                        setTheme(t.id);
                        setIsOpen(false);
                      }}
                      className={`w-full flex items-center gap-3 px-3 py-2 rounded-xl text-[13px] font-semibold transition-all ${
                        theme === t.id 
                          ? "bg-emerald-600 text-white shadow-md shadow-emerald-500/20" 
                          : "text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800"
                      }`}
                    >
                      <t.icon size={14} />
                      {t.label}
                    </button>
                  ))}
                </motion.div>
              </>
            )}
          </AnimatePresence>
        </div>
      </div>
    </nav>
  );
};
