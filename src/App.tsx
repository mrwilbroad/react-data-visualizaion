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

        <Route path="/react-data-visualizaion" Component={HomeComponent}/>

        <Route path="/" Component={HomeComponent}/>


        <Route path="/graphs" Component={AGraphsVisulization}>
          <Route path="/chart" Component={FirstChart}/>
          <Route path="bar-chart" Component={BarChartGraph} />
        </Route>
      </Routes>
    </React.Fragment>
  );
}

export default App;
