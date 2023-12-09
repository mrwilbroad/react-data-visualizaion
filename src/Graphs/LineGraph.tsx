import React, { useEffect, useMemo } from "react";
import { Line as LineG } from "react-chartjs-2";
import {
  Chart as ChartJS,
  Tooltip,
  CategoryScale,
  LineElement,
  Title,
  PointElement,
  LinearScale,
  Legend,
} from "chart.js";
import staffsData from "../Data/datasets.json";
import { YearLabel } from "../Components/common_data/YearLabel";

const LineGraph = () => {
  ChartJS.register(
    LineElement,
    CategoryScale,
    Tooltip,
    Title,
    PointElement,
    LinearScale,
    Legend
  );
  const FemaleSalary: Number[] = useMemo(() => {
    let FemaleStafs = staffsData.filter((staff) => staff.gender === "female");
    let SalaryDistr = FemaleStafs.map((sta) => sta.salary).map((salary) =>
      parseFloat(salary)
    );
    return SalaryDistr;
  }, []);

  const MaleSalary: Number[] = useMemo(() => {
    let FemaleStafs = staffsData.filter((staff) => staff.gender === "male");
    let SalaryDistr = FemaleStafs.map((sta) => sta.salary).map((salary) =>
      parseFloat(salary)
    );
    return SalaryDistr;
  }, []);

  useEffect(() => {}, []);

  return (
    <div>
      <h5>Line Graph illustration</h5>

      <p>
        =|Let's check Salary overview for both Male and Female staffs from start
        year to current year
      </p>
      <section className="row justify-content-around">
        <section className="col-lg-7">
            <section>
                <p><strong>Evaluation : </strong></p>
                <small>
                For this trends show that at 2020 maximum payment of salary from the organization was pretty high compare to the rest of the Year , and minimum at 2019 for <span className="text-success"> Female staffs</span> 
                </small>

                <small>
                For this trends show that at 2021 maximum payment of salary from the organization was pretty high compare to the rest of the Year , and minimum at 2018 for <span className="text-success"> Male staffs</span> 
                </small>
            </section>
          <LineG
            options={{
              responsive: true,
              plugins: {
                title: {
                  display: true,
                  text: "Evaluation of Salary for each Year for Both Male and Female staffs",
                },
              },
            }}
            data={{
              labels: YearLabel,
              datasets: [
                {
                  label: "Female line ",
                  backgroundColor: `rgb(${Math.random() * 123},${
                    Math.random() * 184
                  },${Math.random() * 199})`,
                  borderColor: "green",
                  data: FemaleSalary,
                },
                {
                  label: "Male line",
                  backgroundColor: `rgb(${Math.random() * 23},${
                    Math.random() * 234
                  },${Math.random() * 79})`,
                  borderColor: "red",
                  data: MaleSalary,
                },
              ],
            }}
          />
        </section>
      </section>
    </div>
  );
};

export default LineGraph;
