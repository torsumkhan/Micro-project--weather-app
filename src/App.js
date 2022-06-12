import React, { useState } from "react";
import "./index.css";

function App() {
  const [weatherData, setWeatherData] = useState([{}]);
  const [location, setLocation] = useState("");

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=e780e668eed14efab1c8655e61adb70c&units=metric`;

  async function fetchWeather() {
    const response = await fetch(url);
    const json = await response.json();
    console.log(json);
    setWeatherData(json);
  }

  return (
    <div
      className={
        typeof weatherData.main != "undefined"
          ? weatherData.weather[0].main === "Clear"
            ? "app clear"
            : weatherData.weather[0].main === "Clouds"
            ? "app clouds"
            : weatherData.weather[0].main === "Snow"
            ? "app snow"
            : weatherData.weather[0].main === "Rain"
            ? "app rain"
            : weatherData.weather[0].main === "Fog"
            ? "app fog"
            : weatherData.weather[0].main === "Thunderstorm"
            ? "app thunderstorm"
            : weatherData.weather[0].main === "Drizzle"
            ? "app drizzle"
            : weatherData.weather[0].main === "Haze"
            ? "app haze"
            : weatherData.weather[0].main === "Mist"
            ? "app mist"
            : weatherData.weather[0].main === "Smoke"
            ? "app smoke"
            : weatherData.weather[0].main === "Dust"
            ? "app dust"
            : weatherData.weather[0].main === "Tornado"
            ? "app tornado"
            : "app"
          : "app"
      }
    >
      <main>
        <div className="search">
          <input
            type="text"
            className="search-bar"
            placeholder="Enter City"
            onKeyPress={fetchWeather}
            onChange={(e) => setLocation(e.target.value)}
            value={location}
          />
        </div>
        {typeof weatherData.main === "undefined" ? (
          <div>
            <p>Welcome to weather app!</p>
            <p>Enter your city name to see today's weather</p>
          </div>
        ) : (
          <div>
            <div className="location-box">
              <div className="location">{location}</div>
            </div>
            <div className="weather-box">
              <div className="temp">{Math.round(weatherData.main.temp)}°c</div>
              <div className="weather">
                {weatherData.weather[0].description}
              </div>
            </div>
            <div>
              <div className="bottom">
                <div className="feels-like">
                  <p>{Math.round(weatherData.main.feels_like)}°c</p>
                  <p id="text">Feels Like</p>
                </div>
                <div className="humidity">
                  <p>{weatherData.main.humidity}%</p>
                  <p id="text">Humidity</p>
                </div>
                <div className="wind">
                  <p>{weatherData.wind.speed}mph</p>
                  <p id="text">Wind</p>
                </div>
              </div>
            </div>
          </div>
        )}
      </main>
    </div>
  );
}

export default App;
