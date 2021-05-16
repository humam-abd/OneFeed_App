import React, { useState } from "react";
import { LANGUAGE_SET } from "../../domain/constants";

interface SearchBlockProps {
  onChangeSearchString: (value: string) => void;
  onChangeDate: (value: string) => void;
  date: string;
  onSelectLanguage: (value: string) => void;
  language: string;
}

export const SearchBlock: React.FunctionComponent<SearchBlockProps> = ({
  onChangeSearchString,
  onChangeDate,
  date,
  onSelectLanguage,
  language,
}) => {
  // State initialization
  const [inputValue, setInputValue] = useState("");

  const minDate = "2021-04-20";

  //Functions for handling changes. Inline arrow functions are moved to separate functions
  //--------------------------------------------------------------------------------------
  function handleSearchStringChange(e: React.ChangeEvent<HTMLInputElement>) {
    const { value } = e.target;
    setInputValue(value);
  }

  function handleSearchButtonClick() {
    onChangeSearchString(inputValue);
    setInputValue("");
  }

  function handleDateChange(e: React.ChangeEvent<HTMLInputElement>) {
    const { value } = e.target;
    onChangeDate(value);
  }

  function handleLanguageChange(e: React.ChangeEvent<HTMLSelectElement>) {
    const { value } = e.target;
    onSelectLanguage(value);
  }
  //--------------------------------------------------------------------------------------

  return (
    <>
      <div className="row search-module-style">
        <div className="col-lg-6 mt-4 mb-3">
          <div className="d-flex">
            <input
              className="form-control"
              id="search"
              type="text"
              placeholder="Search for topics"
              value={inputValue}
              onChange={handleSearchStringChange}
            />
            <button
              className="btn btn-secondary btn-sm ms-2"
              onClick={handleSearchButtonClick}
            >
              Search
            </button>
          </div>
        </div>

        <div className="col-lg-3 mt-4 mb-3">
          <input
            id="date"
            type="date"
            value={date}
            className="form-control"
            placeholder={"Search By Date"}
            min={minDate}
            onChange={handleDateChange}
          />
        </div>

        <div className="col-lg-3 mt-4 mb-3">
          <select
            className="btn btn-light dropdown-toggle"
            id="defaultDropdown"
            onChange={handleLanguageChange}
            defaultValue={language}
          >
            <option value="SelLanguage" disabled>
              Select Language
            </option>
            {LANGUAGE_SET.map((item) => {
              return <option value={item[1]}>{item[0]}</option>;
            })}
          </select>
        </div>
      </div>
    </>
  );
};
