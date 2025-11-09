import React from 'react';
import { motion } from "motion/react"
import book from '../assets/book.png'

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
         <h3 className='text-7xl font-bold'> Welcome to <span className='text-primary'>The Book Haven</span></h3>
      <p className='text-xl'>Your next favorite book is only a click away</p>
       </div>

<div className='flex gap-2'>
  <button className="mt-6 px-6 py-3  btn-primary text-white font-semibold rounded-lg  transition duration-300">
  All Books
</button>
<button className="mt-6 px-6 py-3  btn-outline text-white font-semibold rounded-lg transition duration-300">
  Create Book
</button>
    </div>
</div>

      </motion.h1>
  </div>
</div>
    </motion.div>
    );
};

export default Banner;