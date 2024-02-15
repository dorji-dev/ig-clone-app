"use client";

import { NextAuthProviders } from "@lib/data";
import { signIn as SignIntoProvider } from "next-auth/react";
import { FcGoogle } from "react-icons/fc";
import { ImTwitter } from "react-icons/im";

interface ProvidersListProps {
  providers: NextAuthProviders;
}

const ProvidersList = ({ providers }: ProvidersListProps) => {
  return (
    <div className="mt-4 border rounded-lg px-5 py-5 w-full sm:max-w-[400px] sm:mx-auto">
      {Object.values(providers).map((provider) => (
        <div key={provider.name} className="first:mb-4">
          <button
            className="py-3 border rounded-lg font-[500] w-full flex items-center justify-center text-gray-700 hover:border-gray-400 transition-all duration-500 px-5"
            onClick={() => SignIntoProvider(provider.id, { callbackUrl: "/" })}
          >
            Sign in with {provider.id === "twitter" ? "Twitter" : provider.name}
            {provider.id === "twitter" && (
              <span className="ml-3 text-[#1D9BEE]">
                <ImTwitter size={20} />
              </span>
            )}
            {provider.id === "google" && (
              <span className="ml-3">
                <FcGoogle size={20} />
              </span>
            )}
          </button>
        </div>
      ))}
    </div>
  );
};

export default ProvidersList;
