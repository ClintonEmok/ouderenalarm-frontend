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
import axios, { AxiosError, isAxiosError } from "axios";
import AuthSessionStatus from "../AuthSessionStatus";

// TODO: Rename
const RegisterForm = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [status, setStatus] = useState<string>("");
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
      phone_number: "",
    },
  });

  // 2. Define a submit handler.
  async function onSubmit({
    name,
    last_name,
    email,
    password,
    password_confirmation,
    phone_number,
  }: z.infer<typeof UserRegistrationSchema>) {
    setIsLoading(true);

    try {
      const registerData = {
        name,
        last_name,
        email,
        password,
        password_confirmation,
        phone_number,
      };
      // Call an API
      await register(registerData);
    } catch (e: AxiosError | any) {
      if (axios.isAxiosError(e)) {
        setStatus(e.response?.data?.error);
      }
    } finally {
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
          <AuthSessionStatus status={status} className="text-red-800" />
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
