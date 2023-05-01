import React, { useState } from 'react';
import Calendar  from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import './DatePicker.css';
import { add } from 'date-dns';

function DatePicker() {
    const [date, setDate] = useState({
        justDate: null,
        dateTime: null
    })

    const getTimes = () => {
        if (!date.justDate) {
            return 
            const { justDate } = date
            const beginning = 
        }
    }

  return (
    <>
        <div className='date-picker-wrapper'>
            {date.justDate ? 
                <div></div> 
                : 
                <Calendar 
                minDate={new Date()}
                view='month'
                onClickDay={(date) => setDate((prev) => ({...prev, justDate: date}))}
            />
            }
        </div>
    </>
  )
}

export default DatePicker