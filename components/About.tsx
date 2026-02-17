import React from 'react';
import { motion } from 'framer-motion';
import { BUSINESS_INFO } from '../constants';
import { CheckCircle2, Shield, Award, Users, ChevronRight } from 'lucide-react';

export const About: React.FC = () => {
  const ease = [0.16, 1, 0.3, 1];

  const stats = [
    { icon: Shield, label: "Combined Exp.", value: "35+ Years" },
    { icon: Award, label: "Experience", value: "30 Years" },
    { icon: Users, label: "Founded", value: "2018" },
  ];

  return (
    <section id="about" className="py-32 bg-background relative border-t border-white/5 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">

          {/* Text Content */}
          <div className="order-2 lg:order-1">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1, ease }}
            >
              <h2 className="text-xs font-bold text-neutral-500 uppercase tracking-[0.2em] mb-6">Who We Are</h2>
              <h3 className="font-display text-4xl md:text-5xl font-semibold text-white mb-8 leading-[1.1]">
                Crafting Excellence <br />
                Since <span className="text-neutral-500 italic">2018.</span>
              </h3>

              <div className="text-neutral-400 text-lg leading-relaxed space-y-6 font-light mb-10">
                <p>
                  Ever since opening our doors in 2018, we've been committed to our clients' unique project needs. As a leader in the Southern California roofing industry, our reputation is built on intensive management and meticulous job oversight.
                </p>
                <p>
                  With almost 30 years in the construction industry and 35 years of combined experience, you are in the best of hands. From complex large-scale projects to smaller residential jobs, we guarantee precise, timely, and efficient work.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="/about"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-black rounded-lg text-sm font-semibold hover:bg-neutral-200 transition-all group"
                >
                  Read Our Full Story
                  <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            </motion.div>
          </div>

          {/* Image Content with Scale Reveal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1.2, ease }}
            className="order-1 lg:order-2 relative"
          >
            <div className="relative rounded-xl overflow-hidden aspect-[4/5] md:aspect-square lg:aspect-[4/5] bg-neutral-900">
              <motion.img
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.7, ease: "easeOut" }}
                src="/roofers-at-work.jpg"
                alt="Gorrocino Roofing Team at Work"
                className="object-cover w-full h-full opacity-80"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-60" />
              <div className="absolute inset-0 ring-1 ring-inset ring-white/10 rounded-xl" />

              <div className="absolute bottom-8 left-8 right-8">
                <div className="backdrop-blur-xl bg-black/40 border border-white/10 p-8 rounded-lg">
                  <p className="font-display text-2xl font-medium text-white mb-2">Quality First</p>
                  <p className="text-neutral-400 text-sm font-light leading-relaxed">Every shingle, every nail, every time. Precision is our standard.</p>
                </div>
              </div>
            </div>

            {/* Stats row below image */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.8, ease }}
              className="grid grid-cols-3 gap-4 mt-4"
            >
              {stats.map((stat, i) => (
                <div key={i} className="bg-surface border border-white/5 rounded-lg p-4 text-center group hover:border-white/10 transition-colors">
                  <stat.icon className="w-4 h-4 text-neutral-500 mx-auto mb-2 group-hover:text-white/70 transition-colors" />
                  <p className="text-white text-xs font-medium">{stat.value}</p>
                  <p className="text-neutral-600 text-[10px] uppercase tracking-wider mt-0.5">{stat.label}</p>
                </div>
              ))}
            </motion.div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};