import Services from "../components/Services";
import { Contact } from "../components/Contact";
import { Hero } from "../components/Hero.js";

export const Homepage = (props) => {
  return (
    <div className="container-fluid">
      <Hero />
      <Services />
      <Contact />
    </div>
  );
};
