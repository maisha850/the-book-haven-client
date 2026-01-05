import React from 'react';
import { FaFacebookF, FaLinkedinIn, FaXTwitter } from 'react-icons/fa6';
import { Link } from 'react-router';
import Logo from './Logo';
import { getYear } from "date-fns";



const Footer = () => {
    
  const currentYear = getYear(new Date());
    return (
//          <div>
//            <div className='bg-gradient-to-br from-red-800 via-amber-600 to-stone-900  pt-20 pb-5 lg:pl-0 pl-4'>
//             <div className='flex lg:flex-row md:gap-0 gap-8 flex-col justify-center'>
//         <div className='mr-26'>
//             <Link to="/" className='flex items-center'>
//  <a  className=" text-xl  uppercase font-bold"></a>
// <Logo></Logo>
//     </Link>
//             <p className='text-white w-[350px] mt-3'>Welcome to Book Haven, your ultimate destination for discovering, reading, and enjoying books online. From timeless classics to modern bestsellers, Book Haven brings the world of literature to your fingertips. Explore thousands of eBooks.</p>

//         </div>
//         <div className='mr-26'>
//             <h3 className='text-xl font-medium text-white mb-2'>Company</h3>
//             <ul className='text-white list-none space-y-2'>
//                 <li>About us</li>
//             <li>Our Mission</li>
//             <li>Contact Saled</li>
//             <li>Press kit</li>
//             <li>Blog</li>

//             </ul>
//         </div>
      
//         <div className='mr-26'>
//             <h3 className='text-xl font-medium text-white mb-2'>Inforamation</h3>
//             <ul className='text-white list-none space-y-2'>
//                 <li>Privacy Policy</li>
//             <li>Terms & Conditions</li>
//             <li>Join us</li>
//             <li>Cookie Policy</li>
//             </ul>
//         </div>

//         <div>
//             <h3 className='text-xl font-medium text-white mb-2'>Social links</h3>
//             <ul className='flex items-center gap-5 mt-4  '>
//                 <FaXTwitter size={25} className='bg-white text-black rounded-full p-[2px]' />
//            <FaLinkedinIn size={25} className='bg-white text-black rounded-full p-[2px]' /> 
//          <FaFacebookF size={25} className='bg-white text-black rounded-full p-[2px]' /> 
         
      
//             </ul>
//         </div>
      

            
//         </div>
//           <h3 className='text-white text-center mt-20 '>©{currentYear} theBookHaven. All rights reserved.</h3>
//         </div> 
//         </div>
<footer className="footer bg-gradient-to-br from-red-800 via-amber-600 to-stone-900 text-white footer-horizontal footer-center  rounded p-10">
  <nav className="grid grid-flow-col gap-4">
    <Link to={'/'} className="link link-hover">Home</Link>
    <Link to={'/about'} className="link link-hover">About us</Link>
    <Link to={'/privacy-policy'} className="link link-hover">Privacy & Policy</Link>
  
  </nav>
  <nav>
    <div className="grid grid-flow-col gap-4">
      <Link to={'https://www.twitter.com/ '}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          className="fill-current">
          <path
            d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path>
        </svg>
      </Link>
      <Link to={'https://www.youtube.com/'}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          className="fill-current">
          <path
            d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"></path>
        </svg>
      </Link>
      <Link to={'https://www.facebook.com/'}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          className="fill-current">
          <path
            d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path>
        </svg>
      </Link>
    </div>
  </nav>
  <aside>
      <h3 className='text-white text-center  '>©{currentYear} theBookHaven. All rights reserved.</h3>
  </aside>
</footer>
    );
};

export default Footer;