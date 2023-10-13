import React from "react";
// import {
//   LineChart,
//   Line,
//   XAxis,
//   YAxis,
//   CartesianGrid,
//   Tooltip,
//   Legend,
// } from "recharts";
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
    // <LineChart
    //   width={500}
    //   height={300}
    //   data={props.data}
    //   margin={{
    //     top: 5,
    //     right: 30,
    //     left: 20,
    //     bottom: 5,
    //   }}
    // >
    //   <CartesianGrid strokeDasharray="3 3" />
    //   <XAxis dataKey="Date" />
    //   <YAxis dataKey="EmployeeID" />
    //   <Tooltip />
    //   <Legend />
    //   <Line
    //     type="monotone"
    //     dataKey="EmployeeName"
    //     stroke="#8884d8"
    //     activeDot={{ r: 8 }}
    //   />
    //   <Line type="monotone" dataKey="Designation" stroke="#82ca9d" />
    // </LineChart>

    <BarChart
      width={1200}
      height={800}
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
  );
}
