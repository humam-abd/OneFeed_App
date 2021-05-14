import { NEWS_URL, NEWS_API_KEY } from "../../domain/constants";
import { NewsResponse } from "../../domain/models";

// Get News Data
export const getNewsData = async (key: string, fromDate?: string) => {
  const url = `${NEWS_URL}q=${
    key || "Current"
  }&from=${fromDate}&sortBy=publishedAt&language=en&apiKey=${NEWS_API_KEY}`;
  return await fetch(url, {
    method: "GET",
  })
    .then((result) => {
      const data: Promise<NewsResponse> = result.json();
      return data;
    })
    .catch((err) => {
      console.error(err);
    });
};
