import React from "react";
import { ICON_URL } from "../../domain/constants";
import { MainWeatherMetrics, Weather } from "../../domain/models";

interface WeatherWidgetProps {
  weatherData: Weather;
  temperatureMetrics: MainWeatherMetrics;
}

export const WeatherWidget: React.FunctionComponent<WeatherWidgetProps> = ({
  weatherData,
  temperatureMetrics,
}) => {
  const { main, icon, description } = weatherData;
  const { temp, feels_like, temp_min, temp_max } = temperatureMetrics;
  const iconUrl = `${ICON_URL}${icon}@4x.png`;

  const getCelsiusValue = (value: number) => {
    return (value - 273.15).toFixed();
  };

  const currentTemp = getCelsiusValue(temp);
  const feelsLikeTemp = getCelsiusValue(feels_like);
  const maxTemp = getCelsiusValue(temp_max);
  const minTemp = getCelsiusValue(temp_min);

  const temperatureDescription =
    "Feels like " +
    feelsLikeTemp +
    "ᣞC " +
    description +
    ". The high today was forcast as " +
    maxTemp +
    "ᣞC.";

  return (
    <div className="card weather-widget">
      <div className="d-flex weather-card">
        <div>
          <img src={iconUrl} alt="Weather" />
        </div>
        <div>
          <div className="card-body">
            <h5 className="card-title mt-5 h2">{currentTemp}&#176;C</h5>
            <h5 className="card-title">{main}</h5>
          </div>
        </div>
      </div>
      <p>{temperatureDescription}</p>
    </div>
  );
};
