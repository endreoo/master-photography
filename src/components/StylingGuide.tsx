import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { STYLING_TIPS } from '../data/stylingTips';

export function StylingGuide() {
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
          Room Styling Guide
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {STYLING_TIPS.map((tip, index) => (
            <motion.div
              key={tip.title}
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
          ))}
        </div>
      </div>
    </section>
  );
}