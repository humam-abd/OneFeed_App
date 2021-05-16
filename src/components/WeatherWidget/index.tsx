import React from "react";
import { ICON_URL } from "../../domain/constants";
import { MainWeatherMetrics, Weather } from "../../domain/models";
import { getCelsiusValue } from "../../domain/utils";
import "../../styles/WeatherWidget.scss";

interface WeatherWidgetProps {
  weatherData: Weather;
  temperatureMetrics: MainWeatherMetrics;
}

export const WeatherWidget: React.FunctionComponent<WeatherWidgetProps> = ({
  weatherData,
  temperatureMetrics,
}) => {
  // Weather elements are destructed
  const { main, icon, description } = weatherData;
  const { temp, feels_like, temp_max } = temperatureMetrics;

  // Assigning edited data to constants
  const iconUrl = `${ICON_URL}${icon}@4x.png`;
  const currentTemp = getCelsiusValue(temp);
  const feelsLikeTemp = getCelsiusValue(feels_like);
  const maxTemp = getCelsiusValue(temp_max);
  const temperatureDescription = [
    `Feels like ${feelsLikeTemp}`,
    `, ${description}. The high today was forcast as 
  ${maxTemp}`,
  ];

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
      <p>
        {temperatureDescription[0]}&#176;C{temperatureDescription[1]}&#176;C
      </p>
    </div>
  );
};
