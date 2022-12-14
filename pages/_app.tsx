import "../styles/globals.scss";
import type { AppProps } from "next/app";
import { useEffect, useState } from "react";
import { RecoilRoot } from "recoil";
import Head from "next/head";
import "animate.css";

function MyApp({ Component, pageProps }: AppProps) {
  const [showChild, setShowChild] = useState<boolean>(false);
  useEffect(() => {
    setShowChild(true);
  }, []);

  if (!showChild) {
    return null;
  }

  if (typeof window === "undefined") {
    return <></>;
  } else {
    return (
      <>
        <Head>
          <meta name="viewport" content="width=device-width, initial-scale=1" />
        </Head>
        <RecoilRoot>
          <Component {...pageProps} />
        </RecoilRoot>
      </>
    );
  }
}

export default MyApp;
