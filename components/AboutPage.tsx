import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Hammer, Clock, CheckCircle2, ChevronRight } from 'lucide-react';
import { SEOHead } from './SEOHead';
import { Breadcrumbs } from './Breadcrumbs';

const ease = [0.22, 1, 0.36, 1];

const stats = [
    { label: 'Combined Experience', value: '35+', suffix: 'Years' },
    { label: 'Founded', value: '2018', suffix: '' },
    { label: 'Industry Expertise', value: '30', suffix: 'Years' },
    { label: 'Client Satisfaction', value: '100', suffix: '%' },
];

export const AboutPage: React.FC = () => {
    return (
        <>
            <SEOHead
                title="Our Story | Committed to Excellence"
                description="Learn about Gorrocino Roofing, a leader in Southern California roofing since 2018. With 35 years of combined experience, we provide precise, efficient roofing solutions."
                canonical="/about"
            />

            <section className="pt-32 pb-24 bg-background">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <Breadcrumbs items={[{ label: 'About', href: '/about' }]} />

                    {/* Hero Header */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-32">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 1, ease }}
                        >
                            <span className="text-[11px] uppercase tracking-[0.3em] text-neutral-500 mb-4 block font-medium">Get to Know Us</span>
                            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-8 leading-[1.1] tracking-tight">
                                Our Story: Committed to <span className="text-neutral-500">Excellence</span>
                            </h1>
                            <p className="text-neutral-400 text-lg font-light leading-relaxed mb-8 max-w-xl">
                                Ever since opening our doors in 2018, Gorrocino Roofing has been dedicated to surpassing client expectations through a comprehensive, leader-led approach to roofing services.
                            </p>
                            <div className="flex flex-wrap gap-4">
                                <div className="flex items-center gap-2 text-white/80 bg-white/5 border border-white/10 px-4 py-2 rounded-full text-sm">
                                    <CheckCircle2 className="w-4 h-4 text-neutral-400" />
                                    Fully Certified Professionals
                                </div>
                                <div className="flex items-center gap-2 text-white/80 bg-white/5 border border-white/10 px-4 py-2 rounded-full text-sm">
                                    <CheckCircle2 className="w-4 h-4 text-neutral-400" />
                                    Southern California Leaders
                                </div>
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 1.2, ease }}
                            className="relative aspect-square md:aspect-[4/3] rounded-2xl overflow-hidden border border-white/10"
                        >
                            <img
                                src="/roofers-at-work.jpg"
                                alt="Gorrocino Roofing Team at Work"
                                className="w-full h-full object-cover"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent" />
                        </motion.div>
                    </div>

                    {/* Stats Grid */}
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-32">
                        {stats.map((stat, index) => (
                            <motion.div
                                key={stat.label}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.8, delay: index * 0.1, ease }}
                                className="text-center p-8 rounded-xl bg-surface border border-white/5"
                            >
                                <div className="text-3xl md:text-4xl font-display font-bold text-white mb-2">
                                    {stat.value}<span className="text-neutral-500 text-2xl ml-1">{stat.suffix}</span>
                                </div>
                                <div className="text-[10px] uppercase tracking-[0.2em] text-neutral-500 font-semibold italic">
                                    {stat.label}
                                </div>
                            </motion.div>
                        ))}
                    </div>

                    {/* Detailed Sections */}
                    <div className="space-y-32">
                        {/* Expertise Section */}
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                            <motion.div
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 1, ease }}
                                className="order-2 lg:order-1"
                            >
                                <h2 className="font-display text-3xl md:text-4xl font-bold text-white mb-6 tracking-tight">
                                    Decades of <span className="text-neutral-500 italic">Proven</span> Expertise
                                </h2>
                                <div className="space-y-6 text-neutral-400 font-light leading-relaxed">
                                    <p>
                                        With almost 30 years in the construction industry and 35 years of combined team experience, you are in the best of hands. Our deep roots in the field allow us to anticipate challenges before they arise, ensuring your project is handled with seasoned precision.
                                    </p>
                                    <p>
                                        Whether we are tackling complex, large-scale industrial projects or precise residential jobs, our commitment to excellence remains the core of everything we do.
                                    </p>
                                </div>
                            </motion.div>
                            <div className="order-1 lg:order-2 grid grid-cols-2 gap-4">
                                <div className="p-8 rounded-2xl bg-surface border border-white/5 flex flex-col justify-between aspect-square">
                                    <Shield className="w-8 h-8 text-neutral-400 mb-4" />
                                    <h3 className="text-white font-medium">Fully Licensed & Certified</h3>
                                </div>
                                <div className="p-8 rounded-2xl bg-surface border border-white/5 flex flex-col justify-between aspect-square mt-8">
                                    <Hammer className="w-8 h-8 text-neutral-400 mb-4" />
                                    <h3 className="text-white font-medium">Precision Craftsmanship</h3>
                                </div>
                            </div>
                        </div>

                        {/* Approach Section */}
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                            <motion.div
                                initial={{ opacity: 0, scale: 0.95 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 1, ease }}
                                className="relative aspect-square rounded-2xl overflow-hidden border border-white/10"
                            >
                                <img
                                    src="/socal-skyline.png"
                                    alt="Southern California Service Area"
                                    className="w-full h-full object-cover"
                                />
                                <div className="absolute inset-0 bg-gradient-to-tr from-background/40 to-transparent" />
                            </motion.div>
                            <motion.div
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 1, ease }}
                            >
                                <h2 className="font-display text-3xl md:text-4xl font-bold text-white mb-6 tracking-tight">
                                    Comprehensive Project Management
                                </h2>
                                <div className="space-y-6 text-neutral-400 font-light leading-relaxed">
                                    <p>
                                        A successful roof is about more than just shingles. From navigating complex bureaucratic requirements and local permits to coordinating with trusted subcontractors, Gorrocino Roofing guarantees a seamless, efficient workflow.
                                    </p>
                                    <p>
                                        We handle the high-level coordination so you don't have to, delivering results that are precise, timely, and built to last.
                                    </p>
                                    <ul className="space-y-4 pt-4">
                                        {[
                                            'Bureaucratic & Permit Compliance',
                                            'Precise Subcontractor Coordination',
                                            'Timely Project Completion',
                                            'Efficient Resource Management'
                                        ].map((item) => (
                                            <li key={item} className="flex items-center gap-3 text-white text-sm">
                                                <ChevronRight className="w-4 h-4 text-neutral-500" />
                                                {item}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </motion.div>
                        </div>
                    </div>

                    {/* Final CTA */}
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, ease }}
                        className="mt-32 p-12 md:p-20 rounded-[2rem] bg-surface border border-white/5 text-center relative overflow-hidden"
                    >
                        <div className="relative z-10 max-w-2xl mx-auto">
                            <h2 className="font-display text-3xl md:text-5xl font-bold text-white mb-8 tracking-tight">
                                Bring Your Vision To Life Today
                            </h2>
                            <p className="text-neutral-400 text-lg font-light mb-10 leading-relaxed">
                                Experience the difference that decades of dedication and a commitment to excellence can make for your property.
                            </p>
                            <button
                                onClick={() => window.location.href = '/#contact'}
                                className="inline-flex items-center gap-2 px-8 py-4 bg-white text-black rounded-full font-semibold hover:bg-neutral-200 transition-colors"
                            >
                                Schedule Consolutation
                                <ChevronRight className="w-4 h-4" />
                            </button>
                        </div>
                        {/* Subtle background decoration */}
                        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[150%] h-[150%] bg-gradient-to-b from-white/[0.03] to-transparent pointer-events-none rounded-full blur-3xl" />
                    </motion.div>
                </div>
            </section>
        </>
    );
};
