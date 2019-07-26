import React from "react";

const Option = props => {
  return (
    <div>
      <span style={{ marginTop: "15px" }}>{props.optionText}</span>
      <button
        onClick={event => {
          props.handleDeleteOption(props.optionText);
        }}
        style={{ marginLeft: "10px" }}
      >
        Remove
      </button>
    </div>
  );
};

export default Option;
