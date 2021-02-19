import axios from "axios";

//Fetching initial data from api
export const FETCH_DATA_START = "FETCH_DATA_START";
export const FETCH_DATA_SUCCESS = "FETCH_DATA_SUCCESS";
export const FETCH_DATA_FAILURE = "FETCH_DATA_FAILURE";

// Adding smurf to the DB
export const ADD_SMURF = "ADD_SMURF";

//POSTing failure or success
export const POST_API_SUCCESS = "POST_API_SUCCESS";
export const POST_API_FAILURE = "POST_API_FAILURE";

// Retrieve smurfs
export const retrieveSmurfs = () => (dispatch) => {
  // show is loading screen to get data
  dispatch({ type: FETCH_DATA_START });
  //axios call to get smurfs
  axios
    .get("http://localhost:3333/smurfs")
    .then((res) => {
      dispatch({ type: FETCH_DATA_SUCCESS, payload: res.data });
    })
    .catch((err) => {
      dispatch({ type: FETCH_DATA_FAILURE, payload: err.response.data });
    });
};

const addSmurf = (newSmurf) => (dispatch) => {
  //Add new smurf to the array
  dispatch({ type: ADD_SMURF, payload: newSmurf });

  //Add new smurf to the database
  axios
    .post("http://localhost:3333/smurfs", newSmurf)
    .then((res) => {
      console.log("post success", res);
      dispatch({ type: POST_API_SUCCESS, payload: res.data });
    })
    .catch((err) => {
      console.log("post error", err.response.data);
      dispatch({ type: POST_API_FAILURE, payload: err.response.data });
    });
};
export default addSmurf;
//Task List:
//1. Add fetch smurfs action:
//              - fetch and return initial list of smurfs
//              - dispatch actions that indicate if we are waiting for a server response
//              - dispatch an error text action if an error is returned from the server
//2. Add add smurf action:
//              - dispatch an error text action if smurf data does not includes a name, nickname and position field
//              - send a post request with the smurf as body to see if there is an error
//              - dispatch add smurf action if request is successful
//              - dispatch an error text action if an request returns an error
//3. Add set error text action:
//              - return action object setting error text
//4. Any other actions you deem nessiary to complete application.
