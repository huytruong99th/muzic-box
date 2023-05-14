import React, {useState} from 'react';
import { Button } from './Button';
import CardItem from './CardItem';
import './HeroSection.css';
import '../App.css'
import { storeList, calDistance } from './data/store';

function HeroSection() {

    const [openModal, setOpenModal] = useState(false);
    const handleOpenModal = () => {
        setOpenModal(!openModal);
    };
    const handleCloseModal = () => {
        setOpenModal(!openModal);
    };
    const [locationPermission, setLocationPermission] = useState(false)
    
    function getPosition() {
        return new Promise((res, rej) => {
            navigator.geolocation.getCurrentPosition(res, rej);
        });
    }
    
    async function main() {
        var position = await getPosition();
        console.log(position);
    }

    const checkPermission = () => {
        navigator.permissions.query({ name: "geolocation" }).then((result) => {
          if (result.state === "granted") {
            setLocationPermission(true);
          } else {
            setLocationPermission(false);
          }
        })
      }
  
      setInterval(checkPermission, 3000);
  
    

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
                <Button className='btns' buttonStyle='btn--primary' buttonSize='btn--large' onClick={ () => {handleCloseModal(); setTimeout(main, 2000); calDistance()}}>
                    TÌM CƠ SỞ GẦN NHẤT
                </Button>
            </div>
        </div>
        { openModal ? <div className='location__container'>
            <div className='cards__location__container'>
                <h5 className='request__description'>Cho phép Website truy cập vị trí của bạn để tìm kiếm cơ sở gần nhất</h5>
                <div className='btnClose'>
                <i className="fi fi-sr-cross-circle btnClose-1" onClick={handleCloseModal}></i>
                </div>
                {storeList.map((item) => (
                    <CardItem 
                        key={item.id}
                        src={item.src}
                        text={item.text}
                        label={item.label}
                        path={item.path}
                        distance={item.distance}
                        location={item.location}

                        locationPermission={locationPermission}
                        renderType={false}
                        />
                    ))}
                {/*<CardItem 
                    text='MuzicBox 237 Xã Đàn'
                />
                <CardItem 
                    text='MuzicBox 1027 Đường Láng'
                />
                <CardItem 
                    text='MuzicBox 36 Hồ Tùng Mậu'
                />
                <CardItem 
                    text='MuzicBox 1027 Đường Láng'
                />
                <CardItem 
                    text='MuzicBox 36 Hồ Tùng Mậu'
                />
                <CardItem 
                    text='MuzicBox 147 Trần Khát Chân'
                />*/}
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
