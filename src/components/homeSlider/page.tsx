import React from "react";
import { motion } from "framer-motion";

// Banner Component
const Banner = () => {
  // Container animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 1,
        ease: "easeOut",
        staggerChildren: 0.3,
      },
    },
  };

  // Child animation variants
  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.7,
        ease: "easeOut",
      },
    },
    hover: {
      scale: 1.05,
      transition: { duration: 0.3 },
    },
  };

  // Shoe animation variants
  const shoeVariants = {
    hidden: { opacity: 0, scale: 0.8, rotate: -30 },
    visible: {
      opacity: 1,
      scale: 1,
      rotate: 0,
      transition: {
        duration: 1.4,
        ease: "easeOut",
      },
    },
    hover: {
      scale: 1.2,
      rotate: 10,
      rotateX: 15,
      rotateY: -15,
      transition: { duration: 0.4, ease: "easeInOut" },
    },
  };

  // Spotlight effect with enhanced red glow

  // "Hot Sell" tag animation variants (Enhanced for eye-catching effect)
  const hotSellVariants = {
    hidden: { opacity: 0, scale: 0.8, rotate: -15 },
    visible: {
      opacity: 1,
      scale: 1,
      rotate: 0,
      transition: {
        duration: 0.7,
        ease: "easeOut",
        type: "spring",
        stiffness: 100,
      },
    },
    hover: {
      scale: 1.15,
      rotate: 10,
      boxShadow: "0px 0px 20px rgba(255, 215, 0, 0.8)", // Bright yellow glow on hover
      transition: { duration: 0.3, ease: "easeInOut" },
    },
  };

  return (
    <motion.section
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="relative w-full py-24 overflow-hidden bg-[radial-gradient(circle_at_center,_#ff1a1a_0%,_#b91c1c_40%,_#2a0707_100%)]"
    >
      {/* Animated Background Particles with Red Tint */}
      <motion.div
        className="absolute inset-0 opacity-20"
        animate={{ x: [-20, 20, -20], y: [10, -10, 10] }}
        transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
        style={{
          backgroundImage:
            "radial-gradient(circle, rgba(255, 80, 80, 0.6) 2px, transparent 2px)",
          backgroundSize: "80px 80px",
        }}
      />
      {/* Subtle Overlay for Depth */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />

      {/* Main Content */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left Content */}
          <div className="text-white space-y-10 z-10">
            <motion.h1
              variants={itemVariants}
              whileHover="hover"
              className="text-5xl md:text-6xl font-extrabold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-white via-red-200 to-red-500 drop-shadow-[0_4px_10px_rgba(255,50,50,0.6)]"
              animate={{ opacity: [1, 0.9, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              Ignite Your Red Passion
            </motion.h1>
            <motion.p
              variants={itemVariants}
              className="text-xl md:text-2xl text-red-50 font-medium drop-shadow-md"
            >
              Bold steps, timeless style.
            </motion.p>
            <motion.div variants={itemVariants}>
              <motion.button
                whileHover={{
                  scale: 1.15,
                  boxShadow: "0px 0px 25px rgba(255, 80, 80, 0.9)",
                }}
                whileTap={{ scale: 0.9 }}
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-red-600 to-red-800 text-white font-semibold rounded-full shadow-2xl hover:from-red-700 hover:to-red-900 transition-all duration-300"
                animate={{ y: [0, -5, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                Grab Yours Now
                <motion.span
                  className="ml-2"
                  animate={{ x: [0, 5, 0] }}
                  transition={{ duration: 1, repeat: Infinity }}
                >
                  →
                </motion.span>
              </motion.button>
            </motion.div>
          </div>

          {/* Right Content - Two Shoe Showcase */}
          <div className="relative flex justify-center items-center space-x-6 lg:space-x-8">
            <motion.div
              variants={itemVariants}
              className="relative w-full h-64 md:h-96"
            >
              <div className="absolute inset-0 bg-white/20 rounded-xl transform rotate-6" />
              <motion.img
                src="/b2.jpg"
                alt="Stylish shoes illustration"
                variants={shoeVariants}
                whileHover="hover"
                className="relative w-full h-full object-cover rounded-xl shadow-lg"
              />
              {/* Enhanced "Hot Sell" Tag */}
              <motion.div
                variants={hotSellVariants}
                initial="hidden"
                animate="visible"
                whileHover="hover"
                className="absolute top-4 right-4 bg-gradient-to-r from-yellow-400 to-orange-500 text-red-900 px-4 py-2 rounded-full text-lg font-bold shadow-lg drop-shadow-[0_4px_10px_rgba(255,215,0,0.7)] border-2 border-yellow-600"
              >
                Hot Sell
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Banner;
