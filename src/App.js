import React from "react";
import Appbar from "./Components/Appbar";
import Topbar from "./Components/Topbar";
import CovidInfo from "./Components/CovidInfo";
import Description from "./Components/Description";
import Services from "./Components/Services";
import Analytics from "./Components/Analytics";
import Survey from "./Components/Survey";
import "./App.css";

const App = () => {
  return (
    <div className="App">
      <Topbar />
      <Appbar />
      <CovidInfo />
      <Description />
      <Services />
      <Analytics />
      <Survey />
    </div>
  );
};

export default App;
