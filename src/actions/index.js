import axios from "axios";

export const FETCH_API_START = "FETCH_API_START";
export const FETCH_API_FAILED = "FETCH_API_FAILED";
export const POST_API_FAILED = "POST_API_FAILED";
export const FETCH_API_SUCCESS = "FETCH_API_SUCCESS";
export const POST_API_SUCCESS = "POST_API_SUCCESS";
export const ADD_SMURFS = "ADD_SMURFS";

console.log("start api call");
export const getSmurfs = () => (dispatch) => {
  dispatch({ type: FETCH_API_START });
  axios
    .get("http://localhost:3333/smurfs")
    .then((resp) => {
      console.log(resp);
      dispatch({ type: FETCH_API_SUCCESS, payload: resp.data });
    })
    .catch((err) => {
      console.log(err);
      dispatch({ type: FETCH_API_FAILED, payload: err.response.code });
    });
};

export const addSmurfs = (newSmurf) => {
  console.log(newSmurf);
  return {
    type: ADD_SMURFS,
    payload: newSmurf,
  };
};

// export const addSmurfs = () => (dispatch) => {
//   dispatch({ type: ADD_SMURFS });
//   axios
//     .post("http://localhost:3333/smurfs")
//     .then((res) => {
//       dispatch({
//         type: POST_API_SUCCESS,
//         payload: res.data,
//       });
//     })
//     .catch((err) => {
//       console.log(err);
//       dispatch({ type: POST_API_FAILED, payload: err.response.code });
//     });
// };

//Task List:
//1. Add fetch smurfs action:
//            x- fetch and return initial list of smurfs
//            x- dispatch actions that indicate if we are waiting for a server response
//             x- dispatch an error text action if an error is returned from the server
//2. Add add smurf action:
//              x- dispatch an error text action if smurf data does not includes a name, nickname and position field
//              x- send a post request with the smurf as body to see if there is an error
//              - dispatch add smurf action if request is successful
//              - dispatch an error text action if an request returns an error
//3. Add set error text action:
//              - return action object setting error text
//4. Any other actions you deem nessiary to complete application.
