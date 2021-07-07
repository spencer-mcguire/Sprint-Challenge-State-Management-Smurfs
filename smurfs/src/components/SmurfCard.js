import React, { useState } from "react";

import { connect } from "react-redux";
import { kill, editFields, putSmurfs } from "../actions";

const SmurfCard = props => {
  const { name, age, height, id } = props.i;

  const [editvalue, setEditValue] = useState({
    name: "",
    age: "",
    height: "",
    id: props.i.id
  });
  console.log("EDIT VAL", editvalue);
  const handleChanges = e => {
    setEditValue({
      ...editvalue,
      [e.target.name]: e.target.value
    });
  };

  const submitChanges = e => {
    e.preventDefault();
    props.putSmurfs(editvalue);
  };

  return (
    <div>
      {props.isEditing ? (
        <form onSubmit={submitChanges}>
          <input
            type="text"
            name="name"
            value={editvalue.name}
            onChange={handleChanges}
            placeholder={name}
          />
          <input
            type="text"
            name="age"
            value={editvalue.age}
            onChange={handleChanges}
            placeholder={age}
          />
          <input
            type="text"
            name="height"
            value={editvalue.height}
            onChange={handleChanges}
            placeholder={height}
          />
        </form>
      ) : (
        <>
          <h3>{name}</h3>
          <p>{age}</p>
          <p>{height}</p>
        </>
      )}
      {props.isEditing && (
        <button onClick={() => props.putSmurfs(editvalue)}>Submit</button>
      )}
      <button onClick={() => props.kill({ id })}>KILL</button>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    smurfs: state.smurfs,
    isFetching: state.isFetching,
    isEditing: state.isEditing,
    error: state.error
  };
};
export default connect(mapStateToProps, { kill, editFields, putSmurfs })(
  SmurfCard
);
