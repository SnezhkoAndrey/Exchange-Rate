import "../styles/globals.css";
import type { AppProps } from "next/app";
import { useEffect, useState } from "react";
import Loader from "../components/Loader";
import Router from "next/router";
import ErrorLayout from "../layout/ErrorLayout";

export default function App({ Component, pageProps }: AppProps) {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    Router.events.on("routeChangeStart", () => setLoading(true));
    Router.events.on("routeChangeComplete", () => setLoading(false));
    Router.events.on("routeChangeError", () => setLoading(false));
    return () => {
      Router.events.off("routeChangeStart", () => setLoading(true));
      Router.events.off("routeChangeComplete", () => setLoading(false));
      Router.events.off("routeChangeError", () => setLoading(false));
    };
  }, [Router.events]);

  return (
    <>
      {loading ? (
        <Loader size={150} height={"100vh"} />
      ) : (
        <ErrorLayout>
          <Component {...pageProps} />
        </ErrorLayout>
      )}
    </>
  );
}
