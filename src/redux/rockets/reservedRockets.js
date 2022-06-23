const GET_RESERVED_ROCKETS = 'GET_RESERVED_ROCKETS';

export const loadReservedRockets = (payload) => (dispatch) => {
  dispatch({
    type: GET_RESERVED_ROCKETS,
    payload,
  });
};

const reservedRocketsReducer = (state = [], action = { type: 'default' }) => {
  switch (action.type) {
    case GET_RESERVED_ROCKETS:
      return [...action.payload.filter((rocket) => rocket.reserved)];

    default:
      return state;
  }
};

export default reservedRocketsReducer;
