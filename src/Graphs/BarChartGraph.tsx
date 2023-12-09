import { useEffect, useMemo } from "react";
import { YearLabel } from "../Components/common_data/YearLabel";

import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  Tooltip,
  Legend,
  ArcElement,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  SubTitle,
} from "chart.js";
import staffsDataset from "../Data/datasets.json";

const BarChartGraph = () => {
  ChartJS.register(
    CategoryScale,
    LinearScale,
    ArcElement,
    Tooltip,
    Legend,
    Title,
    SubTitle,
    BarElement
  );

  const ageDistributionByYear: {} = useMemo(() => {
    let agDist = {};
    YearLabel.forEach((yr) => {
      const staffsInYear = staffsDataset.filter((staff) => staff.year === yr);
      agDist = staffsInYear.map((staff) => staff.age);
    });
    return agDist;
  }, []);

  useEffect(() => {}, [YearLabel, ageDistributionByYear]);
  return (
    <div>
      <h5>Bar Graph</h5>
      <section className="row mb-5 gy-3">
        <section className="col-lg-6">
          <Bar
            options={{
              responsive: true,
              plugins: {
                subtitle: {
                  display: true,
                  text: "Increase of Population in East Africa",
                },
                title: {
                  display: true,
                  text: `Population of Female and Male Since ${YearLabel[0]}`,
                  color: `rbg(100,100,12)`,
                },
              },
            }}
            height={"170px"}
            data={{
              labels: YearLabel,
              datasets: [
                {
                  label: "Female",
                  data: YearLabel.map(() => Math.random() * 400),
                  backgroundColor: `rgb(${Math.random() * 123},${
                    Math.random() * 134
                  },${Math.random() * 119})`,
                },
                {
                  label: "Male",
                  data: YearLabel.map(() => Math.random() * 100),
                  backgroundColor: `rgb(${Math.random() * 223},${
                    Math.random() * 141
                  },${Math.random() * 119})`,
                },
              ],
            }}
          />
        </section>

        <section className="col-lg-6">
          <Bar
            options={{
              responsive: true,
              plugins: {
                subtitle: {
                  display: true,
                  text: "Look at which Year,The age for staffs was high!",
                },
                title: {
                  display: true,
                  text: "Increase/descrease in age for Female staffs",
                  color: `rbg(100,100,12)`,
                },
              },
            }}
            height={"170px"}
            data={{
              labels: YearLabel,
              datasets: [
                {
                  label: "Female",
                  data: ageDistributionByYear,
                  backgroundColor: `rgb(${Math.random() * 123},${
                    Math.random() * 134
                  },${Math.random() * 119})`,
                },
              ],
            }}
          />
        </section>
      </section>
    </div>
  );
};

export default BarChartGraph;
