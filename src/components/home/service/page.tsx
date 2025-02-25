"use client";

import { motion } from "framer-motion";
import { FaHotel, FaUtensils, FaSpa, FaCompass } from "react-icons/fa";

const services = [
  {
    icon: FaHotel,
    title: "Luxury Rooms",
    description:
      "Indulge in our meticulously designed rooms featuring premium amenities and breathtaking views.",
  },
  {
    icon: FaUtensils,
    title: "Fine Dining",
    description:
      "Savor exquisite cuisine prepared by world-class chefs in our elegant restaurants.",
  },
  {
    icon: FaSpa,
    title: "Spa & Wellness",
    description:
      "Rejuvenate your body and mind with our premium spa treatments and wellness programs.",
  },
  {
    icon: FaCompass,
    title: "Guided Tours",
    description:
      "Explore local attractions and hidden gems with our experienced tour guides.",
  },
];

const ServicesOverview = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: {
      opacity: 0,
      y: 20,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  return (
    <section className="py-24 bg-gradient-to-b from-gray-900 to-black">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-light text-white mb-6">
            What We{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600">
              Offer
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Experience luxury, comfort, and unforgettable memories
          </p>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              variants={itemVariants}
              whileHover={{ y: -10 }}
              className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 
                       hover:bg-white/10 transition-all duration-300
                       border border-white/10 group"
            >
              {/* Icon */}
              <motion.div
                whileHover={{ scale: 1.1 }}
                className="w-16 h-16 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 
                         flex items-center justify-center mb-6 mx-auto
                         group-hover:shadow-lg group-hover:shadow-blue-500/20
                         transition-all duration-300"
              >
                <service.icon className="w-8 h-8 text-white" />
              </motion.div>

              {/* Title */}
              <h3 className="text-2xl font-semibold text-white text-center mb-4">
                {service.title}
              </h3>

              {/* Description */}
              <p className="text-gray-300 text-center leading-relaxed">
                {service.description}
              </p>

              {/* Learn More Link */}
              <motion.div whileHover={{ x: 5 }} className="mt-6 text-center">
                <a
                  href="#"
                  className="text-blue-400 hover:text-blue-300 inline-flex items-center
                           transition-colors duration-300"
                >
                  Learn more
                  <svg
                    className="w-4 h-4 ml-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </a>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesOverview;
