import React from "react";
import Navbar from "./components/Navbar";
import Manager from "./components/Manager";
import Footer from "./components/Footer";

const App = () => {
  return (
    <>
      <Navbar />
      <div className="max-h-[calc(78vh+6px)] overflow-y-scroll">
        <Manager />
      </div>
      <Footer />
    </>
  );
};

export default App;
