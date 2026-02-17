import React from 'react';
import { motion } from 'framer-motion';
import { Button } from './ui/Button';
import { Star, Phone } from 'lucide-react';
import { BUSINESS_INFO } from '../constants';

export const Hero: React.FC = () => {
  const ease = [0.16, 1, 0.3, 1];

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background Effects - Deep & Atmospheric */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-[-20%] left-1/2 -translate-x-1/2 w-[80vw] h-[60vh] bg-white/[0.03] blur-[150px] rounded-full" />
        <motion.div
          animate={{ opacity: [0.3, 0.5, 0.3], scale: [1, 1.1, 1] }}
          transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
          className="absolute bottom-[-10%] right-[-10%] w-[40vw] h-[40vh] bg-blue-900/[0.05] blur-[120px] rounded-full"
        />
        <motion.div
          animate={{ opacity: [0.2, 0.4, 0.2], x: [0, 30, 0] }}
          transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
          className="absolute top-[20%] left-[-5%] w-[30vw] h-[30vh] bg-indigo-900/[0.04] blur-[100px] rounded-full"
        />

        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:120px_120px] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_50%,black,transparent)]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center text-center">

        {/* Trust Indicator */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease }}
          className="mb-8 flex items-center gap-3 bg-white/5 border border-white/10 px-5 py-2 rounded-full backdrop-blur-sm"
        >
          <div className="flex gap-0.5">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
            ))}
          </div>
          <div className="w-px h-4 bg-white/10" />
          <span className="text-[10px] uppercase tracking-[0.2em] text-neutral-300 font-medium">Top Rated in Southern California</span>
        </motion.div>

        {/* Headline with Masked Reveal */}
        <div className="overflow-hidden mb-8">
          <motion.h1
            initial={{ y: "100%", opacity: 0 }}
            animate={{ y: "0%", opacity: 1 }}
            transition={{ duration: 1.2, ease, delay: 0.1 }}
            className="font-display text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight text-white leading-[1.05]"
          >
            Your Local <br />
            <span className="text-white/40">
              Roofing Experts.
            </span>
          </motion.h1>
        </div>

        {/* Subhead */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease, delay: 0.4 }}
          className="max-w-xl text-lg text-neutral-400 mb-12 leading-relaxed font-light"
        >
          Stop worrying about leaks and weather damage.
          Secure your property with Southern California's most trusted team.
          Residential & Commercial.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease, delay: 0.5 }}
          className="flex flex-col items-center gap-8 w-full"
        >
          <div className="flex flex-col sm:flex-row gap-4 w-full justify-center">
            <Button
              className="h-14 px-10 text-base min-w-[180px]"
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Get Free Estimate
            </Button>
            <Button
              variant="secondary"
              className="h-14 px-10 text-base"
              onClick={() => window.location.href = `tel:${BUSINESS_INFO.phone}`}
            >
              <Phone className="w-4 h-4 mr-2" />
              {BUSINESS_INFO.phone}
            </Button>
          </div>

          <div className="flex items-center gap-6 text-[10px] uppercase tracking-wider text-neutral-500 mt-2">
            <span className="flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
              Available Now
            </span>
            <span className="w-0.5 h-0.5 rounded-full bg-neutral-700" />
            <span>Fast Response</span>
            <span className="w-0.5 h-0.5 rounded-full bg-neutral-700" />
            <span>Free Consultation</span>
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0, height: 0 }}
        animate={{ opacity: 1, height: "48px" }}
        transition={{ delay: 1.5, duration: 1.5, ease }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 w-[1px] bg-gradient-to-b from-transparent via-white/20 to-transparent"
      />
    </section>
  );
};