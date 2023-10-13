import React, { useState } from "react";
import SimpleLineChart from "./simple-line-chart";

const HomeTwo = () => {
  const [data, setData] = useState([]);
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
        const rows = fileContent.split("\n");
        const headers = rows[0].split(",");

        const parsedData = [];
        for (let i = 1; i < rows.length; i++) {
          const values = rows[i].split(",");
          const obj = {};
          for (let j = 0; j < headers.length; j++) {
            const key = headers[j].replace(/[\s-]+/g, "");
            const value = values[j];
            obj[key] = value;
          }
          parsedData.push(obj);
        }
        setData(parsedData);
        console.log("parsed array===", parsedData);
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
        {data.length > 0 && <SimpleLineChart data={data} />}
      </div>
    </div>
  );
};

export default HomeTwo;
