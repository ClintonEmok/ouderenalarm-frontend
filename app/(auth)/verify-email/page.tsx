"use client";
import Link from "next/link";
import AuthCard from "@/components/AuthCard";
import ApplicationLogo from "@/components/ApplicationLogo";
import { useAuth } from "@/hooks/auth";

const VerifyEmailPage = () => {
  const { logout, resendEmailVerification } = useAuth({
    middleware: "auth",
    redirectIfAuthenticated: "/dashboard",
  });

  const onClickResend = () => {
    resendEmailVerification();
  };
  return (
    <AuthCard
      logo={
        <Link href="/">
          <ApplicationLogo className="w-20 h-20 fill-current text-gray-500" />
        </Link>
      }
    >
      <div className="mb-4 text-sm text-gray-600">
        Bedankt voor je aanmelding! Voordat je begint, kun je je e-mailadres
        verifiëren door op de link te klikken die we je zojuist hebben gemaild.
        Als je de e-mail niet hebt ontvangen, sturen we je graag een nieuwe.
      </div>

      <div className="mt-4 flex items-center justify-between">
        <button
          className="inline-flex items-center px-4 py-2 bg-gray-800 border border-transparent rounded-md font-semibold text-xs text-white uppercase tracking-widest hover:bg-gray-700 active:bg-gray-900 focus:outline-none focus:border-gray-900 focus:ring ring-gray-300 disabled:opacity-25 transition ease-in-out duration-150"
          onClick={onClickResend}
        >
          Resend Verification Email
        </button>

        <button
          type="button"
          className="underline text-sm text-gray-600 hover:text-gray-900"
          onClick={logout}
        >
          Logout
        </button>
      </div>
    </AuthCard>
  );
};

export default VerifyEmailPage;
