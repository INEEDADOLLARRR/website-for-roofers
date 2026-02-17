import React from 'react';
import { motion } from 'framer-motion';
import { SERVICES } from '../constants';
import { SpotlightCard } from './ui/SpotlightCard';
import { ArrowRight } from 'lucide-react';

export const Services: React.FC = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1]
      }
    }
  };

  return (
    <section className="py-32 bg-background relative">
      <div
        id="services"
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 scroll-mt-24"
      >
        <div className="mb-24 flex flex-col md:flex-row justify-between items-end gap-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            <p className="text-xs font-bold text-neutral-500 uppercase tracking-[0.2em] mb-4">What We Do</p>
            <h2 className="font-display text-4xl md:text-5xl font-semibold text-white mb-6 tracking-tight">
              Professional Services
            </h2>
            <p className="text-neutral-500 text-lg max-w-2xl font-light leading-relaxed">
              At the forefront of the latest roofing techniques. We handle your needs with intensive project management and oversight, all at the market's most competitive rates. <span className="text-neutral-300">Start with a free consultation.</span>
            </p>
          </motion.div>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4"
        >
          {SERVICES.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.title}
                variants={itemVariants}
                className={service.colSpan === 2 ? "md:col-span-2" : "md:col-span-1"}
              >
                <SpotlightCard className="h-full bg-surface/50 hover:bg-surfaceHighlight transition-colors border-white/5 p-8 group">
                  <div className="flex flex-col h-full justify-between gap-10">
                    <div className="flex items-start justify-between">
                      <div className="w-12 h-12 rounded-xl bg-white/[0.03] border border-white/5 flex items-center justify-center text-white/70 group-hover:text-white group-hover:bg-white/10 group-hover:border-white/10 transition-all duration-500">
                        <Icon className="w-5 h-5" />
                      </div>
                      <ArrowRight className="w-4 h-4 text-neutral-700 group-hover:text-white/40 group-hover:translate-x-1 transition-all duration-300" />
                    </div>
                    <div>
                      <h3 className="text-lg font-medium text-white mb-3">{service.title}</h3>
                      <p className="text-neutral-500 leading-relaxed text-sm font-light group-hover:text-neutral-400 transition-colors">
                        {service.description}
                      </p>
                    </div>
                  </div>
                </SpotlightCard>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};