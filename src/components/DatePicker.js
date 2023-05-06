import React, { useState } from 'react';
import Calendar  from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import './DatePicker.css';
import CardItem from './CardItem';
import { add, format, setDefaultOptions } from "date-fns";
import Cards from './Cards';
import { vi } from 'date-fns/locale'


function DatePicker() {
    setDefaultOptions({ locale: vi })

    const [date, setDate] = useState({
        justDate: null,
        dateTime: null
    });

    const [booked, setBook] = useState({
        Date: null
    });

    const [location, setLocation] = useState({
        Location: null
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

    const times = getTimes()

    const handleLocationClick = (newLocation) => {
        setLocation({
            Location: newLocation
        });
        Back();
        console.log(location.Location)

    }


  return (
    <>  <div className='booking-container'>
            <div className='place-container'>
                <div>
                    <h3>CHỌN CƠ SỞ ĐẶT PHÒNG</h3>
                </div>
                <div className="place-wrapper">                
                    <CardItem
                        src="/images/cardbackground.png"
                        text='MuzicBox 237 Xã Đàn'
                        value='MuzicBox 237 Xã Đàn'
                        label='Đống Đa'
                        onClick={handleLocationClick}
                    />
                    <CardItem 
                        src="/images/cardbackground.png"
                        text='MuzicBox 111 Ô Chợ Dừa'
                        value='MuzicBox 111 Xã Đàn'
                        label='Đống Đa'
                        onClick={handleLocationClick}
                    />
                    <CardItem 
                        src="/images/cardbackground.png"
                        text='MuzicBox 345 Hoàng Mai'
                        value='MuzicBox 345 Hoàng Mai'
                        label='Hoàng Mai'
                        onClick={handleLocationClick}
                    />
                    <CardItem 
                        src="/images/cardbackground.png"
                        text='MuzicBox 23 Đường Láng'
                        value='MuzicBox 23 Đường Láng'
                        label='Đống Đa'
                        onClick={handleLocationClick}
                    />
                    <CardItem 
                        src="/images/cardbackground.png"
                        text='MuzicBox 44 Nguyễn Chí Thanh'
                        value='MuzicBox 44 Nguyễn Chí Thanh'
                        label='Đống Đa'
                        onClick={handleLocationClick}
                    />
                    <CardItem 
                        src="/images/cardbackground.png"
                        text='MuzicBox 88 Xuân Thuỷ'
                        value='MuzicBox 88 Xuân Thuỷ'
                        label='Đống Đa'
                        onClick={handleLocationClick}
                    />
                    <CardItem 
                        src="/images/cardbackground.png"
                        text='MuzicBox 66 Trần Khát Chân'
                        value='MuzicBox 66 Trần Khát Chân'
                        label='Hai Bà Trưng'
                        onClick={handleLocationClick}
                    />
                </div>
            </div>

            <div className='date-picker-container'>
                <div>
                    <h3>CHỌN THỜI GIAN ĐẶT PHÒNG</h3>
                </div>

                {location.Location ? 
                <div>
                    {date.justDate ? 
                    <div className='mt-4'>
                        <div className='mb-5'>
                            <button className='rounded-lg bg-gray-100 p-2 text-blue-900 font-semibold' onClick={Back}>← QUAY LẠI</button>
                        </div>
                        <div className ='flex gap-4 flex-wrap'>
                            {
                            times?.map((time, i) => (
                                <div key={`time-${i}`}>
                                    <button type='button' className='rounded-lg bg-gray-100 p-2' onClick={() => setDate((prev => ({...prev, dateTime: time })))}>
                                        {format(time, 'kk:mm')}
                                    </button>
                                </div>
                            ))
                            }
                        </div>
                        {date.dateTime?
                            <div className="booking-info">
                                <p>Cơ sở đã chọn: <span>{location.Location}</span></p>
                                <p>Ngày đã chọn: <span>{String(format(date.justDate, 'dd/MM/yyyy'))}</span></p>
                                <p>Giờ đã chọn: <span>{String(format(date.dateTime, 'kk:mm'))}</span></p>
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
                :
                <div></div>
                }   

            </div>
        </div>
    </>
  )
}

export default DatePicker