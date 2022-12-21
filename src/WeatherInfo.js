import React from "react";
import WeatherInfoCalc from "./WeatherInfoCalc";
import FormattedDate from "./FormattedDate";

export default function WeatherInfo(props) {
  return (
    <div className="row weather">
      <div className="col p-1 m-1 bg-primary bg-gradient bg-opacity-25 rounded-2">
        <h1>{props.data.city}</h1>
        <ul>
          <li className="text-capitalize">{props.data.description}</li>
          <li>
            Last updated: <FormattedDate date={props.data.lastUpdated} />{" "}
          </li>
        </ul>
      </div>
      <div className="col m-1 p-1 bg-primary bg-gradient bg-opacity-25 rounded-2 d-flex align-items-center justify-content-evenly">
        <div className="row">
          <div className="col">
            <img
              alt={props.data.description}
              src={props.data.imgSource}
              className="current-weather-icon"
            />
          </div>
          <div className="col">
            <WeatherInfoCalc
              current={Math.round(props.data.current)}
              feelsLike={Math.round(props.data.feelsLike)}
              humidity={props.data.humidity}
              wind={props.data.wind}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
