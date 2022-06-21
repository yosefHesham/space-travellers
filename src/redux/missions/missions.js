// Actions
import getMissions from '../../services/missions_service';

const LOAD_MISSONS = 'LOAD_MISSIONS';
// const CHANGE_MISSION_STATUS = 'CHANGE_MISSION_STATUS';

// action creators

const loadMissions = (missions) => ({
  type: LOAD_MISSONS,
  missions,
});

// const changeMissionStats = (missionId) => ({
//   type: CHANGE_MISSION_STATUS,
//   payLoad: missionId,
// });

export const loadMissionsAsync = async (dispatch, getState) => {
  const currentMissions = getState().missions;
  if (currentMissions.length === 0) {
    const data = await getMissions();
    const missions = data.map((mission) => ({
      ...mission,
      reserved: false,
    }));
    dispatch(loadMissions(missions));
  }
};

export default function missionsReducer(state = [], action) {
  switch (action.type) {
    case LOAD_MISSONS:
      return action.missions;
    default:
      return state;
  }
}
