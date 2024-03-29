import { ReactNode } from "react";
import {
  TAILWIND_2XL,
  TAILWIND_LARGE,
  TAILWIND_MEDIUM,
  TAILWIND_SMALL,
  TAILWIND_XL,
} from "../constants";
import { IconType } from "react-icons";

export type FETCH_METHODS = "POST" | "GET" | "DELETE" | "PATCH" | "PUT";

export interface ChildrenProp {
  children: ReactNode;
}
export type ProviderProps = ChildrenProp;
export type LayoutProps = ChildrenProp;
export type TemplateProps = ChildrenProp;
export type ClassNameProp = {
  className: string;
};
export type TailwindBreakPoints =
  | typeof TAILWIND_SMALL
  | typeof TAILWIND_MEDIUM
  | typeof TAILWIND_LARGE
  | typeof TAILWIND_XL
  | typeof TAILWIND_2XL;
export type HeaderNavData = {
  title: HeaderNavTitle;
  style: string;
  icon: IconType;
}[];
export type HeaderNavDataWithAction = HeaderNavData[number] & {
  action: () => void;
};
export type EmailPassword = {
  email: string;
  password: string;
};
export type NextFetchTags<T extends string> = 'Post' | `Comment${T}`;
export type FetchArguments<BodyType> = {
  url: string;
  method: FETCH_METHODS;
  body?: BodyType;
  headers?: { [index: string]: string };
  nextOptions?:
    | (Omit<NextFetchRequestConfig, "tags"> & { tags?: NextFetchTags<string>[] })
    | undefined;
  cache?: RequestCache;
};
export type HeaderNavTitle =
  | "Home"
  | "Features"
  | "Search"
  | "Messages"
  | "Create"
  | "Explore"
  | "Notification";
export type HeaderNavActions = {
  [K in HeaderNavTitle]: () => void;
};
export type ErrorBoundaryFallbackProps = {
  error: Error & { digest?: string }
  reset: () => void
}

