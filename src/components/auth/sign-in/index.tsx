"use client";

import Link from "next/link";
import AuthForm from "../auth-form";
import { useTransition } from "react";
import { signIn } from "@lib/actions";
import { useRouter } from "next/navigation";
import { notification } from "antd";
import { AUTH_ERROR_MAPPINGS } from "@lib/constants";

const SignIn = () => {
  const router = useRouter();
  const [isPending, startTransition] = useTransition();
  const [api, contextHolder] = notification.useNotification();

  const handleSignUp = async (email: string, password: string) => {
    startTransition(async () => {
      const res = await signIn(email, password);
      if (res?.status === "success") {
        router.push("/");
      } else {
        res?.errorMessage &&
          api.error({
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
      <h2 className="text-sm my-5 font-bold text-gray-400">SIGN IN</h2>
      <AuthForm
        submitButtonLabel="Sign in"
        onSubmit={handleSignUp}
        disableSubmitButton={isPending}
      />
      <Link href="/auth/signup" className="text-primary hover:underline">
        Don&apos;t have an account? Sign up
      </Link>
    </div>
  );
};

export default SignIn;
