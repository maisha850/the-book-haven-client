import React from 'react';
import Banner from './Banner';
import LatestBooks from './LatestBooks';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            
            <div className='w-10/12 mx-auto py-15'>
            <h3 className='text-5xl font-bold mb-10 text-center'>Latest Books</h3>
                <LatestBooks></LatestBooks>
            </div>
        </div>
    );
};

export default Home;