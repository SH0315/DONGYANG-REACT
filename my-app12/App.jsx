import React, { useState, useEffect} from 'react';
import { fetchWeatherData } from './api/weatherApi';
import './styles/WeatherApp.css';
import WeatherDisplay  from './component/WeatherDisplay';
import WeatherSelect from './component/WeatherSelect';


function WeatherApp(){
  const [city, setCity] = useState('seoul');
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(false);
   
  useEffect(() => {
    // 로딩 시작
    setLoading(true);

    // API 호출하기
    fetchWeatherData(city).then((data) => {
      setWeather(data);

      // 로딩 종료
      setLoading(false);
    });
  }, [city]);
  
  return(
    <div className='dashboard'>
      <WeatherSelect city = {city} setCity={setCity}/>
      <hr/>
      <WeatherDisplay loading = {loading} weather={weather} city = {city}/>
    </div>
  )
  
 
}

export default WeatherApp;