"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Form } from "@/components/ui/form";
import CustomFormField from "@/components/CustomFormField";
import SubmitButton from "@/components/SubmitButton";
import { useState } from "react";
import { useAuth } from "@/hooks/auth";
import { FormFieldType } from "./LoginForm";

export const PasswordSchema = z.object({
  current_password: z.string().min(8, "Current password is required"),
  new_password: z.string().min(8, "New password must be at least 8 characters"),
  new_password_confirmation: z
    .string()
    .min(8, "Please confirm your new password"),
});

const UpdatePasswordForm = () => {
  const { changePassword } = useAuth({ middleware: "auth" });
  const [isLoading, setIsLoading] = useState(false);

  const form = useForm<z.infer<typeof PasswordSchema>>({
    resolver: zodResolver(PasswordSchema),
    defaultValues: {
      current_password: "",
      new_password: "",
      new_password_confirmation: "",
    },
  });

  const onSubmit = async (data: z.infer<typeof PasswordSchema>) => {
    setIsLoading(true);
    try {
      await changePassword(data);
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <CustomFormField
          control={form.control}
          name="current_password"
          label="Current Password"
          fieldType={FormFieldType.INPUT}
        />
        <CustomFormField
          control={form.control}
          name="new_password"
          label="New Password"
          fieldType={FormFieldType.INPUT}
        />
        <CustomFormField
          control={form.control}
          name="confirm_password"
          label="Confirm Password"
          fieldType={FormFieldType.INPUT}
        />
        <SubmitButton
          isLoading={isLoading}
          className={
            "bg-primary-500 text-white font-bold text-md w-full max-w-xs"
          }
        >
          Change Password
        </SubmitButton>
      </form>
    </Form>
  );
};

export default UpdatePasswordForm;
