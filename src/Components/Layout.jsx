import Head from "next/head";
import React from "react";
import NavBar from "./NavBar";
import DemoBanner from "./DemoBanner";

const Layout = ({ children }) => {
  return (
    <>
      <Head>
        <title>Macron Magic | great tasting home-made macarons</title>
        <link rel="apple-touch-icon" sizes="180x180" />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
        <link
          rel="mask-icon"
          href="/favicon/safari-pinned-tab.svg"
          color="#5bbad5"
        />
        <meta name="msapplication-TileColor" content="#da532c" />
        <meta name="theme-color" content="#ffffff" />
      </Head>
      <header>
        <NavBar />
        <DemoBanner />
      </header>
      <div className="layout">
        <main className="main-container">{children}</main>
        <footer></footer>
      </div>
    </>
  );
};

export default Layout;