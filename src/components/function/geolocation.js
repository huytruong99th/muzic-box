import React, {useState} from 'react';

function useLocation1() {
    const [location1, setLocation1] = useState();

    const locate = () => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition((position) => {
                setLocation1(
                    {
                    lat: position.coords.latitude,
                    long: position.coords.longitude
                    });
            });
        }
    }

    const calculateDistance = () => {
        console.log('dog')
    }
    
    return (
        <div className='ok'>
            <h1 onClick={ () => {
                            locate();
                            calculateDistance();
                        }}>
                Toạ độ là {location1}
            </h1>
        </div>
    )

}

export default useLocation1