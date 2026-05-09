import {useState, useEffect} from 'react';

async function fetchWeatherApi(lat, lon){
	const response = await fetch(
	`https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&hourly=temperature_2m`
	)
	const data = await response.json();
	return data;
} 

function useWeather(lat, lon){
	const [weather, setWeather] = useState(null);

	useEffect (() => {
		fetchWeatherApi(lat, lon)
	}, [lat, lon]);

	return weather;
}

export default useWeather;