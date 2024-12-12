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

export interface Device {
  /**
   * The unique identifier for the device.
   */
  DeviceID: string;

  /**
   * The user ID (GebruikerID) associated with the device.
   */
  GebruikerID: string;

  /**
   * The alarm code for the device.
   */
  AlarmCode: string;

  /**
   * The longitude of the device's location.
   */
  longitude: string;

  /**
   * The latitude of the device's location.
   */
  latitude: string;

  /**
   * The Google Maps link for the device's location.
   */
  mapslink: string;

  /**
   * The phone number associated with the device.
   */
  TelefoonnummerDevice: string;

  /**
   * The battery percentage of the device.
   */
  Batterijpercentage: string;

  /**
   * The timestamp when the device record was created.
   */
  created_at: string;

  /**
   * The timestamp when the device record was last updated.
   */
  updated_at: string;
}
