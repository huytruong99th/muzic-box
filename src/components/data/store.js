import { user } from "../HeroSection";

export const storeList = [
    {
        id: 1,
        src: "/images/cardbackground.webp",
        text: 'MuzicBox 237 Xã Đàn',
        label: 'Đống Đa',
        path: '/dat-phong',
        path2: '',
        distance: null,
        location: [21.017346452929058, 105.8306251859128]
        
    },

    {   
        id: 2,
        src: "/images/cardbackground.webp",
        text: 'MuzicBox 1027 Đường Láng',
        label: 'Đống Đa',
        path: '/dat-phong',
        path2: '',
        distance: null,
        location: [21.023192283554174, 105.79964961582967]
    },

    {
        id: 3,
        src: "/images/cardbackground.webp",
        text: 'MuzicBox 147 Trần Khát Chân',
        label: 'Hai Bà Trưng',
        path: '/dat-phong',
        path2: '',
        distance: null,
        location: [21.006904541866838, 105.86603354956688]
    },

    {
        id: 4,
        src: "/images/cardbackground.webp",
        text: 'MuzicBox 28 Ngô Gia Tự',
        label: 'Long Biên',
        path: '/dat-phong',
        path2: '',
        distance: null,
        location: [21.05633828518619, 105.88984394034304]
    },

    {
        id: 5,
        src: "/images/cardbackground.webp",
        text: 'MuzicBox 32 Xuân Thuỷ',
        label: 'Cầu Giấy',
        path: '/dat-phong',
        path2: '',
        distance: null,
        location: [21.036413861411678, 105.78945836471748]
    },

    {   
        id: 6,
        src: "/images/cardbackground.webp",
        text: 'MuzicBox 50 Vườn Cam',
        label: 'Nam Từ Liêm',
        path: '/dat-phong',
        path2: '',
        distance: null,
        location: [21.014168680516704, 105.77103924140172]
    },

    {   
        id: 7,
        src: "/images/cardbackground.webp",
        text: 'MuzicBox 70 Chiến Thắng',
        label: 'Hà Đông',
        path: '/dat-phong',
        path2: '',
        distance: null,
        location: [20.982354557564165, 105.79411109075095]

    },

    {
        id: 8,
        src: "/images/cardbackground.webp",
        text: 'MuzicBox 92 Bùi Xương Trạch',
        label: 'Thanh Xuân',
        path: '/dat-phong',
        path2: '',
        distance: null,
        location: [20.988681331945923, 105.81613058249357]

    }
];

const API = 'Anwq3ixnWe6DKcD1BjeUXZrSrhR4v1676Q1Tngq3SFkAQbBpz_17Jw_4RAvqGwlM';

function calDistance() {
    for (let i = 0 ; i < storeList.length ; i++) {
        const des = {
            lat: null,
            long: null
        };
        let currentdate = new Date();
        currentdate =  currentdate.toISOString();
        des.lat = storeList[i].location[0];
        des.long = storeList[i].location[1];
        let endpoint = `https://dev.virtualearth.net/REST/v1/Routes/DistanceMatrix?origins=${user.lat},${user.long}&destinations=${des.lat},${des.long}&travelMode=driving&startTime=${currentdate}&timeUnit=minute&key=${API}`
        storeList[i].path2 = `https://www.google.com/maps/dir/${user.lat},${user.long}/${storeList[i].location[0]},${storeList[i].location[1]}/`
        fetch(endpoint).then(response => {
            if (response.ok) {
                return response.json();
            }
            throw new Error('Request failed!');
        }, networkError => {
            console.log(networkError.messege)
        }).then(jsonResponse => {
            console.log(jsonResponse)
            const result = jsonResponse;
            const distance = result["resourceSets"][0]["resources"][0]["results"][0]["travelDistance"];
            const textDistance = `${distance.toFixed(1)} km`;
            storeList[i].distance = textDistance;
        });
    };
};

/* async function getDistance() {
    const { DistanceMatrixService, TravelMode } = window.google.maps.importLibrary("routes");
    const { LatLng, UnitSystem } = await window.google.maps.importLibrary("core");
    des.lat = storeList[0].location[0];
    des.long = storeList[0].location[1];
    console.log('aaaaaa')
    var origin1 = new LatLng(21.023192283554174, 105.79964961582967);
    var origin2 = 'User Location'
    var destinationA = storeList[0].text;
    var destinationB = new LatLng(des.lat, des.long);

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
        console.log('bbbbbbbbbbbbbbbb')
    
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
                        };
                
                    }
                }
            };
};

window.calDistance = calDistance */

export { calDistance }