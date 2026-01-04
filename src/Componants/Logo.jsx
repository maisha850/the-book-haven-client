
import React from 'react';
import { IoBookOutline } from 'react-icons/io5';
import { Link } from 'react-router';

const Logo = () => {
    return (
        <Link to={'/'}>
            <img className='w-12 h-12 rounded-full bg-gradient-to-br from-red-700 via-amber-600 to-stone-900 ' src="https://www.bookhaven.ie/web/image/897882-aefb4810/BH-HighRes-Logo%20%281%29.png" alt="" />
        </Link>
    );
};

export default Logo;