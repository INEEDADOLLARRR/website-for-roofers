import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Award, ThumbsUp } from 'lucide-react';

export const TrustBadges: React.FC = () => {
    const badges = [
        { icon: ShieldCheck, text: "Fully Licensed & Insured" },
        { icon: Award, text: "35+ Years Combined Experience" },
        { icon: ThumbsUp, text: "100% Satisfaction Guaranteed" }
    ];

    return (
        <div className="flex flex-wrap items-center justify-center gap-6 py-8 border-y border-white/5 my-12">
            {badges.map((badge, i) => (
                <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="flex items-center gap-2 text-neutral-400 group"
                >
                    <badge.icon className="w-5 h-5 text-neutral-600 group-hover:text-white transition-colors" />
                    <span className="text-xs uppercase tracking-[0.2em] font-medium group-hover:text-neutral-200 transition-colors">
                        {badge.text}
                    </span>
                </motion.div>
            ))}
        </div>
    );
};
