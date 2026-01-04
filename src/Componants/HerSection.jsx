
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import { Link } from "react-router";

const slides = [
  {
    id: 1,
    title: "Discover Your Next Favorite Book",
    subtitle: "READ • EXPLORE • GROW",
    desc: "Browse thousands of books by category, rating, and popularity — all in one modern digital library.",
    image:
      "https://images.unsplash.com/photo-1512820790803-83ca734da794?q=80&w=1920",
    

  },
  {
    id: 2,
    title: "Build Your Personal Book Haven",
    subtitle: "ORGANIZE • MANAGE • ENJOY",
    desc: "Add, update, and manage your own books effortlessly with a secure and user-friendly dashboard.",
    image:
      "https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?q=80&w=1920",
  

  },
  {
    id: 3,
    title: "Smart, Secure & Fully Responsive",
    subtitle: "MODERN • FAST • RELIABLE",
    desc: "Powered by Firebase authentication with admin control, ratings, and seamless access on all devices.",
    image:
      "https://images.unsplash.com/photo-1507842217343-583bb7270b66?q=80&w=1920",
  
   
  },
];

const HerSection = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative w-full h-[70vh] overflow-hidden">
      <AnimatePresence>
        <motion.div
          key={slides[index].id}
          className="absolute inset-0"
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
        >
          {/* Background Image */}
          <img
            src={slides[index].image}
            alt="Books"
            className="w-full h-full object-cover"
          />

          {/* Overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/70 to-transparent" />

          {/* Content */}
          <div className="absolute inset-0 flex items-center">
            <div className="max-w-7xl mx-auto px-6">
              <motion.h4
                initial={{ y: -20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="text-orange-400 uppercase tracking-widest mb-4"
              >
                {slides[index].subtitle}
              </motion.h4>

              <motion.h1
                initial={{ y: 40, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.4 }}
                className="text-white text-4xl md:text-6xl font-extrabold max-w-2xl leading-tight"
              >
                {slides[index].title}
              </motion.h1>

              <motion.p
                initial={{ y: 40, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.6 }}
                className="text-gray-300 mt-6 max-w-xl"
              >
                {slides[index].desc}
              </motion.p>

              {/* Buttons */}
              <motion.div
                initial={{ y: 40, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.8 }}
                className="mt-8 flex gap-4 flex-wrap"
              >
                <Link to={'/all-books'} className="px-8 py-3 rounded-full bg-gradient-to-br from-red-700 via-amber-600 to-stone-900 text-white font-semibold transition">
                  Explore Books
                </Link>
                <Link to={'/about'} className="px-8 py-3 rounded-full border border-white/40 text-white hover:bg-white hover:text-black transition">
             Learn More
                </Link>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Dots */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-3">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setIndex(i)}
            className={`w-3 h-3 rounded-full transition ${
              index === i ? "bg-orange-500 scale-125" : "bg-white/50"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default HerSection;