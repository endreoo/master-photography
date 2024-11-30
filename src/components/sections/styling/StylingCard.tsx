import React from 'react';
import { motion } from 'framer-motion';
import { StylingTip } from '../../../types';

interface StylingCardProps {
  tip: StylingTip;
  index: number;
  inView: boolean;
}

export function StylingCard({ tip, index, inView }: StylingCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.2 }}
      className="bg-white rounded-xl shadow-lg p-8"
    >
      <h3 className="text-2xl font-bold mb-2">{tip.title}</h3>
      <p className="text-gray-600 mb-6">{tip.description}</p>
      <ol className="space-y-3">
        {tip.steps.map((step, stepIndex) => (
          <li key={step} className="flex items-start">
            <span className="font-bold mr-3">{stepIndex + 1}.</span>
            <span>{step}</span>
          </li>
        ))}
      </ol>
    </motion.div>
  );
}