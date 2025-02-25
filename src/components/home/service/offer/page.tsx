"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";

const offers = [
  {
    title: "Early Bird Special",
    discount: "25% OFF",
    description: "Book 30 days in advance and save on luxury stays",
    validTill: "Valid till Dec 31, 2024",
    image: "/early-bird.jpg",
    tag: "Most Popular",
  },
  {
    title: "Weekend Getaway",
    discount: "15% OFF",
    description: "Perfect weekend escape with spa treatment included",
    validTill: "Limited time offer",
    image: "/weekend.jpg",
    tag: "Hot Deal",
  },
  {
    title: "Extended Stay",
    discount: "30% OFF",
    description: "Stay longer than 7 nights and enjoy special rates",
    validTill: "Valid till Nov 30, 2024",
    image: "/extended-stay.jpg",
    tag: "Best Value",
  },
];

const SpecialOffers = () => {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [1, 1, 0]);

  return (
    <section ref={sectionRef} className="relative py-24 overflow-hidden">
      {/* Parallax Background */}
      <motion.div style={{ y, opacity }} className="absolute inset-0 z-0">
        <Image
          src="/camp.jpg"
          alt="Background"
          fill
          className="object-cover"
          quality={100}
        />
        {/* Multiple Gradient Overlays for depth */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/70 to-black/90" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-transparent to-black/50" />
      </motion.div>

      {/* Content Container */}
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
            Exclusive{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600">
              Deals
            </span>{" "}
            Just for You
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Discover our limited-time offers and make your stay even more
            special
          </p>
        </motion.div>

        {/* Offers Grid with Parallax Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {offers.map((offer, index) => (
            <motion.div
              key={offer.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              style={{
                y: useTransform(scrollYProgress, [0, 1], [0, (index + 1) * 20]),
              }}
              className="group relative bg-white/5 rounded-2xl overflow-hidden backdrop-blur-sm
                       border border-white/10 hover:border-white/20 transition-all duration-300"
            >
              {/* Offer Image */}
              <div className="relative h-64 overflow-hidden">
                <Image
                  src={offer.image}
                  alt={offer.title}
                  fill
                  className="object-cover transform group-hover:scale-110 transition-transform duration-700"
                />
                {/* Tag */}
                <div
                  className="absolute top-4 right-4 bg-white/90 text-black px-4 py-1 rounded-full
                             text-sm font-semibold backdrop-blur-sm"
                >
                  {offer.tag}
                </div>
              </div>

              {/* Offer Content */}
              <div className="p-8">
                <h3 className="text-3xl font-bold text-white mb-2">
                  {offer.title}
                </h3>
                <div
                  className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r 
                             from-blue-400 to-purple-600 mb-4"
                >
                  {offer.discount}
                </div>
                <p className="text-gray-300 mb-6">{offer.description}</p>
                <div className="text-sm text-gray-400 mb-6">
                  {offer.validTill}
                </div>

                {/* CTA Button */}
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-full bg-gradient-to-r from-blue-500 to-purple-600 text-white 
                           py-4 rounded-lg font-semibold hover:shadow-lg hover:shadow-blue-500/20
                           transition-all duration-300"
                >
                  Book Now
                </motion.button>

                {/* Terms Link */}
                <div className="text-center mt-4">
                  <a
                    href="#"
                    className="text-sm text-gray-400 hover:text-white transition-colors duration-300"
                  >
                    View Terms & Conditions
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA with Parallax */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5 }}
          style={{
            y: useTransform(scrollYProgress, [0, 1], [0, 40]),
          }}
          className="text-center mt-16"
        >
          <a
            href="#"
            className="inline-flex items-center text-lg text-blue-400 hover:text-blue-300 
                     transition-colors duration-300"
          >
            View All Offers
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
                d="M9 5l7 7-7 7"
              />
            </svg>
          </a>
        </motion.div>
      </div>

      {/* Decorative Elements with Parallax */}
      <motion.div
        style={{
          y: useTransform(scrollYProgress, [0, 1], [0, -100]),
        }}
        className="absolute inset-0 pointer-events-none"
      >
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl" />
      </motion.div>
    </section>
  );
};

export default SpecialOffers;
