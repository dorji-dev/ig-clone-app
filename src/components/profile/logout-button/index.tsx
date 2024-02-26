"use client";

import { signOut } from "@lib/actions";
import { useRouter } from "@router/customized";
import { Button } from "antd";
import { useTransition } from "react";

const LogoutButton = () => {
  const router = useRouter();
  const [isPending, startTransition] = useTransition();
  const handleSignOut = async () => {
    startTransition(async () => {
      const res = await signOut();
      if (res?.status === "success") {
        router.push("/auth/signin");
      }
    });
  };

  return (
    <Button
      onClick={handleSignOut}
      disabled={isPending}
      type="text"
      className="mt-3 xs:mt-0 w-fit"
    >
      Logout
    </Button>
  );
};

export default LogoutButton;
