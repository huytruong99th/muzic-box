import React, { useState } from 'react';
import Calendar  from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import './DatePicker.css';
import CardItem from './CardItem';
import { add, format, setDefaultOptions } from "date-fns";
import { vi } from 'date-fns/locale'
import { storeList } from './data/store';


function DatePicker() {
    setDefaultOptions({ locale: vi })

    const [date, setDate] = useState({
        justDate: null,
        dateTime: null
    });

    const [booked, setBook] = useState({
        Date: null
    });

    const [store, setStore] = useState({
        Store: null
    });

    const getTimes = () => {
        if(!date.justDate) {
            return
        };
        const d = new Date();
        let currentHour = d.getHours();
        let currentMinutes = d.getMinutes();
        console.log(currentHour);
        if ( currentHour <= 8 || date.justDate.getDate() !== d.getDate() ) {
            currentHour = 8;
        };
        const { justDate } = date;
        const beginning = add(justDate, { hours: currentHour });
        const end = add(justDate, { hours: 24 });
        const interval = 30; //in minutes
        const times = [];
        for (let i = beginning; i <= end ; i = add(i, { minutes: interval })) {
            times.push(i);
        };
        if (currentMinutes >= 30 && date.justDate.getDate() === d.getDate()) {
            times.shift();
        };
        return times
    }

    const Back = () => {
        setDate({
            justDate: null,
            dateTime: null
        })
    }

    const Back2 = () => {
        setStore({
            Store: null
        });
    }


    const times = getTimes()

    const handleStoreClick = (newStore) => {
        setStore({
            Store: newStore
        });
        Back();
        console.log(store.Store)
    }

    const [mobileMode, setMobileMode] = useState(false);
    const showMobile = () => {
        if(window.innerWidth <= 960) {
            setMobileMode(true);
        } else {
            setMobileMode(false);
        }
      }
    window.addEventListener('resize', showMobile);

    const [locationPermission, setLocationPermission] = useState(false)
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
    <>  <div className='booking-container'>
            <div className='place-container'>
                <div>
                    <h3>CHỌN CƠ SỞ ĐẶT PHÒNG</h3>
                </div>
                <div className="place-wrapper">
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
                        renderType={true}
                        onClick={handleStoreClick}
                        />
                    ))}               
                </div>
            </div>

            {store.Store ? 
            <div className='date-picker-container'>
                    <h3>CHỌN THỜI GIAN ĐẶT PHÒNG</h3>
                    <p className='font-medium'>Cơ sở đã chọn: <span className='font-semibold text-yellow-600'>{store.Store}</span></p>
                    {!date.justDate ?
                    <div>
                        <button className='rounded-lg bg-gray-100 p-2 font-semibold back-btn' onClick={Back2}>CHỌN CƠ SỞ</button>
                    </div>
                    :
                    <></>}
                <div className='date-picker-wrapper'>
                    {date.justDate ? 
                    <div className='mt-4'>
                        <div className='mb-5'>
                            <button className='rounded-lg bg-gray-100 p-2 font-semibold back-btn' onClick={Back}>← QUAY LẠI</button>
                        </div>
                        <div className ='flex gap-4 flex-wrap time-container'>
                            {
                            times?.map((time, i) => (
                                <div key={`time-${i}`}>
                                    <button type='button' className='rounded-lg bg-gray-100 p-2 time--button' onClick={() => setDate((prev => ({...prev, dateTime: time })))}>
                                        {format(time, 'kk:mm')}
                                    </button>
                                </div>
                            ))
                            }
                        </div>
                        {date.dateTime ?
                        <div>
                            <div className="booking-info">
                                <p className='font-bold'>Thông tin đặt phòng của bạn:</p>
                                <p className='font-medium'>Cơ sở đã chọn: <span className='font-semibold text-yellow-600'>{store.Store}</span></p>
                                <p className='font-medium'>Ngày: <span className='font-semibold text-yellow-600 mr-3'>{String(format(date.justDate, 'dd/MM/yyyy'))}</span> Giờ: <span className='font-semibold text-yellow-600'>{String(format(date.dateTime, 'kk:mm'))}</span></p>
                            </div>
                            <div>
                                <form className='customer-information'>
                                    <div>
                                        <label for='name-input' className='font-semibold'>Nhập Tên của bạn: </label>
                                        <input 
                                            type='text' 
                                            id='name-input' 
                                            name="name"
                                            required
                                        >
                                        </input>
                                    </div>
                                    <div>
                                        <label for='phone-number-input' className='font-semibold'>Nhập SĐT của bạn: </label>
                                        <input 
                                            type='tel' 
                                            id='phone-number-input' 
                                            name="phone"
                                            pattern="^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$"
                                            maxlength="10"
                                            required
                                        >
                                        </input>
                                    </div>
                                    <div>
                                        <label for='email-input' className='font-semibold'>Nhập email của bạn (nếu có): </label>
                                        <input type='email' id='email-input' pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2, 4}$"></input>
                                    </div>
                                    <div>
                                        <label for='note-input' className='font-semibold'>Ghi chú dành cho nhân viên: </label>
                                        <div>
                                            <input type='text' id='note-input'></input>
                                        </div>
                                    </div>
                                    <div>
                                        <input type='submit' value='ĐẶT PHÒNG' />
                                    </div>
                                </form>
                            </div>
                        </div>
                            : 
                            <>
                            </>}
                    </div>
                    : 
                    <Calendar 
                    minDate={new Date()}
                    locale='vi'
                    view='month'
                    onClickDay={(date) => setDate((prev) => ({...prev, justDate: date}))}
                    />
                    }

                </div> 
            </div>
                :
            <></>}
        </div>
    </>
  )
}

export default DatePicker