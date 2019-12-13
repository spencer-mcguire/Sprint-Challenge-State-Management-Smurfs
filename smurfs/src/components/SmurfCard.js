import React from "react";

import { connect } from "react-redux";

const SmurfCard = props => {
  return (
    <div>
      <h3>NAME</h3>
      <p>AGE</p>
      <p>height</p>
    </div>
  );
};

const mapStateToProps = state => {
  console.log(state);
  return {
    smurfs: state.smurfs,
    isFetching: state.isFetching,
    error: state.error
  };
};

export default connect(mapStateToProps, {})(SmurfCard);
