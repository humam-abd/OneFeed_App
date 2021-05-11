import React from "react";

interface NewsContainerProps {
  data: any;
}

export const NewsContainer: React.FunctionComponent<NewsContainerProps> = ({
  data,
}) => {
  return <>{data}</>;
};
