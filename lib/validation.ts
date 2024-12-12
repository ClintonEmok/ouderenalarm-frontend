import { z } from "zod";

export const UserRegistrationSchema = z
  .object({
    name: z
      .string()
      .min(1, "Name is required")
      .max(255, "Name must be less than 255 characters"),

    email: z
      .string()
      .email("Invalid email address")
      .min(1, "Email is required"),

    password: z.string().min(8, "Password must be at least 8 characters"),

    password_confirmation: z.string(),
    address: z.object({
      street: z
        .string()
        .min(1, "Street is required")
        .max(255, "Street must be less than 255 characters"),

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

      type: z.enum(["billing", "shipping"], {
        errorMap: () => ({
          message: "Type must be either billing or shipping",
        }),
      }),
    }),
  })
  .refine((data) => data.password === data.password_confirmation, {
    message: "Passwords do not match",
    path: ["password_confirmation"],
  });

export const UserLoginSchema = z.object({
  email: z.string().email("Invalid email address"),
  password: z.string().min(8, "Password must be at least 8 characters"),
});
