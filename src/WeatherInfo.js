import React from "react";
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
            <ul className="mb-0 px-0">
              <li>
                <i class="fa-solid fa-temperature-full"></i>{" "}
                {Math.round(props.data.current)}° C |°F
              </li>
              <li>
                <i class="fa-solid fa-thermometer"></i>{" "}
                {Math.round(props.data.feelsLike)}° C
              </li>
              <li>
                <i class="fa-solid fa-droplet"></i> {props.data.humidity} %
              </li>
              <li>
                <i class="fa-solid fa-wind"></i> {props.data.wind}km/h
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
