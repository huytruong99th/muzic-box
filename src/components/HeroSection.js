import React from 'react';
import { Button } from './Button';
import './HeroSection.css';
import '../App.css'

function HeroSection() {
  return (
    <div className='hero-container'>
        <h1>MuzicBox xin kính chào quý khách</h1>
        <p>MuzicBox cung cấp dịch vụ quán hát Karaoke hàng đầu tại Hà Nội</p>
        <div className='btn-container'>
            <div className='hero-btns'>
                <Button className='btns' buttonStyle='btn--outline' buttonSize='btn--large'>
                    ĐẶT PHÒNG TRỰC TUYẾN
                </Button>
            </div>
            <div className='hero-btns'>
                <Button className='btns' buttonStyle='btn--primary' buttonSize='btn--large'>
                    DANH SÁCH CƠ SỞ
                </Button>
            </div>
        </div>
    </div>
  )
}

export default HeroSection;