import { BuiltInProviderType } from "next-auth/providers/index";
import { LiteralUnion, ClientSafeProvider } from "next-auth/react";
import { ReactNode } from "react";

interface ChildrenProp {
  children: ReactNode;
}
export type ProviderProps = ChildrenProp;
export type LayoutProps = ChildrenProp;
export type TemplateProps = ChildrenProp;
export type NextAuthProviders = Record<
  LiteralUnion<BuiltInProviderType, string>,
  ClientSafeProvider
>;
