import { act } from "react-dom/test-utils";

const api = "https://api.spacexdata.com/v3/rockets";

const GET_ROCKETS = "GET_ROCKETS";
const RESERVE_ROCKET = "RESERVE_ROCKET";
const UNRESERVE_ROCKET = "UNRESERVE_ROCKET";
const GET_RESERVED_ROCKETS = "GET_RESERVED_ROCKETS";

export const loadReservedRockets = () => {
  return {
    type: GET_RESERVED_ROCKETS,
  };
};

// Action Creators

export const getRockets = () => async (dispatch, getState) => {
  const currentRockets = getState().rockets;
  if(currentRockets.length == 0) {
  const response = await fetch(api);
  const data = await response.json();
  const rockets = data.map(rocket => {
    return {
      ...rocket,
      reserved:false
    }
  })
  dispatch({
    type: GET_ROCKETS,
    payload: rockets,
  });
}
};

export const reserveRocket = (id) => (dispatch) => {
  dispatch({
    type: RESERVE_ROCKET,
    payload: id,
  });
};

export const unreserveRocket = (id) => (dispatch) => {
  dispatch({
    type: UNRESERVE_ROCKET,
    payload: id,
  });
};

// Create reducer
const initialState = [];

const rocketsReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ROCKETS: {
      return action.payload;
    }
    case RESERVE_ROCKET: {
     
      return state.map(rocket => {
        if(rocket.id == action.payload){
          return {
            ...rocket,
            reserved:!rocket.reserved
          }
        }
        return rocket;
      });
    }
   
    case GET_RESERVED_ROCKETS:
      return [...state.filter((rocket) => rocket.reserved)];
    default:
      return state;
  }
};
export default rocketsReducer;
