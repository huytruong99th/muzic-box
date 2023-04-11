import React from 'react'
import CardItem from './CardItem';
import './Cards.css'

function Cards() {
  return (
    <div className='cards'>
        <h1>HỆ THỐNG KARAOKE MUZICBOX</h1>
        <div className='cards__container'>
          <div className='cards__wrapper'>
            <ul className='cards__items'>
              <CardItem 
                src="/images/cardbackground.png"
                text='MuzicBox 237 Xã Đàn'
                label='Đống Đa'
                path='/coso/237-xa-dan'
              />
              <CardItem 
                src="/images/cardbackground.png"
                text='MuzicBox 1027 Đường Láng'
                label='Đống Đa'
                path='/coso/1027-lang'
              />
              <CardItem 
                src="/images/cardbackground.png"
                text='MuzicBox 36 Hồ Tùng Mậu'
                label='Cầu Giấy'
                path='/coso/36-ho-tung-mau'
              />
              <CardItem 
                src="/images/cardbackground.png"
                text='MuzicBox 147 Trần Khát Chân'
                label='Hai Bà Trưng'
                path='/coso/147-tran-khat-chan'
              />
              <CardItem 
                src="/images/cardbackground.png"
                text='MuzicBox 237 Xã Đàn'
                label='Đống Đa'
                path='/coso/237-xa-dan'
              />
              <CardItem 
                src="/images/cardbackground.png"
                text='MuzicBox 1027 Đường Láng'
                label='Đống Đa'
                path='/coso/1027-lang'
              />
              <CardItem 
                src="/images/cardbackground.png"
                text='MuzicBox 36 Hồ Tùng Mậu'
                label='Cầu Giấy'
                path='/coso/36-ho-tung-mau'
              />
              <CardItem 
                src="/images/cardbackground.png"
                text='MuzicBox 147 Trần Khát Chân'
                label='Hai Bà Trưng'
                path='/coso/147-tran-khat-chan'
              />
            </ul>
          </div>
        </div>
    </div>
  )
}

export default Cards