import React from 'react';
import { IoIosStar, IoIosStarHalf } from 'react-icons/io';
import { Link } from 'react-router';

const BookCard = ({book}) => {
    const {coverImage , author , title , rating, _id, summary, genre}=book
    return (
      
            <div className="card dark:bg-gray-800  bg-base-100 w-80 shadow-sm">
  <figure className='bg-orange-100 py-4'>
    <img
    className='hover:scale-105 transition-transform duration-200 w-50 h-80 '
      src={coverImage}
      alt="Shoes" />
  </figure>
  <div className="card-body">
    <p className='text-[#F59E0B] font-bold'>{genre}</p>
    <h2 className="card-title text-xl">{title}</h2>
    <div className='flex justify-between items-center'>
        <p className=' font-medium'>{author}</p>
    <div className='flex gap-1 items-center'> <IoIosStar size={15} color='#F59E0B' /><span className=' font-semibold'>{rating}</span></div>
    
    </div>
 <p className='line-clamp-2'>{summary}</p>
   <Link className='btn btn-primary' to={`/book-details/${_id}`}>View Details</Link>
  </div>
</div>
       
    );
};

export default BookCard;