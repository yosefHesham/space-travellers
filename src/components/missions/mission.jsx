import PropTypes from "prop-types";
import React from "react";
import styles from "./mission.module.css";

const Mission = (props) => {
  const { name, description, reserved, bgColor } = props;

  return (
    <div className={styles.mission} style={{ backgroundColor: bgColor }}>
      <p className={styles.right_border}>{name}</p>
      <p className={styles.right_border}> {description}</p>
      {reserved ? (
        <>
          {" "}
          <p
            className={styles.right_border}
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            Active Member
          </p>{" "}
          <button type="button" style={{ padding: "5px" }}>
            Cancel
          </button>{" "}
        </>
      ) : (
        <>
          {" "}
          <p
            className={styles.right_border}
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            NOT A MEMBER
          </p>{" "}
          <button type="button" className="action-button">
            Join
          </button>
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
