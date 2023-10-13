import React, { useState } from "react";
import SimpleLineChart from "./simple-line-chart";

// const data = [
//   {
//     EmployeeID: "1",
//     EmployeeName: "Kath",
//     Designation: "Automation Specialist IV",
//     Date: "10/5/2023",
//     CheckInTime: "2:45 PM",
//   },
//   {
//     EmployeeID: "2",
//     EmployeeName: "Alasdair",
//     Designation: "General Manager",
//     Date: "10/26/2023",
//     CheckInTime: "3:45 PM",
//   },
//   {
//     EmployeeID: "3",
//     EmployeeName: "Alasdaisalam",
//     Designation: "General Manager",
//     Date: "10/30/2023",
//     CheckInTime: "1:45 PM",
//   },
//   {
//     EmployeeID: "4",
//     EmployeeName: "kaalm",
//     Designation: "General Manager",
//     Date: "11/15/2023",
//     CheckInTime: "2:45 PM",
//   },

// ];

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
        // Extract the header row to use as property names for objects
        const headers = rows[0].split(",");

        // Create an array of objects for the data
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
