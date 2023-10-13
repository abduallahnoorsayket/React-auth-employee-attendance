import React, { useState } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  BarChart,
  Bar,
} from "recharts";

const Home = () => {
  const [data, setData] = useState([]);
  const [fileSelected, setFileSelected] = useState(false);

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();

    reader.onload = (e) => {
      const contents = e.target.result;
      const lines = contents.split("\n");
      const header = lines[0].split(",");
      const parsedData = [];

      for (let i = 1; i < lines.length; i++) {
        const line = lines[i].split(",");
        const item = {};

        for (let j = 0; j < header.length; j++) {
          const key = header[j].trim();
          const value = line[j].trim();
          item[key] = value;
        }

        parsedData.push(item);
      }

      setData(parsedData);
    };

    if (file) {
      reader.readAsText(file);
      setFileSelected(true);
    }
  };

  return (
    <div className="container">
      <div className="jumbotron text-center">
        <input type="file" accept=".csv" onChange={handleFileChange} />

        {!fileSelected && <p>Please select a file.</p>}

        {data.length > 0 && (
          <div className="charts-container">
            <div className="chart">
              <LineChart
                width={500}
                height={300}
                data={data}
                margin={{
                  top: 5,
                  right: 30,
                  left: 0,
                  bottom: 5,
                }}
              >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="Category" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line
                  type="monotone"
                  dataKey="Value"
                  stroke="#CA4F8E"
                  strokeWidth="3"
                />
              </LineChart>
            </div>

            <div className="chart">
              <BarChart width={500} height={300} data={data}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="Category" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="Value" fill="#CA4F8E" />
              </BarChart>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Home;
