import { Route, Routes } from "react-router-dom";
import { Homepage } from "./pages/Homepage";
import { ContactPage } from "./pages/ContactPage";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";

export const AllRoutes = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route exact path="/" element={<Homepage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
      <Footer />
    </>
  );
};
