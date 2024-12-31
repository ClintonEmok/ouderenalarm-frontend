"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Form } from "@/components/ui/form";
import CustomFormField from "../CustomFormField";
import SubmitButton from "../SubmitButton";
import { useState } from "react";
import { UserRegistrationSchema } from "@/lib/validation";
import Link from "next/link";
import { useAuth } from "@/hooks/auth";
import { FormFieldType } from "./LoginForm";

// TODO: Rename
const RegisterForm = () => {
  const [isLoading, setIsLoading] = useState(false);
  const { register } = useAuth({
    middleware: "guest",
    redirectIfAuthenticated: "/dashboard",
  });
  const form = useForm<z.infer<typeof UserRegistrationSchema>>({
    resolver: zodResolver(UserRegistrationSchema),
    defaultValues: {
      name: "",
      last_name: "",
      email: "",
      password: "",
      password_confirmation: "",
      street: "",
      house_number: "",
      phone_number: "",
      postal_code: "",
      city: "",
      country: "",
    },
  });

  // 2. Define a submit handler.
  async function onSubmit({
    name,
    last_name,
    email,
    password,
    password_confirmation,
    street,
    house_number,
    phone_number,
    postal_code,
    city,
    country,
  }: z.infer<typeof UserRegistrationSchema>) {
    setIsLoading(true);
    console.log(
      name,
      last_name,
      email,
      password,
      password_confirmation,
      street,
      house_number,
      phone_number,
      postal_code,
      city,
      country
    );

    try {
      const registerData = {
        name,
        last_name,
        email,
        password,
        password_confirmation,
        street,
        house_number,
        phone_number,
        postal_code,
        city,
        country,
      };
      // Call an API
      await register(registerData);
      // if(user) router.push(/users/${user.id}/register);
    } catch (e) {
      console.error(e);
      setIsLoading(false);
    }
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="space-y-12 flex-1"
      >
        <section className="space-y-4">
          <h1 className="header">Sluit je vandaag aan 🎉</h1>
          <p className="text-dark-700">Maak een account aan en begin direct</p>
        </section>
        <section className="space-y-6">
          <div className="mb-9 space-y-1">
            <h2 className="sub-header">Personal Information</h2>
          </div>
        </section>

        <div className="flex flex-col gap-6 xl:flex-row">
          <CustomFormField
            control={form.control}
            fieldType={FormFieldType.INPUT}
            name="name"
            label="First Name"
            placeholder="John"
            iconSrc="assets/icons/user.svg"
            iconAlt="user"
          />

          <CustomFormField
            control={form.control}
            fieldType={FormFieldType.INPUT}
            name="last_name"
            label="Last Name"
            placeholder="Doe"
            iconSrc="assets/icons/user.svg"
            iconAlt="user"
          />
        </div>

        <div className="flex flex-col gap-6 xl:flex-row">
          <CustomFormField
            control={form.control}
            fieldType={FormFieldType.INPUT}
            name="email"
            label="Email"
            placeholder="johndoe@gmail.com"
            iconSrc="assets/icons/email.svg"
            iconAlt="email"
          />

          <CustomFormField
            control={form.control}
            fieldType={FormFieldType.PHONE_INPUT}
            name="phone_number"
            label="Phone Number"
            placeholder="06 12345678"
          />
        </div>

        <div className="flex flex-col gap-6 xl:flex-row">
          <CustomFormField
            control={form.control}
            fieldType={FormFieldType.INPUT}
            name="password"
            label="Password"
          />

          <CustomFormField
            control={form.control}
            fieldType={FormFieldType.INPUT}
            name="password_confirmation"
            label="Confirm Password"
          />
        </div>

        <section className="space-y-6">
          <div className="mb-9 space-y-1">
            <h2 className="sub-header">Address Information</h2>
          </div>
        </section>

        <div className="flex flex-col gap-6 xl:flex-row">
          <CustomFormField
            control={form.control}
            fieldType={FormFieldType.INPUT}
            name="street"
            label="Straat"
            placeholder=""
          />

          <CustomFormField
            control={form.control}
            fieldType={FormFieldType.INPUT}
            name="house_number"
            label="Huisnummer"
            placeholder="3"
          />
        </div>

        <div className="flex flex-col gap-6 xl:flex-row">
          <CustomFormField
            control={form.control}
            fieldType={FormFieldType.INPUT}
            name="city"
            label="Stad"
            placeholder=""
          />

          <CustomFormField
            control={form.control}
            fieldType={FormFieldType.INPUT}
            name="postal_code"
            label="Postcode"
            placeholder="4563 AB"
          />
        </div>
        <CustomFormField
          control={form.control}
          fieldType={FormFieldType.INPUT}
          name="country"
          label="Land"
          placeholder="Nederland"
        />

        <div className="flex items-center w-full justify-center">
          <SubmitButton
            isLoading={isLoading}
            className={
              "bg-primary-500 text-white font-bold text-md w-full max-w-xs"
            }
          >
            Get Started
          </SubmitButton>
        </div>

        {/* Sign Up Link */}
        <div className="text-center mt-4">
          <p className="text-dark-700">
            Already have an account?{" "}
            <Link href="/login" className="text-primary-500 hover:underline">
              Sign In
            </Link>
          </p>
        </div>
      </form>
    </Form>
  );
};

export default RegisterForm;
