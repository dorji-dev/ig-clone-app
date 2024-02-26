import { AuthErrorKeys } from "./auth.model";

export type GenericServerActionResponse<T = any> = {
  status: "success" | "error";
  errorMessage?: any;
  data?: T;
};

export type AuthActionsResponse = Omit<
  GenericServerActionResponse,
  "data" | "errorMessage"
> & { errorMessage: AuthErrorKeys | null };
