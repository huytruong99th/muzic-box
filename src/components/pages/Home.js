import React from 'react';
import '../../App.css';
import HeroSection from '../HeroSection';
import Cards from '../Cards'
import Gallery from '../Gallery';
import Footer from '../Footer';

function Home() {
    return (
        <>
            <HeroSection />
            <Cards />
            <Gallery />
            <Footer />
        </>
    );
}

export default Home