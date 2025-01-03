export interface Post {
  title: string;
  slug: { current: string };
  featuredImage?: {
    _type: "image";
    asset: {
      _type: "reference";
      _ref: string;
    };
  };
  publishedAt: string;
  excerpt?: string;
  body: any;
  topics: Array<Topic>;
  _id: string;
}

declare type forWhom = "voor mij" | "voor een naaste";
declare type livingSituation =
  | "alleen"
  | "met partner"
  | "met kinderen"
  | "met ouders"
  | "met huisdieren";
declare type medicalCondition = "ja" | "nee";

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
   * The name of the user.
   */
  name: string;

  /**
   * The email address of the user.
   */
  email: string;

  /**
   * The phone number associated with the user.
   */
  phone_number: string;

  /**
   * The addresses linked to the user.
   */
  addresses: Address[];

  /**
   * The timestamp when the user was created.
   */
  created_at: string;

  /**
   * The timestamp when the user was last updated.
   */
  updated_at: string;
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
   * The house number of the address.
   */
  house_number: string;

  /**
   * The city of the address.
   */
  city: string;

  /**
   * The postal code of the address.
   */
  postal_code: string;

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
  user_id: string;

  /**
   * The alarm code for the device.
   */
  alarm_code: string | null;

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
  maps_link: string | null;

  /**
   * The phone number associated with the device.
   */
  phone_number: string;

  /**
   * The battery percentage of the device.
   */
  battery_percentage: number;

  /**
   * The timestamp when the device record was created.
   */
  created_at: string;

  /**
   * The timestamp when the device record was last updated.
   */
  updated_at: string;

  /**
   * The associated user for the device (if loaded).
   */
  user?: User; // Optional because whenLoaded('user') means it may not always be loaded
}

/**
 * A caregiver associated with a patient.
 */
export interface Caregiver {
  /**
   * The unique identifier for the caregiver.
   */
  id: string;

  /**
   * The name of the caregiver.
   */
  name: string;

  /**
   * The email address of the caregiver.
   */
  email: string;
}

export interface CaregiverInvitation {
  /**
   * The email of the invited caregiver.
   */
  email: string;

  /**
   * The token for the invitation.
   */
  token: string;

  /**
   * The ID of the patient associated with the caregiver.
   */
  patient_id: string;

  /**
   * The timestamp when the invitation was created.
   */
  created_at: string;
}
