import React from "react";
import "./Portfolio.css";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  ResponsiveContainer,
} from "recharts";
import BarGraph from "../DashboardOverview/components/BarGraph";

const data = [
  {
    name: "Page A",
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: "Page B",
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: "Page C",
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: "Page D",
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: "Page E",
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: "Page F",
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    name: "Page G",
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
];
const PortfolioChart = () => {
  return (
    <div className="portChart">
      <div className="portChart1">
        <div className="chartTitle">
          <div className="colors">
            <div className="color1 tl">
              <span></span> Overdue
            </div>
            <div className="color3 dc">
              <span></span> Declined
            </div>
          </div>
        </div>
        <ResponsiveContainer width="100%" height={150}>
          <AreaChart data={data} margin={0}>
            <CartesianGrid horizontal={true} vertical={false} />
            <XAxis dataKey="name" fontSize={10} fontWeight={500} />
            <YAxis
              axisLine={false}
              tickLine={false}
              ticks={[0, 2000, 4000, 6000, 8000]}
              fontSize={10}
              fontWeight={500}
            />

            <Area
              type="monotone"
              dataKey="uv"
              type="linear"
              stroke="#8874d8"
              strokeWidth={5}
              fill="rgba(136, 132, 216, 0.5)"
            />
            <Area
              type="monotone"
              dataKey="pv"
              type="linear"
              stroke="red"
              strokeWidth={5}
              fill="rgba(136, 132, 26, 0.5)"
            />
          </AreaChart>
        </ResponsiveContainer>
        <p>Period</p>
      </div>
      <div className="portChart2">
        <BarGraph />
      </div>
    </div>
  );
};

export default PortfolioChart;
