import { withAuth } from "next-auth/middleware";

export default withAuth({
  // must match the pages config of [...nextauth] -> route.ts
  pages: {
    signIn: '/auth/signin',
  }
})