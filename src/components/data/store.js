export const storeList = [
    {
        id: 1,
        src: "/images/cardbackground.png",
        text: 'MuzicBox 237 Xã Đàn',
        label: 'Đống Đa',
        path: '/dat-phong',
        distance: '',
        location: [21.017346452929058, 105.8306251859128]
        
    },

    {   
        id: 2,
        src: "/images/cardbackground.png",
        text: 'MuzicBox 1027 Đường Láng',
        label: 'Đống Đa',
        path: '/dat-phong',
        distance: '',
        location: [21.023192283554174, 105.79964961582967]
    },

    {
        id: 3,
        src: "/images/cardbackground.png",
        text: 'MuzicBox 147 Trần Khát Chân',
        label: 'Hai Bà Trưng',
        path: '/dat-phong',
        distance: '',
        location: [21.006904541866838, 105.86603354956688]
    },

    {
        id: 4,
        src: "/images/cardbackground.png",
        text: 'MuzicBox 28 Ngô Gia Tự',
        label: 'Long Biên',
        path: '/dat-phong',
        distance: '',
        location: [21.05633828518619, 105.88984394034304]
    },

    {
        id: 5,
        src: "/images/cardbackground.png",
        text: 'MuzicBox 32 Xuân Thuỷ',
        label: 'Cầu Giấy',
        path: '/dat-phong',
        distance: '',
        location: [21.036413861411678, 105.78945836471748]
    },

    {   
        id: 6,
        src: "/images/cardbackground.png",
        text: 'MuzicBox 50 Vườn Cam',
        label: 'Nam Từ Liêm',
        path: '/dat-phong',
        distance: '',
        location: [21.014168680516704, 105.77103924140172]
    },

    {   
        id: 7,
        src: "/images/cardbackground.png",
        text: 'MuzicBox 70 Chiến Thắng',
        label: 'Hà Đông',
        path: '/dat-phong',
        distance: '',
        location: [20.982354557564165, 105.79411109075095]

    },

    {
        id: 8,
        src: "/images/cardbackground.png",
        text: 'MuzicBox 92 Bùi Xương Trạch',
        label: 'Thanh Xuân',
        path: '/dat-phong',
        distance: '',
        location: [20.988681331945923, 105.81613058249357]

    }
];

const user = {
    lat: null,
    long: null
};

const des = {
    lat: null,
    long: null
};

let dis;

function getUserPosition() {
    navigator.geolocation.getCurrentPosition((position) => {
        user.lat = position.coords.latitude;
        user.long = position.coords.longitude;
    })
}



const calDistance = () => {
    navigator.permissions.query({ name: "geolocation" }).then((result) => {
      if (result.state === "granted") {
        getUserPosition()
        for (let i = 0; i < 1; i++) {
            des.lat = storeList[i].location[0];
            des.long = storeList[i].location[1];

            var origin1 = new window.google.maps.LatLng(user.lat, user.long);
            var origin2 = 'User Location'
            var destinationA = storeList[i].text;
            var destinationB = new window.google.maps.LatLng(des.lat, des.long);

            var service = new window.google.maps.DistanceMatrixService();
            service.getDistanceMatrix(
            {
                origins: [origin1, origin2],
                destinations: [destinationA, destinationB],
                travelMode: window.google.maps.TravelMode.DRIVING,
                unitSystem: window.google.maps.UnitSystem.METRIC,
                avoidHighways: true,
                avoidTolls: true,
            }, callback);

            function callback(response, status) {
                if (status == 'OK') {
                var origins = response.originAddresses;
                var destinations = response.destinationAddresses;
            
                for (var i = 0; i < origins.length; i++) {
                    var results = response.rows[i].elements;
                    for (var j = 0; j < results.length; j++) {
                    var element = results[j];
                    var distance = element.distance.text;
                    storeList[i].distance = distance;
                    var duration = element.duration.text;
                    var from = origins[i];
                    var to = destinations[j];
                    console.log(distance)
                    }
            }}}}
      } else {
        return;
      };})
};

window.calDistance = calDistance

export { calDistance }