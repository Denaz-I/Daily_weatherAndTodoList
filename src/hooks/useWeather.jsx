import {useState, useEffect} from 'react';

async function fetchWeatherApi(latitude, longitude, params){
	const response = await fetch(
	`https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&${params}`
	)
	const data = await response.json();
	return data;
} 

function useWeather(latitude, longitude, params){
	const [weather, setWeather] = useState(null);

	useEffect (() => {
		if (!latitude || !longitude || !params) return;
		fetchWeatherApi(latitude, longitude, params)
		.then (data => setWeather(data));
	}, [latitude, longitude, params]);
	
	return weather;
}

export default useWeather;