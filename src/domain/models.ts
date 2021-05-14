// News response types
export type Source = { id: number | null; name: string };

export type NewsArticle = {
  author: string;
  content: string;
  description: string;
  publishedAt: Date;
  source: Source;
  title: string;
  url: string;
  urlToImage: string;
};

export type NewsResponse = {
  articles: Array<NewsArticle>;
  status: string;
  totalResults: number;
};
