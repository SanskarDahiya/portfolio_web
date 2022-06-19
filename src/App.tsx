import "./App.css";
import { Fragment } from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./Components/Header";
import Section from "./Components/Sections";
import AboutSection from "./Components/Sections/About";
import PortfolioSection from "./Components/Sections/Portfolio";
import ServicesSection from "./Components/Sections/Services";

function Abcd() {
  return (
    <div style={{ padding: "100px" }}>
      Hello
      <hr />
      Work In Progress
      <hr />
    </div>
  );
}
function App() {
  return (
    <Fragment>
      <Header />
      <Routes>
        <Route path="/" element={<Section />} />
        <Route path="/about" element={<AboutSection />} />
        <Route path="/services" element={<ServicesSection />} />
        <Route path="/portfolio" element={<PortfolioSection />} />
        <Route path="*" element={<Abcd />} />
      </Routes>
    </Fragment>
  );
}

export default App;
