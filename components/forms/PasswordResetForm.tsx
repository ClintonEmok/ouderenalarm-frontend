"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Form } from "@/components/ui/form";
import CustomFormField from "../CustomFormField";
import SubmitButton from "../SubmitButton";
import { useEffect, useState } from "react";
import { useAuth } from "@/hooks/auth";
import { PasswordResetSchema } from "@/lib/validation";
import AuthSessionStatus from "../AuthSessionStatus";
import { useSearchParams } from "next/navigation";
import { FormFieldType } from "./LoginForm";

// TODO: Rename
const PasswordResetForm = () => {
  const searchParams = useSearchParams();
  const [status, setStatus] = useState<string>("");
  const { resetPassword } = useAuth({ middleware: "guest" });
  const [isLoading, setIsLoading] = useState(false);

  const form = useForm<z.infer<typeof PasswordResetSchema>>({
    resolver: zodResolver(PasswordResetSchema),
    defaultValues: {
      email: "",
      password: "",
      password_confirmation: "",
    },
  });

  useEffect(() => {
    form.setValue("email", searchParams.get("email") ?? "");
  }, [form, searchParams]);

  // 2. Define a submit handler.
  async function onSubmit({
    email,
    password,
    password_confirmation,
  }: z.infer<typeof PasswordResetSchema>) {
    setIsLoading(true);
    // Do something with the form values.
    // ✅ This will be type-safe and validated.

    try {
      const formData = {
        email,
        password,
        password_confirmation,
      };
      await resetPassword(formData);
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

        <CustomFormField
          control={form.control}
          fieldType={FormFieldType.INPUT}
          name="password"
          label="Password"
          placeholder=""
        />
        <CustomFormField
          control={form.control}
          fieldType={FormFieldType.INPUT}
          name="password_confirmation"
          label="Confirm Password"
          placeholder=""
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

export default PasswordResetForm;
