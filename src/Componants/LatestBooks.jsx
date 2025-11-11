import React, { useEffect, useState } from 'react';
import useAxios from '../Hooks/UseAxios';
import BookCard from './BookCard';

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
        <div className='flex justify-center items-center flex-wrap gap-8'>
            {books.map(book=><BookCard key={book._id} book={book}></BookCard> )}
        </div>
        </div>
    );
};

export default LatestBooks;