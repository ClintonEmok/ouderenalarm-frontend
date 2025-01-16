import { z } from "zod";

export const UserRegistrationSchema = z
  .object({
    name: z
      .string()
      .min(1, "Naam is verplicht")
      .max(255, "Naam mag maximaal 255 tekens bevatten"),
    last_name: z
      .string()
      .min(1, "Achternaam is verplicht")
      .max(255, "Achternaam mag maximaal 255 tekens bevatten"),

    phone_number: z
      .string()
      .min(1, "Telefoonnummer is verplicht")
      .max(255, "Telefoonnummer mag maximaal 255 tekens bevatten"),

    email: z
      .string()
      .email("Ongeldig e-mailadres")
      .min(1, "E-mailadres is verplicht"),

    password: z.string().min(8, "Wachtwoord moet minimaal 8 tekens bevatten"),

    password_confirmation: z.string(),
  })
  .refine((data) => data.password === data.password_confirmation, {
    message: "Wachtwoorden komen niet overeen",
    path: ["password_confirmation"],
  });

export const UserLoginSchema = z.object({
  email: z.string().email("Ongeldig e-mailadres"),
  password: z.string().min(8, "Wachtwoord moet minimaal 8 tekens bevatten"),
});

export const ForgotPasswordSchema = z.object({
  email: z.string().email("Ongeldig e-mailadres"),
});

export const PasswordResetSchema = z
  .object({
    email: z.string().email("Ongeldig e-mailadres"),
    password: z.string().min(8, "Wachtwoord moet minimaal 8 tekens bevatten"),
    password_confirmation: z.string(),
  })
  .refine((data) => data.password === data.password_confirmation, {
    message: "Wachtwoorden komen niet overeen",
    path: ["password_confirmation"],
  });

export const AccountSchema = z.object({
  name: z.string().min(2, "Naam moet minimaal 2 tekens bevatten"),
  email: z.string().email("Ongeldig e-mailadres"),
  phone_number: z.string().optional(),
});

export const UpdatePasswordSchema = z.object({
  current_password: z.string().min(8, "Huidig wachtwoord is verplicht"),
  new_password: z
    .string()
    .min(8, "Nieuw wachtwoord moet minimaal 8 tekens bevatten"),
  new_password_confirmation: z.string().min(8, "Bevestig je nieuwe wachtwoord"),
});

export const SurveyFormSchema = z.object({
  forWhom: z.enum(["voor mij", "voor een naaste"]),
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
    .min(1, "E-mailadres is verplicht."),
  phone: z
    .string()
    .regex(
      /^(\+)?(\d{1,3})?[-.\s]?\(?\d{1,4}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,9}$/,
      "Voer een geldig telefoonnummer in."
    )
    .min(1, "Telefoonnummer is verplicht."),
});

export const CaregiverInvitationSchema = z.object({
  email: z.string().email("Ongeldig e-mailadres"),
  name: z.string().min(1, "Naam is verplicht"),
  password: z.string().min(8, "Wachtwoord moet minimaal 8 tekens bevatten"),
  password_confirmation: z
    .string()
    .min(8, "Bevestiging van het wachtwoord moet minimaal 8 tekens bevatten"),
});
