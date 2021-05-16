import { WeatherData, WeatherError } from "../../domain/models";
import { useAsyncEffect } from "../../domain/utils";
import getWeatherData from "./Header.services";

// Load weather data asynchronously
export default function useLoadWeather(
  latitude: number,
  longitude: number,
  setErrorMessage: (val: string) => void,
  setWeatherData: (data: WeatherData) => void
) {
  useAsyncEffect(async () => {
    try {
      const response = await getWeatherData(latitude, longitude);
      const responseError = (response as WeatherError)?.message;
      if (responseError) {
        setErrorMessage(responseError);
      } else {
        setErrorMessage("");
        const data = response as WeatherData;
        setWeatherData(data);
      }
    } catch (err) {
      setErrorMessage(`Error occurred, ${err}`);
    }
  }, [latitude, longitude]);
}
