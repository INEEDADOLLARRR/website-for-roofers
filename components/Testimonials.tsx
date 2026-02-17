import React from 'react';
import { motion } from 'framer-motion';
import { TESTIMONIALS } from '../constants';
import { Star, Quote } from 'lucide-react';

export const Testimonials: React.FC = () => {
  const testimonial = TESTIMONIALS[0];
  const ease = [0.22, 1, 0.36, 1];

  return (
    <section id="testimonials" className="py-32 bg-surface relative overflow-hidden">
      {/* Subtle Background */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/5 to-transparent" />
      <div className="absolute -left-40 top-40 w-[600px] h-[600px] bg-blue-500/[0.02] blur-[150px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Header Section */}
        <div className="mb-24 text-center max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease }}
          >
            <h2 className="text-xs font-bold text-neutral-500 uppercase tracking-[0.2em] mb-4">Client Satisfaction</h2>
            <h3 className="font-display text-4xl md:text-5xl font-semibold text-white mb-8">Testimonials</h3>
            <p className="text-neutral-400 text-lg leading-relaxed font-light">
              At Gorrocino Roofing, we consistently go the extra mile.
              Delivering innovative, top-tier services defined by quality and integrity.
              Explore the experiences of our valued clients.
            </p>
          </motion.div>
        </div>

        {/* Content Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* Image Side */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease }}
            className="relative"
          >
            <div className="relative rounded-xl overflow-hidden aspect-[4/3] border border-white/5 bg-neutral-900">
              <img
                src="/socal-skyline.png"
                alt="Southern California rooftops with mountain backdrop"
                loading="lazy"
                className="object-cover w-full h-full opacity-70 hover:scale-105 transition-transform duration-[1.5s] ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-transparent to-transparent" />

              {/* Floating Badge */}
              <div className="absolute bottom-8 left-8 right-8 backdrop-blur-md bg-white/[0.03] border border-white/10 p-6 rounded-lg">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-white font-medium mb-1">5.0 Star Rating</p>
                    <p className="text-xs text-neutral-500 uppercase tracking-wider">Based on recent reviews</p>
                  </div>
                  <div className="flex gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Testimonial Card Side */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.2, ease }}
          >
            <div className="bg-background border border-white/5 p-10 md:p-12 relative group hover:border-white/10 transition-colors duration-500 rounded-xl">
              <Quote className="absolute top-10 right-10 w-12 h-12 text-white/[0.03] group-hover:text-white/[0.08] transition-colors duration-500" />

              {/* Positive Tags */}
              <div className="flex flex-wrap gap-2 mb-8">
                {testimonial.tags?.map((tag, i) => (
                  <span key={i} className="inline-flex items-center px-3 py-1 rounded-full text-[10px] uppercase tracking-wider font-medium bg-white/[0.03] text-neutral-400 border border-white/5 hover:bg-white/[0.06] hover:text-neutral-300 transition-colors">
                    {tag}
                  </span>
                ))}
              </div>

              {/* Content */}
              <div className="mb-10">
                <div className="flex gap-1 mb-6">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <p className="text-neutral-300 text-xl md:text-2xl leading-relaxed font-light font-display">
                  "{testimonial.content}"
                </p>
              </div>

              {/* Services & Author */}
              <div className="pt-8 border-t border-white/5 flex flex-col sm:flex-row sm:items-center justify-between gap-6">
                <div>
                  <p className="text-[10px] text-neutral-500 mb-2 uppercase tracking-widest">Services Performed</p>
                  <p className="text-sm text-white font-medium">{testimonial.servicePerformed}</p>
                </div>
                <div className="text-left sm:text-right">
                  <p className="font-display font-bold text-white text-lg">{testimonial.name}</p>
                  <p className="text-sm text-neutral-500">{testimonial.role}</p>
                </div>
              </div>

            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};