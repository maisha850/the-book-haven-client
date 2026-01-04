import React from 'react';
import Banner from './Banner';
import LatestBooks from './LatestBooks';
import Marquee from "react-fast-marquee";
import FeaturedBook from './FeaturedBook';
import About from './About';
import WhyChooseUs from './WhyChooseUs';
import FAQ from './FAQ';
import HerSection from './HerSection';
import HowItWorks from './HowItWorks';
import Newsletter from './Newsletter';


const Home = () => {
    return (
        <div>
            <HerSection></HerSection>
            
            <div className='w-10/12 mx-auto py-15'>
            <h3 className='text-5xl font-bold mb-10 text-center'>Latest Books</h3>
                <LatestBooks></LatestBooks>
            </div>
             <h3 className='text-5xl font-bold mb-10  text-center'>Featured Books</h3>
            <Marquee className='mb-15'>
                <FeaturedBook></FeaturedBook>
            </Marquee>
            <Newsletter></Newsletter>
            <HowItWorks></HowItWorks>
            <WhyChooseUs></WhyChooseUs>
            <FAQ></FAQ>
            <About></About>
        </div>
    );
};

export default Home;