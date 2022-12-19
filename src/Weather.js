import React, { useState, CSSProperties } from "react";
import axios from "axios";
import "./Weather.css";
import PuffLoader from "react-spinners/PuffLoader";

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });

  function handleResponse(response) {
    setWeatherData({
      ready: true,
      city: response.data.city,
      lastUpdated: response.data.time,
      description: response.data.condition.description,
      imgSource: response.data.condition.icon_url,
      current: response.data.temperature.current,
      feelsLike: response.data.temperature.feels_like,
      humidity: response.data.temperature.humidity,
      wind: response.data.wind.speed,
    });
  }
  if (weatherData.ready) {
    return (
      <div className="row">
        <div className="col p-1 m-1 bg-primary bg-gradient bg-opacity-25 rounded-2">
          <h1>{weatherData.city}</h1>
          <ul>
            <li className="text-capitalize">{weatherData.description}</li>
            <li>Last updated: Mon, Dec 19, 15:00</li>
          </ul>
        </div>
        <div className="col m-1 p-1 bg-primary bg-gradient bg-opacity-25 rounded-2 d-flex align-items-center justify-content-evenly">
          <div className="row">
            <div className="col">
              <img
                alt={weatherData.description}
                src={weatherData.imgSource}
                className="current-weather-icon"
              />
            </div>
            <div className="col">
              <ul className="mb-0 px-0">
                <li>
                  <i class="fa-solid fa-temperature-full"></i>{" "}
                  {Math.round(weatherData.current)}° C |°F
                </li>
                <li>
                  <i class="fa-solid fa-thermometer"></i>
                  {Math.round(weatherData.feelsLike)}° C
                </li>
                <li>
                  <i class="fa-solid fa-droplet"></i> {weatherData.humidity} %
                </li>
                <li>
                  <i class="fa-solid fa-wind"></i> {weatherData.wind}km/h
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    const apiKey = "3a0dab1bctcd005f34e0df7852b0aob3";
    let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${props.city}&key=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);

    return (
      <PuffLoader
        color="#5b72aa"
        size={70}
        speedMultiplier={1.5}
        className="loading-icon"
      />
    );
  }
}
