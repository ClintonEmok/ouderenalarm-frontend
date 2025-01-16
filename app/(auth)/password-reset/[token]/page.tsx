import Link from "next/link";
import AuthCard from "@/components/AuthCard";
import ApplicationLogo from "@/components/ApplicationLogo";
import PasswordResetForm from "@/components/forms/PasswordResetForm";

const PasswordResetPage = () => {
  return (
    <AuthCard
      logo={
        <Link href="/">
          <ApplicationLogo className="w-20 h-20 fill-current text-gray-500" />
        </Link>
      }
    >
      <div className="mb-4 text-sm text-gray-600">
        Wachtwoord vergeten? Geen probleem. Laat ons je e-mailadres weten, en we
        sturen je een link om je wachtwoord te resetten, zodat je een nieuw
        wachtwoord kunt kiezen.
      </div>
      <PasswordResetForm />
    </AuthCard>
  );
};

export default PasswordResetPage;
