"use server";

import { fetchHelper } from "../helpers/request-helper";
import { cookies } from "next/headers";
import { AUTH_COOKIE_NAME } from "../lib/constants/auth.constants";
import { SignUpResponse } from "../lib/models/auth.model";
import { ServerActionResponse } from "../lib/models/server-action.model";
import { AUTH_BASE_API_URL } from "@lib/constants";

/**
 * Sign in
 * @param email
 * @param password
 * @returns
 */
export async function signIn(
  email: string,
  password: string
): Promise<ServerActionResponse | undefined> {
  const bodyPayload = {
    email,
    password,
  };
  try {
    const response = await fetchHelper<SignUpResponse>(
      `${AUTH_BASE_API_URL}/accounts:signInWithPassword?key=${process.env.NEXT_PUBLIC_FIREBASE_WEB_API_KEY}`,
      "POST",
      bodyPayload
    );
    cookies().set(AUTH_COOKIE_NAME, response.idToken, {
      secure: false,
      maxAge: 36000,
    });
    return {
      status: "success",
      errorMessage: null,
    };
  } catch (error: any) {
    return {
      status: "error",
      errorMessage: error?.error?.message,
    };
  }
}
/**
 * Sign up action
 * @param email
 * @param password
 * @returns
 */
export async function signUp(
  email: string,
  password: string
): Promise<ServerActionResponse | undefined> {
  const bodyPayload = {
    email,
    password,
  };
  try {
    const response = await fetchHelper<SignUpResponse>(
      `${AUTH_BASE_API_URL}/accounts:signUp?key=${process.env.NEXT_PUBLIC_FIREBASE_WEB_API_KEY}`,
      "POST",
      bodyPayload
    );
    cookies().set(AUTH_COOKIE_NAME, response.idToken, {
      secure: false,
      maxAge: 36000,
    });
    return {
      status: "success",
      errorMessage: null,
    };
  } catch (error: any) {
    return {
      status: "error",
      errorMessage: error?.error?.message,
    };
  }
}
export async function signOut() {}
