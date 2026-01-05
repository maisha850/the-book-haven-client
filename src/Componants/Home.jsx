import React from 'react';
import { motion } from "framer-motion";
import LatestBooks from './LatestBooks';
import Marquee from "react-fast-marquee";
import FeaturedBook from './FeaturedBook';
import About from './About';
import WhyChooseUs from './WhyChooseUs';
import FAQ from './FAQ';
import HerSection from './HerSection';
import HowItWorks from './HowItWorks';
import Newsletter from './Newsletter';
import Testimonials from './Testimonials';


const Home = () => {
    return (
        <div>
           <div className='pb-15'>
             <HerSection></HerSection>
           </div>
            
            <div className='w-10/12 mx-auto py-15'>
           
                <LatestBooks></LatestBooks>
            </div>
                          <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center "
        >
   <h3 className='text-5xl pt-15 font-bold mb-3 text-center'>Featured <span className='text-primary'>Books</span></h3>
      <p className="text-gray-500 mb-10">
            Handpicked books loved by readers and critics
          </p>
        </motion.div>
            <Marquee className='pb-15'>
                <FeaturedBook></FeaturedBook>
            </Marquee>
            <Testimonials></Testimonials>
            <Newsletter></Newsletter>
            <HowItWorks></HowItWorks>
            <WhyChooseUs></WhyChooseUs>
            <FAQ></FAQ>
           
        </div>
    );
};

export default Home;