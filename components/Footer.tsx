import React from 'react';
import { Link } from 'react-router-dom';
import { BUSINESS_INFO, NAV_ITEMS } from '../constants';
import { Phone, Mail, MapPin, ArrowUpRight } from 'lucide-react';

export const Footer: React.FC = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-surface border-t border-white/5">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
                    {/* Brand */}
                    <div className="lg:col-span-1">
                        <Link to="/" className="inline-block mb-4">
                            <span className="font-display text-lg font-bold text-white tracking-tight">
                                {BUSINESS_INFO.name.split(' ')[0]}
                            </span>
                            <span className="font-display text-lg font-bold text-neutral-500 tracking-tight ml-1">
                                {BUSINESS_INFO.name.split(' ').slice(1).join(' ')}
                            </span>
                        </Link>
                        <p className="text-neutral-500 text-sm font-light leading-relaxed mb-4">
                            {BUSINESS_INFO.tagline}. Licensed, insured, and trusted across {BUSINESS_INFO.area}.
                        </p>
                        <p className="text-xs text-neutral-600">{BUSINESS_INFO.license}</p>
                    </div>

                    {/* Navigation */}
                    <div>
                        <h4 className="text-xs font-bold text-neutral-500 uppercase tracking-[0.2em] mb-4">Navigation</h4>
                        <ul className="space-y-3">
                            {NAV_ITEMS.map(item => {
                                const isPage = item.label === "Who We Are" || item.label === "Projects";
                                const href = item.label === "Who We Are" ? "/about" : (item.label === "Projects" ? "/portfolio" : item.href);

                                return (
                                    <li key={item.label}>
                                        {isPage ? (
                                            <Link
                                                to={href}
                                                className="text-sm text-neutral-400 hover:text-white transition-colors"
                                            >
                                                {item.label === "Who We Are" ? "About Us" : item.label}
                                            </Link>
                                        ) : (
                                            <a
                                                href={href}
                                                className="text-sm text-neutral-400 hover:text-white transition-colors"
                                            >
                                                {item.label}
                                            </a>
                                        )}
                                    </li>
                                );
                            })}
                        </ul>
                    </div>

                    {/* Resources */}
                    <div>
                        <h4 className="text-xs font-bold text-neutral-500 uppercase tracking-[0.2em] mb-4">Quick Links</h4>
                        <ul className="space-y-3">
                            <li>
                                <Link to="/portfolio" className="text-sm text-neutral-400 hover:text-white transition-colors">
                                    Project Portfolio
                                </Link>
                            </li>
                            <li>
                                <a href="/#services" className="text-sm text-neutral-400 hover:text-white transition-colors">
                                    Our Services
                                </a>
                            </li>
                            <li>
                                <a href="/#gallery" className="text-sm text-neutral-400 hover:text-white transition-colors">
                                    Portfolio
                                </a>
                            </li>
                            <li>
                                <a href="/#contact" className="text-sm text-neutral-400 hover:text-white transition-colors">
                                    Free Estimate
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h4 className="text-xs font-bold text-neutral-500 uppercase tracking-[0.2em] mb-4">Contact</h4>
                        <ul className="space-y-3">
                            <li>
                                <a
                                    href={`tel:${BUSINESS_INFO.phone}`}
                                    className="text-sm text-neutral-400 hover:text-white transition-colors flex items-center gap-2"
                                >
                                    <Phone className="w-3.5 h-3.5" />
                                    {BUSINESS_INFO.phone}
                                </a>
                            </li>
                            <li>
                                <a
                                    href={`mailto:${BUSINESS_INFO.email}`}
                                    className="text-sm text-neutral-400 hover:text-white transition-colors flex items-center gap-2"
                                >
                                    <Mail className="w-3.5 h-3.5" />
                                    {BUSINESS_INFO.email}
                                </a>
                            </li>
                            <li>
                                <span className="text-sm text-neutral-400 flex items-center gap-2">
                                    <MapPin className="w-3.5 h-3.5" />
                                    {BUSINESS_INFO.area}
                                </span>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Bottom bar */}
                <div className="mt-16 pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-4">
                    <p className="text-xs text-neutral-600">
                        &copy; {currentYear} {BUSINESS_INFO.name}. All rights reserved.
                    </p>
                    <div className="flex items-center gap-6">
                        <a href="/sitemap.xml" className="text-xs text-neutral-600 hover:text-neutral-400 transition-colors">Sitemap</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};
