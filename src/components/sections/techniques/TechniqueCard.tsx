import React from 'react';
import { motion } from 'framer-motion';
import { PhotoTechnique } from '../../../types';

interface TechniqueCardProps {
  technique: PhotoTechnique;
  index: number;
  inView: boolean;
}

export function TechniqueCard({ technique, index, inView }: TechniqueCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.2 }}
      className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center"
    >
      <div className={`${index % 2 === 0 ? 'md:order-1' : 'md:order-2'}`}>
        <img
          src={technique.image}
          alt={technique.title}
          className="rounded-xl shadow-lg w-full h-[400px] object-cover"
        />
      </div>
      <div className={`${index % 2 === 0 ? 'md:order-2' : 'md:order-1'} space-y-6`}>
        <h3 className="text-3xl font-bold">{technique.title}</h3>
        <ul className="space-y-4">
          {technique.tips.map((tip) => (
            <li key={tip} className="flex items-start">
              <span className="w-2 h-2 bg-blue-600 rounded-full mr-3 mt-2"></span>
              <span>{tip}</span>
            </li>
          ))}
        </ul>
      </div>
    </motion.div>
  );
}