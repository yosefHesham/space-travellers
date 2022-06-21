import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { loadMissionsAsync } from "../../redux/missions/missions";
import Mission from "./mission";
import styles from "./mission.module.css";

const Missions = () => {
  const missions = useSelector((state) => state.missions);
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(loadMissionsAsync);
  }, []);
  let i = 0;
  return (
    <section className={styles.missions}>
      <div className={styles.mission}>
        <p className={styles.right_border}>Mission</p>
        <p className={styles.right_border}>Description</p>
        <p className={styles.right_border}>Status</p>
        <p> </p>
      </div>

      {missions.map((mission) => {
        i ++;
        return (
          <Mission
            key={mission.mission_id}
            name={mission.mission_name}
            description={mission.description}
            reserved={mission.reserved}
            id={mission.mission_id}
            bgColor={(i % 2 ? "white" : "lightgrey")}
          />
        );
      })}
    </section>
  );
};
export default Missions;
