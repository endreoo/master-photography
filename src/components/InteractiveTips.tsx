import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaLightbulb, FaCamera, FaEdit } from 'react-icons/fa';

const TIPS = [
  {
    icon: <FaLightbulb className="text-3xl" />,
    title: "Lighting Tips",
    content: [
      "Use natural light whenever possible",
      "Shoot during golden hours (sunrise/sunset)",
      "Balance artificial and natural light",
      "Use reflectors for dark corners",
      "Control harsh shadows with diffusers"
    ]
  },
  {
    icon: <FaCamera className="text-3xl" />,
    title: "Camera Settings",
    content: [
      "Shoot in RAW format",
      "Use aperture priority (f/8 - f/11)",
      "Keep ISO low (100-400)",
      "Enable HDR for window views",
      "Use manual white balance"
    ]
  },
  {
    icon: <FaEdit className="text-3xl" />,
    title: "Post-Processing",
    content: [
      "Correct vertical lines",
      "Balance exposure levels",
      "Remove distractions",
      "Enhance colors naturally",
      "Maintain consistent style"
    ]
  }
];

export function InteractiveTips() {
  const [activeTab, setActiveTab] = useState(0);
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
          Quick Reference Guide
        </motion.h2>

        <div className="max-w-4xl mx-auto">
          <div className="flex justify-center mb-8">
            {TIPS.map((tip, index) => (
              <motion.button
                key={tip.title}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                onClick={() => setActiveTab(index)}
                className={`flex flex-col items-center px-6 py-4 rounded-lg mx-2 transition-all ${
                  activeTab === index
                    ? 'bg-blue-600 text-white'
                    : 'bg-white text-gray-600 hover:bg-gray-100'
                }`}
              >
                {tip.icon}
                <span className="mt-2">{tip.title}</span>
              </motion.button>
            ))}
          </div>

          <motion.div
            key={activeTab}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3 }}
            className="bg-white rounded-xl shadow-lg p-8"
          >
            <h3 className="text-2xl font-bold mb-6">{TIPS[activeTab].title}</h3>
            <ul className="space-y-4">
              {TIPS[activeTab].content.map((item, index) => (
                <motion.li
                  key={item}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  className="flex items-center"
                >
                  <span className="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>
                  {item}
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
}