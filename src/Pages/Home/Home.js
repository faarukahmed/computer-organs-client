import React from 'react';
import BusinessSummary from '../Shared/BusinessSummary';
import Footer from '../Shared/Footer';
import Banner from './Banner';
import Contact from './Contact';
import HomeProducts from './HomeProducts';
import NewsLetter from './NewsLetter';
import Reviews from './Reviews';

const Home = () => {
    return (
        <div>
            <Banner/>
            <BusinessSummary/>
            <HomeProducts/>
            <Reviews/>
            <NewsLetter/>
            <Contact/>
            <Footer/>
        </div>
    );
};

export default Home;