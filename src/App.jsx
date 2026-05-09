import './App.css'
import WeatherCard from './components/Weather/WeatherCard'
import SearchBar from './components/SearchBar'
import useCoordinates from './hooks/useCoordinates'
import useWeather from './hooks/useWeather'

import {usestate} from 'react'

function App() {

  const {city, setCity} = usestate('');
  const coordinates = useCoordinates(city);
  const weather = useWeather(coordinates.lat, coordinates.lon);

  return (
    <>
    <SearchBar onchange={(e) => setCity(e.target.value)}/>
    <WeatherCard />
    </>
  )
}

export default App