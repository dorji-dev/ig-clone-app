import { NextRequest, NextResponse } from "next/server";
import { getLoggedInUser } from "./services";
import { AUTH_COOKIE_NAME } from "./lib/constants/auth.constants";

const authRoutes = ["/auth/signin", "/auth/signup"];

export default async function middleware(request: NextRequest) {
  const idToken = request.cookies.get(AUTH_COOKIE_NAME)?.value ?? "";
  const pathName = request.nextUrl.pathname;

  try {
    await getLoggedInUser(idToken);
    if (authRoutes.includes(pathName)) {
      return NextResponse.redirect(new URL("/", request.url));
    }
  } catch (err) {
    if (!authRoutes.includes(pathName)) {
      return NextResponse.redirect(new URL("/auth/signin", request.url));
    }
  }
}

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
