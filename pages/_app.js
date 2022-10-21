import "../styles/globals.css";
import React, { useContext } from "react";

import { Modal, TopNav } from "../components/index";
import { PopupContext } from "../lib/PopupContext";

function MyApp({ Component, pageProps }) {
  let popup = useContext(PopupContext);

  return (
    <PopupContext>
      <div className="mx-auto max-w-[1296px]">
        <Modal />
        <TopNav />
        {/* App root */}
        <Component {...pageProps} />
      </div>
    </PopupContext>
  );
}

export default MyApp;
