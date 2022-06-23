const GET_RESERVED_ROCKETS = "GET_RESERVED_ROCKETS";

export const loadReservedRockets = (payload) => (dispatch) => {
  dispatch({
    type: GET_RESERVED_ROCKETS,
    payload: payload,
  });
};

const reservedRocketsReducer = (state = [],action = { type: "default" }) => {
  console.log("55555555555555")
  switch (action.type) {
    case GET_RESERVED_ROCKETS:
      console.log("wtf");
      return action.payload.filter(rocket => rocket.reserved);
    default:
      return [];
  }
};

export default reservedRocketsReducer;
