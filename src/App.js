import React from "react";
import "./App.css";
import Header from "./components/header/Header";
import FanCloud from "./components/fancloud/FanCloud";
import Footer from "./components/footer/Footer";
import "bootstrap/dist/css/bootstrap.min.css";
import "./font.css";

const App = () => {
  return (
    <div className="App">
      <div>
        <Header />
      </div>
      <FanCloud />
      <Footer />
    </div>
  );
};

export default App;
