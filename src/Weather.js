import React, { useState, CSSProperties } from "react";
import axios from "axios";
import "./Weather.css";
import PuffLoader from "react-spinners/PuffLoader";
import WeatherInfo from "./WeatherInfo";

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });
  const [city, setCity] = useState(props.city);
  function handleResponse(response) {
    setWeatherData({
      ready: true,
      city: response.data.city,
      lastUpdated: new Date(response.data.time * 1000),
      description: response.data.condition.description,
      imgSource: response.data.condition.icon_url,
      current: response.data.temperature.current,
      feelsLike: response.data.temperature.feels_like,
      humidity: response.data.temperature.humidity,
      wind: response.data.wind.speed,
    });
  }

  function search() {
    const apiKey = "3a0dab1bctcd005f34e0df7852b0aob3";
    let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function handleSearchResult(event) {
    setCity(event.target.value);
  }

  if (weatherData.ready) {
    return (
      <div>
        <div className="row">
          <form
            onSubmit={handleSubmit}
            className="m-1 p-2 bg-primary bg-gradient bg-opacity-25 rounded-2 w-100"
          >
            <div className="row">
              <div className="col-9">
                <input
                  type="search"
                  placeholder="Choose your city"
                  autoComplete="off"
                  autoFocus="on"
                  className="form-control"
                  onChange={handleSearchResult}
                />
              </div>
              <div className="col-2">
                <input
                  type="submit"
                  value="Search"
                  className="btn btn-primary"
                />
              </div>
            </div>
          </form>
        </div>
        <WeatherInfo data={weatherData} />
      </div>
    );
  } else {
    search();

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
