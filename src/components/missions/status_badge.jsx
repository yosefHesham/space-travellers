import PropTypes from "prop-types"
import React from "react";
import styles from "./mission.module.css";
const StatusBadge = (props) => {
  const { text, bgColor } = props;
  return (
    <div
      className={styles.right_border}
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <p style={{ backgroundColor: bgColor, borderRadius: "6px", color:"white", padding:"4px" }}>{text}</p>
    </div>
  );
};

StatusBadge.propTypes = {
  bgColor: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired
}
export default StatusBadge;
