
import React, { useEffect, useState } from "react";
import { FaBook, FaUser, FaStar, FaTh } from "react-icons/fa";
import { Bar, Pie } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement,
} from "chart.js";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import { FaGears, FaUsers } from "react-icons/fa6";
import Swal from "sweetalert2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement
);

const AdminDash = () => {
  const axios = useAxiosSecure();
  const [books, setBooks] = useState([]);
  const [users, setUsers] = useState([]);


  // Fetch all books & users
  useEffect(() => {
    const fetchData = async () => {
      try {
        const [booksRes, usersRes] = await Promise.all([
          axios.get("/books"),
          axios.get("/totalUsers"),
        ]);

        setBooks(booksRes.data);
        setUsers(usersRes.data);

      
   

       
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, [axios]);
console.log(books);
  // Charts
  const categoryCounts = {};
  books.forEach((book) => {
    categoryCounts[book.genre] = (categoryCounts[book.genre] || 0) + 1;
  });

const ratingCounts = {
  "1-1.9": 0,
  "2-2.9": 0,
  "3-3.9": 0,
  "4-4.9": 0,
  "5": 0,
};

books.forEach((book) => {
  const rating = Number(book.rating);

  if (!rating) return;

  if (rating < 2) ratingCounts["1-1.9"]++;
  else if (rating < 3) ratingCounts["2-2.9"]++;
  else if (rating < 4) ratingCounts["3-3.9"]++;
  else if (rating < 5) ratingCounts["4-4.9"]++;
  else ratingCounts["5"]++;
});


  const barData = {
    labels: Object.keys(categoryCounts),
    datasets: [
      {
        label: "Books per Category",
        data: Object.values(categoryCounts),
        backgroundColor: "rgba(59, 130, 246, 0.7)",
      },
    ],
  };

 const pieData = {
  labels: Object.keys(ratingCounts),
  datasets: [
    {
      label: "Rating Distribution",
      data: Object.values(ratingCounts),
      backgroundColor: [
        "#ef4444", // red
        "#f59e0b", // yellow
        "#10b981", // green
        "#3b82f6", // blue
        "#8b5cf6", // purple
      ],
    },
  ],
};

  // Total unique genres
const totalGenres = [...new Set(books.map(book => book.genre))].length;

// Average rating
const averageRating =
  books.length > 0
    ? (
        books.reduce((sum, book) => sum + (Number(book.rating) || 0), 0) /
        books.length
      ).toFixed(1)
    : 0;

  // Overview cards
 
const handleDeleteUser = async (user) => {
  const result = await Swal.fire({
    title: "Are you sure?",
    html: `
      <p><strong>${user.displayName}</strong> will be deleted.</p>
      <p class="text-red-600">All books added by this user will also be deleted!</p>
    `,
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#ef4444",
    cancelButtonColor: "#6b7280",
    confirmButtonText: "Yes, delete",
    cancelButtonText: "Cancel",
  });

  if (result.isConfirmed) {
  await axios.delete(`/users/${user._id}`);
   // Update UI
      setUsers((prev) => prev.filter((u) => u._id !== user._id));
      setBooks((prev) =>
        prev.filter((book) => book.userEmail !== user.email)
      );
           Swal.fire({
        title: "Deleted!",
        text: "User and their added books have been deleted.",
        icon: "success",
        timer: 2000,
        showConfirmButton: false,
      });
  }
  else{
Swal.fire({
      title: "Error!",
      text: `Something went wrong!`,
      icon: "error",
    });
  }


};

  return (
    <div className="p-6 space-y-6">
      {/* Overview Cards */}
      <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-4">
       
          <div
       
            className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-5 flex flex-col items-start gap-3 hover:scale-105 transition-transform"
          >
            <div className="p-3 bg-gray-100 dark:bg-gray-700 rounded-full">
              <FaBook></FaBook>
            </div>
            <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200">
           Total Books
            </h3>
            <p className="text-gray-500 dark:text-gray-400 text-xl font-bold">
              {books.length}
            </p>
          </div>
       
          <div
       
            className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-5 flex flex-col items-start gap-3 hover:scale-105 transition-transform"
          >
            <div className="p-3 bg-gray-100 dark:bg-gray-700 rounded-full">
           <FaUsers></FaUsers>
            </div>
            <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200">
           Total Users
            </h3>
            <p className="text-gray-500 dark:text-gray-400 text-xl font-bold">
              {users.length}
            </p>
          </div>
          
          <div
  className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-5 flex flex-col items-start gap-3 hover:scale-105 transition-transform"
>
  <div className="p-3 bg-gray-100 dark:bg-gray-700 rounded-full">
    <FaTh className="text-green-500" />
  </div>
  <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200">
    Total Genres
  </h3>
  <p className="text-gray-500 dark:text-gray-400 text-xl font-bold">
    {totalGenres}
  </p>
</div>

        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-5 flex flex-col items-start gap-3 hover:scale-105 transition-transform">
  <div className="p-3 bg-gray-100 dark:bg-gray-700 rounded-full">
    <FaStar className="text-orange-500" />
  </div>
  <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200">
    Average Rating
  </h3>
  <p className="text-gray-500 dark:text-gray-400 text-xl font-bold">
    {averageRating}
  </p>
</div>
  
        
      </div>

      {/* Charts */}
      <div className="grid gap-6 md:grid-cols-2">
        <div className="bg-white dark:bg-gray-800 p-5 rounded-xl shadow-md">
          <h3 className="font-semibold mb-4 text-gray-800 dark:text-gray-200">
            Books per Category (Bar Chart)
          </h3>
          <Bar data={barData} />
        </div>
        <div className="bg-white dark:bg-gray-800 p-5 rounded-xl shadow-md">
          <h3 className="font-semibold mb-4 text-gray-800 dark:text-gray-200">
            Rating Distribution (Pie Chart)
          </h3>
          <Pie data={pieData} />
        </div>
      </div>

      {/* Books Table */}
      <div className="overflow-x-auto bg-white dark:bg-gray-800 rounded-xl shadow-md p-5">
        <h3 className="font-semibold mb-4 text-gray-800 dark:text-gray-200">
          All Books
        </h3>
        <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
          <thead className="bg-gray-50 dark:bg-gray-700">
            <tr>
              <th className="px-4 py-2 text-left text-sm font-medium text-gray-500 dark:text-gray-300">
                Image
              </th>
              <th className="px-4 py-2 text-left text-sm font-medium text-gray-500 dark:text-gray-300">
                Title
              </th>
              <th className="px-4 py-2 text-left text-sm font-medium text-gray-500 dark:text-gray-300">
                Category
              </th>
              <th className="px-4 py-2 text-left text-sm font-medium text-gray-500 dark:text-gray-300">
                Rating
              </th>
             
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
            {books.map((book) => (
              <tr
                key={book._id}
                className="hover:bg-gray-50 dark:hover:bg-gray-700"
              >
                   <td>
                    <img className="w-12 h-15" src={book.coverImage} alt="" />
                </td>
                <td className="px-4 py-2">{book.title}</td>
                <td className="px-4 py-2">{book.genre}</td>
                <td className="px-4 py-2 flex items-center gap-1">
                  <FaStar className="text-orange-400" /> {book.rating || "N/A"}
                </td>
                
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Users Table */}
      <div className="overflow-x-auto bg-white dark:bg-gray-800 rounded-xl shadow-md p-5">
        <h3 className="font-semibold mb-4 text-gray-800 dark:text-gray-200">
          All Users
        </h3>
        <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
          <thead className="bg-gray-50 dark:bg-gray-700">
            <tr>
              <th className="px-4 py-2 text-left text-sm font-medium text-gray-500 dark:text-gray-300">
                Name
              </th>
              <th className="px-4 py-2 text-left text-sm font-medium text-gray-500 dark:text-gray-300">
                Email
              </th>
              <th className="px-4 py-2 text-left text-sm font-medium text-gray-500 dark:text-gray-300">
                Role
              </th>
              <th className="px-4 py-2 text-left text-sm font-medium text-gray-500 dark:text-gray-300">
                Actions
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
            {users.map((user) => (
              <tr
                key={user._id}
                className="hover:bg-gray-50 dark:hover:bg-gray-700"
              >
                <td className="px-4 py-2">{user.displayName}</td>
                <td className="px-4 py-2">{user.email}</td>
                <td className="px-4 py-2">{user.role}</td>
                <td className="px-4 py-2 flex gap-2">
               
                  <button onClick={()=>handleDeleteUser(user)} className="text-red-500 hover:underline">Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AdminDash;
