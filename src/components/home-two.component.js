import React, { useState } from "react";
import SimpleLineChart from "./simple-line-chart";

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

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

const HomeTwo = () => {
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileChange = (e) => {
    const file = e.target.files[0]; // Get the first selected file
    setSelectedFile(file);
  };

  const handleFileUpload = () => {
    if (selectedFile) {
      const reader = new FileReader();

      reader.onload = (event) => {
        const fileContent = event.target.result;
        console.log(fileContent);
      };

      reader.readAsText(selectedFile);
    } else {
      return false;
    }
  };

  return (
    <div className="container">
      <div className="jumbotron text-center">
        <h2 className="mb-4">
          Employee Attendance Visualization and Management System
        </h2>

        <input type="file" accept=".csv" onChange={handleFileChange} />
        <button className="btn btn-primary" onClick={handleFileUpload}>
          Upload CSV
        </button>
      </div>
      <div className="text-center m-auto mt-4">
        <SimpleLineChart data={data} />
      </div>
    </div>
  );
};

export default HomeTwo;
