import React, { useEffect } from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Line, Doughnut } from "react-chartjs-2";

type Props = {};

const FirstChart = (props: Props) => {
  ChartJS.register(ArcElement, Tooltip, Legend);
  useEffect(() => {});

  return (
    <section className="">
      <code>{`import { Chart } from 'react-chartjs-2'`}</code>
      <br/>
      <code>{
          `
          <Chart
            type={...}
            options={...}
            data={...}
            {...props}
          />`
        }</code>
    </section>
  );
};

export default FirstChart;
