import React, { useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';
import { BUSINESS_INFO, NAV_ITEMS } from '../constants';
import { Button } from './ui/Button';
import { Menu, X } from 'lucide-react';

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { scrollY } = useScroll();
  const location = useLocation();
  const isHomepage = location.pathname === '/';

  const navBackground = useTransform(
    scrollY,
    [0, 50],
    ["rgba(10, 10, 10, 0)", "rgba(10, 10, 10, 0.6)"]
  );

  const navBackdropBlur = useTransform(
    scrollY,
    [0, 50],
    ["blur(0px)", "blur(12px)"]
  );

  const navBorder = useTransform(
    scrollY,
    [0, 50],
    ["rgba(255, 255, 255, 0)", "rgba(255, 255, 255, 0.08)"]
  );

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // If on homepage, use anchor scroll. If on another page, navigate to /#section
  const getSectionHref = (href: string) => {
    if (isHomepage) return href;
    return `/${href}`;
  };

  return (
    <motion.nav
      style={{
        backgroundColor: navBackground,
        backdropFilter: navBackdropBlur,
        borderBottom: `1px solid`,
        borderColor: navBorder,
      }}
      className="fixed top-0 left-0 right-0 z-50 h-20 transition-all duration-300"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full">
        <div className="flex justify-between items-center h-full">
          {/* Logo */}
          <Link to="/" className="flex flex-col group">
            <span className="text-xl font-display font-bold tracking-tight text-white uppercase group-hover:text-neutral-200 transition-colors">
              Gorrocino
            </span>
            <span className="text-[10px] tracking-[0.2em] text-neutral-400 uppercase">
              Roofing
            </span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-8">
            {NAV_ITEMS.map((item) => {
              if (item.label === "Who We Are") {
                return (
                  <Link
                    key={item.label}
                    to="/about"
                    className="text-sm font-medium text-neutral-400 hover:text-white transition-colors duration-200"
                  >
                    About
                  </Link>
                );
              }
              if (item.label === "Projects") {
                return (
                  <Link
                    key={item.label}
                    to="/portfolio"
                    className="text-sm font-medium text-neutral-400 hover:text-white transition-colors duration-200"
                  >
                    Projects
                  </Link>
                );
              }
              return (
                <a
                  key={item.label}
                  href={getSectionHref(item.href)}
                  className="text-sm font-medium text-neutral-400 hover:text-white transition-colors duration-200"
                >
                  {item.label}
                </a>
              );
            })}
            <Button
              variant="primary"
              className="px-6 py-2 text-xs font-semibold"
              onClick={() => {
                if (isHomepage) {
                  document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                } else {
                  window.location.href = '/#contact';
                }
              }}
            >
              Contact
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-white p-2"
            >
              {isMobileMenuOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <motion.div
        initial={false}
        animate={isMobileMenuOpen ? { height: 'auto', opacity: 1 } : { height: 0, opacity: 0 }}
        className="md:hidden overflow-hidden bg-background border-b border-border"
      >
        <div className="px-4 py-6 space-y-4 flex flex-col">
          {NAV_ITEMS.map((item) => {
            if (item.label === "Who We Are") {
              return (
                <Link
                  key={item.label}
                  to="/about"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-lg font-medium text-neutral-300 hover:text-white"
                >
                  About
                </Link>
              );
            }
            return (
              <a
                key={item.label}
                href={getSectionHref(item.href)}
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-lg font-medium text-neutral-300 hover:text-white"
              >
                {item.label}
              </a>
            );
          })}
          <Link
            to="/blog"
            onClick={() => setIsMobileMenuOpen(false)}
            className="text-lg font-medium text-neutral-300 hover:text-white"
          >
            Blog
          </Link>
          <div className="pt-4">
            <Button className="w-full" onClick={() => {
              setIsMobileMenuOpen(false);
              if (isHomepage) {
                document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
              } else {
                window.location.href = '/#contact';
              }
            }}>
              Contact
            </Button>
          </div>
        </div>
      </motion.div>
    </motion.nav>
  );
};