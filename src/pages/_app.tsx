import "../styles/globals.css";
import Head from "next/head";
import type { AppProps } from "next/app";

import Layout from "components/Layout";
import { NextPage } from "next";

type NextPageWithMeta = NextPage & {
  title?: string;
  description?: string;
};

type AppPropsWithMeta = AppProps & {
  Component: NextPageWithMeta;
};

if (true) {
  require("../mocks/");
}

const App = ({ Component, pageProps }: AppPropsWithMeta) => (
  <>
    <Head>
      <title>
        {Component.title ??
          "Eri Panselina | Journalist - PR expert - Link builder"}
      </title>
      <meta
        name="description"
        content={
          Component.description ??
          "Eri is a career journalist who is now using her superpowers to help people communicate their mission and understand the world around them."
        }
      />
    </Head>
    <Layout>
      <Component {...pageProps} />
    </Layout>
  </>
);

export default App;
