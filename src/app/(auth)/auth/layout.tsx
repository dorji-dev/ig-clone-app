import { LayoutProps } from "@lib/data";

const AuthLayout = ({ children }: LayoutProps) => {
  return <div className="flex flex-col justify-center items-center h-screen">{children}</div>;
};

export default AuthLayout;
