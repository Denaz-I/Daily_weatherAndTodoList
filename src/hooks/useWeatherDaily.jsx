import {useState, useEffect} from 'react';

async function fetchWeatherApi(latitude, longitude){
	const response = await fetch(
	`https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&daily=temperature_2m_max,weather_code`
	)
	const data = await response.json();
	return data;
} 

function useWeatherDaily(latitude, longitude){
	const [weather, setWeather] = useState(null);

	useEffect (() => {
		if (!latitude || !longitude) return;
		fetchWeatherApi(latitude, longitude)
		.then (data => setWeather(data));
	}, [latitude, longitude]);
	
	return weather;
}

export default useWeatherDaily;