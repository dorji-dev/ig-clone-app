import { withAuth } from "next-auth/middleware";

export default withAuth({
  // must match the pages config of [...nextauth] -> route.ts
  pages: {
    signIn: "/auth/signin",
  },
});

export const config = {
  /*
   * Match all request paths except for the ones starting with:
   * - api (API routes)
   * - _next/static (static files)
   * - _next/image (image optimization files)
   * - images (assets inside images folder under public)
   * - favicon.ico (favicon file)
   */
  matcher: ["/((?!api|_next/static|_next/image|images|favicon.ico).*)"],
};