import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Most.css'

const Most = () => {
    
    const [weatherData, setWeatherData] = useState(null);
    const [weatherIcon, setWeatherIcon] = useState(null);
    const API_KEY = '5bfeb0fea2def5599022049031fcb665'
    const city = "Most"
  
    useEffect(() => {
      const fetchData = async () => {
        try {
          const response = await axios.get('https://api.openweathermap.org/data/2.5/weather', {
            params: {
              q: city,
              appid: API_KEY,
              units: 'metric'
            }
          });
            setWeatherData(response.data);
            setWeatherIcon(response.data.weather[0].icon);
        } catch (error) {
          console.error('Error fetching data:', error);
        }
      };
      fetchData();
    }, [city, API_KEY]);

return(
    <div className='Most'>
        {weatherData ? (
          <div class='card'>
            <div className='Data'>
                <h3>{city}</h3>
                <h4>{weatherData.main.temp}°C</h4>
                <img src={`http://openweathermap.org/img/wn/${weatherIcon}.png`} alt="Weather Icon" />
                <p className='weatherIcon'>{weatherData.weather[0].description}</p>
                <p>humidity: {weatherData.main.humidity}%</p>
                <p>Wind Speed: {weatherData.wind.speed} m/s</p>
                <p>Wind Direction: {weatherData.wind.deg}°</p>
              </div>
          </div>
        ) : (
          <p>Loading...</p>
        )}
    </div>

)

}

export default Most;