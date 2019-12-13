import React, { useState } from "react";

import { connect } from "react-redux";

import { postSmurfs } from "../actions";

const SmurfForm = props => {
  const [value, setValue] = useState({
    name: "",
    age: "",
    height: ""
  });
  console.log(value);

  const handleChanges = e => {
    setValue({
      ...value,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = e => {
    console.log(value);
    e.preventDefault();
    props.postSmurfs(value);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          value={value.name}
          onChange={handleChanges}
        />
        <input
          type="text"
          name="age"
          value={value.age}
          onChange={handleChanges}
        />
        <input
          type="text"
          name="height"
          value={value.height}
          onChange={handleChanges}
        />
        <button>ADD NEW SMURF</button>
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
