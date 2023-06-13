import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  ResponsiveContainer,
} from "recharts";
const data = [
  {
    name: "Jan",
    uv: 470,
  },
  {
    name: "Feb",
    uv: 110,
  },
  {
    name: "Mar",
    uv: 490,
  },
  {
    name: "Apr",
    uv: 590,
  },
  {
    name: "May",
    uv: 20,
  },
  {
    name: "Jun",
    uv: 500,
  },
  {
    name: "Jul",
    uv: 820,
  },
  {
    name: "Aug",
    uv: 810,
  },
  {
    name: "Sep",
    uv: 120,
  },
  {
    name: "Oct",
    uv: 250,
  },
  {
    name: "Nov",
    uv: 70,
  },
  {
    name: "Dec",
    uv: 920,
  },
];

const BarGraph = () => {
  return (
    <>
      <h2>Loan Default Count Trend</h2>
      <div className="graph">
        <div className="rotate">Qty</div>
        <ResponsiveContainer width="100%" height={145}>
          <BarChart data={data}>
            <CartesianGrid stroke="#ccc" vertical={false} horizontal={false} />
            <XAxis dataKey="name" fontSize={10} fontWeight={500} />
            <YAxis
              domain={[0, 1000]}
              ticks={[0, 250, 500, 750, 1000]}
              fontSize={10}
              fontWeight={500}
            />
            <Bar dataKey="uv" fill="#99007E" />
          </BarChart>
        </ResponsiveContainer>
      </div>
      <p>Period</p>
    </>
  );
};
export default BarGraph;
