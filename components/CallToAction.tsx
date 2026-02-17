import React from 'react';
import { motion } from 'framer-motion';
import { Button } from './ui/Button';
import { ArrowRight, Phone } from 'lucide-react';
import { BUSINESS_INFO } from '../constants';

export const CallToAction: React.FC = () => {
  return (
    <section className="py-32 relative overflow-hidden">
      {/* Background gradients */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-surfaceHighlight to-background opacity-50" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-white/5 blur-[120px] rounded-full pointer-events-none" />

      {/* Top/Bottom lines */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 bg-white/5 border border-white/10 rounded-full px-4 py-1.5 mb-8"
          >
            <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
            <span className="text-[10px] uppercase tracking-[0.15em] text-neutral-400 font-medium">Booking Available</span>
          </motion.div>

          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-[1.1]">
            Is your roof ready for <br />
            <span className="text-neutral-500">the next storm?</span>
          </h2>
          <p className="text-xl text-neutral-400 mb-12 max-w-2xl mx-auto leading-relaxed font-light">
            Don't wait for a leak to reveal the problem. Get a comprehensive roof inspection and an honest quote today.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button
              className="h-14 px-10 text-base font-semibold min-w-[220px]"
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              <span className="flex items-center gap-2">
                Get Free Estimate <ArrowRight className="w-4 h-4" />
              </span>
            </Button>
            <Button
              variant="secondary"
              className="h-14 px-8 text-base"
              onClick={() => window.location.href = `tel:${BUSINESS_INFO.phone}`}
            >
              <Phone className="w-4 h-4 mr-2" />
              Call Now
            </Button>
          </div>

          <p className="text-sm text-neutral-500 mt-8">
            Trusted by homeowners across Southern California · Takes less than 2 minutes
          </p>
        </motion.div>
      </div>
    </section>
  );
};