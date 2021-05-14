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
  const { temp } = temperatureMetrics;
  const iconUrl = `${ICON_URL}${icon}@4x.png`;

  const celsiusOutput = temp - 273.15;

  return (
    <div className="card weather-widget">
      <div className="d-flex">
        <div>
          <img src={iconUrl} alt="Weather" />
        </div>
        <div>
          <div className="card-body">
            <h5 className="card-title mt-5">
              {celsiusOutput.toFixed()}&#176;C
            </h5>
            <h5 className="card-title">{main}</h5>
            <p className="card-text">{description}</p>
          </div>
        </div>
      </div>
    </div>
  );
};
