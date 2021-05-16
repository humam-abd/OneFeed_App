import { NewsArticle, NewsError, NewsResponse } from "../../domain/models";
import { useAsyncEffect } from "../../domain/utils";
import getNewsData from "./NewsContainer.service";

export default function useLoadNews(
  searchString: string,
  date: string,
  language: string,
  setErrorMessage: (value: string) => void,
  setData: (data: NewsArticle[]) => void
) {
  useAsyncEffect(async () => {
    try {
      const response = await getNewsData(searchString, date, language);
      const responseError = (response as NewsError)?.message;
      if (responseError) {
        setErrorMessage(responseError);
      } else {
        setErrorMessage("");
        const data = response as NewsResponse;
        const newsArticles = data?.articles;
        setData([]);
        setData(newsArticles);
      }
    } catch (err) {
      setErrorMessage(`Error occurred, ${err}`);
    }
  }, [searchString, date, language]);
}
