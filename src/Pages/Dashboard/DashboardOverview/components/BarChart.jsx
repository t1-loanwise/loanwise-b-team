import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  ResponsiveContainer,
} from "recharts";
import LoanAmountComponent from "../components/LoanAmountComponent";
import BarGraph from "./BarGraph";
import Earnings from "../../../../Images/Dashboard/earnings.svg";

const data = [
  {
    name: "Jan",
    tl: 6000,
    ap: 4010,
    dc: 2200,
  },
  { name: "Feb", tl: 7650, ap: 5550, dc: 1900, amt: 2210 },
  { name: "Mar", tl: 6300, ap: 4300, dc: 2200, amt: 2290 },
  { name: "Apr", tl: 6100, ap: 4110, dc: 2000, amt: 2000 },
  { name: "May", tl: 6800, ap: 4800, dc: 2200, amt: 2181 },
  { name: "Jun", tl: 7910, ap: 6050, dc: 1500, amt: 2500 },
  { name: "Jul", tl: 6700, ap: 4700, dc: 1980, amt: 2100 },
  { name: "Aug", tl: 6500, ap: 4400, dc: 2100, amt: 2100 },
  { name: "Sep", tl: 6600, ap: 4600, dc: 2000, amt: 2100 },
  { name: "Oct", tl: 6550, ap: 4550, dc: 2300, amt: 2100 },
  { name: "Nov", tl: 6000, ap: 4000, dc: 1700, amt: 2100 },
  { name: "Dec", tl: 8000, ap: 6300, dc: 2500, amt: 2100 },
];

const Barchart = () => {
  return (
    <div className="chart">
      <LoanAmountComponent
        image={Earnings}
        amount={"N6,000,000.00"}
        description={"Interest Earnings"}
      />
      <div className="chart1">
        <div className="chartTitle">
          <h2>Card Title</h2>
          <div className="colors">
            <div className="color1 tl">
              {" "}
              <span></span> Total Icons
            </div>
            <div className="color2 ap">
              {" "}
              <span></span> Approved
            </div>
            <div className="color3 dc">
              {" "}
              <span></span> Declined
            </div>
          </div>
        </div>
        <ResponsiveContainer width="100%" height={150}>
          <LineChart
            data={data}
            margin={{ top: 0, right: 0, bottom: 0, left: 0 }}
          >
            <CartesianGrid stroke="#ccc" horizontal={true} vertical={false} />
            <XAxis
              dataKey="name"
              tickCount={12}
              tickLine={false}
              fontSize={10}
              fontWeight={500}
            />
            <YAxis
              domain={[0, 8000]}
              ticks={[0, 2000, 4000, 6000, 8000]}
              vertical={false}
              fontSize={10}
              fontWeight={500}
              axisLine={false}
              tickLine={false}
            />
            <Line
              type="monotone"
              dataKey="tl"
              stroke="#003299"
              strokeWidth={2.5}
              dot={false}
            />
            <Line
              type="monotone"
              dataKey="ap"
              stroke="#99007E"
              strokeWidth={2.5}
              dot={false}
            />
            <Line
              type="monotone"
              dataKey="dc"
              stroke="#009967"
              strokeWidth={2.5}
              dot={false}
            />
          </LineChart>
        </ResponsiveContainer>
        <p>Period</p>
      </div>
      <div className="chart2">
        <BarGraph />
      </div>
    </div>
  );
};

export default Barchart;
