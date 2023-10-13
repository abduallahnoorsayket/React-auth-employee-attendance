import React, { useState } from "react";
import axios from "axios";
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
import userService from "../services/user.service";

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
          const key = header[j].replace(/[\s-]+/g, "");
          const value = line[j];
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
  const handleUpload = () => {
    if (fileSelected) {
      // Create a FormData object to send the file
      const formData = new FormData();
      formData.append("csvFile", fileSelected);
      userService.saveCSVData(formData).then((response) => {
        console.log(response);
      });
    } else {
      alert("Please select a file to upload.");
    }
  };

  return (
    <div className="container">
      <div className="jumbotron text-center">
        <h2 className="mb-5">
          Employee Attendance Visualization and Management System
        </h2>
        <input type="file" accept=".csv" onChange={handleFileChange} />
        <button className="btn btn-primary" onClick={handleUpload}>
          Save CSV
        </button>

        {!fileSelected && <p className="mt-2">Please select a file.</p>}
      </div>
      {data.length > 0 && (
        <div className="charts-container">
          <div className="row">
            <div className="col-md-12">
              <div className="chart mt-4">
                <BarChart width={800} height={600} data={data}>
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
              <div className="chart mt-4">
                <LineChart
                  width={800}
                  height={600}
                  data={data}
                  margin={{
                    top: 5,
                    right: 30,
                    left: 0,
                    bottom: 5,
                  }}
                >
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="EmployeeName" />
                  <YAxis dataKey="EmployeeID" />
                  <Tooltip />
                  <Legend />
                  <Line
                    type="monotone"
                    dataKey="EmployeeID"
                    stroke="#CA4F8E"
                    strokeWidth="3"
                  />
                  <Line
                    type="monotone"
                    dataKey="Designation"
                    stroke="#82ca9d"
                    strokeWidth="3"
                  />
                  <Line
                    type="monotone"
                    dataKey="CheckInTime"
                    stroke="#808080"
                    strokeWidth="3"
                  />
                </LineChart>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Home;
