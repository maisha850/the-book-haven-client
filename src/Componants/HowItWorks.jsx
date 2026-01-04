import { motion } from "framer-motion";
import { FaUserPlus, FaBookOpen, FaReadme } from "react-icons/fa";

const steps = [
  {
    icon: <FaUserPlus />,
    title: "Create an Account",
    description:
      "Sign up in seconds to unlock your personal reading space and track your progress.",
  },
  {
    icon: <FaBookOpen />,
    title: "Add or Choose a Book",
    description:
      "Upload your own books or explore the collection to build your digital library.",
  },
  {
    icon: <FaReadme />,
    title: "Start Reading",
    description:
      "Enjoy a smooth, distraction-free reading experience anytime.",
  },
];

const HowItWorks = () => {
  return (
    <section className="py-15 ">
      <div className="max-w-6xl mx-auto px-6">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10"
        >
          <h2 className="text-5xl font-bold ">
            How It <span className="text-primary">Works</span>
          </h2>
          <p className="mt-3 ">
            From signup to reading — it’s that simple
          </p>
        </motion.div>

        {/* Steps */}
        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="bg-gray-50 dark:bg-gray-800  border border-gray-200 dark:border-gray-600 rounded-2xl p-8 text-center hover:shadow-lg transition"
            >
              <div className="w-14 h-14 mx-auto flex items-center justify-center rounded-full bg-orange-100 text-orange-500 text-2xl mb-6">
                {step.icon}
              </div>

              <h3 className="text-xl dark:text-gray-100  font-semibold text-gray-900 mb-2">
                {step.title}
              </h3>

              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
