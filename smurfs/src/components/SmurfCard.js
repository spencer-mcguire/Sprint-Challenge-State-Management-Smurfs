import React from "react";

import { connect } from "react-redux";
import { kill } from "../actions";

const SmurfCard = props => {
  const { name, age, height, id } = props.i;
  return (
    <div>
      <h3>{name}</h3>
      <p>{age}</p>
      <p>{height}</p>
      <button onClick={() => props.kill({ id })}>KILL</button>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    smurfs: state.smurfs,
    isFetching: state.isFetching,
    error: state.error
  };
};
export default connect(mapStateToProps, { kill })(SmurfCard);
