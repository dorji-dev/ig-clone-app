import { ReactNode } from "react";
import {
  TAILWIND_2XL,
  TAILWIND_LARGE,
  TAILWIND_MEDIUM,
  TAILWIND_SMALL,
  TAILWIND_XL,
} from "../constants";
import { IconType } from "react-icons";

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
  title: string;
  style: string;
  onClick: () => void;
  icon: IconType;
}[];
export type EmailPassword = {
  email: string;
  password: string;
}


