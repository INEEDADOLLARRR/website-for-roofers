import React from 'react';
import { cn } from '../../utils/cn';
import { motion } from 'framer-motion';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'ghost';
  children: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({
  className,
  variant = 'primary',
  children,
  ...props
}) => {
  const baseStyles = "relative inline-flex items-center justify-center px-8 py-3 text-sm font-medium transition-all duration-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-white/20 focus:ring-offset-2 focus:ring-offset-background disabled:opacity-50 disabled:pointer-events-none tracking-wide";

  const variants = {
    primary: "bg-white text-black hover:bg-neutral-100 border border-white shadow-[0_0_20px_rgba(255,255,255,0.1)] hover:shadow-[0_0_30px_rgba(255,255,255,0.15)]",
    secondary: "bg-transparent border border-white/20 text-white hover:bg-white/5 hover:border-white/40",
    ghost: "bg-transparent text-neutral-400 hover:text-white"
  };

  return (
    <motion.button
      whileHover={{ y: -2, scale: 1.01 }}
      whileTap={{ scale: 0.98 }}
      transition={{ type: "spring", stiffness: 400, damping: 25 }}
      className={cn(baseStyles, variants[variant], className)}
      {...props}
    >
      <span className="relative z-10">{children}</span>
    </motion.button>
  );
};