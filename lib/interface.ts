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
  postCount?: number;
}

export interface UserRegistrationRequest {
  name: string;
  email: string;
  password: string;
  password_confirmation: string;
  phone_number: string;
  street: string;
  house_number: string;
  postal_code: string;
  city: string;
  country: string;
  type?: "billing" | "shipping";
}

export interface Address {
  id: number;
  street: string;
  postal_code: string;
  city: string;
  country: string;
  type: "billing" | "shipping";
}

export interface User {
  id: number;
  name: string;
  email: string;
  addresses: Address[];
}

export interface UserRegistrationResponse {
  success: boolean;
  message: string;
  user: User;
  access_token: string;
}
