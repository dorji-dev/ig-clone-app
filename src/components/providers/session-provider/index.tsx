"use client"

import { ProviderProps } from "@lib/data";
import { SessionProvider as NextAuthSessionProvider } from "next-auth/react";
import { FC } from "react";

const SessionProvider: FC<ProviderProps> = ({ children }) => {
  return <NextAuthSessionProvider>{children}</NextAuthSessionProvider>;
};

export default SessionProvider;
