import axios from "axios";

export const FETCH_SMURF_START = "FETCH_SMURF_START";
export const FETCH_SMURF_SUCCESS = "FETCH_SMURF_SUCCESS";
export const FETCH_SMURF_FAIL = "FETCH_SMURF_FAIL";

export const POST_SMURF_START = "POST_SMURF_START";
export const POST_SMURF_SUCCESS = "POST_SMURF_SUCCESS";
export const POST_SMURF_FAIL = "POST_SMURF_FAIL";

export const KILL_SMURF_START = "KILL_SMURF_START";
export const KILL_SMURF_SUCCESS = "KILL_SMURF_SUCCESS";

export const PUT_SMURF_START = "PUT_SMURF_START";
export const PUT_SMURF_SUCCESS = "PUT_SMURF_SUCCESS";

export const EDIT_FIELDS = "EDIT_FIELDS";

export const getSmurfs = () => dispatch => {
  dispatch({ type: FETCH_SMURF_START });
  axios
    .get("http://localhost:3333/smurfs")
    .then(res => dispatch({ type: FETCH_SMURF_SUCCESS, payload: res.data }))
    .catch(err => dispatch({ type: FETCH_SMURF_FAIL, payload: err.results }));
};

export const postSmurfs = data => dispatch => {
  dispatch({ type: POST_SMURF_START });
  axios
    .post("http://localhost:3333/smurfs", data)
    .then(res => dispatch({ type: POST_SMURF_SUCCESS, payload: res.data }))
    .catch(err => dispatch({ type: FETCH_SMURF_FAIL, payload: err }));
};

// export const kill = i => {
//   return { type: KILL_SMURF, payload: i };
// };

export const kill = id => dispatch => {
  console.log(id);
  dispatch({ type: KILL_SMURF_START });
  axios.delete(`http://localhost:3333/smurfs/${id.id}`).then(res => {
    console.log(res);
    dispatch({ type: KILL_SMURF_SUCCESS, payload: res.data });
  });
};

export const editFields = i => {
  return {
    type: EDIT_FIELDS,
    payload: i
  };
};

export const putSmurfs = id => dispatch => {
  console.log("edit item", id);
  dispatch({ type: PUT_SMURF_START });
  axios
    .put(`http://localhost:3333/smurfs/${id.id}`, id)
    .then(res => dispatch({ type: PUT_SMURF_SUCCESS, payload: res.data }));
};
