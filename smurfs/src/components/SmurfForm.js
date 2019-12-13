import React, { useState } from "react";

import { connect } from "react-redux";

import { postSmurfs } from "../actions";

const SmurfForm = props => {
  const [values, setValues] = useState({
    name: "",
    age: "",
    height: "",
    id: Date.now()
  });

  const handleChanges = e => {
    setValues({
      ...values,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = e => {
    console.log(values);
    e.preventDefault();
    props.postSmurfs(values);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          value={values.name}
          onChange={handleChanges}
        />
        <input
          type="text"
          name="age"
          value={values.age}
          onChange={handleChanges}
        />
        <input
          type="text"
          name="height"
          value={values.height}
          onChange={handleChanges}
        />
        <button onClick={() => props.postSmurfs(values)}>ADD NEW SMURF</button>
      </form>
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

export default connect(mapStateToProps, { postSmurfs })(SmurfForm);
