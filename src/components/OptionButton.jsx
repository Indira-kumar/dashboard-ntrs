import React from "react";
import { useState } from "react";
import { Dropdown } from "semantic-ui-react";

const OptionButton = (props) => {
  const [currencyName, setCurrencyName] = useState("US");
  const currencyOptions = [
    { key: "Arabic", text: "Arabic", value: "Arabic" },
    { key: "Chinese", text: "Chinese", value: "Chinese" },
  ];
  return (
    <Dropdown
      button
      className="icon"
      floating
      labeled
      disabled={props.disabled}
      icon="currency"
      options={currencyOptions}
      search
      text={currencyName}
      onChange={(event) => {
        setCurrencyName(event.target.value);
      }}
    />
  );
};

export default OptionButton;
