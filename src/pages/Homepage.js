import React from "react";
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import Services from "../components/Services";
import { Contact } from "../components/Contact";

export const Homepage = (props) => {
  return (
    <div className="container-fluid">
      <Header />
      <Services />
      <Contact />
      <Footer />
    </div>
  );
};
