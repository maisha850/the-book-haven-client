import React from 'react';
import { FaFacebookF, FaLinkedinIn, FaXTwitter } from 'react-icons/fa6';
import { Link } from 'react-router';
import Logo from './Logo';

const Footer = () => {
    return (
         <div>
           <div className='bg-gradient-to-br from-red-800 via-amber-600 to-stone-900  pt-20 pb-5 lg:pl-0 pl-4'>
            <div className='flex lg:flex-row md:gap-0 gap-8 flex-col justify-center'>
        <div className='mr-26'>
            <Link to="/" className='flex items-center'>
 <a  className=" text-xl  uppercase font-bold"></a>
<Logo></Logo>
    </Link>
            <p className='text-white w-[350px] mt-3'>Welcome to Book Haven, your ultimate destination for discovering, reading, and enjoying books online. From timeless classics to modern bestsellers, Book Haven brings the world of literature to your fingertips. Explore thousands of eBooks.</p>

        </div>
        <div className='mr-26'>
            <h3 className='text-xl font-medium text-white mb-2'>Company</h3>
            <ul className='text-white list-none space-y-2'>
                <li>About us</li>
            <li>Our Mission</li>
            <li>Contact Saled</li>
            <li>Press kit</li>
            <li>Blog</li>

            </ul>
        </div>
      
        <div className='mr-26'>
            <h3 className='text-xl font-medium text-white mb-2'>Inforamation</h3>
            <ul className='text-white list-none space-y-2'>
                <li>Privacy Policy</li>
            <li>Terms & Conditions</li>
            <li>Join us</li>
            <li>Cookie Policy</li>
            </ul>
        </div>

        <div>
            <h3 className='text-xl font-medium text-white mb-2'>Social links</h3>
            <ul className='flex items-center gap-5 mt-4  '>
                <FaXTwitter size={25} className='bg-white text-black rounded-full p-[2px]' />
           <FaLinkedinIn size={25} className='bg-white text-black rounded-full p-[2px]' /> 
         <FaFacebookF size={25} className='bg-white text-black rounded-full p-[2px]' /> 
         
      
            </ul>
        </div>
      

            
        </div>
          <h3 className='text-white text-center mt-20 '>©2025theBookHaven. All rights reserved.</h3>
        </div> 
        </div>
    );
};

export default Footer;