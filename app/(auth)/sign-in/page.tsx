import LoginForm from "@/components/forms/LoginForm";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export const metadata: Metadata = {
  title: "Aanmelden", // Page
};

export default function SignIn() {
  return (
    <div className="flex h-screen max-h-screen">
      {/* {TODO: OTP Verification | Passkey Modal} */}
      <section className="remove-scrollbar container my-auto">
        <div className="sub-container max-w-[496px]">
          <Image
            src="/assets/logos/ouderalarm.png"
            height={1000}
            width={1000}
            alt="patient"
            className="mb-12 h-10 w-fit"
          />
          <LoginForm />

          {/* Forgot Password Link */}
          <div className="mt-4 text-center">
            <Link
              href="/forgot-password" // Adjust this to the correct route for "Forgot Password"
              className="text-14-regular text-blue-600 hover:underline"
            >
              Wachtwoord vergeten?
            </Link>
          </div>

          {/* Sign Up Link */}
          <div className="mt-4 text-center">
            <p className="text-dark-700">
              Nog geen account?{" "}
              <Link
                href="/register" // Adjust this to the correct route for "Sign Up"
                className="text-primary-500 hover:underline"
              >
                Registreren
              </Link>
            </p>
          </div>

          <div className="text-14-regular mt-20 flex justify-between">
            <p className="justify-items-end text-dark-600 xl:text-left">
              © 2024 Ouderenalarm.
            </p>
          </div>
        </div>
      </section>
      <Image
        src="/assets/images/onboarding-img.png"
        height={1000}
        width={1000}
        alt="patient"
        className="side-img max-w-[50%]"
      />
    </div>
  );
}
