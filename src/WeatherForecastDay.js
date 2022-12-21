import React from "react";

export default function WeatherForecastDay(props) {
  function day() {
    let date = new Date(props.data.day * 1000);
    let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    let day = days[date.getDay()];

    return day;
  }

  return (
    <div className="col">
      <div className="WeatherForecast-day">{day()}</div>
      <div className="WeatherForecast-icon">
        <img src={props.data.iconSrc} alt={props.data.iconAlt} />
      </div>
      <div className="WeatherForecast-temp">
        <i className="fa-solid fa-temperature-arrow-up"> </i>{" "}
        {Math.round(props.data.maxTemp)} °C <br />
        <i className="fa-solid fa-temperature-arrow-down"></i>{" "}
        {Math.round(props.data.minTemp)} °C
      </div>
    </div>
  );
}
