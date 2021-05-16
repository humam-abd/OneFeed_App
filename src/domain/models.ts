import { APP_LANGUAGES } from "./constants";

// News response types
export type Source = { id: number | null; name: string };

export type NewsArticle = {
  author: string;
  content: string;
  description: string;
  publishedAt: Date;
  source: Source;
  title: string;
  url: string;
  urlToImage: string;
};

export type NewsResponse = {
  articles: Array<NewsArticle>;
  status: string;
  totalResults: number;
};

export type NewsError = {
  code: string;
  message: string;
  status: string;
};

// Weather response types
export type Weather = {
  description: string;
  icon: string;
  id: number;
  main: string;
};

export type MainWeatherMetrics = {
  feels_like: number;
  grnd_level: number;
  humidity: number;
  pressure: number;
  sea_level: number;
  temp: number;
  temp_max: number;
  temp_min: number;
};

export type WeatherData = {
  base: string;
  clouds: { all: number };
  cod: number;
  coord: { lon: number; lat: number };
  dt: number;
  id: number;
  main: MainWeatherMetrics;
  name: string;
  sys: { country: string; sunrise: number; sunset: number };
  timezone: number;
  visibility: number;
  weather: Weather[];
  wind: { speed: number; deg: number; gust: number };
};

export type WeatherError = {
  cod: number;
  message: string;
};
