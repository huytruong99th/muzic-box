import React from 'react'
import CardItem from './CardItem';
import './Cards.css'
import useLocation from './function/GeoLocation';

function Cards() {
  return (
    <div className='cards'>
        <div className='cards__container'>
          <div className='cards__wrapper'>
            <ul className='cards__items'>
              <useLocation />
              <CardItem 
                src="/images/cardbackground.png"
                text='MuzicBox 237 Xã Đàn'
                label='Đống Đa'
                path='/dat-phong'
                onClick={() => {return}}
                latitude=''
                longitude=''
              />
              <CardItem 
                src="/images/cardbackground.png"
                text='MuzicBox 1027 Đường Láng'
                label='Đống Đa'
                path='/coso/1027-lang'
                onClick={() => {return}}
              />
              <CardItem 
                src="/images/cardbackground.png"
                text='MuzicBox 36 Hồ Tùng Mậu'
                label='Cầu Giấy'
                path='/coso/36-ho-tung-mau'
                onClick={() => {return}}
              />
              <CardItem 
                src="/images/cardbackground.png"
                text='MuzicBox 147 Trần Khát Chân'
                label='Hai Bà Trưng'
                path='/coso/147-tran-khat-chan'
                onClick={() => {return}}
              />
              <CardItem 
                src="/images/cardbackground.png"
                text='MuzicBox 237 Xã Đàn'
                label='Đống Đa'
                path='/coso/237-xa-dan'
                onClick={() => {return}}
              />
              <CardItem 
                src="/images/cardbackground.png"
                text='MuzicBox 1027 Đường Láng'
                label='Đống Đa'
                path='/coso/1027-lang'
                onClick={() => {return}}
              />
              <CardItem 
                src="/images/cardbackground.png"
                text='MuzicBox 36 Hồ Tùng Mậu'
                label='Cầu Giấy'
                path='/coso/36-ho-tung-mau'
                onClick={() => {return}}
              />
              <CardItem 
                src="/images/cardbackground.png"
                text='MuzicBox 147 Trần Khát Chân'
                label='Hai Bà Trưng'
                path='/coso/147-tran-khat-chan'
                onClick={() => {return}}
              />
            </ul>
          </div>
        </div>
    </div>
  )
}

export default Cards