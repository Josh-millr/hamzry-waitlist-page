import React, { useContext } from "react";
import { Hero } from "../components/index";

import { StoreContext } from "../lib/Store";
import { Modal } from "../components/index";
import { SubscriptionPopup } from "../components/";

export default function Home() {
  return (
    <main>
      <SubscriptionPopup />
      <Hero />
    </main>
  );
}
