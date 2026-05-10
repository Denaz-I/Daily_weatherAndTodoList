import {useState, useEffect} from 'react';

async function fetchWeatherApi(latitude, longitude){
	const response = await fetch(
	`https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&hourly=temperature_2m,weather_code`
	)
	const data = await response.json();
	return data;
} 

function useWeather(latitude, longitude){
	const [weather, setWeather] = useState(null);

	useEffect (() => {
		if (!latitude || !longitude) return;
		fetchWeatherApi(latitude, longitude)
		.then (data => setWeather(data));
	}, [latitude, longitude]);
	
	return weather;
}

export default useWeather;