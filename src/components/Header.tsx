import React from "react";

interface HeaderProps {
  title: string;
}

export const Header: React.FunctionComponent<HeaderProps> = ({ title }) => {
  return (
    <>
      <div className="header-title mt-5">{title}</div>
    </>
  );
};
