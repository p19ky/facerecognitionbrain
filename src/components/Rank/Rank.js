import React from "react";

function Rank({ name, entries }) {
  return (
    <div>
      <div className="white f3">{`${name} , you did this many face detections...`}</div>
      <div className="yellow f1">{entries}</div>
    </div>
  );
}

export default Rank;
