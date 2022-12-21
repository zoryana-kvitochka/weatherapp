import axios from "axios";
import React, { useState } from "react";
import "./WeatherForecast.css";
import WeatherForecastDay from "./WeatherForecastDay";

export default function WeatherForecast(props) {
  const [forecastData, setForecastData] = useState({ ready: false });

  if (forecastData.ready) {
    return (
      <div className="WeatherForecast">
        <div className="row">
          <WeatherForecastDay data={forecastData} />
        </div>
      </div>
    );
  } else {
    function handleResponse(response) {
      setForecastData({
        ready: true,
        day: response.data.daily[0].time,
        iconAlt: response.data.daily[0].condition.icon,
        iconSrc: response.data.daily[0].condition.icon_url,
        maxTemp: response.data.daily[0].temperature.maximum,
        minTemp: response.data.daily[0].temperature.minimum,
      });
    }

    let apiKey = "3a0dab1bctcd005f34e0df7852b0aob3";
    let apiUrl = `https://api.shecodes.io/weather/v1/forecast?query=${props.city}&key=${apiKey}&units=metric
`;
    axios.get(apiUrl).then(handleResponse);

    return null;
  }
}
