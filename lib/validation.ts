import { z } from "zod";

export const UserRegistrationSchema = z
  .object({
    name: z
      .string()
      .min(1, "Name is required")
      .max(255, "Name must be less than 255 characters"),
    last_name: z
      .string()
      .min(1, "Last name is required")
      .max(255, "Last name must be less than 255 characters"),

    phone_number: z
      .string()
      .min(1, "Phone number is required")
      .max(255, "Phone number must be less than 255 characters"),

    email: z
      .string()
      .email("Invalid email address")
      .min(1, "Email is required"),

    password: z.string().min(8, "Password must be at least 8 characters"),

    password_confirmation: z.string(),

    street: z
      .string()
      .min(1, "Street is required")
      .max(255, "Street must be less than 255 characters"),

    house_number: z
      .string()
      .min(1, "House number is required")
      .max(255, "House number  must be less than 255 characters"),

    postal_code: z
      .string()
      .min(1, "Postal code is required")
      .max(20, "Postal code must be less than 20 characters"),

    city: z
      .string()
      .min(1, "City is required")
      .max(100, "City name must be less than 100 characters"),

    country: z
      .string()
      .min(1, "Country is required")
      .max(100, "Country name must be less than 100 characters"),
  })
  .refine((data) => data.password === data.password_confirmation, {
    message: "Passwords do not match",
    path: ["password_confirmation"],
  });

export const UserLoginSchema = z.object({
  email: z.string().email("Invalid email address"),
  password: z.string().min(8, "Password must be at least 8 characters"),
});
