import React, { useEffect, useState } from 'react';
import useAxios from '../Hooks/UseAxios';
import BookCard from './BookCard';
import { motion } from "framer-motion";

const LatestBooks = () => {
    const [books , setBooks]=useState([])
     const instance = useAxios()
   useEffect(()=>{
   instance.get('/latest-book')
    .then(data=>{
        console.log('latest-book', data.data)
        setBooks(data.data)
       
    })
   },[instance])
   
 

    return (
        <div>
             <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10"
        >
   <h3 className='text-5xl font-bold mb-3 text-center'>Latest <span className='text-primary'>Books</span></h3>
   <p className="text-gray-500 mb-10">
            Discover the newest arrivals curated for passionate readers
          </p>
        </motion.div>
          
        <div className='grid md:grid-cols-3 lg:grid-cols-4 gap-15'>
            {books.map((book,index)=>
              <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className=""
            >
            <BookCard key={book._id} book={book}></BookCard> </motion.div>)}
        </div>
        </div>
    );
};

export default LatestBooks;