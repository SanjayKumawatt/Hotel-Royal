import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Phone, ChevronDown } from 'lucide-react';
import { Link } from 'react-router-dom';

import img from "../assets/hero.jpg";

const HeroSection = () => {
  // Animation variants for text and buttons
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.3, delayChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
  };

  return (
    <section className="relative h-screen w-full flex items-center justify-center overflow-hidden">
      
      {/* --- Background Image with Overlay --- */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat transform scale-105"
        style={{
          backgroundImage: `url('${img}')`,
        }}
      >
         {/* Dark Overlay for better text readability */}
        <div className="absolute inset-0 bg-black/60"></div>
      </div>

      {/* --- Main Content --- */}
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-10 text-center text-white px-4 sm:px-6 lg:px-8"
      >
        <motion.p variants={itemVariants} className="text-lg sm:text-xl font-medium tracking-widest uppercase mb-4 text-white">
          Welcome to
        </motion.p>
        
        {/* --- UPDATED: Cursive Font & Yellow Color --- */}
        <motion.h1
        id='hotel' 
          variants={itemVariants} 
          className="text-6xl sm:text-7xl md:text-8xl text-yellow-500 mb-6 drop-shadow-lg"
          style={{ fontStyle:"italic", fontFamily:"serif" }}
        >
          Hotel Royal
        </motion.h1>

        <motion.p variants={itemVariants} className="text-xl sm:text-2xl font-light max-w-2xl mx-auto mb-10">
          Experience luxury and comfort in the heart of <span className="font-semibold text-yellow-400">Churu, Rajasthan</span>.
        </motion.p>

        {/* --- Action Buttons --- */}
        <motion.div variants={itemVariants} className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link 
            to="/rooms" 
            className="flex items-center gap-2 bg-yellow-600 hover:bg-yellow-700 text-white px-8 py-3 rounded-sm text-sm font-bold tracking-wider transition-all duration-300 transform hover:-translate-y-1"
          >
            EXPLORE ROOMS <ArrowRight className="w-4 h-4" />
          </Link>
          <Link 
            to="/contact" 
            className="flex items-center gap-2 bg-transparent border border-white hover:bg-white hover:text-gray-900 text-white px-8 py-3 rounded-sm text-sm font-bold tracking-wider transition-all duration-300 transform hover:-translate-y-1"
          >
            CONTACT US <Phone className="w-4 h-4" />
          </Link>
        </motion.div>
      </motion.div>

      {/* --- Animated Scroll Down Indicator --- */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-20 flex flex-col items-center text-white/70"
      >
        <span className="text-xs tracking-widest uppercase mb-2">Discover More</span>
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
        >
          <ChevronDown className="w-6 h-6" />
        </motion.div>
      </motion.div>

    </section>
  );
};

export default HeroSection;