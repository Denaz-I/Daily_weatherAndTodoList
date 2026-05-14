import './App.css'
import WeatherCard from './components/Weather/WeatherCard'
import SearchBar from './components/SearchBar'
import useCoordinates from './hooks/useCoordinates'
import useWeather from './hooks/useWeather'

import {useState, useEffect} from 'react'


function App() {

  const [selectedDay, setSelectedDay] = useState(0);
  const [inputValue, setInputValue] = useState('');
  const [city, setCity] = useState('');
  const coordinates = useCoordinates(city);
  const weather = useWeather(coordinates?.latitude, coordinates?.longitude);

  useEffect(() => {
    const timer = setTimeout(() => {
      setCity(inputValue)
    }, 500)

    return (() => {
      clearTimeout(timer)
    }
    )
  }, [inputValue])

  console.log(coordinates)
  console.log(weather)
  return (
    <>
    <SearchBar onChange={(e) => setInputValue(e.target.value)}/>
    <div className="flex flex-row">
      <WeatherCard weather={weather} city={coordinates?.name} index={0} selectedDay={selectedDay} onClick={() => setSelectedDay(0)} onMouseEnter/>
      <WeatherCard weather={weather} city={coordinates?.name} index={1} selectedDay={selectedDay} onClick={() => setSelectedDay(1)}/>
      <WeatherCard weather={weather} city={coordinates?.name} index={2} selectedDay={selectedDay} onClick={() => setSelectedDay(2)}/>
      <WeatherCard weather={weather} city={coordinates?.name} index={3} selectedDay={selectedDay} onClick={() => setSelectedDay(3)}/>
      <WeatherCard weather={weather} city={coordinates?.name} index={4} selectedDay={selectedDay} onClick={() => setSelectedDay(4)}/>
      <WeatherCard weather={weather} city={coordinates?.name} index={5} selectedDay={selectedDay} onClick={() => setSelectedDay(5)}/>
      <WeatherCard weather={weather} city={coordinates?.name} index={6} selectedDay={selectedDay} onClick={() => setSelectedDay(6)}/>
    </div>
    </>
  ) 

}

export default App