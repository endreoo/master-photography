import React from 'react';
import { motion } from 'framer-motion';

interface AnimatedListProps {
  items: string[];
  delay?: number;
}

export function AnimatedList({ items, delay = 0.1 }: AnimatedListProps) {
  return (
    <ul className="space-y-4">
      {items.map((item, index) => (
        <motion.li
          key={item}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.3, delay: index * delay }}
          className="flex items-center"
        >
          <span className="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>
          {item}
        </motion.li>
      ))}
    </ul>
  );
}