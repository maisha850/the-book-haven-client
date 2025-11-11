import React, { useEffect, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router';
import { IoIosStar, IoIosStarHalf } from 'react-icons/io';
import { TbCategory, TbCategoryFilled } from 'react-icons/tb';
import { FaRegUser } from 'react-icons/fa6';
import { MdAttachEmail } from 'react-icons/md';
import useAuth from '../Hooks/UseAuth';
import useAxiosSecure from '../Hooks/UseAxiosSecure';
import Swal from 'sweetalert2';

const BookDetails = () => {
    const {user}=useAuth()
  const [book , setBook]=useState({})
  const navigate = useNavigate()
    const {id}=useParams()
    const instance = useAxiosSecure()
    useEffect(()=>{
        instance.get(`/books/${id}`)
        .then(data=>{
            console.log(data.data)
            setBook(data.data)
        })

    },[instance, id])

    const handleDelete=()=>{
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
      instance.delete(`/books/${book._id}`)
      .then(data =>{
            console.log('after delete' , data.data)
             Swal.fire({
      title: "Deleted!",
      text: "Your file has been deleted.",
      icon: "success"
    });
navigate('/allBooks')
        })
   
  }
});
      
        

    }
    return (
        <div className='flex justify-center  gap-8 w-11/12 mx-auto py-15'>
          <div className='border p-4 rounded-2xl border-gray-500'>
              <img className='w-100 h-120 rounded-2xl' src={book.coverImage} alt="" />
          </div>
            <div>
                <button className='btn btn-soft btn-success mt-3'>In Stock</button>
<h3 className='text-4xl font-bold'>{book.title}</h3>
<div className='flex gap-6 mt-3'>
    <p className='text-lg '>Author:<span className='text-secondary'> {book.author} </span></p>
    <span className='text-secondary'>|</span>
 <p className='flex gap-1 items-center'> <IoIosStar size={20} color='#F59E0B' /><IoIosStar size={20} color='#F59E0B' /><IoIosStar size={20} color='#F59E0B' /><IoIosStar size={20} color='#F59E0B' /><IoIosStarHalf size={20} color='#F59E0B'/><span className='text-lg font-semibold'>{book.rating}</span></p>
</div>
<div className="divider"></div>
<p className='text-gray-600 w-200'>{book.summary}</p>


 <div className='space-y-2 mt-5'>
    <p className='font-semibold flex items-center'> <TbCategory size={20} color='#22C55E'/> CATEGORY:  <span className='text-secondary ml-3 font-medium'>{book.genre}</span> </p>
 <p className='font-semibold flex items-center'><FaRegUser size={20} color='#3B82F6' /> PUBLISHER:  <span className='text-secondary ml-2.5 font-medium'>{user?.displayName}</span> </p>
 <p className='font-semibold flex items-center '><MdAttachEmail size={20} color='#F59E0B'/> EMAIL:<span className='text-secondary ml-3 font-medium'>{user.email}</span> </p>
 </div>

 <div className='flex items-center gap-4'>
    <Link to={`/updateBooks/${book._id}`} className="w-full py-3 text-xl  text-slate-50 btn-active btn-primary  mt-4">Update</Link>
    <button onClick={handleDelete} className='w-full py-3 text-xl  text-slate-50 btn-active btn-primary  mt-4'>Delete</button>
 </div>
           

            </div>
           
            
        </div>
    );
};

export default BookDetails;