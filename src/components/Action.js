import React from "react";

const Action = props => {
  return (
    <div>
      <button
        style={{ marginBottom: "10px" }}
        onClick={props.handlePick}
        disabled={!props.hasOptions}
      >
        What should I do?
      </button>
    </div>
  );
};

export default Action;
