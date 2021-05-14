import React, { useState } from "react";
import { NewsArticle, NewsResponse } from "../../domain/models";
import { useAsyncEffect } from "../../domain/utils";
import { SearchBlock } from "../SearchBlock";
import "../../styles/NewsContainer.scss";
import { View } from "../../domain/enum";
import { getNewsData } from "./NewsContainer.service";

export const NewsContainer: React.FunctionComponent = () => {
  const [searchString, setSearchString] = useState("");
  const [date, setDate] = useState<string>("");
  const [newsData, setData] = useState<Array<NewsArticle>>([]);
  const [view, setView] = useState(View.CardView);

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
      <div className="d-flex">
        <div className="me-2">
          <i className="fas fa-list set-color"></i>
        </div>
        <label className="switch col-lg-12">
          <input
            type="checkbox"
            value={view}
            checked={view === View.CardView}
            onChange={() => {
              setView(view === View.CardView ? View.ListView : View.CardView);
            }}
          />
          <span className="slider round"></span>
        </label>
        <div className="ms-2">
          <i className="fas fa-th-large set-color"></i>
        </div>
      </div>

      <div className="row mt-4">
        {newsData?.map((item) => {
          if (view === View.CardView) {
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
          }
          return (
            <div
              key={item.url}
              className="card mb-3 custom-border-radius list-card"
            >
              <div className="d-flex">
                <div className="float-start fill-img">
                  {item.urlToImage && <img src={item.urlToImage} alt="News" />}
                </div>
                <div>
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
            </div>
          );
        })}
      </div>
    </div>
  );
};
