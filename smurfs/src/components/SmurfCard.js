import React from "react";

export const SmurfCard = props => {
  const { name, age, height } = props.i;
  return (
    <div>
      <h3>{name}</h3>
      <p>{age}</p>
      <p>{height}</p>
    </div>
  );
};
