import PropTypes from "prop-types";
import React from "react";
import ChangeStatus from "./change_status";
import styles from "./mission.module.css";
import StatusBadge from "./status_badge";

const Mission = (props) => {
  const { id,name, description, reserved, bgColor } = props;

  return (
    <div className={styles.mission} style={{ backgroundColor: bgColor }}>
      <p className={styles.right_border}>{name}</p>
      <p className={styles.right_border}> {description}</p>
      {reserved ? (
        <>
          {" "}
          <StatusBadge text={"Active Member"} bgColor={"blue"} />{" "}
          <ChangeStatus
            text={"Leave Mission"}
            color={"red"}
            id={id}
          ></ChangeStatus>{" "}
        </>
      ) : (
        <>
          {" "}
          <StatusBadge text={"NOT A MEMBER"} bgColor={"gray"} />{" "}
          <ChangeStatus
            text={"Join Mission"}
            color={"rgba(0,0,0,.7)"}
            id={id}

          ></ChangeStatus>{" "}
        </>
      )}
    </div>
  );
};

Mission.propTypes = {
  description: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  bgColor: PropTypes.string.isRequired,

  reserved: PropTypes.bool.isRequired,
};

export default Mission;
