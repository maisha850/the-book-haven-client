import React from 'react';
import { motion } from "motion/react"
import book from '../assets/book.png'
import { Link } from 'react-router';

const Banner = () => {
    return (
<motion.div
      initial={{ opacity: 0, y: -100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      className=" flex flex-col justify-start text-white"
    >
              <div
  className="hero h-150 relative"
  style={{
    backgroundImage:
      `url(${book})`,
  }}
>
  <div className='absolute bg-black/60 inset-0'></div>
  
  <div className="z-10">
    <motion.h1
        initial={{ scale: 0.8 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.8, delay: 0.5 }}
        
      >
    <div>
       <div>
         <h3 className='md:text-7xl text-5xl font-bold md:ml-0 ml-8'> Welcome to <span className='text-primary'>The Book Haven</span></h3>
      <p className='text-xl  md:ml-0 ml-8'>Your next favorite book is only a click away</p>
       </div>

<div className='flex gap-2  md:ml-0 ml-8'>
  <Link to='/all-books' className="mt-6 px-6 py-3  btn-primary text-white font-semibold rounded-lg  transition duration-300">
  All Books
</Link>
<Link to='/add-book' className="mt-6 px-6 py-3  btn-outlines text-white font-semibold rounded-lg transition duration-300">
  Create Book
</Link>
    </div>
</div>

      </motion.h1>
  </div>
</div>
    </motion.div>
    );
};

export default Banner;