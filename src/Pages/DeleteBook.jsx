import React, { useEffect, useState } from 'react';
import useAxiosSecure from '../Hooks/UseAxiosSecure';
import useAuth from '../Hooks/UseAuth';
import {  useNavigate, useParams } from 'react-router';
import Swal from 'sweetalert2';
import { IoIosStar, IoIosStarHalf } from 'react-icons/io';



const DeleteBook = () => {
    const {id}= useParams()
    const instance = useAxiosSecure()
    const {user}= useAuth()
    const [book , setBook]=useState({})
    const navigate = useNavigate()

    useEffect(()=>{
        instance(`/dltBooks/${id}`)
        .then(data => {
            console.log('after myBooks post' , data.data)
            setBook(data.data)
           
        })
    },[user,instance,id])
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
          instance.delete(`/dltBooks/${id}`)
          .then(data =>{
                console.log('after delete' , data.data)
                 Swal.fire({
          title: "Deleted!",
          text: "Your file has been deleted.",
          icon: "success"
        });
    
            })
            navigate('/all-books')

      }
    });
          
        }
     
    return (
     <div className='w-10/12 mx-auto py-15'>
        <div className=' flex justify-center items-center flex-col '>
          <div className=''>
              <img className='w-70 h-90 rounded-2xl' src={book.coverImage} alt="" />
          </div>
            <div className=' flex justify-center items-center flex-col '>
      
<h3 className='text-3xl mt-5 font-bold'>{book.title}</h3>
<div className='flex gap-6 mt-3'>
    <p className='text-lg '>Author:<span className=''> {book.author} </span></p>
    <span className=''>|</span>
 <p className='flex gap-1 items-center'> <IoIosStar size={20} color='#F59E0B' /><IoIosStar size={20} color='#F59E0B' /><IoIosStar size={20} color='#F59E0B' /><IoIosStar size={20} color='#F59E0B' /><IoIosStarHalf size={20} color='#F59E0B'/><span className='text-lg font-semibold'>{book.rating}</span></p>
</div>
<div className="divider"></div>
<p className=' w-100 line-clamp-3'>{book.summary}</p>

<button className='btn btn-wide bg-gradient-to-br from-red-700 via-amber-600 to-stone-900 text-white  mt-4' onClick={()=>handleDelete(book._id)}>Delete</button>
            </div>
         
           
            
        </div>
           
       
        </div>
    );
};

export default DeleteBook;