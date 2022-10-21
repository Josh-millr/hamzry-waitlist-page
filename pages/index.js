import React, { useContext } from "react";
import { Hero } from "../components/index";

import { StoreContext } from "../lib/Store";
import { Modal } from "../components/index";

export default function Home() {

  return (
    <main>
      <Hero />
    </main>
  );
}
