import SignIn from "@component/auth/sign-in";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Login",
  description: "Login to get the best of social media",
};

const SignInPage = () => {
  return <SignIn />;
};

export default SignInPage;
