const api = 'https://api.spacexdata.com/v3/rockets';

const GET_ROCKETS = 'GET_ROCKETS';
const RESERVE_ROCKET = 'RESERVE_ROCKET';
const UNRESERVE_ROCKET = 'UNRESERVE_ROCKET';

// Action Creators

export const getRockets = () => async (dispatch) => {
  const response = await fetch(api);
  const data = await response.json();
  dispatch({
    type: GET_ROCKETS,
    payload: data,
  });
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
      const newState = [...state];
      newState[action.payload - 1].reserved = true;
      return newState;
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
