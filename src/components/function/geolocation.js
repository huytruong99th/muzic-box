import React, { useState } from "react";

function useLocation() {
    const [location, setLocation] = useState();

    const locate = () => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition((position) => {
                setLocation(
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
                Toạ độ là {location}
            </h1>
        </div>
    )

}

export default useLocation