// Actions

const LOAD_MISSONS = "LOAD_MISSIONS";
const CHANGE_MISSION_STATUS = "CHANGE_MISSION_STATUS";


// action creators

const loadMissions = () => {
  return {
    type:LOAD_MISSONS
  }
}

const changeMissionStats = (missionId) => {
  
  return {
    type:CHANGE_MISSION_STATUS,
    payLoad:missionId
}}
