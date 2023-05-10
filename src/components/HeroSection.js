import React, {useState} from 'react';
import { Button } from './Button';
import CardItem from './CardItem';
import './HeroSection.css';
import '../App.css'
import { askLocation } from './function/distance/calculatedistance';

function HeroSection() {

    const [openModal, setOpenModal] = useState(false);

    const handleOpenModal = () => {
        setOpenModal(!openModal);
    };

    const handleCloseModal = () => {
        setOpenModal(!openModal);
    };


  return (
    <div className='hero-container'>
        <h1>MuzicBox xin kính chào quý khách</h1>
        <p>MuzicBox cung cấp dịch vụ quán hát Karaoke hàng đầu tại Hà Nội</p>
        <div className='btn-container'>
            <div className='hero-btns'>
                <Button className='btns' buttonStyle='btn--outline' buttonSize='btn--large' path='/dat-phong'>
                    ĐẶT PHÒNG TRỰC TUYẾN
                </Button>
            </div>
            <div className='hero-btns'>
                <Button className='btns' buttonStyle='btn--primary' buttonSize='btn--large' onClick={handleOpenModal}>
                    TÌM CƠ SỞ GẦN NHẤT
                </Button>
            </div>
        </div>
        { openModal ? <div className='location__container'>
            <div className='cards__location__container'>
                <div className='btnClose'>
                <i className="fi fi-sr-cross-circle btnClose-1" onClick={handleCloseModal}></i>
                </div>
                <CardItem 
                    text='MuzicBox 237 Xã Đàn'
                    label='Đống Đa'
                />
                <CardItem 
                    text='MuzicBox 1027 Đường Láng'
                    label='Đống Đa'
                />
                <CardItem 
                    text='MuzicBox 36 Hồ Tùng Mậu'
                    label='Cầu Giấy'
                />
                <CardItem 
                    text='MuzicBox 1027 Đường Láng'
                    label='Đống Đa'
                />
                <CardItem 
                    text='MuzicBox 36 Hồ Tùng Mậu'
                    label='Cầu Giấy'
                />
                <CardItem 
                    text='MuzicBox 147 Trần Khát Chân'
                    label='Cầu Giấy'
                />
            </div>
            <div className='location__container-layer' onClick={handleOpenModal}></div>
        </div>
            :
            <></>
        }
    </div>
  )
}

export default HeroSection;
