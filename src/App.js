import React from "react";
import "./style.css";
import Navbar from "./components/Navbar";
import FirstPart from "./components/FirstPart";
import SecondPart from "./components/SecondPart";
import ThirtyPart from "./components/ThirtyPart";
import FourthPart from "./components/FourthPart";
import FifthPart from "./components/FifthPart";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div>
      <Navbar />
      <FirstPart />
      <SecondPart />
      <ThirtyPart />
      <FourthPart />
      <FifthPart />
      <Footer />
    </div>
  );
}
