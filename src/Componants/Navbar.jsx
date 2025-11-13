import React, { use, useEffect, useState } from 'react';
import { Link, NavLink } from 'react-router';
import { AuthContext } from '../Auth/AuthContext';
import Logo from './Logo';
import toast from 'react-hot-toast';

const Navbar = () => {
  const {logOut , user} = use(AuthContext)
  const links = <>
  <NavLink to='/' className='mr-8 font-medium'>Home</NavLink>
  <NavLink to='/all-books' className='mr-8 font-medium'>All Books</NavLink>
  <NavLink to='/add-book' className='mr-8 font-medium'>Add Books</NavLink>
  <NavLink to='/myBooks' className='mr-8 font-medium'>My Books</NavLink>
  {!user && <>
  <NavLink to='/logIn' className='mr-8 font-medium'>Log In</NavLink>
  <NavLink to='/register' className='mr-8 font-medium'>Register</NavLink>
  </> }
  
  </>
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");


  useEffect(() => {
    const html = document.querySelector("html");
    html.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);


  const handleTheme = (checked) => {
    setTheme(checked ? "dark" : "light");
  };


  const handleLogOut=()=>{
    logOut()
    .then((res)=>{
      console.log(res.user)
      toast.success('Log Out successfully')
    })
    .catch((err)=>{
      console.log(err.message)
    })
  }
    return (
        <div className="navbar bg-base-100 shadow-sm px-5">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
      </div>
      <ul
        tabIndex="-1"
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
       {links}
      </ul>
    </div>
    <Link to={'/'} className=" text-xl"><Logo></Logo></Link>
  </div>
  <div className="navbar-center hidden lg:flex ">
    <ul className="menu menu-horizontal px-1">
   {links}
    </ul>
  </div>
  <div className="navbar-end flex items-center gap-3">
    <input
           onChange={(e) => handleTheme(e.target.checked)}
           type="checkbox"
           defaultChecked={localStorage.getItem('theme') === "dark"}
           className="toggle"/>

    { user && <div>
      <div className="dropdown dropdown-hover dropdown-center">
  <div tabIndex={0} role="button" className=" m-1"> <img className={`w-12 h-12 rounded-full`} src={user?.photoURL || 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTFuVWYC8V8zN-N8UpwDUvuQ8eYidEUQfi7U0rJ2JHLKQ&s'} alt="" /></div>
  <ul tabIndex="-1" className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
    <li><a className='text-lg font-semibold mx-auto'>{user?.displayName}</a></li>
    <button onClick={handleLogOut} className='btn btn-primary '>Log Out</button>
  </ul>
</div>
     
      </div>}
   { user ? <button className='btn-primary' onClick={handleLogOut}>Log Out</button> : <Link className='btn-primary' to='/logIn'>Log In</Link>}
  </div>
</div>
    );
};

export default Navbar;