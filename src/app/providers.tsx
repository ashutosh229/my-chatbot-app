"use client";

import nhost from "@/lib/nhost";
import { NhostNextProvider } from "@nhost/nextjs";
import { NhostApolloProvider } from "@nhost/react-apollo";
import { ReactNode } from "react";

interface ProvidersProp {
  children: ReactNode;
}

const Providers = ({ children }: ProvidersProp) => {
  return (
    <NhostNextProvider nhost={nhost}>
      <NhostApolloProvider nhost={nhost}>{children}</NhostApolloProvider>
    </NhostNextProvider>
  );
};

export default Providers;
