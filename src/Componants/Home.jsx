import React from 'react';
import Banner from './Banner';
import LatestBooks from './LatestBooks';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <div className='w-11/12 mx-auto'>
                <LatestBooks></LatestBooks>
            </div>
        </div>
    );
};

export default Home;