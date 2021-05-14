import React, { useState } from "react";
import { WeatherData } from "../../domain/models";
import { useAsyncEffect } from "../../domain/utils";
import { getWeatherData } from "./Header.services";
import "../../styles/Header.scss";
import { ICON_URL } from "../../domain/constants";

type LocationType = {
  latitude: number;
  longitude: number;
};

interface HeaderProps {
  title: string;
}

export const Header: React.FunctionComponent<HeaderProps> = ({ title }) => {
  const [state, setState] = useState<LocationType>({
    latitude: 0,
    longitude: 0,
  });
  const [weatherData, setWeatherData] = useState({} as WeatherData);

  const { latitude, longitude } = state;

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
    <div className="row">
      <div className="col-lg-9 header-title float-start">{title}</div>
      <div className="col-lg-3 header-text">
        {weatherData?.weather?.map((data) => {
          const icon_url = `${ICON_URL}${data.icon}@4x.png`;
          return (
            <div key={data.id} className="d-flex">
              <div>
                <img src={icon_url} alt="weather icon" />
              </div>
              <div>
                <h6>{data.main}</h6>
                <p>{data.description}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
