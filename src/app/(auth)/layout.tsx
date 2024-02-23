import { LayoutProps } from "@lib/models";
import { DM_Sans } from "next/font/google";
import { AntdRegistry } from "@ant-design/nextjs-registry";
import "../../stylesheets/globals.css";
import "../../stylesheets/cssgram.css";
import "../../stylesheets/nprogress.css";
import AntDesignConfigProvider from "@component/providers/ant-design-config-provider";
import { VscLinkExternal } from "react-icons/vsc";
import Image from "next/image";
import { HandleOnComplete } from "@router/customized";

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

const AuthLayout = ({ children }: LayoutProps) => {
  return (
    <html lang="en">
      <body className={dmSans.className}>
        <div className="flex flex-col justify-center items-center h-screen">
          <AntdRegistry>
            <AntDesignConfigProvider>
              <HandleOnComplete />
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
                  {children}
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
            </AntDesignConfigProvider>
          </AntdRegistry>
        </div>
      </body>
    </html>
  );
};

export default AuthLayout;
