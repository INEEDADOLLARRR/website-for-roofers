import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Home } from 'lucide-react';

export const NotFound: React.FC = () => {
    return (
        <section className="pt-28 pb-32 bg-background min-h-screen flex items-center justify-center">
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                className="text-center max-w-lg px-4"
            >
                <div className="text-8xl font-display font-bold text-white/10 mb-6">404</div>
                <h1 className="font-display text-3xl font-bold text-white mb-4">Page Not Found</h1>
                <p className="text-neutral-400 font-light mb-10 leading-relaxed">
                    The page you're looking for doesn't exist or has been moved.
                </p>
                <div className="flex items-center justify-center gap-4">
                    <Link
                        to="/"
                        className="inline-flex items-center gap-2 px-6 py-3 bg-white text-black rounded-lg text-sm font-medium hover:bg-neutral-200 transition-colors"
                    >
                        <Home className="w-4 h-4" />
                        Back to Home
                    </Link>
                    <Link
                        to="/blog"
                        className="inline-flex items-center gap-2 px-6 py-3 border border-white/10 text-white rounded-lg text-sm font-medium hover:border-white/30 transition-colors"
                    >
                        Read Our Blog
                    </Link>
                </div>
            </motion.div>
        </section>
    );
};
