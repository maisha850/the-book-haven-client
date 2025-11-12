import React, { useEffect, useState } from 'react';
import useAxios from '../Hooks/UseAxios';

const FeaturedBook = () => {
    const axiosSec = useAxios()
    const [books, setBooks]=useState([])
    useEffect(()=>{
        axiosSec.get('/featuredBooks')
        .then(data => {
            console.log('after post' , data.data)
            setBooks(data.data)

        })
    },[axiosSec])

    return (
        <div className='ml-6 flex gap-6'>
            {
                books.map(book=><div key={book._id} >

                  <div className='card border border-gray-300 rounded-2xl w-55 shadow-sm'>
                      <div className='bg-orange-100 p-3  rounded-2xl'>
                        <img  className='hover:scale-105 transition-transform duration-200 w-50 h-80  mx-auto' src={book.coverImage} alt="" />
                    <p className='card-title m-2 '>{book.title}</p>
                    </div>
                  </div>
                </div>)
            }
            
        </div>
    );
};

export default FeaturedBook;