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

export const ForgotPasswordSchema = z.object({
  email: z.string().email("Invalid email"),
});

export const PasswordResetSchema = z
  .object({
    email: z.string().email("Invalid email"),
    password: z.string().min(8, "Password must be at least 8 characters"),
    password_confirmation: z.string(),
  })
  .refine((data) => data.password === data.password_confirmation, {
    message: "Passwords do not match",
    path: ["password_confirmation"],
  });

export const AccountSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Invalid email address"),
  phone_number: z.string().optional(),
});

export const UpdatePasswordSchema = z.object({
  current_password: z.string().min(8, "Current password is required"),
  new_password: z.string().min(8, "New password must be at least 8 characters"),
  new_password_confirmation: z
    .string()
    .min(8, "Please confirm your new password"),
});

export const SurveyFormSchema = z.object({
  forWhom: z.enum(["voor mij", "voor een naaste"]), // Valid options including "unknown",
  livingSituation: z.enum([
    "alleen",
    "met partner",
    "met kinderen",
    "met ouders",
  ]),
  medicalCondition: z.enum(["ja", "nee"]),
  name: z
    .string()
    .min(1, "Naam is verplicht.")
    .max(100, "Naam mag maximaal 100 tekens bevatten."),
  email: z
    .string()
    .email("Voer een geldig e-mailadres in.")
    .min(1, "E-mail is verplicht."),
  phone: z
    .string()
    .regex(
      /^(\+)?(\d{1,3})?[-.\s]?\(?\d{1,4}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,9}$/,
      "Voer een geldig telefoonnummer in."
    )
    .min(1, "Telefoonnummer is verplicht."),
});

export const CaregiverInvitationSchema = z.object({
  email: z.string().email("Invalid email address"),
  password: z.string().min(8, "Password must be at least 8 characters"),
  password_confirmation: z
    .string()
    .min(8, "Password confirmation must be at least 8 characters"),
});
