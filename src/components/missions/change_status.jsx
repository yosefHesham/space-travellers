import React from "react";

const ChangeStatus = (props) => {
  const { handleStatus, text, color } = props;

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
        onClick={handleStatus}
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
