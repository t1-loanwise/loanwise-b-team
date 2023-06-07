import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  ResponsiveContainer,
} from "recharts";
import LoanAmountComponent from "../DashboardOverview/components/LoanAmountComponent";
import Earnings from "../../../Images/Dashboard/earnings.svg";
import DelPie from "./DelPie";
import "./Deliquency.css";

const data = [
  { name: "A", ap: 1600 },
  { name: "B", ap: 2000 },
  { name: "C", ap: 1000 },
  { name: "D", ap: 3000 },
  { name: "E", ap: 5100 },
  { name: "F", ap: 2000 },
  { name: "G", ap: 1000 },
  { name: "H", ap: 3000 },
  { name: "I", ap: 3000 },
  { name: "J", ap: 5000 },
  { name: "K", ap: 3000 },
  { name: "L", ap: 1350 },
];

const CustomDot = (props) => {
  const { cx, cy } = props;
  return (
    <circle
      cx={cx}
      cy={cy}
      r={4}
      fill="#99007E" // Set the desired color to fill the dots
    />
  );
};

const DelChart = () => {
  return (
    <div className="chart delChart">
      <LoanAmountComponent
        image={Earnings}
        amount={"N6,000,000.00"}
        description={"Interest Earnings"}
      />
      <div className="chart2">
        <h2>Loan Default Count Trend</h2>
        <div className="graph">
          <div className="rotate">in Millions</div>
          <ResponsiveContainer width="100%" height={150}>
            <LineChart
              data={data}
              margin={{ top: 0, right: 0, bottom: 0, left: 0 }}
            >
              <CartesianGrid
                stroke="#ccc"
                horizontal={true}
                vertical={true}
                strokeDasharray=""
              />
              <XAxis
                dataKey="name"
                tickCount={12}
                tickLine={false}
                fontSize={10}
                fontWeight={500}
                hide={true}
                //   tick={false}
              />
              <YAxis
                domain={[0, 6000]}
                ticks={[0, 2000, 4000, 6000]}
                vertical={false}
                fontSize={10}
                fontWeight={500}
                axisLine={false}
                tickLine={false}
                hide={true}
              />
              <Line
                type="monotone"
                dataKey="ap"
                stroke="#99007E"
                strokeWidth={2.5}
                dot={<CustomDot />}
                margin={20}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
        <p>Period</p>
      </div>
      <div className="chart1">
        <DelPie />
      </div>
    </div>
  );
};

export default DelChart;
