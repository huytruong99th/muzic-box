let userLocation;

export function returnLocation() {
    return userLocation;
}

export function askLocation() { 
    
    setTimeout(function() {
    if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition);
    return userLocation
    } else {
    console.log("Geolocation is not supported by this browser.");
    }
    }, 3000);
    
    function showPosition(position) {
    userLocation = [position.coords.latitude, position.coords.longitude]
    console.log(userLocation);
    console.log("Latitude: " + position.coords.latitude + 
    ", Longitude: " + position.coords.longitude);
    }
}