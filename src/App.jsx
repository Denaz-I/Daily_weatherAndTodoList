import './App.css'
import WeatherCard from './components/Weather/WeatherCard'
import SearchBar from './components/SearchBar'
import TasksBox from './components/TasksBox/Index'
import useCoordinates from './hooks/useCoordinates'
import useWeather from './hooks/useWeather'

import {useState, useEffect} from 'react'


function App() {

  const [selectedDay, setSelectedDay] = useState(0);
  const [inputValue, setInputValue] = useState('');
  const [city, setCity] = useState('');
  const coordinates = useCoordinates(city);
  const weather = useWeather(coordinates?.latitude, coordinates?.longitude, "hourly=temperature_2m,weather_code");
  const weatherDaily = useWeather(coordinates?.latitude, coordinates?.longitude, "daily=temperature_2m_max,weather_code");

  useEffect(() => {
    const timer = setTimeout(() => {
      setCity(inputValue)
    }, 500)

    return (() => {
      clearTimeout(timer)
    }
    )
  }, [inputValue])

  // console.log(coordinates)
  // console.log(weather)
  return (
    <>
    <SearchBar onChange={(e) => setInputValue(e.target.value)}/>
    <div className="flex flex-row">
      {Array.from({length: 7}, (_, i) => (
      <WeatherCard key={i} weather={weather} weatherDaily={weatherDaily} city={coordinates?.name} index={i} selectedDay={selectedDay} onClick={() => setSelectedDay(i)}/>
    ))}
    <TasksBox className />
    </div>
    </>
  ) 

}

export default App