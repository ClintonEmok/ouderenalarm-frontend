"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Form } from "@/components/ui/form";
import CustomFormField from "../CustomFormField";
import SubmitButton from "../SubmitButton";
import { useState } from "react";
import { useAuth } from "@/hooks/auth";
import { ForgotPasswordSchema } from "@/lib/validation";
import AuthSessionStatus from "../AuthSessionStatus";

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
const ForgotPasswordForm = () => {
  const [status, setStatus] = useState<string>("");
  const { forgotPassword } = useAuth({
    middleware: "guest",
    redirectIfAuthenticated: "/dashboard",
  });
  const [isLoading, setIsLoading] = useState(false);

  const form = useForm<z.infer<typeof ForgotPasswordSchema>>({
    resolver: zodResolver(ForgotPasswordSchema),
    defaultValues: {
      email: "",
    },
  });

  // 2. Define a submit handler.
  async function onSubmit({ email }: z.infer<typeof ForgotPasswordSchema>) {
    setIsLoading(true);
    // Do something with the form values.
    // ✅ This will be type-safe and validated.

    try {
      const formData = {
        email,
      };
      const response = await forgotPassword(formData);
      setStatus(response.data.status);
    } catch (e) {
      setStatus("");
      setIsLoading(false);
      console.error(e);
    }
  }
  return (
    <Form {...form}>
      <AuthSessionStatus className="mb-4" status={status} />
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6 flex-1">
        <CustomFormField
          control={form.control}
          fieldType={FormFieldType.INPUT}
          name="email"
          label="Email"
          placeholder="johndoe@gmail.com"
        />

        <div className="flex items-center w-full justify-center">
          <SubmitButton
            isLoading={isLoading}
            className={
              "bg-primary-500 text-white font-bold text-md w-full max-w-xs"
            }
          >
            Email Password Reset Link
          </SubmitButton>
        </div>
      </form>
    </Form>
  );
};

export default ForgotPasswordForm;
