import { AUTH_ERROR_MAPPINGS } from "../constants/auth.constants";

export type SignUpResponse = {
  kind: string;
  idToken: string;
  email: string;
  refreshToken: string;
  expiresIn: string;
  localId: string;
};

export type SignInResponse = SignUpResponse;

export type AuthErrorKeys = keyof typeof AUTH_ERROR_MAPPINGS;

export type LoggedInUserResponse = {
  users: {
    localId: string;
    email: string;
    passwordHash: string;
    emailVerified: boolean;
    passwordUpdatedAt: number;
    providerUserInfo: {
      providerId: string;
      federatedId: string;
      email: string;
      rawId: string;
    }[];
    validSince: string;
    lastLoginAt: string;
    createdAt: string;
    lastRefreshAt: string;
  }[];
};
