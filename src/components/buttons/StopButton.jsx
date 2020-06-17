import React from "react";

function StopButton({ onClick, Timer }) {
  return (
    <div>
      <button className="btn btn-danger" onClick={onClick}>
        Stop button!
        {Timer}
      </button>
    </div>
  );
}

export default StopButton;
