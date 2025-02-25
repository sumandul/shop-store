"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";

const destinations = [
  {
    name: "Santorini Paradise",
    location: "Greece",
    description:
      "Experience the magic of white-washed buildings and stunning sunsets.",
    image: "/santorini.jpg",
    rating: 4.9,
    price: "From $299/night",
  },
  {
    name: "Maldives Retreat",
    location: "Maldives",
    description: "Luxury overwater villas in crystal clear turquoise waters.",
    image: "/maldives.jpg",
    rating: 4.8,
    price: "From $499/night",
  },
  {
    name: "Swiss Alps Chalet",
    location: "Switzerland",
    description: "Cozy mountain retreats with breathtaking alpine views.",
    image: "/swiss-alps.jpg",
    rating: 4.9,
    price: "From $399/night",
  },
  {
    name: "Bali Serenity",
    location: "Indonesia",
    description: "Tropical paradise with rich culture and pristine beaches.",
    image: "/bali.jpg",
    rating: 4.7,
    price: "From $199/night",
  },
  {
    name: "Dubai Luxury",
    location: "UAE",
    description: "Ultra-modern luxury in the heart of the desert.",
    image: "/dubai.jpg",
    rating: 4.8,
    price: "From $599/night",
  },
  {
    name: "Amalfi Coast Villa",
    location: "Italy",
    description: "Cliffside elegance with Mediterranean charm.",
    image: "/amalfi.jpg",
    rating: 4.9,
    price: "From $449/night",
  },
];

const FeaturedDestinations = () => {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  return (
    <section
      ref={sectionRef}
      className="relative py-24 bg-gradient-to-b from-black to-gray-900 overflow-hidden"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-25">
        <div
          className="absolute inset-0 bg-grid-white/10"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-light text-white mb-6">
            Explore Our{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600">
              Top Destinations
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Discover popular locations that guests love and create unforgettable
            memories
          </p>
        </motion.div>

        {/* Destinations Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {destinations.map((destination, index) => (
            <motion.div
              key={destination.name}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative"
            >
              {/* Card */}
              <div
                className="relative bg-white/5 rounded-2xl overflow-hidden backdrop-blur-sm
                            border border-white/10 hover:border-white/20 transition-all duration-300"
              >
                {/* Image */}
                <div className="relative h-80 overflow-hidden">
                  <Image
                    src={destination.image}
                    alt={destination.name}
                    fill
                    className="object-cover transform group-hover:scale-110 transition-transform duration-700"
                  />
                  {/* Location Badge */}
                  <div
                    className="absolute top-4 left-4 bg-white/90 text-black px-4 py-1 rounded-full
                                text-sm font-semibold backdrop-blur-sm"
                  >
                    {destination.location}
                  </div>
                  {/* Rating */}
                  <div
                    className="absolute top-4 right-4 bg-black/70 text-white px-3 py-1 rounded-full
                                text-sm font-semibold backdrop-blur-sm flex items-center"
                  >
                    <svg
                      className="w-4 h-4 text-yellow-400 mr-1"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                    {destination.rating}
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-white mb-2">
                    {destination.name}
                  </h3>
                  <p className="text-gray-300 mb-4">
                    {destination.description}
                  </p>
                  <div className="text-lg font-semibold text-blue-400 mb-6">
                    {destination.price}
                  </div>

                  {/* CTA Button */}
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-full bg-gradient-to-r from-blue-500 to-purple-600 text-white 
                             py-3 rounded-lg font-semibold hover:shadow-lg hover:shadow-blue-500/20
                             transition-all duration-300 flex items-center justify-center"
                  >
                    Discover More
                    <svg
                      className="w-5 h-5 ml-2"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17 8l4 4m0 0l-4 4m4-4H3"
                      />
                    </svg>
                  </motion.button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View All Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="text-center mt-16"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-white/10 text-white px-8 py-4 rounded-full font-semibold
                     hover:bg-white/20 transition-all duration-300 backdrop-blur-sm"
          >
            View All Destinations
          </motion.button>
        </motion.div>
      </div>

      {/* Decorative Elements */}
      <motion.div
        style={{
          y: useTransform(scrollYProgress, [0, 1], [0, -100]),
        }}
        className="absolute inset-0 pointer-events-none overflow-hidden"
      >
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl" />
      </motion.div>
    </section>
  );
};

export default FeaturedDestinations;
