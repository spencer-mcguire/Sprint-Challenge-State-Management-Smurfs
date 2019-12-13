import React from "react";

import { connect } from "react-redux";
import { getSmurfs } from "../actions";

import { SmurfCard } from "./SmurfCard";

const SmurfList = props => {
  return (
    <div>
      {!props.smurfs ||
        (props.smurfs.length === 0 && (
          <button onClick={() => props.getSmurfs()}>Get Started</button>
        ))}
      {props.smurfs.map(i => (
        <SmurfCard key={i.id} i={i} />
      ))}
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

export default connect(mapStateToProps, { getSmurfs })(SmurfList);
