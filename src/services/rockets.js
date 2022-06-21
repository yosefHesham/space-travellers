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

const initialState = [
  {
    id: 1,
    active: false,
    name: 'Falcon 1',
    flickr_images: [
      'https://imgur.com/DaCfMsj.jpg',
    ],
    description: 'The Falcon 1 was an expendable launch system privately developed and manufactured by SpaceX during 2006-2009. On 28 September 2008, Falcon 1 became the first privately-developed liquid-fuel launch vehicle to go into orbit around the Earth.',
  },
  {
    id: 2,
    active: false,
    name: 'Falcon 9',
    flickr_images: [
      'https://farm1.staticflickr.com/929/28787338307_3453a11a77_b.jpg',
    ],
    description: 'The Falcon 9 is a reusable launch vehicle developed and manufactured by SpaceX and later privately launched by the United States Air Force. It is the second privately-developed liquid-fuel launch vehicle to go into orbit around the Earth.',
  },
];

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
