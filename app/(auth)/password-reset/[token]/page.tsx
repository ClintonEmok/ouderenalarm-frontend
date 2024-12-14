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
        Forgot your password? No problem. Just let us know your email address
        and we will email you a password reset link that will allow you to
        choose a new one.
      </div>
      <PasswordResetForm />
    </AuthCard>
  );
};

export default PasswordResetPage;
