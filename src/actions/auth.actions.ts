"use server";

import { nodeFetch } from "../helpers/node-fetch-helper";
import { cookies } from "next/headers";
import { AUTH_COOKIE_NAME } from "../lib/constants/auth.constants";
import { SignUpResponse, SignInResponse } from "../lib/models/auth.model";
import { AuthActionsResponse } from "../lib/models/server-action.model";

/**
 * Sign in
 * @param email
 * @param password
 * @returns
 */
export async function signIn(
  email: string,
  password: string
): Promise<AuthActionsResponse | undefined> {
  const bodyPayload = {
    email,
    password,
    returnSecureToken: true,
  };
  try {
    const response = await nodeFetch<SignInResponse>({
      url: `${process.env.NEXT_PUBLIC_AUTH_BASE_API_URL}/accounts:signInWithPassword?key=${process.env.NEXT_PUBLIC_FIREBASE_WEB_API_KEY}`,
      method: "POST",
      body: bodyPayload,
    });
    cookies().set(AUTH_COOKIE_NAME, response.idToken, {
      secure: false,
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
): Promise<AuthActionsResponse | undefined> {
  const bodyPayload = {
    email,
    password,
    returnSecureToken: true,
  };
  try {
    const response = await nodeFetch<SignUpResponse>({
      url: `${process.env.NEXT_PUBLIC_AUTH_BASE_API_URL}/accounts:signUp?key=${process.env.NEXT_PUBLIC_FIREBASE_WEB_API_KEY}`,
      method: "POST",
      body: bodyPayload,
    });
    cookies().set(AUTH_COOKIE_NAME, response.idToken, {
      secure: false,
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
 * Sign out action
 * @returns
 */
export async function signOut(): Promise<AuthActionsResponse | undefined> {
  cookies().set(AUTH_COOKIE_NAME, "");
  return {
    status: "success",
    errorMessage: null,
  };
}
