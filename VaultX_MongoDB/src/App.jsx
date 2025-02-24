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
      <div className="md:absolute bottom-0 w-full">
        <Footer />
      </div>
    </>
  );
};

export default App;
