import { NewsArticle } from "./models";

//Weather and News Base URL
export const WEATHER_URL: string = process.env.REACT_APP_WEATHER_URL || "";
export const NEWS_URL: string = process.env.REACT_APP_NEWS_URL || "";

// Weather and News API Keys
export const WEATHER_API_KEY: string =
  process.env.REACT_APP_WEATHER_API_KEY || "";
export const NEWS_API_KEY: string = process.env.REACT_APP_NEWS_API_KEY || "";
export const ICON_URL: string = process.env.REACT_APP_WEATHER_ICON_URL || "";

// App languages
export const APP_LANGUAGES = {
  en: "en",
  zh: "zh",
  pt: "pt",
  ar: "ar",
  es: "es",
};

// Empty data for news cards
export const emptyData: NewsArticle[] = [
  {
    title: "Title 1",
    description: "Description 1",
    url: "",
  } as NewsArticle,
  {
    title: "Title 2",
    description: "Description 2",
    url: "",
  } as NewsArticle,
  {
    title: "Title 3",
    description: "Description 3",
    url: "",
  } as NewsArticle,
];
