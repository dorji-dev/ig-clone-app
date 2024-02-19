import { NextApiRequest, NextApiResponse } from "next";
import NextAuth, { type NextAuthOptions } from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import TwitterProvider from "next-auth/providers/twitter";

export const authOptions: NextAuthOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_AUTH_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_AUTH_CLIENT_SECRET as string,
    }),
    TwitterProvider({
      clientId: process.env.TWITTER_AUTH_CONSUMER_KEY as string,
      clientSecret: process.env.TWITTER_AUTH_CONSUMER_SECRET as string,
      version: "2.0",
    }),
  ],
  pages: {
    signIn: "/auth/signin",
  },
};

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  // custom logic before handling request to next-auth
  return await NextAuth(req, res, authOptions);
};

export { handler as GET, handler as POST };
