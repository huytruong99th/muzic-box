import React from 'react';
import { Button } from './Button';
import './HeroSection.css';
import '../App.css'

function HeroSection() {
  return (
    <div className='hero-container'>
        <video />
        <h1>Hệ thống Quán hát Karaoke MuzicBox chào mừng quý khách</h1>
        <p>Cung cấp dịch vụ hát Karaoke hàng đầu tại thành phố Hà Nội</p>
        <div className='hero-btns'>
            <Button className='btns' buttonStyle='btn--outline' buttonSize='btn--large'>
                ĐẶT PHÒNG TRỰC TUYẾN
            </Button>
        </div>
        <div ClassName='hero-btns'>
            <Button className='btns' buttonStyle='btn--primary' buttonSize='btn--large'>
                DANH SÁCH CƠ SỞ
            </Button>
        </div>
    </div>
  )
}

export default HeroSection;