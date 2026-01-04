
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaChevronDown } from "react-icons/fa6";

import { FcFaq } from "react-icons/fc";

const faqs = [
  {
    question: "What is The Book Haven?",
    answer:
      "The Book Haven is a digital book platform where users can add books, organize their library, and read books online in a distraction-free environment.",
  },
  {
    question: "Can I add my own books?",
    answer:
      "Yes! Users can upload and manage their own books, making The Book Haven a personalized digital library.",
  },
  {
    question: "Is reading free on The Book Haven?",
    answer:
      "Yes, reading books on The Book Haven is completely free for registered users.",
  },
  {
    question: "Do I need an account to read books?",
    answer:
      "You can browse books without an account, but creating an account is required to add books and save reading progress.",
  },
  {
    question: "Can I continue reading from where I left off?",
    answer:
      "Absolutely! Your reading progress is saved automatically so you can continue anytime.",
  },
  {
    question: "Is The Book Haven mobile-friendly?",
    answer:
      "Yes, the platform is fully responsive and works smoothly on all devices.",
  },
];

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  return (
    <section className="py-15 ">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">

        {/* LEFT CONTENT */}
        <div>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-5xl font-bold  mb-4"
          >
            Frequently Asked <span className="text-primary">Questions</span>
          </motion.h2>

          <p className="text-gray-500 mb-10">
            Everything you need to know about using The Book Haven
          </p>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className=" border-gray-200 rounded-xl shadow-sm overflow-hidden"
              >
                <button
                  onClick={() =>
                    setActiveIndex(activeIndex === index ? null : index)
                  }
                  className="w-full flex items-center justify-between p-5 text-left  transition"
                >
                  <span className="font-medium ">
                    {faq.question}
                  </span>
                  <FaChevronDown
                    className={`transition-transform duration-300 text-gray-500 ${
                      activeIndex === index ? "rotate-180 text-sky-500" : ""
                    }`}
                  />
                </button>

                <AnimatePresence>
                  {activeIndex === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.35 }}
                      className="px-5 pb-5  leading-relaxed"
                    >
                      {faq.answer}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT ILLUSTRATION */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="hidden md:flex justify-center"
        >
          
          <FcFaq size={350}></FcFaq>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQ;
