import React from "react"
import { useDispatch, useSelector } from "react-redux"
import { loadMissionsAsync } from "../../redux/missions/missions"

let firstFetch = false;

const Missions = () => {
  const dispatch = useDispatch()

  React.useEffect(() => {
    if(!firstFetch) {
    dispatch(loadMissionsAsync)
    }
    firstFetch = true;
  },[])
  const missions = useSelector((state) => state.missions);
  console.log(missions)
  return (<p>Missons</p>)
}
export default Missions