import {useState, useEffect} from 'react';

async function fetchCoordinatesApi(city) {
    const response = await fetch(
        `https://geocoding-api.open-meteo.com/v1/search?name=${city}&count=5&language=it`    );
    const data = await response.json();
    return data;
}

function useCoordinates(city) {
    const [coordinates, setCoordinates] = useState(null);

    useEffect(() => {
        fetchCoordinatesApi(city)
    }, [city]);

    return coordinates;
}

export default useCoordinates;