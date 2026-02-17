import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Phone, Calendar } from 'lucide-react';
import { BUSINESS_INFO } from '../constants';
import { Button } from './ui/Button';

export const StickyMobileCTA: React.FC = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            // Show after scrolling 600px
            setIsVisible(window.scrollY > 600);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <AnimatePresence>
            {isVisible && (
                <motion.div
                    initial={{ y: 100 }}
                    animate={{ y: 0 }}
                    exit={{ y: 100 }}
                    className="fixed bottom-6 left-6 right-6 z-50 md:hidden flex gap-3"
                >
                    <a
                        href={`tel:${BUSINESS_INFO.phone}`}
                        className="flex-1"
                    >
                        <Button className="w-full h-14 bg-white text-black hover:bg-neutral-200 shadow-2xl shadow-black/40">
                            <Phone className="w-4 h-4 mr-2" />
                            Call Now
                        </Button>
                    </a>
                    <button
                        onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                        className="w-14 h-14 bg-neutral-900 border border-white/10 rounded-xl flex items-center justify-center text-white backdrop-blur-xl shadow-2xl shadow-black/40"
                    >
                        <Calendar className="w-5 h-5" />
                    </button>
                </motion.div>
            )}
        </AnimatePresence>
    );
};
