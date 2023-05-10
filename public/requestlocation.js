
setTimeout(function() {
if (navigator.geolocation) {
navigator.geolocation.getCurrentPosition(showPosition);
} else {
console.log("Geolocation is not supported by this browser.");
}
}, 3000);

function showPosition(position) {
console.log("Latitude: " + position.coords.latitude + 
", Longitude: " + position.coords.longitude);
}