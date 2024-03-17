import React, { useState} from "react";
import "./App.css";
import Login from "./Login"

const API_KEY = "5bfeb0fea2def5599022049031fcb665";

const App = () => {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState(null);
  const [error, setError] = useState(null);

  const fetchWeatherData = async () => {
    try {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
      );
      const data = await response.json();
      if (response.ok) {
        setWeather(data);
        setError(null);
      } else {
        setError(data.message);
        setWeather(null);
      }
    } catch (error) {
      console.error("Error fetching weather data:", error);
      setError("Failed to fetch weather data");
      setWeather(null);
    }
  };

  const handleInputChange = (event) => {
    setCity(event.target.value);
  };
  
  const handleSubmit = (event) => {
    event.preventDefault();
    fetchWeatherData();
  };

  return (
    <div className="App">
      
      <button type="button" class="btn" data-bs-toggle="modal" data-bs-target="#exampleModal">
        Launch demo modal
      </button>

      <Login />


      <h1 class="header">Weather</h1>

      <form class="cityInputGroup input-group mb-3" onSubmit={handleSubmit}>
        <button
          class="btn btn-outline-secondary"
          type="submit"
          id="button-addon1"
        >
          Submit
        </button>
        <input
          type="text"
          class="form-control"
          placeholder="Enter city"
          aria-label="Example text with button addon"
          aria-describedby="button-addon1"
          value={city}
          onChange={handleInputChange}
        ></input>
      </form>

      <div class="container">
        <div className="Zatec">
          <div class="card">
            {error && <div className="error">{error}</div>}
            {weather && (
              <div className="Data">
                <h3>{city}</h3>
                <h4>{weather.main.temp}°C</h4>
                <img
                  src={`http://openweathermap.org/img/wn/${weather.weather[0].icon}.png`}
                  alt="Weather Icon"
                />
                <p>{weather.weather[0].description}</p>
                <p>humidity: {weather.main.humidity}%</p>
                <p>Wind Speed: {weather.wind.speed} m/s</p>
                <p>Wind Direction: {weather.wind.deg}°</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
