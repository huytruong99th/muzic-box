import React from 'react';
import '../../App.css';
import HeroSection from '../HeroSection';
import Cards from '../Cards'
import Gallery from '../Gallery';
import Footer from '../Footer';
import DatePicker from '../DatePicker';

function Booking() {
    return (
        <>
            <Cards />
            <Gallery />
            <DatePicker />
        </>
    );
}

export default Booking