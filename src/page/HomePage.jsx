import React from "react";
import Navbar from "../component/Navbar";
import Home from "../component/Home";

const HomePage = () => {
  return (
    <div className="relative  overflow-hidden max-h-screen">
      <Navbar />
      <Home />
    </div>
  );
};

export default HomePage;
