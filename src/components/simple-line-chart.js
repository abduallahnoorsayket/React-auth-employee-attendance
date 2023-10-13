import React from "react";

import {
  BarChart,
  Bar,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

export default function SimpleLineChart(props) {
  return (
    <div className="container">
      <BarChart
        width={1000}
        height={700}
        data={props.data}
        margin={{
          top: 5,
          right: 30,
          left: 30,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="EmployeeName" />
        <YAxis dataKey="EmployeeID" />
        <Tooltip />
        <Legend />
        <Bar dataKey="EmployeeID" fill="#8884d8" />
        <Bar dataKey="Designation" fill="#82ca9d" />
        <Bar dataKey="CheckInTime" fill="#808080" />
      </BarChart>
    </div>
  );
}
