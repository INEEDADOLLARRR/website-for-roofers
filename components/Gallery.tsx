import React from 'react';
import { motion } from 'framer-motion';
import { PROJECTS } from '../constants';
import { ArrowUpRight, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export const Gallery: React.FC = () => {
  const featuredProjects = PROJECTS.slice(0, 3);

  return (
    <section id="gallery" className="py-32 bg-surfaceHighlight relative border-t border-white/5 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          >
            <span className="text-[11px] uppercase tracking-[0.3em] text-neutral-500 mb-4 block font-medium uppercase font-semibold italic">Our Portfolio</span>
            <h3 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-[1.1] tracking-tight">
              Featured <span className="text-neutral-500">Work</span>
            </h3>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-col items-end gap-6"
          >
            <p className="text-neutral-500 text-sm max-w-xs text-right font-light leading-relaxed">
              A selection of our recent commercial and residential excellence across Southern California.
            </p>
            <Link
              to="/portfolio"
              className="inline-flex items-center gap-2 text-white text-sm font-semibold tracking-wider hover:gap-4 transition-all duration-300 group"
            >
              EXPLORE ALL PROJECTS
              <ChevronRight className="w-4 h-4 text-neutral-500 group-hover:text-white" />
            </Link>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {featuredProjects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="group relative aspect-[4/5] rounded-2xl overflow-hidden cursor-pointer bg-neutral-900"
            >
              <img
                src={project.image}
                alt={project.title}
                className="object-cover w-full h-full transition-transform duration-[1.5s] ease-[0.22,1,0.36,1] group-hover:scale-110 opacity-60 group-hover:opacity-100"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-80 group-hover:opacity-100 transition-opacity duration-500" />

              <div className="absolute inset-0 p-8 flex flex-col justify-end">
                <div className="transition-transform duration-500 translate-y-2 group-hover:translate-y-0">
                  <span className="text-[10px] uppercase tracking-[0.2em] text-neutral-400 block mb-2">{project.category}</span>
                  <h4 className="text-white font-display text-2xl font-bold mb-2">{project.title}</h4>
                </div>

                <div className="mt-4 overflow-hidden">
                  <p className="text-neutral-500 text-xs font-light leading-relaxed max-w-[240px] translate-y-10 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-500 delay-75">
                    {project.description}
                  </p>
                </div>
              </div>

              <div className="absolute top-8 right-8 w-10 h-10 bg-white/10 backdrop-blur-md border border-white/20 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 scale-90 group-hover:scale-100">
                <ArrowUpRight className="w-4 h-4 text-white" />
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};