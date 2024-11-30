import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaCamera, FaLightbulb, FaRulerCombined } from 'react-icons/fa';
import { EQUIPMENT_SECTIONS } from '../data/constants';

const ICONS = {
  "Essential Camera Gear": <FaCamera className="text-4xl" />,
  "Lighting Equipment": <FaLightbulb className="text-4xl" />,
  "Additional Tools": <FaRulerCombined className="text-4xl" />
};

export function EquipmentSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  return (
    <section className="py-20 bg-gray-50" ref={ref}>
      <div className="container mx-auto px-4">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold text-center mb-16"
        >
          Essential Equipment
        </motion.h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {EQUIPMENT_SECTIONS.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="bg-white rounded-xl shadow-lg p-8"
            >
              <div className="flex items-center justify-center text-blue-600 mb-6">
                {ICONS[category.title as keyof typeof ICONS]}
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
          ))}
        </div>
      </div>
    </section>
  );
}