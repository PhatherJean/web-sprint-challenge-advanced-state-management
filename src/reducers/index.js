import {
  ADD_SMURFS,
  FETCH_API,
  FETCH_API_FAILED,
  FETCH_API_SUCCESS,
} from "./../actions";
export const initialState = {
  smurfs: [],
  isLoading: false,
  errors: "",
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_API:
      return {
        ...state,
        isLoading: true,
      };
    case FETCH_API_SUCCESS:
      return {
        ...state,
        smurfs: action.payload,
        isLoading: false,
      };
    case FETCH_API_FAILED:
      return {
        ...state,
        isLoading: false,
        errors: action.payload,
      };
    case ADD_SMURFS:
      return {
        ...state,
        smurfs: [
          ...state.smurfs,
          {
            description: action.payload,
            name: action.payload,
            nickname: action.payload,
            position: action.payload,
          },
        ],
      };
    default:
      return state;
  }
};

export default reducer;

//Task List:
//1. Add in the initialState needed to hold:
//      x- an array of smurfs
//      x- a boolean indicating if the app is loading
//      x- error text
//2. Setup your reducer to take the state and action as peremeters
//3. Add in cases to your reducer to handle:
//      x- The start of an api call
//      x- The end of an api call
//      x- The adding a smurf to the smurf list when added into payload
//      x- Setting Error Text
//      - Any other state changes you see as necessary
