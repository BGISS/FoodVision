import React, {useEffect, useState} from "react";

function CurrentLocation(){

    // useState to store values of latitude and longitude
    const [latitude, setLatitude] = useState<number>(0);
    const [longitude, setLongitude] = useState<number>(0);

    useEffect(() => {
        navigator.geolocation.getCurrentPosition((position) => {
            console.log(position.coords)
            setLatitude(position.coords.latitude);
            setLongitude(position.coords.longitude);

        });
    }, []);

    return{
        latitude,
        longitude
    };
    
}



export default CurrentLocation;