/* eslint-disable react/prop-types */
import "./Analytics.css";
import {
  XAxis,
  CartesianGrid,
  Tooltip,
  BarChart,
  Legend,
  Bar,
  PieChart,
  Pie,
  LineChart,
  YAxis,
  Line,
} from "recharts";

const Analytics = ({
  chart_i,
  chart_ii,
  chart_iii,
}) => {
  const data = [
    {
      name: "Sept",
      Norte: 4000,
      Nordeste: 2400,
    },
    {
      name: "Oct",
      Norte: 3000,
      Nordeste: 1398,
    },
    {
      name: "Nov",
      Norte: 2000,
      Nordeste: 9800,
    },
    {
      name: "Dec",
      Norte: 2780,
      Nordeste: 3908,
    },
  ];
  const data02 = [
    {
      2022: 3600,
      2023: 2400,
    },
    {
      2022: 3000,
      2023: 1398,
    },
    {
      2022: 2000,
      2023: 3500,
    },
    {
      2022: 2780,
      2023: 3908,
    },
    {
      2022: 1890,
      2023: 2000,
    },
  ];

  const data03 = [
    {
      name: "Group A",
      value: 400,
    },
    {
      name: "Group B",
      value: 300,
    },
    {
      name: "Group C",
      value: 300,
    },
  ];
  return (
    <div className="analytics">
      {chart_i && (
        <>
          <h2>Volumes exportados por eixo logístico</h2>
          <header>
            <span className="norte">Norte:</span>
            <span className="nordeste">Nordeste:</span>
          </header>

          <BarChart className="chart" width={400} height={360} data={data}>
            <CartesianGrid strokeDasharray="100 10" />
            <XAxis dataKey="name" />
            <Tooltip />
            <Legend />
            <Bar dataKey="Norte" fill="#ED8D03" />
            <Bar dataKey="Nordeste" fill="#123A31" />
          </BarChart>
        </>
      )}

      {chart_ii && (
        <>
        <h3>China - Crushing de soja</h3>
        <h2>Crushing semanal (mil t)</h2>
        <LineChart
          width={400}
          height={360}
          data={data02}
          margin={{ right: 10, top: 10 }}
        >
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type="natural" dataKey="2022" stroke="#ED8D03" />
          <Line type="monotone" dataKey="2023" stroke="#123A31" />
        </LineChart>
        </>
      )}

      {chart_iii && (
        <PieChart width={300} height={300}>
          <Pie
            data={data03}
            dataKey="value"
            nameKey="name"
            cx="50%"
            cy="50%"
            outerRadius={50}
            fill="#ED8D03"
            label
          />
        </PieChart>
      )}
    </div>
  );
};

export default Analytics;
