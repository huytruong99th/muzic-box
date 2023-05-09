import React, {useState} from 'react';

function Location() {
    const [location, setLocation] = useState();

    const locate = () => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition((position) => {
                setLocation(
                    [
                    position.coords.latitude, position.coords.longitude
                    ]);
            });
        }
    }

    const calculateDistance = () => {
        console.log('dog')
    }
    
    return (
        <div className='ok'>
            <h1 onClick={ 
                            locate
                        }>
                Toạ độ là {location}
            </h1>
        </div>
    )

}

export default Location