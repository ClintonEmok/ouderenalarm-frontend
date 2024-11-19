export interface Post {
  title: string;
  slug: { current: string };
  publishedAt: string;
  excerpt: string;
  body: any;
  topics: Array<Topic>;
  _id: string;
}

export interface Topic {
  name: string;
  slug: { current: string };
  _id: string;
}
