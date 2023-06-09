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
import PortfolioGraph from "./PortfolioGraph";

const data = [
  {
    name: "Jan",
    ov: 510,
    dc: 1300,
  },
  {
    name: "Feb",
    ov: 1400,
    dc: 700,
  },
  {
    name: "Mar",
    ov: 1000,
    dc: 700,
  },
  {
    name: "Apr",
    ov: 750,
    dc: 950,
  },
  {
    name: "May",
    ov: 1000,
    dc: 1200,
  },
  {
    name: "Jun",
    ov: 1600,
    dc: 1700,
  },
  {
    name: "Jul",
    ov: 1450,
    dc: 1700,
  },
];
const PortfolioChart = () => {
  return (
    <div className="portChart">
      <PortfolioGraph />
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
          <AreaChart data={data} margin={{ left: 0 }}>
            <CartesianGrid horizontal={true} vertical={false} />
            <XAxis
              dataKey="name"
              fontSize={10}
              fontWeight={500}
              tickLine={false}
            />
            <YAxis
              axisLine={false}
              tickLine={false}
              ticks={[0, 500, 1000, 1500, 2000]}
              fontSize={10}
              fontWeight={500}
            />

            <Area
              dataKey="ov"
              type="linear"
              stroke="#009967"
              strokeWidth={5}
              fill="rgba(0, 153, 103, 0.38)"
            />
            <Area
              dataKey="dc"
              type="linear"
              stroke="#99007E"
              strokeWidth={5}
              fill=" rgba(153, 0, 126, 0.2982)"
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default PortfolioChart;
