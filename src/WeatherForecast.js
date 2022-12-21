import axios from "axios";
import React, { useState, useEffect } from "react";
import "./WeatherForecast.css";
import WeatherForecastDay from "./WeatherForecastDay";

export default function WeatherForecast(props) {
  const [forecastData, setForecastData] = useState(null);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    setReady(false);
  }, [props.city]);

  if (ready) {
    return (
      <div className="WeatherForecast row m-1 p-2 bg-primary bg-gradient bg-opacity-25 rounded-2">
        {forecastData.map(function(dailyForecast, index) {
          if (index < 5) {
            return (
              <div className="col" key={index}>
                <WeatherForecastDay data={dailyForecast} />
              </div>
            );
          } else {
            return null;
          }
        })}
      </div>
    );
  } else {
    function handleResponse(response) {
      setForecastData(response.data.daily);
      setReady(true);
    }

    let apiKey = "bd79ao40tde3dec118ca46bc3e6dd55f";
    let apiUrl = `https://api.shecodes.io/weather/v1/forecast?query=${props.city}&key=${apiKey}&units=metric
`;
    axios.get(apiUrl).then(handleResponse);

    return null;
  }
}
