"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";
import CustomFormField from "../CustomFormField";
import SubmitButton from "../SubmitButton";
import { useState } from "react";
import { UserRegistrationSchema } from "@/lib/validation";
import { useRouter } from "next/navigation";
import Link from "next/link";

export enum FormFieldType {
  INPUT = "input",
  TEXTAREA = "textarea",
  PHONE_INPUT = "phoneInput",
  CHECKBOX = "checkbox",
  DATE_PICKER = "datePicker",
  SELECT = "select",
  SKELETON = "skeleton",
}

// TODO: Rename
const RegisterForm = () => {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);

  const form = useForm<z.infer<typeof UserRegistrationSchema>>({
    resolver: zodResolver(UserRegistrationSchema),
    defaultValues: {
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
  });

  // 2. Define a submit handler.
  async function onSubmit({
    name,
    email,
    password,
    confirmPassword,
  }: z.infer<typeof UserRegistrationSchema>) {
    setIsLoading(true);
    console.log(name, email, password, confirmPassword);

    try {
      const userData = {
        name,
        email,
        password,
        confirmPassword,
      };
      // Call an API
      // const user = await createUser(userData);
      // if(user) router.push(/users/${user.id}/register);
    } catch (e) {
      console.error(e);
    }
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6 flex-1">
        <section className="mb-12 space-y-4">
          <h1 className="header">Sluit je vandaag aan 🎉</h1>
          <p className="text-dark-700">Maak een account aan en begin direct</p>
        </section>
        <CustomFormField
          control={form.control}
          fieldType={FormFieldType.INPUT}
          name="name"
          label="Full Name"
          placeholder="John Doe"
          iconSrc="assets/icons/user.svg"
          iconAlt="user"
        />
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
          fieldType={FormFieldType.INPUT}
          name="password"
          label="Password"
        />
        <CustomFormField
          control={form.control}
          fieldType={FormFieldType.INPUT}
          name="confirmPassword"
          label="Confirm Password"
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
            <Link href="/sign-in" className="text-primary-500 hover:underline">
              Sign In
            </Link>
          </p>
        </div>
      </form>
    </Form>
  );
};

export default RegisterForm;
