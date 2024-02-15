import { getProviders } from "next-auth/react";
import ProvidersList from "./provider-list";
import { NextAuthProviders } from "@lib/data";
import { VscLinkExternal } from "react-icons/vsc";
import Image from "next/image";

const SignIn = async () => {
  const providers = (await getProviders()) as NextAuthProviders;

  return (
    <div className="flex items-center flex-col overflow-y-auto px-5 text-center py-10">
      <div className="bg-white rounded-lg shadow-mainShadow p-8 sm:p-[50px]">
        <Image
          src="/images/instagram-logo.png"
          objectFit="contain"
          className="mx-auto"
          width={140}
          height={40}
          alt="Instagram logo"
        />
        <h2 className="text-sm mt-5 font-bold text-gray-400">SIGN IN</h2>
        <ProvidersList providers={providers} />
        <div className="mt-10">
          <a
            href="https://github.com/dorji-dev/ig-clone"
            target="_blank"
            className="text-gray-600 w-fit mx-auto flex items-center justify-center hover:text-instaBlue hover:underline"
          >
            Github
            <VscLinkExternal
              className="inline ml-2 text-gray-400"
              strokeWidth={0.8}
              size={12}
            />
          </a>
        </div>
      </div>
      <p className="mt-10 text-gray-400">
        By{" "}
        <a
          className="text-gray-700 underline"
          href="https://portfolio-dorji-tsherings-projects.vercel.app/"
          target="_blank"
        >
          Dorji Tshering
        </a>
      </p>
    </div>
  );
};

export default SignIn;
