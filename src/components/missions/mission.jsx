import React from "react";
import styles from "./mission.module.css";

const Mission = (props) => {
  const { mission_id, mission_name, description, reserved } = props;



  return (
    <div className={styles.mission}>
      <p className={styles.right_border}>{mission_name}</p>
      <p className={styles.right_border}> {description}</p>
      {reserved ? (
        <>
          {" "}
          <p className={styles.right_border} style={{alignSelf:"center", textAlign:"center"}}>Active Member</p>{" "}
          <button  style={{padding:"5px"}}>Cancel</button>{" "}
        </>
      ) : (
        <>
          {" "}
          <p className={styles.right_border} style={{alignSelf:"center"}} >NOT A MEMBER</p>{" "}
          <button   className="action-button">Join</button>
        </>
      )}
        </div>

  );
};

export default Mission;
