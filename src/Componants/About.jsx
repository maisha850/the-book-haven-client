import { motion } from "framer-motion";
import { FaBookReader, FaUsers, FaStar } from "react-icons/fa";

const About = () => {
  return (
    <section className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 grid gap-12 lg:grid-cols-2 items-center">

        {/* IMAGE */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="relative"
        >
          <div className="rounded-3xl overflow-hidden shadow-xl">
            <img
              src="https://plus.unsplash.com/premium_photo-1682125776589-e899882259c3?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDIzfHx8ZW58MHx8fHx8"
              alt="About The Book Haven"
              className="w-full h-full object-cover"
            />
          </div>
        </motion.div>

        {/* CONTENT */}
        <motion.div
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-white mb-6">
            About <span className="text-primary">The Book Haven</span>
          </h2>

      

          <p className="text-gray-600 dark:text-gray-400 mb-8 leading-relaxed">
           The Book Haven is a modern digital library platform where readers can explore, manage, and share books effortlessly.
It is designed to make reading more accessible, organized, and enjoyable for users of all ages.
The platform allows users to securely register and log in using Firebase authentication.
Once logged in, users can browse a wide collection of books categorized by genre.
Each book comes with a detailed view that provides essential information such as description, category, and rating.
Users can easily add new books to the platform and build their personal digital library.
They also have full control to update or delete their own books whenever needed.
The rating system helps readers discover popular and high-quality books quickly.
Every user has a personalized book list tailored to their reading interests.
The Book Haven ensures a smooth experience across mobile, tablet, and desktop devices.

Administrators have access to a powerful dashboard for managing users and content efficiently.
The admin panel provides real-time insights through charts, tables, and statistics.
Admins can monitor user activity and maintain platform quality.
They have the ability to manage users, assign roles, and remove fraudulent accounts.
When a user is deleted, all books added by that user are also removed to keep data consistent.
Content moderation tools help maintain a clean and trustworthy library environment.
The platform focuses on performance to ensure fast loading and smooth navigation.
Security is a top priority, protecting both user data and platform integrity.
The Book Haven is built with modern technologies and a clean user interface.
Our mission is to create a reliable and user-friendly digital space for book lovers everywhere.
          </p>

          {/* STATS */}
          <div className="grid grid-cols-3 gap-4">
            <div className="bg-gray-50 dark:bg-gray-800 rounded-xl p-4 text-center">
              <FaBookReader className="mx-auto text-primary text-2xl mb-2" />
              <h4 className="font-bold text-lg text-gray-800 dark:text-white">
                Easy Reading
              </h4>
            </div>

            <div className="bg-gray-50 dark:bg-gray-800 rounded-xl p-4 text-center">
              <FaUsers className="mx-auto text-primary text-2xl mb-2" />
              <h4 className="font-bold text-lg text-gray-800 dark:text-white">
                User Focused
              </h4>
            </div>

            <div className="bg-gray-50 dark:bg-gray-800 rounded-xl p-4 text-center">
              <FaStar className="mx-auto text-primary text-2xl mb-2" />
              <h4 className="font-bold text-lg text-gray-800 dark:text-white">
                Rated Content
              </h4>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default About;
