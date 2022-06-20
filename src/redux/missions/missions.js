// Actions

import { act } from "react-dom/test-utils";
import getMissions from "../../services/missions_service";

const LOAD_MISSONS = "LOAD_MISSIONS";
const CHANGE_MISSION_STATUS = "CHANGE_MISSION_STATUS";


// action creators

const loadMissions = (missions) => {
  return {
    type:LOAD_MISSONS,
    missions
  }
}

const changeMissionStats = (missionId) => {
  
  return {
    type:CHANGE_MISSION_STATUS,
    payLoad:missionId
}}

export const loadMissionsAsync = async (dispatch) => {
 const missions =  await getMissions();

 dispatch(loadMissions(missions))
}

export default function missionsReducer (state = [], action) {
  switch(action.type) {
    case LOAD_MISSONS:
      return action.missions
  }
  return state;

}
