"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Form } from "@/components/ui/form";
import CustomFormField from "../CustomFormField";
import SubmitButton from "../SubmitButton";
import { useState } from "react";
import { useAuth } from "@/hooks/auth";
import { UserLoginSchema } from "@/lib/validation";
import AuthSessionStatus from "../AuthSessionStatus";
import axios, { AxiosError } from "axios";

export enum FormFieldType {
  INPUT = "input",
  PASSWORD = "password",
  TEXTAREA = "textarea",
  PHONE_INPUT = "phoneInput",
  CHECKBOX = "checkbox",
  DATE_PICKER = "datePicker",
  SELECT = "select",
  SKELETON = "skeleton",
}

// TODO: Rename
const LoginForm = () => {
  const { login } = useAuth({
    middleware: "guest",
    redirectIfAuthenticated: "/dashboard",
  });
  const [isLoading, setIsLoading] = useState(false);
  const [status, setStatus] = useState<string>("");

  const form = useForm<z.infer<typeof UserLoginSchema>>({
    resolver: zodResolver(UserLoginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  // 2. Define a submit handler.
  async function onSubmit({
    email,
    password,
  }: z.infer<typeof UserLoginSchema>) {
    setIsLoading(true);
    // Do something with the form values.
    // ✅ This will be type-safe and validated.

    try {
      const userData = {
        email,
        password,
      };

      // Call an API

      await login(userData);
    } catch (e: AxiosError | any) {
      if (axios.isAxiosError(e)) {
        setStatus(e.response?.data?.error);
      }
      setIsLoading(false);
    }
  }
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6 flex-1">
        <section className="mb-12 space-y-4">
          <h1 className="header">Welkom terug 👋</h1>
          <p className="text-dark-700">
            Log in om verder te gaan waar je gebleven was
          </p>
          <AuthSessionStatus status={status} className="text-red-800" />
        </section>

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
          fieldType={FormFieldType.PASSWORD}
          name="password"
          label="Password"
        />
        <div className="flex items-center w-full justify-center">
          <SubmitButton
            isLoading={isLoading}
            className={
              "bg-primary-500 text-white font-bold text-md w-full max-w-xs"
            }
          >
            Login
          </SubmitButton>
        </div>
      </form>
    </Form>
  );
};

export default LoginForm;
