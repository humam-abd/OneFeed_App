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

interface HeaderProps {
  title: string;
}

export const Header: React.FunctionComponent<HeaderProps> = ({ title }) => {
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
      <div className="d-flex">
        <div className="header-title float-start w-75">{title}</div>
        <div className="header-text">
          {actualWeather?.map((data) => {
            return (
              <WeatherWidget
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