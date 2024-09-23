import React from "react";
import Navbar from "./Navbar";
import Showcase from "./Showcase";
import Course from "./Course";
import Game from "./Game";
import Library from "./Library";
import Languages from "./Languages";

const App = () => {
  return (
    <>
      <Navbar />
      <Showcase />
      <Course />
      <Game />
      <Library />
      <Languages />
    </>
  );
};

export default App;
