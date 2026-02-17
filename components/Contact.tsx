import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { BUSINESS_INFO } from '../constants';
import { Button } from './ui/Button';
import { Phone, Mail, Instagram, Facebook, Loader2, CheckCircle2, ArrowRight } from 'lucide-react';
import { TrustBadges } from './TrustBadges';

export const Contact: React.FC = () => {
  const [formState, setFormState] = useState({
    name: '',
    address: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch('https://hook.eu1.make.com/lo21eizms9w3xf8695ijl2bld33vu3qf', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formState),
      });

      if (response.ok) {
        setIsSuccess(true);
        setFormState({
          name: '',
          address: '',
          email: '',
          phone: '',
          subject: '',
          message: ''
        });
      } else {
        throw new Error('Network response was not ok');
      }
    } catch (error) {
      console.error("Error submitting form", error);
      alert("There was an error sending your message. Please try again later.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value
    });
  };

  const inputClasses = "w-full bg-transparent border-b border-white/10 px-0 py-4 text-white focus:outline-none focus:border-white/60 transition-all duration-300 placeholder:text-neutral-600 font-light text-lg";

  return (
    <footer id="contact" className="bg-background pt-32 pb-12 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <TrustBadges />
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 mb-24">

          {/* Contact Info */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="font-display text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight">
                Let's discuss <br />
                <span className="text-neutral-500">your project.</span>
              </h2>
              <p className="text-neutral-400 text-lg mb-12 max-w-md font-light">
                Don't let a small leak turn into a structural disaster. Get a professional assessment today.
              </p>

              {/* Minimal Steps */}
              <div className="mb-16 space-y-8">
                <div className="flex gap-6 items-baseline">
                  <span className="text-xs font-bold text-neutral-600">01</span>
                  <div>
                    <h4 className="text-white font-medium mb-1">Contact</h4>
                    <p className="text-sm text-neutral-500 font-light">Fill out the form. Zero obligation.</p>
                  </div>
                </div>
                <div className="flex gap-6 items-baseline">
                  <span className="text-xs font-bold text-neutral-600">02</span>
                  <div>
                    <h4 className="text-white font-medium mb-1">Analysis</h4>
                    <p className="text-sm text-neutral-500 font-light">We analyze your property and needs.</p>
                  </div>
                </div>
                <div className="flex gap-6 items-baseline">
                  <span className="text-xs font-bold text-neutral-600">03</span>
                  <div>
                    <h4 className="text-white font-medium mb-1">Quote</h4>
                    <p className="text-sm text-neutral-500 font-light">Receive a detailed plan and price.</p>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <a href={`tel:${BUSINESS_INFO.phone}`} className="block text-xl text-white hover:text-neutral-300 transition-colors font-display">
                  {BUSINESS_INFO.phone}
                </a>
                <a href={`mailto:${BUSINESS_INFO.email}`} className="block text-xl text-white hover:text-neutral-300 transition-colors font-display">
                  {BUSINESS_INFO.email}
                </a>
              </div>
            </motion.div>
          </div>

          {/* Minimalist Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:pt-4"
          >
            <AnimatePresence mode='wait'>
              {isSuccess ? (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="h-full flex flex-col items-center justify-center text-center py-16 border border-white/5 rounded-2xl bg-white/[0.02]"
                >
                  <div className="w-16 h-16 bg-green-500/10 rounded-full flex items-center justify-center mb-6">
                    <CheckCircle2 className="w-6 h-6 text-green-500" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2">Request Received</h3>
                  <p className="text-neutral-500 mb-8 max-w-xs font-light">
                    Thank you. We have received your details and will be in touch shortly.
                  </p>
                  <Button onClick={() => setIsSuccess(false)} variant="secondary">
                    Send Another Message
                  </Button>
                </motion.div>
              ) : (
                <motion.form
                  key="form"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  onSubmit={handleSubmit}
                  className="space-y-8"
                >
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="space-y-1">
                      <input
                        type="text"
                        name="name"
                        required
                        value={formState.name}
                        onChange={handleChange}
                        className={inputClasses}
                        placeholder="Name"
                      />
                    </div>
                    <div className="space-y-1">
                      <input
                        type="tel"
                        name="phone"
                        required
                        value={formState.phone}
                        onChange={handleChange}
                        className={inputClasses}
                        placeholder="Phone"
                      />
                    </div>
                  </div>

                  <div className="space-y-1">
                    <input
                      type="email"
                      name="email"
                      required
                      value={formState.email}
                      onChange={handleChange}
                      className={inputClasses}
                      placeholder="Email Address"
                    />
                  </div>

                  <div className="space-y-1">
                    <input
                      type="text"
                      name="address"
                      required
                      value={formState.address}
                      onChange={handleChange}
                      className={inputClasses}
                      placeholder="Property Address"
                    />
                  </div>

                  <div className="space-y-1">
                    <input
                      type="text"
                      name="subject"
                      required
                      value={formState.subject}
                      onChange={handleChange}
                      className={inputClasses}
                      placeholder="Subject"
                    />
                  </div>

                  <div className="space-y-1">
                    <textarea
                      name="message"
                      rows={3}
                      required
                      value={formState.message}
                      onChange={handleChange}
                      className={`${inputClasses} resize-none`}
                      placeholder="How can we help?"
                    />
                  </div>

                  <div className="pt-4">
                    <Button type="submit" className="w-full h-14 text-base" disabled={isSubmitting}>
                      {isSubmitting ? (
                        <>
                          <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                          Processing...
                        </>
                      ) : (
                        <span className="flex items-center gap-2">
                          Contact <ArrowRight className="w-4 h-4" />
                        </span>
                      )}
                    </Button>
                  </div>
                </motion.form>
              )}
            </AnimatePresence>
          </motion.div>
        </div>

        {/* Minimal Footer */}
        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-neutral-600 text-xs uppercase tracking-widest">
            © {new Date().getFullYear()} {BUSINESS_INFO.name}
          </div>

          <div className="flex items-center gap-8">
            <span className="text-neutral-600 text-xs uppercase tracking-widest">{BUSINESS_INFO.license}</span>
            <div className="flex items-center gap-6">
              <a
                href="https://www.facebook.com/GorrocinoRoofing/photos/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-neutral-500 hover:text-white transition-colors"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a
                href="https://www.instagram.com/gorrocinoroofing/?hl=en"
                target="_blank"
                rel="noopener noreferrer"
                className="text-neutral-500 hover:text-white transition-colors"
              >
                <Instagram className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};