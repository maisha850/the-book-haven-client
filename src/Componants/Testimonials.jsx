import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "Content Writer & Book Reviewer",
    rating: 5,
    image: "https://randomuser.me/api/portraits/women/44.jpg",
    review:
      "It is a premium digital library. Searching books by genre and rating is incredibly smooth.",
  },
  {
    name: "Daniel Carter",
    role: "University Student",
    rating: 4.8,
    image: "https://randomuser.me/api/portraits/men/32.jpg",
    review:
      "Clean UI, fast loading, and very practical for students. I use it almost daily.",
  },
  {
    name: "Emily Watson",
    role: "UX Designer",
    rating: 5,
    image: "https://randomuser.me/api/portraits/women/68.jpg",
    review:
      "Subtle animations and excellent layout. It feels like a real production-grade platform.",
  },
  {
    name: "Michael Brown",
    role: "Software Engineer",
    rating: 4.7,
    image: "https://randomuser.me/api/portraits/men/75.jpg",
    review:
      "Performance and dashboard experience are excellent. Very professional work.",
  },
  {
    name: "Olivia Martinez",
    role: "Digital Marketer",
    rating: 4.9,
    image: "https://randomuser.me/api/portraits/women/51.jpg",
    review:
      "Discovering books is fun and easy. The design is clean and modern.",
  },
  {
    name: "James Wilson",
    role: "High School Teacher",
    rating: 4.8,
    image: "https://randomuser.me/api/portraits/men/41.jpg",
    review:
      "Perfect for recommending books to students. Simple and well organized.",
  },
];

const Testimonials = () => {
  return (
    <section className="py-15 ">
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <motion.div
        initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10"
        >
          <h2 className="text-5xl font-bold ">
            What Readers <span className="text-primary">Say</span>
          </h2>
          <p className="mt-3 text-gray-500  tracking-wide ">
            Trusted by readers, learners, and book lovers
          </p>
        </motion.div>

        {/* Slider */}
        <Swiper
          modules={[Autoplay, Pagination]}
          autoplay={{ delay: 4000 }}
          pagination={{ clickable: true }}
          spaceBetween={24}
          breakpoints={{
            0: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1280: { slidesPerView: 3 },
          }}
          className="" // 👈 space for pagination
        >
          {testimonials.map((item, index) => (
            <SwiperSlide key={index}>
              <motion.div
                 key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
                className="h-55 mb-10 bg-gray-100 dark:bg-gray-800 rounded-2xl p-6 border border-gray-200 dark:border-gray-600 hover:shadow-lg transition"
              >
                {/* User */}
                <div className="flex items-center gap-4 mb-5">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-14 h-14 rounded-full border border-gray-300"
                  />
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 dark:text-gray-100">
                      {item.name}
                    </h4>
                    <p className="text-sm text-gray-500 dark:text-gray-200">{item.role}</p>
                  </div>
                </div>

                {/* Review */}
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
                  “{item.review}”
                </p>

                {/* Rating */}
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <span
                      key={i}
                      className={`text-lg ${
                        i < Math.round(item.rating)
                          ? "text-orange-500"
                          : "text-gray-300"
                      }`}
                    >
                      ★
                    </span>
                  ))}
                  <span className="ml-2 text-sm text-gray-500 dark:text-gray-200">
                    {item.rating}
                  </span>
                </div>
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Pagination Gray Override */}
      <style>{`
        .swiper-pagination-bullet {
          background: #9ca3af;
          opacity: 0.5;
        }
        .swiper-pagination-bullet-active {
          background: #111827;
          opacity: 1;
        }
      `}</style>
    </section>
  );
};

export default Testimonials;
