import { DM_Sans } from "next/font/google";
import { AntdRegistry } from "@ant-design/nextjs-registry";
import "../../stylesheets/globals.css";
import "../../stylesheets/cssgram.css";
import "../../stylesheets/nprogress.css";
import { LayoutProps } from "@lib/models";
import Header from "@component/header";
import AntDesignConfigProvider from "@component/providers/ant-design-config-provider";
import { HandleOnComplete } from "@router/customized";
import MobileBottomNav from "@component/mobile-bottom-nav";

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

export default function RootLayout({ children }: LayoutProps) {
  return (
    <html lang="en">
      <body className={dmSans.className}>
        <AntdRegistry>
          <AntDesignConfigProvider>
            <HandleOnComplete />
            <Header />
            <div className="mt-[94px] pb-[100px] md:pb-[50px]">{children}</div>
            <MobileBottomNav />
          </AntDesignConfigProvider>
        </AntdRegistry>
      </body>
    </html>
  );
}
