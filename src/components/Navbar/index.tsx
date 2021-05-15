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
  const renderNavItem = (value: string) => {
    return (
      <li className="nav-item">
        <button
          className={classNames("btn btn-link nav-link nav-btn", {
            "active-nav": value.toLowerCase() === searchValue.toLowerCase(),
          })}
          onClick={() => onClick(value)}
        >
          {value.toUpperCase()}
        </button>
      </li>
    );
  };

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
