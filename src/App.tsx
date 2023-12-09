import React from "react";
import "./App.css";
import { Nav } from "react-bootstrap";
import Navigation from "./Components/Navigation";
import { Routes, Route } from "react-router-dom";
import HomeComponent from "./Pages/HomeComponent";
import BarChartGraph from "./Graphs/BarChartGraph";
import AGraphsVisulization from "./Graphs/AGraphsVisulization";

function App() {
  return (
    <React.Fragment>
      <Navigation />
      <Routes>
        <Route path="/" Component={HomeComponent}/>

        <Route path="/graphs" Component={AGraphsVisulization}>
          <Route path="bar-chart" Component={BarChartGraph} />
        </Route>
      </Routes>
    </React.Fragment>
  );
}

export default App;
