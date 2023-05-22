import React, {useState} from 'react';
import { Button } from './Button';
import CardItem from './CardItem';
import './HeroSection.css';
import '../App.css'
import { storeList, calDistance } from './data/store';

export const user = {
    lat: 21.017346452929058,
    long: 105.8306251859128
}

function HeroSection() {
    const [getData, setGetdata] = useState(false);
    const [locationPer, setLocationPer] = useState(false);
    const [openModal, setOpenModal] = useState(false);

    const handleOpenModal = () => {
        setOpenModal(!openModal);
    }
    const handleCloseModal = () => {
        setOpenModal(!openModal);
    }
    
    const getPosition = () => {
        return new Promise((res, rej) => {
            navigator.geolocation.getCurrentPosition(res, rej, {
                enableHighAccuracy: true,
                timeout: 5000,
                maximumAge: 0,
            });
        });
    }
    
    async function main() {
        var position = await getPosition()
        /*user.lat = position.coords.latitude;
        user.long = position.coords.longitude;*/
        console.log(position);
    }

    async function waitData() {
        await main();
        if (storeList[0].distance === null) {
            setTimeout( () => setLocationPer(true), 2000);
            setTimeout(calDistance(), 2000);
        } else {
            return;
        }
    }

    async function displayData() {
        await waitData();
        setTimeout(() => {setGetdata(true)}, 2000);
    }

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
                <Button className='btns' buttonStyle='btn--primary' buttonSize='btn--large' onClick={ () => {handleOpenModal(); displayData(); }}>
                    TÌM CƠ SỞ GẦN NHẤT
                </Button>
            </div>
        </div>
        { openModal ? <div className='location__container'>
            <div className='cards__location__container'>
                { !locationPer ? <h5 className='request__description'>Cho phép Website truy cập vị trí của bạn để tìm kiếm cơ sở gần nhất</h5> : <></> }
                <div className='btnClose'>
                <i className="fi fi-sr-cross-circle btnClose-1" onClick={handleCloseModal}></i>
                </div>
               { getData ? storeList.map((item) => (
                    <CardItem 
                        key={item.id}
                        src={item.src}
                        text={item.text}
                        label={item.label}
                        path={item.path}
                        distance={item.distance}
                        location={item.location}
                        renderType={false}
                        />
                    )) : <></>}
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
