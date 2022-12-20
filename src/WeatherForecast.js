import React from "react";
import "./WeatherForecast.css";

export default function WeatherForecast() {
  return (
    <div className="WeatherForecast">
      <div className="row">
        <div className="col">
          <div className="WeatherForecast-day">Mon</div>
          <div className="WeatherForecast-icon">
            <img
              src="http://shecodes-assets.s3.amazonaws.com/api/weather/icons/broken-clouds-day.png"
              alt="weather icon"
            />
          </div>
          <div className="WeatherForecast-temp">
            <i class="fa-solid fa-temperature-arrow-up"> </i> 19 °C <br />
            <i class="fa-solid fa-temperature-arrow-down"></i> 10 °C
          </div>
        </div>
      </div>
    </div>
  );
}
