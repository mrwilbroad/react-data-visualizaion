import "./App.css";
import Navigation from "./Components/Navigation";
import { Routes, Route } from "react-router-dom";
import BarChartGraph from "./Graphs/BarChartGraph";
import AGraphsVisulization from "./Graphs/AGraphsVisulization";
import FirstChart from "./Components/FirstChart";
import LineGraph from "./Graphs/LineGraph";

function App() {
  return (
    <section className="container">
      <section className="my-2">
         <p className="display-5 text-center">
         The Evolution of Data Visualization Paradigms:
         </p>
      </section>
      <Navigation />
      <Routes>
        <Route path="/" Component={AGraphsVisulization} />

        <Route
          path="/react-data-visualizaion"
          Component={AGraphsVisulization}
        />
        <Route path="/react-data-visualizaion/chart" Component={FirstChart} />
        <Route
          path="/react-data-visualizaion/bar-chart"
          Component={BarChartGraph}
        />

        <Route
          path="/react-data-visualizaion/line-chart"
          Component={LineGraph}
        />
      </Routes>
    </section>
  );
}

export default App;
