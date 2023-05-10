import React from 'react';
import '../../App.css';
import HeroSection from '../HeroSection';
import Cards from '../Cards'
import Gallery from '../Gallery';

function Home() {
    return (
        <>
            <HeroSection />
            <Cards />
            <Gallery />
        </>
    );
}

export default Home