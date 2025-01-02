"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Form } from "@/components/ui/form";
import CustomFormField from "../CustomFormField";
import SubmitButton from "../SubmitButton";
import { useState } from "react";
import { useAcceptCaregiverInvitationMutation } from "@/state/api";
import { FormFieldType } from "./LoginForm";
import { CaregiverInvitationSchema } from "@/lib/validation";
import { useSearchParams } from "next/navigation";
import axios, { AxiosError } from "axios";
import AuthSessionStatus from "../AuthSessionStatus";

const AcceptInvitationForm = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [status, setStatus] = useState<string>("");
  const searchParams = useSearchParams();
  const token = searchParams.get("token") || ""; // Get the token from the URL query string
  const emailFromParams = searchParams.get("email") || ""; // Optionally prefill the email from the query

  const form = useForm<z.infer<typeof CaregiverInvitationSchema>>({
    resolver: zodResolver(CaregiverInvitationSchema),
    defaultValues: {
      email: emailFromParams,
      password: "",
      password_confirmation: "",
    },
  });

  // Submit handler
  async function onSubmit({
    email,
    password,
    password_confirmation,
  }: z.infer<typeof CaregiverInvitationSchema>) {
    setIsLoading(true);

    try {
      const invitationData = {
        email,
        password,
        password_confirmation,
        token,
      };

      console.log(searchParams);
      // Call API to accept the invitation
      // Make the API call using axios
      await axios.post("/api/caregivers/accept", invitationData);

      // Optionally redirect after successful submission
    } catch (e: AxiosError | any) {
      if (axios.isAxiosError(e)) {
        setStatus(e.response?.data?.error);
      }

      setIsLoading(false);
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
          <h1 className="header">Accept Invitation 🎉</h1>
          <p className="text-dark-700">
            Complete the form below to accept the caregiver invitation.
          </p>
          <AuthSessionStatus status={status} className="text-red-800" />
        </section>

        <CustomFormField
          control={form.control}
          fieldType={FormFieldType.INPUT}
          name="email"
          label="Email"
          placeholder="johndoe@gmail.com"
          // iconSrc="assets/icons/email.svg"
          // iconAlt="email"
        />

        <div className="flex flex-col gap-6 xl:flex-row">
          <CustomFormField
            control={form.control}
            fieldType={FormFieldType.INPUT}
            name="password"
            label="Password"
            placeholder="Create a new password"
          />

          <CustomFormField
            control={form.control}
            fieldType={FormFieldType.INPUT}
            name="password_confirmation"
            label="Confirm Password"
            placeholder="Confirm your new password"
          />
        </div>

        <div className="flex items-center w-full justify-center">
          <SubmitButton
            isLoading={isLoading}
            className={
              "bg-primary-500 text-white font-bold text-md w-full max-w-xs"
            }
          >
            Accept Invitation
          </SubmitButton>
        </div>
      </form>
    </Form>
  );
};

export default AcceptInvitationForm;
