import React from "react";
import { Hero, SubscriptionPopup, ContactPopup } from "../components/index";

export default function Home() {
  return (
    <main>
      <SubscriptionPopup />
      <Hero />
    </main>
  );
}
