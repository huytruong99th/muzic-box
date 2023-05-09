import React from 'react';
import '../../App.css';
import HeroSection from '../HeroSection';
import Cards from '../Cards'
import Gallery from '../Gallery';
import Location from '../function/geolocation';

function Home() {
    return (
        <>
            <HeroSection />
            <Cards />
            <Gallery />
            <Location />
        </>
    );
}

export default Home