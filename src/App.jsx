import './App.css'
import WeatherCard from './components/Weather/WeatherCard'
import SearchBar from './components/SearchBar'
import useCoordinates from './hooks/useCoordinates'
import useWeather from './hooks/useWeather'

import {useState, useEffect} from 'react'



function App() {

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
    <WeatherCard weather={weather} city={coordinates?.name}/>
    </>
  ) 

}

export default App