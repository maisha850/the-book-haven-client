import React, { useEffect, useState } from 'react';
import useAxiosSecure from '../Hooks/UseAxiosSecure';
import useAuth from '../Hooks/UseAuth';
import star from '../assets/star.png'
import { Link } from 'react-router';
import Swal from 'sweetalert2';


const MyBook = () => {
    const instance = useAxiosSecure()
    const {user}= useAuth()
    const [books , setBooks]=useState([])
    const[refetch , setRefetch]=useState(false)
    useEffect(()=>{
        instance(`/myBooks?userEmail=${user.email}`)
        .then(data => {
            console.log('after myBooks post' , data.data)
            setBooks(data.data)
            setRefetch(!refetch)
        })
    },[user,instance,refetch])
     const handleDelete=(id)=>{
            Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!"
    }).then((result) => {
      if (result.isConfirmed) {
          instance.delete(`/books/${id}`)
          .then(data =>{
                console.log('after delete' , data.data)
                 Swal.fire({
          title: "Deleted!",
          text: "Your file has been deleted.",
          icon: "success"
        });
    
            })
       
      }
    });
          
            
    
        }
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
        <img className='w-4 h-4' src={star} alt="" />
        
           
        <td> {book.rating}</td>
        
        <td className='flex flex-col items-center gap-3 '>
       <Link to={`/books/${book._id}`} className='btn bg-gradient-to-br from-red-700 via-amber-600 to-stone-900  btn-sm rounded-3xl text-white shadow-xl'>Update</Link>
       <Link onClick={()=>handleDelete(book._id)} className='btn btn-outline border-amber-600 text-amber-700  btn-sm rounded-3xl  shadow-xl'>Delete</Link>
        </td>
        
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

export default MyBook;