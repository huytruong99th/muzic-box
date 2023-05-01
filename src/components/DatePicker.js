import React, { useState } from 'react';
import Calendar  from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import './DatePicker.css';
import { add, format } from "date-fns";

function DatePicker() {
    const [date, setDate] = useState({
        justDate: null,
        dateTime: null
    })

    const getTimes = () => {
        if(!date.justDate) {
            return
        };
        const d = new Date();
        let currentHour = d.getHours();
        let currentMinutes = d.getMinutes();
        console.log(currentHour);
        if ( currentHour <= 9 ) {
            currentHour = 9;
        };
        const { justDate } = date;
        const beginning = add(justDate, { hours: currentHour });
        const end = add(justDate, { hours: 24 });
        const interval = 30; //in minutes
        const times = [];
        for (let i = beginning; i <= end ; i = add(i, { minutes: interval })) {
            times.push(i);
        };
        if (currentMinutes >= 30) {
            times.shift();
        };
        return times
    }

    const times = getTimes()


  return (
    <>
        <div className='date-picker-wrapper'>
            <div className='date-picker-container'>
            {date.justDate ? 
                <div className ='flex gap-4 flex-wrap'>
                    {
                    times?.map((time, i) => (
                        <div key={`time-${i}`}>
                            <button type='button' className='rounded-sm bg-gray-100 p-2' onClick={() => setDate((prev => ({...prev, dateTime: time })))}>
                                {format(time, 'kk:mm')}
                            </button>
                        </div>
                    ))
                    }
                </div> 
                : 
                <Calendar 
                minDate={new Date()}
                view='month'
                onClickDay={(date) => setDate((prev) => ({...prev, justDate: date}))}
                />
            }
            </div>
        </div>
    </>
  )
}

export default DatePicker