import { AuthErrorKeys } from "./auth.model";

export type ServerActionResponse = {
  status: "success" | "error";
  errorMessage: AuthErrorKeys | null;
};
