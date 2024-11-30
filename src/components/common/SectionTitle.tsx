import React from 'react';
import { motion } from 'framer-motion';

interface SectionTitleProps {
  title: string;
  inView: boolean;
}

export function SectionTitle({ title, inView }: SectionTitleProps) {
  return (
    <motion.h2
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6 }}
      className="text-4xl font-bold text-center mb-16"
    >
      {title}
    </motion.h2>
  );
}