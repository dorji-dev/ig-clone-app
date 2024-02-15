import { LayoutProps } from "@lib/data";
import { Inter } from "next/font/google";
import "../globals.css";

const inter = Inter({ subsets: ["latin"] });

const AuthLayout = ({ children }: LayoutProps) => {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="flex flex-col justify-center items-center h-screen">
          {children}
        </div>
      </body>
    </html>
  );
};

export default AuthLayout;
