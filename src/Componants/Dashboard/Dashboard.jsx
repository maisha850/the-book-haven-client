import { useState, useRef, useEffect } from "react";
import { Outlet, Link, useNavigate } from "react-router";
import { FaBars, FaTimes, FaHome, FaBook, FaUser, FaSignOutAlt, FaSearch, FaPlusCircle } from "react-icons/fa";
import Logo from "../../Componants/Logo";
import { FaPlus, FaUsers } from "react-icons/fa6";
import useRoles from "../../Hooks/useRoles";
import useAuth from "../../Hooks/UseAuth";

const Dashboard = () => {
    const{role}=useRoles()
    const {user}= useAuth()
  const [open, setOpen] = useState(false);
  const [profileOpen, setProfileOpen] = useState(false);
  const dropdownRef = useRef(null);
  const navigate = useNavigate();

  // Close profile dropdown when clicking outside
  useEffect(() => {
    const handler = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setProfileOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  const handleLogout = () => {
    // 🔐 call your logout function here
    console.log("User logged out");
    navigate("/login");
  };

  return (
    <div className="min-h-screen flex b">

      {/* Sidebar */}
      {role === 'user' &&   <aside
        className={`fixed md:static z-40 w-64  shadow-lg min-h-screen transform transition-transform duration-300
        ${open ? "translate-x-0" : "-translate-x-full md:translate-x-0"}`}
      >
        <div className="p-5 border-b flex justify-between items-center">
          <Logo />
          <button className="md:hidden" onClick={() => setOpen(false)}>
            <FaTimes />
          </button>
        </div>

        <nav className="p-4 space-y-2">
          <Link
            to="/dashboard"
            className="flex  items-center gap-3 p-3 rounded-lg hover:opacity-80"
          >
            <FaSearch /> Dashboard Overview
          </Link>

          <Link
            to="/dashboard/myBooks"
            className="flex items-center gap-3 p-3 rounded-lg hover:opacity-80"
          >
            <FaBook /> My Books
          </Link>

          <Link
            to="/dashboard/add-book"
            className="flex items-center gap-3 p-3 rounded-lg hover:opacity-80"
          >
            <FaPlusCircle /> Add Book
          </Link>
        </nav>
      </aside>
 }
   {
    role === 'admin' &&   <aside
        className={`fixed md:static z-40 w-64  shadow-lg min-h-screen transform transition-transform duration-300
        ${open ? "translate-x-0" : "-translate-x-full md:translate-x-0"}`}
      >
        <div className="p-5 border-b flex justify-between items-center">
          <Logo />
          <button className="md:hidden" onClick={() => setOpen(false)}>
            <FaTimes />
          </button>
        </div>

        <nav className="p-4 space-y-2">
          <Link
            to="/dashboard"
            className="flex  items-center gap-3 p-3 rounded-lg hover:opacity-80"
          >
            <FaSearch /> Dashboard Overview
          </Link>
          <Link
            to="/dashboard/user-management"
            className="flex  items-center gap-3 p-3 rounded-lg hover:opacity-80"
          >
            <FaUsers /> Manage Users
          </Link>
          <Link
            to="/dashboard/manage-books"
            className="flex  items-center gap-3 p-3 rounded-lg hover:opacity-80"
          >
            <FaBook /> Manage Books
          </Link>

 
        </nav>
      </aside>

   } 
      {/* Overlay */}
      {open && (
        <div
          className="fixed inset-0 bg-black/40 md:hidden"
          onClick={() => setOpen(false)}
        />
      )}

      {/* Main Content */}
      <div className="flex-1 flex flex-col">

        {/* Top Navbar */}
        <header className=" shadow-sm px-4 py-5 flex items-center justify-between">
          <button
            className="md:hidden text-xl"
            onClick={() => setOpen(true)}
          >
            <FaBars />
          </button>

          <h1 className="text-3xl font-semibold">Welcome Back <span className="">👋</span></h1>

          {/* Profile Dropdown */}
          <div className="relative" ref={dropdownRef}>
            <button
              onClick={() => setProfileOpen(!profileOpen)}
              className="flex items-center gap-2 focus:outline-none"
            >
            
              <img className="w-9 h-9 rounded-full" src={user?.photoURL || "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4g_2Qj3LsNR-iqUAFm6ut2EQVcaou4u2YXw&s"} alt="" />
            </button>

            {profileOpen && (
              <div className="absolute right-0 mt-2 w-48  shadow-lg rounded-lg overflow-hidden z-50">
                <Link
                  to="/dashboard"
                  className="flex items-center gap-2 px-4 py-3 hover:bg-gray-100"
                  onClick={() => setProfileOpen(false)}
                >
                  <FaHome /> Dashboard Home
                </Link>

                <Link
                  to="/dashboard/profile"
                  className="flex items-center gap-2 px-4 py-3 hover:bg-gray-100"
                  onClick={() => setProfileOpen(false)}
                >
                  <FaUser /> Profile
                </Link>

                <button
                  onClick={handleLogout}
                  className="w-full text-left flex items-center gap-2 px-4 py-3 hover:bg-red-50 text-red-600"
                >
                  <FaSignOutAlt /> Logout
                </button>
              </div>
            )}
          </div>
        </header>

        {/* Page Content */}
        <main className="p-6 flex-1">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default Dashboard;
