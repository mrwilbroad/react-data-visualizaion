import React from "react";
import "./App.css";
import Navigation from "./Components/Navigation";
import { Routes, Route } from "react-router-dom";
import HomeComponent from "./Pages/HomeComponent";
import BarChartGraph from "./Graphs/BarChartGraph";
import AGraphsVisulization from "./Graphs/AGraphsVisulization";
import FirstChart from "./Components/FirstChart";

function App() {
  return (
    <section className="container">
      <Navigation />
      <Routes>

        <Route path="/" Component={AGraphsVisulization}/>

        <Route path="/react-data-visualizaion" Component={AGraphsVisulization}/>
        <Route path="/react-data-visualizaion/chart" Component={FirstChart}/>
        <Route path="/react-data-visualizaion/bar-chart" Component={BarChartGraph} />
      </Routes>
    </section>
  );
}

export default App;
