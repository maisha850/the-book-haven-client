
import { motion } from "framer-motion";
import {
  FaLock,
  FaBookOpen,
  FaStar,
  FaUser,
  FaPlusCircle,
  FaEdit,
} from "react-icons/fa";

const features = [

     {
    icon: <FaPlusCircle />,
    title: "Add New Books",
    desc: "Build your personal library by adding books in just a few clicks.",
    short: "Add your own books",
  },
  {
    icon: <FaEdit />,
    title: "Update Books",
    desc: "Edit your book information anytime with full control.",
    short: "Edit book info",
  },
  {
    icon: <FaBookOpen />,
    title: "Smart Book Browsing",
    desc: "Browse books easily by category and genre without confusion.",
  },
  {
    icon: <FaStar />,
    title: "Ratings & Reviews",
    desc: "Discover top-rated books and rate your favorites instantly.",
  },
  {
    icon: <FaUser />,
    title: "Personal Library",
    desc: "Each user gets a private dashboard with their own book list.",
  },
];

const WhyChooseUs = () => {
  return (
    <section className="py-15  ">
      <div className="max-w-7xl mx-auto px-4 grid gap-10 lg:grid-cols-2 items-center">

        {/* LEFT CONTENT */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-5xl font-bold text-gray-800 dark:text-white mb-10">
            Why Choose <span className="text-primary">The Book Haven?</span>
          </h2>

          <div className="space-y-6">
            {features.map((item, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.03 }}
                className="flex items-start gap-4 bg-white dark:bg-gray-800 p-5 rounded-xl shadow-md"
              >
                <div className="flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 text-primary text-xl">
                  {item.icon}
                </div>

                <div>
                  <h4 className="text-lg font-semibold text-gray-800 dark:text-white">
                    {item.title}
                  </h4>
                  <p className="text-gray-600 dark:text-gray-400 text-sm mt-1">
                    {item.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* RIGHT IMAGE */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="relative"
        >
          <div className=" dark:bg-gray-800 rounded-[2rem] p-6 shadow-lg">
            <img
              src="https://images.unsplash.com/photo-1614849963640-9cc74b2a826f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTh8fGJvb2t8ZW58MHx8MHx8fDA%3D"
              alt="Why Choose The Book Haven"
              className="rounded-2xl w-full h-170 object-cover"
            />
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default WhyChooseUs;
