import { NEWS_URL, NEWS_API_KEY } from "../../domain/constants";
import { NewsError, NewsResponse } from "../../domain/models";

// Get News Data
export const getNewsData = async (
  key: string,
  fromDate?: string,
  language?: string
) => {
  const url = `${NEWS_URL}q=${key}&from=${fromDate}&sortBy=publishedAt&language=${language}&apiKey=${NEWS_API_KEY}`;
  return await fetch(url, {
    method: "GET",
  })
    .then((result) => {
      const data: Promise<NewsResponse> = result.json();
      return data;
    })
    .catch((err) => {
      const error: NewsError = err.json();
      return error;
    });
};
