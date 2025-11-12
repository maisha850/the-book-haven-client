import React from 'react';
import { BiSolidErrorAlt } from 'react-icons/bi';
import { Link } from 'react-router';

const ErrorPage = () => {
    return (
        <div className='min-h-screen flex justify-center items-center flex-col gap-4'>
            <BiSolidErrorAlt  color='#F59E0B' size={100} />
            <h3 className='text-primary font-black text-9xl'>404</h3>
            <p className='text-primary text-2xl font-semibold'>Sorry, we couldn't find this page</p>
            <Link to={'/'} className='btn btn-primary'>Back to Home</Link>
            
        </div>
    );
};

export default ErrorPage;