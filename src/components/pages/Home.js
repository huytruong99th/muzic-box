import React from 'react';
import '../../App.css';
import HeroSection from '../HeroSection';
import Cards from '../Cards'
import Gallery from '../Gallery';
import Footer from '../Footer';
import useLocation from '../function/geolocation';

function Home() {
    return (
        <>
            <HeroSection />
            <Cards />
            <Gallery />
            <useLocation />
        </>
    );
}

export default Home