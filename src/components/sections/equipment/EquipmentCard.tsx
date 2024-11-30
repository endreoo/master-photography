import React from 'react';
import { motion } from 'framer-motion';
import { EquipmentSection } from '../../../types';

interface EquipmentCardProps {
  category: EquipmentSection;
  icon: JSX.Element;
  index: number;
  inView: boolean;
}

export function EquipmentCard({ category, icon, index, inView }: EquipmentCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.2 }}
      className="bg-white rounded-xl shadow-lg p-8"
    >
      <div className="flex items-center justify-center text-blue-600 mb-6">
        {icon}
      </div>
      <h3 className="text-xl font-bold text-center mb-6">{category.title}</h3>
      <ul className="space-y-3">
        {category.items.map((item) => (
          <li key={item} className="flex items-center">
            <span className="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>
            {item}
          </li>
        ))}
      </ul>
    </motion.div>
  );
}