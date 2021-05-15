import React, { useState } from "react";
import { WeatherData } from "../../domain/models";
import { useAsyncEffect } from "../../domain/utils";
import { getWeatherData } from "./Header.services";
import "../../styles/Header.scss";
import { WeatherWidget } from "../WeatherWidget";

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

  // State values
  const { latitude, longitude } = state;

  const temperatureSet = weatherData?.main;
  const actualWeather = weatherData?.weather;

  // Get current latitude and longitude
  const getPosition = (data: GeolocationPosition) => {
    const lat = data.coords.latitude;
    const long = data.coords.longitude;
    setState({
      ...state,
      latitude: lat,
      longitude: long,
    });
  };

  // Browser API for location access
  navigator.geolocation.getCurrentPosition(getPosition);

  // Call api for weather data
  useAsyncEffect(async () => {
    const response = await getWeatherData(latitude, longitude);
    const data = response as WeatherData;
    setWeatherData(data);
  }, [latitude, longitude]);

  return (
    <div className="container-fluid">
      <div className="d-flex justify-content-center">
        <div className="header-text">
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
