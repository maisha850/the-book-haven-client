
import React, { useEffect, useState } from "react";
import { FaLock, FaBook, FaPlus, FaEdit, FaTrash, FaStar, FaUser, FaMobileAlt } from "react-icons/fa";
import { Bar, Pie } from "react-chartjs-2";
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend, ArcElement } from "chart.js";


import useAuth from "../../Hooks/UseAuth";
import useAxiosSecure from "../../Hooks/UseAxiosSecure";

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend, ArcElement);

const UserDash = () => {
  const [books, setBooks] = useState([]);
  const [stats, setStats] = useState({
    totalBooks: 0,
    totalUsers: 0,
    ratings: 0,
    categories: 0,
  });
  const {user}= useAuth()
const axios = useAxiosSecure()
  // Fetch books from backend (replace with your API)
  console.log(stats)
useEffect(() => {
  const fetchData = async () => {
    try {
      if (!user?.email) return; // wait until user is loaded

      const res = await axios.get("/myBooks", {
        params: { userEmail: user.email } // send email to server
      });

      setBooks(res.data);

      // compute stats dynamically for this user
      const categories = [...new Set(res.data.map(book => book.genre))].length;
      const ratings = res.data.reduce((acc, book) => acc + (book.rating || 0), 0);
      setStats({
        totalBooks: res.data.length,
        totalUsers: 1, // only for logged-in user
        ratings,
        categories,
      });
    } catch (err) {
      console.log(err);
    }
  };

  fetchData();
}, [user,axios]);


  // Overview cards
  const features = [
    { icon: <FaLock className="text-blue-500 w-6 h-6" />, title: "Secure Login", desc: "Firebase Auth" },
    { icon: <FaBook className="text-green-500 w-6 h-6" />, title: "Browse Books", desc: "By category" },
    { icon: <FaBook className="text-purple-500 w-6 h-6" />, title: "Book Details", desc: "Detailed view" },
    { icon: <FaPlus className="text-yellow-500 w-6 h-6" />, title: "Add Book", desc: "Create new books" },
    { icon: <FaEdit className="text-indigo-500 w-6 h-6" />, title: "Update Book", desc: "Edit books" },
    { icon: <FaTrash className="text-red-500 w-6 h-6" />, title: "Delete Book", desc: "Remove books" },
    { icon: <FaStar className="text-orange-500 w-6 h-6" />, title: "Ratings", desc: "Category & rating" },
    { icon: <FaUser className="text-pink-500 w-6 h-6" />, title: "User Lists", desc: "Personalized books" },
    { icon: <FaMobileAlt className="text-teal-500 w-6 h-6" />, title: "Responsive UI", desc: "Mobile friendly" },
  ];

  // Prepare chart data
  const categoryCounts = {};
  books.forEach(book => {
    categoryCounts[book.genre] = (categoryCounts[book.genre] || 0) + 1;
  });

  const barData = {
    labels: Object.keys(categoryCounts),
    datasets: [
      {
        label: "Books per Category",
        data: Object.values(categoryCounts),
        backgroundColor: "rgba(59, 130, 246, 0.7)", // blue
      },
    ],
  };

  const pieData = {
    labels: Object.keys(categoryCounts),
    datasets: [
      {
        label: "Books Distribution",
        data: Object.values(categoryCounts),
        backgroundColor: [
          "#3b82f6",
          "#10b981",
          "#8b5cf6",
          "#f59e0b",
          "#ef4444",
          "#ec4899",
          "#14b8a6",
        ],
      },
    ],
  };

  return (
    <div className="p-6 space-y-6">
      {/* Overview Cards */}
      <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3">
        {features.map((feature, idx) => (
          <div key={idx} className="bg-gray-100 dark:bg-gray-800 rounded-xl shadow-md p-5 flex flex-col items-center justify-center gap-3 hover:scale-105 transition-transform">
            <div className="p-3 bg-gray-100 dark:bg-gray-700 rounded-full">{feature.icon}</div>
            <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200">{feature.title}</h3>
            <p className="text-gray-500 dark:text-gray-400 text-sm">{feature.desc}</p>
          </div>
        ))}
      </div>

      {/* Charts */}
      <div className="grid gap-6 md:grid-cols-2">
        <div className="bg-white dark:bg-gray-800 p-5 rounded-xl shadow-md">
          <h3 className="font-semibold mb-4 text-gray-800 dark:text-gray-200">Books per Category (Bar Chart)</h3>
          <Bar data={barData} />
        </div>

        <div className="bg-white dark:bg-gray-800 p-5 rounded-xl shadow-md">
          <h3 className="font-semibold mb-4 text-gray-800 dark:text-gray-200">Books Distribution (Pie Chart)</h3>
          <Pie data={pieData} />
        </div>
      </div>

      {/* Data Table */}
      <div className="overflow-x-auto bg-white dark:bg-gray-800 rounded-xl shadow-md p-5">
        <h3 className="font-semibold mb-4 text-gray-800 dark:text-gray-200">Books Table</h3>
        <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
          <thead className="bg-gray-50 dark:bg-gray-700">
            <tr>
              <th className="px-4 py-2 text-left text-sm font-medium text-gray-500 dark:text-gray-300">Image</th>
              <th className="px-4 py-2 text-left text-sm font-medium text-gray-500 dark:text-gray-300">Title</th>
              <th className="px-4 py-2 text-left text-sm font-medium text-gray-500 dark:text-gray-300">Category</th>
              <th className="px-4 py-2 text-left text-sm font-medium text-gray-500 dark:text-gray-300">Rating</th>
              
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
            {books.map((book) => (
              <tr key={book.id} className="hover:bg-gray-50 dark:hover:bg-gray-700">
                <td>
                    <img className="w-12 h-15" src={book.coverImage} alt="" />
                </td>
                <td className="px-4 py-2">{book.title}</td>
                <td className="px-4 py-2">{book.genre}</td>
                <td className="px-4 py-2 flex items-center gap-1 justify-start mt-2"><FaStar className="text-orange-400"></FaStar> {book.rating || "N/A"}</td>
              
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default UserDash
