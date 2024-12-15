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

export interface UserRegistrationResponse {
  success: boolean;
  message: string;
  user: User;
  access_token: string;
}

export interface User {
  /**
   * The unique identifier for the user.
   */
  id: string;

  /**
   * The first name of the user.
   */
  name: string;

  /**
   * The last name of the user.
   */
  lastName: string;

  /**
   * The email address of the user.
   */
  email: string;

  /**
   * The phone number associated with the user.
   */
  phoneNumber: string;

  /**
   * The addresses linked to the user.
   */
  addresses: Address[];

  /**
   * The timestamp when the user was created.
   */
  createdAt: string;

  /**
   * The timestamp when the user was last updated.
   */
  updatedAt: string;
}

export interface Address {
  /**
   * The unique identifier for the address.
   */
  id: string;

  /**
   * The street of the address.
   */
  street: string;

  /**
   * The city of the address.
   */
  city: string;

  /**
   * The postal code of the address.
   */
  postalCode: string;

  /**
   * The country of the address.
   */
  country: string;

  /**
   * The type of the address (billing, shipping, etc.).
   */
  type: "billing" | "shipping";
}

export interface Device {
  /**
   * The unique identifier for the device.
   */
  id: string;

  /**
   * The ID of the user who owns the device.
   */
  userId: string;

  /**
   * The alarm code for the device.
   */
  alarmCode: string | null;

  /**
   * The location of the device, including latitude and longitude.
   */
  location: {
    longitude: number | null;
    latitude: number | null;
  };

  /**
   * The Google Maps link for the device's location.
   */
  mapsLink: string | null;

  /**
   * The phone number associated with the device.
   */
  phoneNumber: string;

  /**
   * The battery percentage of the device.
   */
  batteryPercentage: number;

  /**
   * The timestamp when the device record was created.
   */
  createdAt: string;

  /**
   * The timestamp when the device record was last updated.
   */
  updatedAt: string;

  /**
   * The associated user for the device (if loaded).
   */
  user?: User; // This is optional since "whenLoaded" will only load it when necessary
}
