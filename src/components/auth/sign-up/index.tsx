"use client";

import Link from "next/link";
import AuthForm from "../auth-form";
import { useTransition } from "react";
import { signUp } from "@lib/actions";
import { useRouter } from "next/navigation";
import { notification } from "antd";
import { AUTH_ERROR_MAPPINGS } from "@lib/constants";

const SignUp = () => {
  const router = useRouter();
  const [isPending, startTransition] = useTransition();
  const [api, contextHolder] = notification.useNotification();

  const handleSignUp = async (email: string, password: string) => {
    startTransition(async () => {
      const res = await signUp(email, password);
      if (res?.status === "success") {
        router.push("/");
      } else {
        res?.errorMessage && api.error({
          message: AUTH_ERROR_MAPPINGS?.[res?.errorMessage].title,
          description: AUTH_ERROR_MAPPINGS?.[res?.errorMessage].description,
          className: "!p-[20px] !shadow-main_shadow rounded-[8px]",
        });
      }
    });
  };

  return (
    <div>
      {contextHolder}
      <h2 className="text-sm my-5 font-bold text-gray-400">SIGN UP</h2>
      <AuthForm
        submitButtonLabel="Sign up"
        onSubmit={handleSignUp}
        disableSubmitButton={isPending}
      />
      <Link href="/auth/signin" className="text-primary hover:underline">
        Already have an account? Sign in
      </Link>
    </div>
  );
};

export default SignUp;
