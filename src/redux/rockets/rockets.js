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

// Create an initial state

const initialState = [];

// Create reducer

const rocketsReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ROCKETS: {
      return action.payload;
    }
    case RESERVE_ROCKET: {
      return state.map((rocket) => {
        if (rocket.id === action.payload) {
          return { ...rocket, reserved: true };
        }
        return rocket;
      });
    }
    case UNRESERVE_ROCKET: {
      const newState = [...state];
      newState[action.payload - 1].reserved = false;
      return newState;
    }
    default:
      return state;
  }
};
export default rocketsReducer;
