import {
  BarChart,
  Bar,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  ResponsiveContainer,
} from "recharts";

const data = [
  {
    name: "Jan",
    ac: 700,
    cl: 1700,
  },
  {
    name: "Feb",
    ac: 2000,
    cl: 800,
  },
  {
    name: "Mar",
    ac: 200,
    cl: 1750,
  },
  {
    name: "Apr",
    ac: 320,
    cl: 1470,
  },
  {
    name: "May",
    ac: 320,
    cl: 1750,
  },
  {
    name: "Jun",
    ac: 500,
    cl: 1250,
  },
  {
    name: "Jul",
    ac: 500,
    cl: 1250,
  },
];
const PortfolioGraph = () => {
  return (
    <div className="portChart2">
      <div className="graph">
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
        <ResponsiveContainer width="100%" height={145}>
          <BarChart data={data} stackOffset="sign">
            <CartesianGrid
              stroke="#808C8F"
              vertical={false}
              horizontal={true}
            />

            <XAxis
              dataKey="name"
              fontSize={10}
              fontWeight={500}
              tickLine={false}
              stroke="#808C8F"
            />
            <YAxis
              domain={[0, 2000]}
              ticks={[0, 500, 1000, 1500, 2000]}
              fontSize={10}
              fontWeight={500}
              tickLine={false}
              axisLine={false}
            />
            <Bar barSize={11} dataKey="ac" fill="#8884d8" stackId="stack" />
            <Bar
              dataKey="cl"
              fill="#82ca9d"
              stackId="stack"
              radius={[10, 10, 0, 0]}
            />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};
export default PortfolioGraph;
