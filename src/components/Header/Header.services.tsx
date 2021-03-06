import { WEATHER_API_KEY, WEATHER_URL } from "../../domain/constants";
import { WeatherData, WeatherError } from "../../domain/models";

// Get Weather Data
export default async function getWeatherData(
  latitude: number,
  longitude: number
) {
  const url = `${WEATHER_URL}lat=${latitude}&lon=${longitude}&appid=${WEATHER_API_KEY}`;
  return await fetch(url, {
    method: "GET",
  })
    .then((result) => {
      const data: Promise<WeatherData> = result.json();
      return data;
    })
    .catch((err) => {
      const error: WeatherError = err;
      return error;
    });
}
