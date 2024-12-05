"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";
import CustomFormField from "../CustomFormField";
import SubmitButton from "../SubmitButton";
import { useState } from "react";
import { UserRegistrationSchema as UserLoginSchema } from "@/lib/validation";
import { useRouter } from "next/navigation";

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
const LoginForm = () => {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);

  const form = useForm<z.infer<typeof UserLoginSchema>>({
    resolver: zodResolver(UserLoginSchema),
    defaultValues: {
      name: "",
      email: "",
    },
  });

  // 2. Define a submit handler.
  async function onSubmit({ name, email }: z.infer<typeof UserLoginSchema>) {
    setIsLoading(true);
    // Do something with the form values.
    // ✅ This will be type-safe and validated.

    try {
      const userData = {
        name,
        email,
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
          <h1 className="header">Welkom terug 👋</h1>
          <p className="text-dark-700">
            Log in om verder te gaan waar je gebleven was
          </p>
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
          fieldType={FormFieldType.INPUT}
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
            Get Started
          </SubmitButton>
        </div>
      </form>
    </Form>
  );
};

export default LoginForm;
