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
import { UpdatePasswordSchema } from "@/lib/validation";

const UpdatePasswordForm = () => {
  const { changePassword } = useAuth({ middleware: "auth" });
  const [isLoading, setIsLoading] = useState(false);

  const form = useForm<z.infer<typeof UpdatePasswordSchema>>({
    resolver: zodResolver(UpdatePasswordSchema),
    defaultValues: {
      current_password: "",
      new_password: "",
      new_password_confirmation: "",
    },
  });

  const onSubmit = async (data: z.infer<typeof UpdatePasswordSchema>) => {
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
          fieldType={FormFieldType.PASSWORD}
        />
        <CustomFormField
          control={form.control}
          name="new_password"
          label="New Password"
          fieldType={FormFieldType.PASSWORD}
        />
        <CustomFormField
          control={form.control}
          name="new_password_confirmation"
          label="Confirm Password"
          fieldType={FormFieldType.PASSWORD}
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
