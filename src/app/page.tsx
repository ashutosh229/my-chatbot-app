import nhost from "@/lib/nhost";
import { NhostNextProvider } from "@nhost/nextjs";
import { AppProps } from "next/app";
import { NhostAuthProvider } from "@nhost/react-auth";
import { NhostApolloProvider } from "@nhost/react-apollo";

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <NhostNextProvider nhost={nhost} initial={pageProps.nhostSession}>
      <NhostAuthProvider nhosht={nhost}>
        <NhostApolloProvider graphqlUrl={process.env.NEXT_PUBLIC_GRAPHQL_URL!}>
          <Component {...pageProps} />
        </NhostApolloProvider>
      </NhostAuthProvider>
    </NhostNextProvider>
  );
};
