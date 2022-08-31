import React from "react";

const Child = ({ name }) => {
  return (
    <div>
      {name.map((x) => {
        return <div>{x.title}</div>;
      })}
    </div>
  );
};

export default Child;
