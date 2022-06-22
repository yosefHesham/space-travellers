import React from "react";
import { useDispatch } from "react-redux";
import { changeMissionStats } from "../../redux/missions/missions";

const ChangeStatus = (props) => {
  const {id, text, color } = props;
  const dispatch = useDispatch()
  const handleChange = () => {
     dispatch( changeMissionStats(id))
  }

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <button
        type="button"
        onClick={handleChange}
        style={{
          padding: "5px",
          boxShadow: "none",
          color: color,
          backgroundColor:"white",
          border: `1px solid ${color}`,
          cursor:"pointer",
          padding:"8px",
          borderRadius:"5px"
        }}
        
      >
        {text}
      </button>
    </div>
  );
};
export default ChangeStatus;
