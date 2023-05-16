import React, {useState} from 'react'
import CardItem from './CardItem';
import './Cards.css';
import { storeList } from './data/store';

function Cards() {
  return (
    <div className='cards'>
        <div className='cards__container'>
            <ul className='cards__items'>
              {storeList.map((item) => (
                <CardItem 
                  key={item.id}
                  src={item.src}
                  text={item.text}
                  label={item.label}
                  path={item.path}
                  distance={item.distance}
                  location={item.location}
                  renderType={true}
                  onClick={() => {return}}
                />
              ))}
              {/*<CardItem 
                src="/images/cardbackground.png"
                text='MuzicBox 237 Xã Đàn'
                label='Đống Đa'
                path='/dat-phong'
                onClick={() => {return}}
                distance={`${2+3} km`}
                renderType='true'
                locationPermission={locationPermission}
              />
              <CardItem 
                src="/images/cardbackground.png"
                text='MuzicBox 1027 Đường Láng'
                label='Đống Đa'
                path='/coso/1027-lang'
                onClick={() => {return}}
                renderType='true'
                locationPermission={locationPermission}
              />
              <CardItem 
                src="/images/cardbackground.png"
                text='MuzicBox 36 Hồ Tùng Mậu'
                label='Cầu Giấy'
                path='/coso/36-ho-tung-mau'
                onClick={() => {return}}
                renderType='true'
                locationPermission={locationPermission}
              />
              <CardItem 
                src="/images/cardbackground.png"
                text='MuzicBox 147 Trần Khát Chân'
                label='Hai Bà Trưng'
                path='/coso/147-tran-khat-chan'
                onClick={() => {return}}
                renderType='true'
                locationPermission={locationPermission}
              />
              <CardItem 
                src="/images/cardbackground.png"
                text='MuzicBox 237 Xã Đàn'
                label='Đống Đa'
                path='/coso/237-xa-dan'
                onClick={() => {return}}
                renderType='true'
                locationPermission={locationPermission}
              />
              <CardItem 
                src="/images/cardbackground.png"
                text='MuzicBox 1027 Đường Láng'
                label='Đống Đa'
                path='/coso/1027-lang'
                onClick={() => {return}}
                renderType='true'
                locationPermission={locationPermission}
              />
              <CardItem 
                src="/images/cardbackground.png"
                text='MuzicBox 36 Hồ Tùng Mậu'
                label='Cầu Giấy'
                path='/coso/36-ho-tung-mau'
                onClick={() => {return}}
                renderType='true'
                locationPermission={locationPermission}
              />
              <CardItem 
                src="/images/cardbackground.png"
                text='MuzicBox 147 Trần Khát Chân'
                label='Hai Bà Trưng'
                path='/coso/147-tran-khat-chan'
                onClick={() => {return}}
                renderType='true'
                locationPermission={locationPermission}
              />*/}
            </ul>
        </div>
    </div>
  )
}

export default Cards