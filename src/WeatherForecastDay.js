import React from "react";

export default function WeatherForecastDay(props) {
  function day() {
    let date = new Date(props.data.time * 1000);
    let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    let day = days[date.getDay()];

    return day;
  }

  return (
    <div>
      <div className="WeatherForecast-day">{day()}</div>
      <div className="WeatherForecast-icon">
        <img
          src={props.data.condition.icon_url}
          alt={props.data.condition.description}
        />
      </div>
      <div className="WeatherForecast-temp">
        <i className="fa-solid fa-temperature-arrow-up"> </i>{" "}
        {Math.round(props.data.temperature.maximum)} °C <br />
        <i className="fa-solid fa-temperature-arrow-down"></i>{" "}
        {Math.round(props.data.temperature.minimum)} °C
      </div>
    </div>
  );
}
