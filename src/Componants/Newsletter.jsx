"use client";

import { motion } from "framer-motion";
import toast from "react-hot-toast";
import { FaPaperPlane } from "react-icons/fa";

const Newsletter = () => {
    const handleSubmit=(e)=>{
         e.preventDefault();
        toast.success("Subscribed Successfully!")
    }
  return (
    <section className="py-15 ">
      <div className="max-w-5xl  mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-form rounded-3xl shadow-lg p-10 md:p-14 flex flex-col md:flex-row items-center justify-between gap-10"
        >
          {/* LEFT CONTENT */}
          <div className="max-w-xl">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              Join Our Reading Community
            </h2>
            <p className="mt-3 text-gray-600 leading-relaxed">
              Subscribe to get updates on new books, reading tips, and exclusive
              content from <span className="font-semibold">The Book Haven</span>.
            </p>
          </div>

          {/* FORM */}
          <form className="w-full md:w-auto flex flex-col sm:flex-row items-center gap-4">
            <input
              type="email"
              placeholder="Enter your email"
              required
              className="w-full text-gray-500 sm:w-72 px-5 py-3 rounded-xl border bg-white border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-400 transition"
            />
            <button
            onClick={handleSubmit}
              type="submit"
              className="flex items-center gap-2 px-6 py-3 rounded-xl btn btn-primary transition shadow-md"
            >
              Subscribe
              <FaPaperPlane className="text-sm" />
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  );
};

export default Newsletter;
