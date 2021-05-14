import React, { useState } from "react";

interface SearchBlockProps {
  onChangeSearchString: (value: string) => void;
  onChangeDate: (value: string) => void;
  date: string;
}

export const SearchBlock: React.FunctionComponent<SearchBlockProps> = ({
  onChangeSearchString,
  onChangeDate,
  date,
}) => {
  const [inputValue, setInputValue] = useState("");

  return (
    <div className="row">
      <div className="col-lg-9 mt-4 mb-3">
        <input
          className="form-control"
          id="search"
          type="text"
          placeholder="Search for topics"
          value={inputValue}
          onChange={(e) => {
            const { value } = e.target;
            setInputValue(value);
          }}
          onKeyDown={(e) => {
            if (e.key === "Enter") onChangeSearchString(inputValue);
          }}
          onBlur={() => {
            onChangeSearchString(inputValue);
          }}
        />
      </div>
      <div className="col-lg-3 mb-3">
        <label htmlFor="date">Search By Date</label>
        <input
          id="date"
          type="date"
          value={date}
          className="form-control"
          placeholder={"Search By Date"}
          min={"2021-04-13"}
          onChange={(e) => {
            const { value } = e.target;
            onChangeDate(value);
          }}
        />
      </div>
    </div>
  );
};
