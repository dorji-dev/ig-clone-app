"use client";

import Fallback from "@component/error-boundary-fallback/fallback";
import { ErrorBoundaryFallbackProps } from "@lib/models";

const Error = ({ reset, error }: ErrorBoundaryFallbackProps) => {
  return <Fallback reset={reset} error={error} />;
};

export default Error;
