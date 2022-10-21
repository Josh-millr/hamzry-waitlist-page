import React, { useContext } from "react";
import "../styles/globals.css";

import { TopNav, Modal } from "../components/index";
import { Store } from "../lib/Store";

function MyApp({ Component, pageProps }) {
  return (
    <Store>
      <div className="mx-auto max-w-[1296px]">
        <Modal />
        <TopNav />
        <Component {...pageProps} />
      </div>
    </Store>
  );
}

export default MyApp;
