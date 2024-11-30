import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import {
  ReactCompareSlider,
  ReactCompareSliderImage
} from 'react-compare-slider';

const EXAMPLES = [
  {
    title: "Natural vs. Staged Lighting",
    before: "https://images.unsplash.com/photo-1566665797739-1674de7a421a",
    after: "https://images.unsplash.com/photo-1578683010236-d716f9a3f461",
    description: "See how proper lighting transforms a room"
  },
  {
    title: "Room Styling Impact",
    before: "https://images.unsplash.com/photo-1566665797739-1674de7a421a",
    after: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b",
    description: "The power of professional staging"
  }
];

export function BeforeAfter() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  return (
    <section className="py-20" ref={ref}>
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold text-center mb-16"
        >
          Before & After Examples
        </motion.h2>

        <div className="grid grid-cols-1 gap-16">
          {EXAMPLES.map((example, index) => (
            <motion.div
              key={example.title}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="space-y-6"
            >
              <h3 className="text-2xl font-bold text-center">{example.title}</h3>
              <p className="text-gray-600 text-center">{example.description}</p>
              <div className="aspect-video rounded-xl overflow-hidden shadow-xl">
                <ReactCompareSlider
                  itemOne={<ReactCompareSliderImage src={example.before} alt="Before" />}
                  itemTwo={<ReactCompareSliderImage src={example.after} alt="After" />}
                  position={50}
                  className="h-full"
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}