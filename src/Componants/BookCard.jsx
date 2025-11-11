import React from 'react';
import { IoIosStar, IoIosStarHalf } from 'react-icons/io';

const BookCard = ({book}) => {
    const {coverImage , author , title , rating}=book
    return (
        <div>
            <div className="card bg-base-100 w-80 shadow-sm">
  <figure className='bg-orange-100 py-4'>
    <img
    className='hover:scale-105 transition-transform duration-200 w-50 h-80 '
      src={coverImage}
      alt="Shoes" />
  </figure>
  <div className="card-body">
    <h2 className="card-title text-xl">{title}</h2>
    <div className='flex justify-between items-center'>
        <p className=' font-medium'>{author}</p>
    <p className='flex gap-1 items-center'> <IoIosStar size={15} color='#F59E0B' /><IoIosStar size={15} color='#F59E0B' /><IoIosStar size={15} color='#F59E0B' /><IoIosStar size={15} color='#F59E0B' /><IoIosStarHalf size={15} color='#F59E0B'/><span className=' font-semibold'>{rating}</span></p>
    </div>
 
  </div>
</div>
        </div>
    );
};

export default BookCard;