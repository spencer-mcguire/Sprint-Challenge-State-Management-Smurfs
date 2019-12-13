import {
  FETCH_SMURF_START,
  FETCH_SMURF_SUCCESS,
  FETCH_SMURF_FAIL,
  POST_SMURF_START,
  POST_SMURF_SUCCESS,
  POST_SMURF_FAIL
} from "../actions";

const initialState = {
  smurfs: [],
  isFetching: false,
  isRequesting: false,
  error: ""
};

const smurfReducer = (state = initialState, action) => {
  console.log(state, action);
  switch (action.type) {
    case FETCH_SMURF_START:
      return {
        ...state,
        isFetching: true
      };
    case FETCH_SMURF_SUCCESS:
      return {
        ...state,
        smurfs: action.payload,
        isFetching: false,
        error: ""
      };
    case FETCH_SMURF_FAIL:
      return {
        ...state,
        isFetching: false,
        error: action.payload
      };

    case POST_SMURF_START:
      return {
        ...state,
        isRequesting: true
      };

    case POST_SMURF_SUCCESS:
      return {
        ...state,
        smurfs: [...state.smurfs, action.payload],
        isRequesting: false,
        error: ""
      };

    case POST_SMURF_FAIL:
      return {
        ...state,
        isRequesting: false,
        error: action.payload
      };

    default:
      return state;
  }
};

export default smurfReducer;
