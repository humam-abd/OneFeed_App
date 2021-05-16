import React, { useState } from "react";
import { WeatherData } from "../../domain/models";
import "../../styles/Header.scss";
import { WeatherWidget } from "../WeatherWidget";
import useLoadWeather from "./helper";

type LocationCoords = {
  latitude: number;
  longitude: number;
};

export const Header: React.FunctionComponent = () => {
  // State initialization
  const [state, setState] = useState<LocationCoords>({
    latitude: 0,
    longitude: 0,
  });
  const [weatherData, setWeatherData] = useState({} as WeatherData);
  const [errorMessage, setErrorMessage] = useState("");

  // Destructing state values
  const { latitude, longitude } = state;

  const temperatureSet = weatherData?.main;
  const actualWeather = weatherData?.weather;

  // Get current latitude and longitude
  function getPosition(data: GeolocationPosition) {
    const lat = data.coords.latitude;
    const long = data.coords.longitude;
    setState({
      ...state,
      latitude: lat,
      longitude: long,
    });
  }

  // Browser API for location access
  navigator.geolocation.getCurrentPosition(getPosition);

  // Call API for weather data
  useLoadWeather(latitude, longitude, setErrorMessage, setWeatherData);

  return (
    <div className="container-fluid">
      <div className="d-flex justify-content-center">
        <div className="header-text">
          {errorMessage && <p className="text-danger">{errorMessage}</p>}
          {actualWeather?.map((data) => {
            return (
              <WeatherWidget
                key={data.id}
                weatherData={data}
                temperatureMetrics={temperatureSet}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};
