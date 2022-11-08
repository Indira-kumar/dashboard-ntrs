import React from "react";
import d3 from "d3";
const dashBoard = () => {
  let csvFileName =
    "../Currency_Conversion_Test_Data/Exchange_Rate_Report_2012.csv";
  d3.csv(csvFileName).then((loadedCurrenyCsvData) => {
    console.log(loadedCurrenyCsvData);
  });
  return <div>dashBoard</div>;
};

export default dashBoard;
