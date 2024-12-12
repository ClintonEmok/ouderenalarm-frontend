import RegisterForm from "@/components/forms/RegisterForm";
import { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Registreer", // Page
};

// TODO: move to register page (route)
export default function Register() {
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
          <RegisterForm />

          <div className="text-14-regular mt-20 flex justify-between">
            <p className="justify-items-end text-dark-600 xl:text-left">
              © 2024 Ouderenalarm.
            </p>
          </div>
        </div>
      </section>
      <Image
        src="/assets/images/register-img.png"
        height={1000}
        width={1000}
        alt="patient"
        className="side-img max-w-[390px]"
      />
    </div>
  );
}
