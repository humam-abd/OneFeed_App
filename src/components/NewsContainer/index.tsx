import React, { useEffect, useState } from "react";
import { NewsArticle } from "../../domain/models";
import { getBrowserLanguage } from "../../domain/utils";
import { SearchBlock } from "../SearchBlock";
import "../../styles/NewsContainer.scss";
import { View } from "../../domain/enum";
import { emptyData } from "../../domain/constants";
import { Navbar } from "../Navbar";
import useLoadNews from "./helper";

export const NewsContainer: React.FunctionComponent = () => {
  // State initialization
  const [searchString, setSearchString] = useState("Top News");
  const [date, setDate] = useState<string>("");
  const [language, setLanguage] = useState("");
  const [newsData, setData] = useState<Array<NewsArticle>>(emptyData);
  const [view, setView] = useState(View.CardView);
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    // Calling browser language function
    const userLanguage = getBrowserLanguage();
    setLanguage(userLanguage);
  }, []);

  // Function for setting `view` without inline arrow function
  function toggleView(value: View) {
    return function () {
      setView(value);
    };
  }

  // Call api for news data
  useLoadNews(searchString, date, language, setErrorMessage, setData);

  // Search functionality with date picker and show news data
  return (
    <div className="container">
      <Navbar onClick={setSearchString} searchValue={searchString} />
      <hr />
      <SearchBlock
        onChangeSearchString={setSearchString}
        onChangeDate={setDate}
        date={date}
        onSelectLanguage={setLanguage}
        language={language}
      />
      <hr />
      <div className="d-flex">
        <div className="me-2">
          <i className="fas fa-list view-icon"></i>
        </div>
        <label className="switch col-lg-12">
          <input
            type="checkbox"
            value={view}
            checked={view === View.CardView}
            disabled={!newsData}
            onChange={toggleView(
              view === View.CardView ? View.ListView : View.CardView
            )}
          />
          <span className="slider round"></span>
        </label>
        <div className="ms-2">
          <i className="fas fa-th-large view-icon"></i>
        </div>
      </div>

      {errorMessage && <p className="text-danger">{errorMessage}</p>}

      <div className="row mt-4">
        {newsData?.map((item) => {
          if (view === View.CardView) {
            return (
              <div key={item.title} className="col">
                <div className="card custom-card-body custom-border-radius">
                  {item.urlToImage && (
                    <img
                      src={item.urlToImage}
                      className="card-img-top img-border-radius"
                      alt="News"
                    />
                  )}
                  <div className="card-body">
                    <div className="card-title story-title">{item.title}</div>
                    <p className="card-text">{item.description}</p>
                    {item.url && (
                      <a
                        href={item.url}
                        target="_blank"
                        rel="noreferrer"
                        className="btn btn-secondary custom-border-radius"
                      >
                        Go to Story
                      </a>
                    )}
                  </div>
                </div>
              </div>
            );
          }
          return (
            <div
              key={item.title}
              className="card mb-3 custom-border-radius list-card"
            >
              <div className="d-flex align-self-center">
                <div className="float-start fill-img">
                  {item.urlToImage && <img src={item.urlToImage} alt="News" />}
                </div>
                <div>
                  <div className="card-body">
                    <div className="card-title story-title">{item.title}</div>
                    <p className="card-text">{item.description}</p>
                    {item.url && (
                      <a
                        href={item.url}
                        target="_blank"
                        rel="noreferrer"
                        className="btn btn-secondary custom-border-radius float-end mb-2"
                      >
                        Go to Story
                      </a>
                    )}
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
