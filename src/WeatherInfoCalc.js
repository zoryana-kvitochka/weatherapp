import React, { useState } from "react";

export default function WeatherInfoCalc(props) {
  const [unit, setUnit] = useState("metric");
  let currentTempImperial = Math.round((props.current * 9) / 5 + 32);
  let feelsLikeImperial = Math.round((props.feelsLike * 9) / 5 + 32);
  let windImperial = Math.round(props.wind * 0.62);

  function cToF(event) {
    event.preventDefault();
    setUnit("imperial");
  }

  function fToC(event) {
    event.preventDefault();
    setUnit("metric");
  }

  if (unit === "metric") {
    return (
      <ul className="mb-0 px-0">
        <li>
          <i className="fa-solid fa-temperature-full"></i> {props.current} °C |{" "}
          <a href="/" onClick={cToF}>
            {" "}
            °F{" "}
          </a>
        </li>
        <li>
          <i className="fa-solid fa-thermometer"></i> {props.feelsLike} °C
        </li>
        <li>
          <i className="fa-solid fa-droplet"></i> {props.humidity} %
        </li>
        <li>
          <i className="fa-solid fa-wind"></i> {props.wind} km/h
        </li>
      </ul>
    );
  } else {
    return (
      <ul className="mb-0 px-0">
        <li>
          <i className="fa-solid fa-temperature-full"></i> {currentTempImperial}{" "}
          <a href="/" onClick={fToC}>
            °C
          </a>{" "}
          | °F{" "}
        </li>
        <li>
          <i className="fa-solid fa-thermometer"></i> {feelsLikeImperial} °F
        </li>
        <li>
          <i className="fa-solid fa-droplet"></i> {props.humidity} %
        </li>
        <li>
          <i className="fa-solid fa-wind"></i> {windImperial} m/h
        </li>
      </ul>
    );
  }
}
