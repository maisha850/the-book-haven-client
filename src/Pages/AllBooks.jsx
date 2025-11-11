
import React, { useEffect, useState } from 'react';


import { Link } from 'react-router';
import star from '../assets/star.png'
import useAxios from '../Hooks/UseAxios';







const AllBooks = () => {
    const axiosSec = useAxios()
    const [books, setBooks]=useState([])
    useEffect(()=>{
        axiosSec.get('/books')
        .then(data => {
            console.log('after post' , data.data)
            setBooks(data.data)

        })
    },[axiosSec])
    
    
    return (
       <div>
         <div className='w-11/12 mx-auto py-15'>
            <div className="overflow-x-auto  " >
            <table className='table table-zebra bg-form '>
                 <thead className='bg-white/80 w-full'>
      <tr>
       
        <th>Cover Image</th>
        <th>Title</th>
        <th>Author</th>
        <th>Genre</th>
        <th>Ratings</th>
        <th></th>
      </tr>
    </thead>

      
         <tbody>
               {
                books.map(book=><tr key={book._id}>
      
        <td>
          <div className="flex items-center gap-3">
            <div className="avatar">
              <div className="w-15 h-18">
                <img
                  src={book.coverImage}
                  alt="Avatar Tailwind CSS Component" />
              </div>
            </div>
          
          </div>
        </td>
        <td>
            {book.title}
        </td>
        <td>
            {book.author}

        </td>
        <td>{book.genre}</td>
        <td className='flex justify-center items-center'>
            <img className='w-4 h-4' src={star} alt="" />
        <td> {book.rating}</td>
        </td>
        <th>
       <Link to={`/books/${book._id}`} className='btn bg-gradient-to-br from-red-700 via-amber-600 to-stone-900  btn-sm rounded-3xl text-white shadow-xl'>View details</Link>
        </th>
        <div className="divider"></div>
      </tr> 
      )
      
            }
         </tbody>
                  </table>
            
        </div>
            
        </div>
       </div>
    );
};

export default AllBooks;