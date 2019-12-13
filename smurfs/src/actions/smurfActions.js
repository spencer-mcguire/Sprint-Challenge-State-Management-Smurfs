import axios from "axios";

export const FETCH_SMURF_START = "FETCH_SMURF_START";
export const FETCH_SMURF_SUCCESS = "FETCH_SMURF_SUCCESS";
export const FETCH_SMURF_FAIL = "FETCH_SMURF_FAIL";

export const POST_SMURF_START = "POST_SMURF_START";
export const POST_SMURF_SUCCESS = "POST_SMURF_SUCCESS";
export const POST_SMURF_FAIL = "POST_SMURF_FAIL";

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
