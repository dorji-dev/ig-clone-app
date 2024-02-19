import { LayoutProps } from "@lib/data";
import { DM_Sans } from "next/font/google";
import { AntdRegistry } from "@ant-design/nextjs-registry";
import "../globals.css";
import AntDesignConfigProvider from "@component/providers/ant-design-config-provider";

const dmSans = DM_Sans({ subsets: ["latin"], weight: ["300", "400", "500", "600", "700", "800"] });

const AuthLayout = ({ children }: LayoutProps) => {
  return (
    <html lang="en">
      <body className={dmSans.className}>
        <div className="flex flex-col justify-center items-center h-screen">
          <AntdRegistry>
            <AntDesignConfigProvider>{children}</AntDesignConfigProvider>
          </AntdRegistry>
        </div>
      </body>
    </html>
  );
};

export default AuthLayout;
