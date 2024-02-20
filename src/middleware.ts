import { NextRequest, NextResponse } from "next/server";
import {
  AUTH_COOKIE_NAME,
} from "./lib/constants/auth.constants";

const authRoutes = ["/auth/signin", "/auth/signup"];

export default async function middleware(request: NextRequest) {
  const idToken = request.cookies.get(AUTH_COOKIE_NAME)?.value ?? "";
  const pathName = request.nextUrl.pathname;

  try {
    const response = await fetch(
      `${process.env.AUTH_BASE_API_URL}/accounts:lookup?key=${process.env.NEXT_PUBLIC_FIREBASE_WEB_API_KEY}`,
      {
        method: "POST",
        body: JSON.stringify({
          idToken,
        }),
      }
    );
    if (response.status === 200 && authRoutes.includes(pathName)) {
      // authenticated but on auth pages
      return NextResponse.redirect(new URL("/", request.url));
    } else if (response.status !== 200 && !authRoutes.includes(pathName)) {
      // unauthenticated but on protected pages
      return NextResponse.redirect(new URL("/auth/signin", request.url));
    }
  } catch (err) {
    // unauthenticated but on protected pages
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
