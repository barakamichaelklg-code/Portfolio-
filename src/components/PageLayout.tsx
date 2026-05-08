import React, { ReactNode } from "react";
import { motion } from "motion/react";

interface PageLayoutProps {
  children: ReactNode;
  title: string;
  subtitle?: string;
  icon?: React.ElementType;
  gradient?: string;
}

export const PageLayout = ({ children, title, subtitle, icon: Icon, gradient = "from-emerald-500/20 to-teal-500/20" }: PageLayoutProps) => {
  return (
    <div className="min-h-screen pt-32 pb-20 relative overflow-hidden">
      {/* Distinctive Sub-page Background Patterns */}
      <div className="absolute inset-0 z-[-1]">
        <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] dark:bg-[radial-gradient(#1e293b_1px,transparent_1px)] [background-size:40px_40px] opacity-25" />
        <div className={`absolute top-0 right-0 w-[600px] h-[600px] bg-gradient-to-br ${gradient} rounded-full blur-[120px] -translate-y-1/2 translate-x-1/4 opacity-30`} />
        <div className={`absolute bottom-0 left-0 w-[500px] h-[500px] bg-gradient-to-tr ${gradient} rounded-full blur-[100px] translate-y-1/2 -translate-x-1/4 opacity-20`} />
      </div>

      <div className="max-w-7xl mx-auto px-6">
        <motion.header 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="mb-16"
        >
          {Icon && (
            <div className="w-16 h-16 rounded-2xl bg-emerald-600 flex items-center justify-center text-white shadow-xl shadow-emerald-500/20 mb-8">
              <Icon size={32} />
            </div>
          )}
          <h1 className="text-5xl md:text-7xl font-display font-black tracking-tighter text-slate-900 dark:text-white mb-6">
            {title}
          </h1>
          {subtitle && (
            <p className="text-xl text-slate-500 dark:text-slate-400 font-medium max-w-2xl leading-relaxed">
              {subtitle}
            </p>
          )}
          <div className="h-1 w-20 bg-emerald-600 mt-8 rounded-full" />
        </motion.header>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
        >
          {children}
        </motion.div>
      </div>
    </div>
  );
};
