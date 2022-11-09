import React from "react";
import Linechart from "./Linechart";
import OptionButton from "./OptionButton";
import "./DashBoard.css";
const DashBoard = () => {
  return (
    <div>
      <form>
        <div className="grid-box">
          <div className="first-currency-dropdown">
            <OptionButton disabled="true" value="US" />
          </div>
          <div className="second-currency-dropdown">
            <OptionButton />
          </div>
        </div>
      </form>
      <Linechart />
    </div>
  );
};

export default DashBoard;
