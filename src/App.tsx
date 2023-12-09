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
    <React.Fragment>
      <Navigation />
      <Routes>

        <Route path="/" Component={AGraphsVisulization}/>

        <Route path="/react-data-visualizaion" Component={AGraphsVisulization}/>
        <Route path="/react-data-visualizaion/chart" Component={FirstChart}/>
        <Route path="/react-data-visualizaion/bar-chart" Component={BarChartGraph} />
      </Routes>
    </React.Fragment>
  );
}

export default App;
