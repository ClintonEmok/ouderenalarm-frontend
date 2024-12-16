"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Form } from "@/components/ui/form";
import CustomFormField from "@/components/CustomFormField";
import SubmitButton from "@/components/SubmitButton";
import { useState } from "react";
import { useAuth } from "@/hooks/auth";
import { AccountSchema } from "@/lib/validation";
import { FormFieldType } from "./LoginForm";

const AccountForm = () => {
  const { user, updateAccount } = useAuth({ middleware: "auth" });
  const [isLoading, setIsLoading] = useState(false);

  const form = useForm<z.infer<typeof AccountSchema>>({
    resolver: zodResolver(AccountSchema),
    defaultValues: {
      name: user?.name || "",
      email: user?.email || "",
      phone_number: user?.phone_number || "",
    },
  });

  const onSubmit = async (data: z.infer<typeof AccountSchema>) => {
    setIsLoading(true);
    try {
      await updateAccount(data);
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
          fieldType={FormFieldType.INPUT}
          name="name"
          label="Name"
        />
        <CustomFormField
          control={form.control}
          fieldType={FormFieldType.INPUT}
          name="email"
          label="Email"
        />
        <CustomFormField
          control={form.control}
          fieldType={FormFieldType.PHONE_INPUT}
          name="phone_number"
          label="Phone Number"
        />
        <SubmitButton
          isLoading={isLoading}
          className={
            "bg-primary-500 text-white font-bold text-md w-full max-w-xs"
          }
        >
          Update Account
        </SubmitButton>
      </form>
    </Form>
  );
};

export default AccountForm;
