import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { PROJECTS } from '../constants';
import { ArrowUpRight, Filter, LayoutGrid, CheckCircle2 } from 'lucide-react';
import { SEOHead } from './SEOHead';
import { Breadcrumbs } from './Breadcrumbs';

const CATEGORIES = ['All', 'Commercial', 'Residential', 'Specialty'];

const ease = [0.22, 1, 0.36, 1];

export const ProjectsPage: React.FC = () => {
    const [activeCategory, setActiveCategory] = useState('All');
    const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

    const filteredProjects = useMemo(() => {
        if (activeCategory === 'All') return PROJECTS;
        return PROJECTS.filter(p => p.category === activeCategory);
    }, [activeCategory]);

    return (
        <>
            <SEOHead
                title="Project Portfolio | Our Recent Works"
                description="Explore Gorrocino Roofing's portfolio of commercial, residential, and specialty projects across Southern California. Precision and satisfaction guaranteed."
                canonical="/portfolio"
            />

            <section className="pt-32 pb-24 bg-background min-h-screen">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <Breadcrumbs items={[{ label: 'Portfolio', href: '/portfolio' }]} />

                    {/* Header */}
                    <div className="mb-16 mt-8">
                        <motion.span
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="text-[11px] uppercase tracking-[0.3em] text-neutral-500 mb-4 block font-medium"
                        >
                            Our Portfolio
                        </motion.span>
                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1, duration: 0.8, ease }}
                            className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-8 leading-[1.1] tracking-tight"
                        >
                            Precision & <span className="text-neutral-500">Satisfaction.</span>
                        </motion.h1>
                        <motion.p
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.2, duration: 1 }}
                            className="text-neutral-400 text-lg font-light max-w-2xl leading-relaxed"
                        >
                            A comprehensive showcase of our dedication to excellence. From large-scale industrial facilities to premium custom residential homes.
                        </motion.p>
                    </div>

                    {/* Filters */}
                    <div className="flex flex-wrap items-center gap-4 mb-12 py-6 border-y border-white/5">
                        <div className="flex items-center gap-2 text-neutral-500 mr-4">
                            <Filter className="w-4 h-4" />
                            <span className="text-xs uppercase tracking-widest font-semibold">Filter:</span>
                        </div>
                        {CATEGORIES.map((cat) => (
                            <button
                                key={cat}
                                onClick={() => setActiveCategory(cat)}
                                className={`px-6 py-2 rounded-full text-xs font-medium transition-all duration-300 border ${activeCategory === cat
                                    ? 'bg-white text-black border-white'
                                    : 'bg-transparent text-neutral-400 border-white/10 hover:border-white/30'
                                    }`}
                            >
                                {cat}
                            </button>
                        ))}
                    </div>

                    {/* Gallery Grid */}
                    <motion.div
                        layout
                        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
                    >
                        <AnimatePresence mode="popLayout">
                            {filteredProjects.map((project, index) => (
                                <motion.div
                                    key={project.title}
                                    layout
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    exit={{ opacity: 0, scale: 0.9 }}
                                    transition={{ duration: 0.5, ease }}
                                    onMouseEnter={() => setHoveredIndex(index)}
                                    onMouseLeave={() => setHoveredIndex(null)}
                                    className="group relative aspect-[4/3] rounded-2xl overflow-hidden cursor-pointer bg-neutral-900 border border-white/5"
                                >
                                    <img
                                        src={project.image}
                                        alt={project.title}
                                        loading="lazy"
                                        decoding="async"
                                        className="object-cover w-full h-full transition-transform duration-[1.5s] ease-[0.22,1,0.36,1] group-hover:scale-110 opacity-70 group-hover:opacity-100"
                                    />

                                    {/* Gradient overlay */}
                                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-60 group-hover:opacity-90 transition-opacity duration-500" />

                                    {/* Project info */}
                                    <div className="absolute inset-0 p-8 flex flex-col justify-end">
                                        <div className="transition-transform duration-500 translate-y-4 group-hover:translate-y-0">
                                            <div className="flex items-center gap-2 mb-3">
                                                <span className="text-[10px] uppercase tracking-[0.2em] px-2 py-1 bg-white/10 backdrop-blur-md rounded border border-white/10 text-white font-medium">
                                                    {project.category}
                                                </span>
                                                <span className="text-[10px] uppercase tracking-[0.2em] text-neutral-400">
                                                    {project.date}
                                                </span>
                                            </div>
                                            <h3 className="text-white font-display text-2xl font-bold mb-3 leading-tight">
                                                {project.title}
                                            </h3>
                                            <p className="text-neutral-400 text-sm font-light leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100 max-w-sm">
                                                {project.description}
                                            </p>
                                        </div>

                                        <div className="absolute top-8 right-8 w-12 h-12 bg-white/10 backdrop-blur-md border border-white/20 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 scale-90 group-hover:scale-100">
                                            <ArrowUpRight className="w-5 h-5 text-white" />
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </AnimatePresence>
                    </motion.div>

                    {/* Trust Section */}
                    <div className="mt-40 grid grid-cols-1 md:grid-cols-3 gap-12 py-20 border-t border-white/5">
                        <div className="space-y-4">
                            <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center mb-6">
                                <LayoutGrid className="w-6 h-6 text-neutral-400" />
                            </div>
                            <h3 className="text-white font-display text-xl font-bold">Unmatched Variety</h3>
                            <p className="text-neutral-500 font-light leading-relaxed">From TPO commercial systems to custom architectural shingles, we master every scale.</p>
                        </div>
                        <div className="space-y-4">
                            <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center mb-6">
                                <CheckCircle2 className="w-6 h-6 text-neutral-400" />
                            </div>
                            <h3 className="text-white font-display text-xl font-bold">Rigorous Excellence</h3>
                            <p className="text-neutral-500 font-light leading-relaxed">Every project undergoes intensive site management and quality oversight by our leadership.</p>
                        </div>
                        <div className="space-y-4">
                            <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center mb-6">
                                <Filter className="w-6 h-6 text-neutral-400" />
                            </div>
                            <h3 className="text-white font-display text-xl font-bold">Seasoned Precision</h3>
                            <p className="text-neutral-500 font-light leading-relaxed">With decades of experience, we provide a wide range of services for projects of all sizes.</p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};
