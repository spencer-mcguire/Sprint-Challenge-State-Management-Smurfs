import {
  FETCH_SMURF_START,
  FETCH_SMURF_SUCCESS,
  FETCH_SMURF_FAIL,
  POST_SMURF_START,
  POST_SMURF_SUCCESS,
  POST_SMURF_FAIL,
  KILL_SMURF_START,
  KILL_SMURF_SUCCESS,
  EDIT_FIELDS,
  PUT_SMURF_START,
  PUT_SMURF_SUCCESS
} from "../actions";

const initialState = {
  smurfs: [],
  isFetching: false,
  isRequesting: false,
  isDeleting: false,
  isEditing: false,
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
        smurfs: action.payload,
        isRequesting: false,
        error: ""
      };

    case POST_SMURF_FAIL:
      return {
        ...state,
        isRequesting: false,
        error: action.payload
      };

    case KILL_SMURF_START:
      return {
        ...state,
        isDeleting: true
      };

    case KILL_SMURF_SUCCESS:
      return {
        ...state,
        smurfs: action.payload,
        isDeleting: false,
        error: ""
      };

    case EDIT_FIELDS:
      return {
        ...state,
        isEditing: true
      };

    case PUT_SMURF_START:
      return {
        ...state,
        isEditing: false
      };

    case PUT_SMURF_SUCCESS:
      return {
        ...state,
        smurfs: action.payload
      };

    default:
      return state;
  }
};

export default smurfReducer;
