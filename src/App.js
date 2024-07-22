import React from "react";
import "./App.css";
import Header from "./components/header/Header";
// import Statistics from "./components/stats/Statistics";
import FanCloud from "./fancloud/FanCloud";
// import Roles from "./components/roles/Roles";
import Footer from "./footer/Footer";
import "bootstrap/dist/css/bootstrap.min.css";
import "./font.css";

const App = () => {
  return (
    <div className="App">
      <div>
        <Header />
        {/* <Statistics /> */}
      </div>
      <FanCloud />
      {/* <Roles /> */}
      <Footer />
    </div>
  );
};

export default App;
