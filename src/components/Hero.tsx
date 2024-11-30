import React from 'react';
import { motion } from 'framer-motion';

export function Hero() {
  return (
    <div className="relative h-[70vh] bg-black">
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1618773928121-c32242e63f39"
          alt="Luxury Hotel Room"
          className="w-full h-full object-cover opacity-60"
        />
      </div>
      <div className="relative h-full flex items-center justify-center text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-white px-4"
        >
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            Master Hotel Photography
          </h1>
          <p className="text-xl md:text-2xl max-w-2xl mx-auto">
            Learn professional techniques to capture stunning hotel spaces that drive bookings
          </p>
        </motion.div>
      </div>
    </div>
  );
}