import useSWR from "swr";
import axios from "@/lib/axios";
import { useEffect } from "react";
import { useRouter, useParams } from "next/navigation";
import { UserRegistrationRequest } from "@/lib/interface";
import { toast } from "react-toastify";

export const useAuth = ({
  middleware,
  redirectIfAuthenticated,
}: {
  middleware?: string;
  redirectIfAuthenticated?: string;
}) => {
  const router = useRouter();
  const params = useParams();

  const {
    data: user,
    error,
    mutate,
  } = useSWR("/api/user", () =>
    axios
      .get("/api/user")
      .then((res) => res.data)
      .catch((error) => {
        if (error.response.status !== 409) throw error;

        router.push("/verify-email");
      })
  );

  const csrf = () => axios.get("/sanctum/csrf-cookie");
  const updateAccount = async (data: {
    name: string;
    email: string;
    phone_number?: string;
  }) => {
    try {
      await csrf();
      const response = await axios.put("api/user", data);
      mutate();
      return response;
    } catch (error) {
      throw error;
    }
  };

  const register = async (data: UserRegistrationRequest) => {
    try {
      await csrf();
      return await axios
        .post("/register", data)
        // redirect to login page after successful registration
        .then(() => toast.success("User registered successfully!"))
        .then(() => router.push("/login"));
    } catch (error) {
      throw error;
    }
  };

  const login = async (data: { email: string; password: string }) => {
    try {
      await csrf();
      return await axios
        .post("/login", data)
        .then(() => mutate())
        .then(() => toast.success("User logged in successfully!"))
        .catch((error) => {
          if (error.response.status !== 422) {
            throw error;
          }
        });
    } catch (error) {
      throw error;
    }
  };

  const forgotPassword = async (data: { email: string }) => {
    try {
      await csrf();
      return await axios
        .post("/forgot-password", data)
        .then(() => toast.success("Password reset link sent to your email!"));
    } catch (error) {
      throw error;
    }
  };

  const resetPassword = async (data: {
    email: string;
    password: string;
    password_confirmation: string;
  }) => {
    try {
      await csrf();

      return await axios
        .post("/reset-password", {
          ...data,
          token: params.token,
        })
        .then((response) =>
          router.push("/login?reset=" + btoa(response.data.status))
        )
        .then(() => toast.success("Password reset successfully!"));
    } catch (error) {
      throw error;
    }
  };

  const resendEmailVerification = async () => {
    try {
      return await axios
        .post("/email/verification-notification")
        .then(() =>
          toast.success("Email verification link sent to your email!")
        );
    } catch (error) {
      throw error;
    }
  };

  const changePassword = async (data: {
    current_password: string;
    new_password: string;
    new_password_confirmation: string;
  }) => {
    try {
      await csrf();
      const response = await axios.put("api/user/password", data);
      return response.data;
    } catch (error) {
      console.error("Failed to change password", error);
      throw error;
    }
  };

  const logout = async () => {
    if (!error) {
      await axios.post("/logout").then(() => mutate());
    }

    window.location.pathname = "/login";
  };

  useEffect(() => {
    if (middleware === "guest" && redirectIfAuthenticated && user) {
      console.log(user);
      router.push(redirectIfAuthenticated);
    }

    if (
      window.location.pathname === "/verify-email" &&
      user?.email_verified_at &&
      redirectIfAuthenticated
    ) {
      router.push(redirectIfAuthenticated);
    }
    if (middleware === "auth" && error) logout();
  }, [user, error, middleware, redirectIfAuthenticated]);

  return {
    user,
    register,
    login,
    changePassword,
    forgotPassword,
    resetPassword,
    resendEmailVerification,
    updateAccount,
    logout,
  };
};
