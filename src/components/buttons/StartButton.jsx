import React from "react";

function StartButton({ turnToFalse, value }) {
  return (
    <div>
      <button className="btn btn-primary" onClick={turnToFalse}>
        Start button!
        {value}
      </button>
    </div>
  );
}

export default StartButton;
