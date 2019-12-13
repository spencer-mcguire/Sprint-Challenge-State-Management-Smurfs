import React, { useEffect } from "react";

import { connect } from "react-redux";
import { getSmurfs, editFields } from "../actions";

import SmurfCard from "./SmurfCard";

const SmurfList = props => {
  useEffect(() => {
    props.getSmurfs();
  }, []);
  return (
    <div>
      {props.smurfs.map(i => (
        <SmurfCard key={i.id} i={i} />
      ))}
      {props.smurfs.length === 0 ||
        (!props.isEditing && (
          <button onClick={() => props.editFields()}>Edit</button>
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

export default connect(mapStateToProps, { getSmurfs, editFields })(SmurfList);
