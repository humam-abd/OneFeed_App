import React, { useState } from "react";
import { NewsArticle, NewsResponse } from "../../domain/models";
import { useAsyncEffect } from "../../domain/utils";
import { SearchBlock } from "../SearchBlock";
import "../../styles/NewsContainer.scss";
import { getNewsData } from "./NewsContainer.service";

export const NewsContainer: React.FunctionComponent = () => {
  // State initialization
  const [searchString, setSearchString] = useState("");
  const [date, setDate] = useState<string>("");
  const [newsData, setData] = useState<Array<NewsArticle>>([]);

  // Call api for news data
  useAsyncEffect(async () => {
    const response = await getNewsData(searchString, date);
    const data = response as NewsResponse;
    const newsArticles = data?.articles;
    setData(newsArticles);
  }, [searchString, date]);

  // Search functionality with date picker for news data and show news data
  return (
    <div className="container">
      <hr />
      <SearchBlock
        onChangeSearchString={setSearchString}
        onChangeDate={setDate}
        date={date}
      />
      <hr />

      <div className="row mt-4">
        {newsData?.map((item) => {
          return (
            <div className="col">
              <div className="card custom-card-body custom-border-radius">
                {item.urlToImage && (
                  <img
                    src={item.urlToImage}
                    className="card-img-top img-border-radius"
                    alt="News"
                  />
                )}
                <div className="card-body">
                  <h5 className="card-title">{item.title}</h5>
                  <p className="card-text">{item.description}</p>
                  <a
                    href={item.url}
                    target="_blank"
                    rel="noreferrer"
                    className="btn btn-secondary custom-border-radius"
                  >
                    Go to Story
                  </a>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
