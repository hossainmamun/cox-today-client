import React from 'react';
import Navigation from '../Reuse/Navigation.js';
import Hero from './Hero.js';
import Header from './Header.js';
import Banner from './Banner.js';
import Footer from '../Reuse/Footer.js';
import AboutUs from './AboutUs.js';
import HotelRooms from './HotelRooms.js';
import Blog from './Blog.js';
import Review from './Review.js';
import GalleryPhoto from './GalleryPhoto.js';
import LatestOffer from './LatestOffer.js';


const Home = () => {
    return (
        <div>
            <Header />
            <Navigation />
            <Hero />
            <Banner />
            <HotelRooms />
            <LatestOffer />
            <AboutUs />
            <GalleryPhoto />
            <Blog />
            <Review />
            <Footer />
        </div>
    );
};

export default Home;