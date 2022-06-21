const api = 'https://api.spacexdata.com/v3/rockets';

const GET_ROCKETS = 'GET_ROCKETS';
const RESERVE_ROCKET = 'RESERVE_ROCKET';
const UNRESERVE_ROCKET = 'UNRESERVE_ROCKET';

// Action Creators

export const getRockets = () => async (dispatch) => {
  await fetch(api)
    .then((rockets) => rockets.json())
    .then(
      (data) => dispatch({ type: GET_ROCKETS, payload: data }),
      () => dispatch({ type: GET_ROCKETS, payload: [] }),
    );
};

export const reserveRocket = (rocket) => async (dispatch) => {
  dispatch({
    type: RESERVE_ROCKET,
    payload: rocket,
  });
};

export const unreserveRocket = (rocket) => async (dispatch) => {
  dispatch({
    type: UNRESERVE_ROCKET,
    payload: rocket,
  });
};

// Create an initial state

const initialState = [];

// Create reducer

const rocketsReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ROCKETS:
      return action.payload;
    case RESERVE_ROCKET:
      return state.map((rocket) => {
        if (rocket.data === action.payload.data) {
          return {
            ...rocket,
            reserved: true,
          };
        }
        return rocket;
      });
    case UNRESERVE_ROCKET:
      return state.map((rocket) => {
        if (rocket.id === action.payload.id) {
          return {
            ...rocket,
            reserved: false,
          };
        }
        return rocket;
      });
    default:
      return state;
  }
};
export default rocketsReducer;
