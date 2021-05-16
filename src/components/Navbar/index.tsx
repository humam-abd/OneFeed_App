import classNames from "classnames";
import React from "react";
import "./../../styles/Navbar.scss";

interface NavbarProps {
  onClick: (value: string) => void;
  searchValue: string;
}

export const Navbar: React.FunctionComponent<NavbarProps> = ({
  onClick,
  searchValue,
}) => {
  /* JSX props shouldn't use inline arrow functions. So onClickHandler is defined. See this link, 
  https://stackoverflow.com/questions/36677733/why-shouldnt-jsx-props-use-arrow-functions-or-bind#:~:text=Why%20you%20shouldn%27t%20use,previous%20function%20is%20garbage%20collected. */
  function onClickHandler(value: string) {
    return function () {
      onClick(value);
    };
  }

  function renderNavItem(value: string) {
    return (
      <li className="nav-item">
        <button
          className={classNames("btn btn-link nav-link nav-btn", {
            "active-nav": value.toLowerCase() === searchValue.toLowerCase(),
          })}
          onClick={onClickHandler(value)}
        >
          {value.toUpperCase()}
        </button>
      </li>
    );
  }

  return (
    <nav className="navbar navbar-expand-lg navbar-dark">
      <div className="brand-title me-5">OneFeed</div>
      <button
        className="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          {renderNavItem("Top News")}
          {renderNavItem("World News")}
          {renderNavItem("India")}
          {renderNavItem("US")}
          {renderNavItem("Trending")}
        </ul>
      </div>
    </nav>
  );
};
