import React from "react";

const EtCounter = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <h1>ET COUNTER...</h1>
      <button>Click here to see your number goes DOWN!</button>
      <p>0</p>
      <button>Click here to see your number goes UP!</button>
    </div>
  );
};

export default EtCounter;
