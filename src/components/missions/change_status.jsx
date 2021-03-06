import PropTypes from 'prop-types';
import React from 'react';
import { useDispatch } from 'react-redux';
import { changeMissionStats } from '../../redux/missions/missions';

const ChangeStatus = (props) => {
  const { id, text, color } = props;
  const dispatch = useDispatch();
  const handleChange = () => {
    dispatch(changeMissionStats(id));
  };

  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <button
        type="button"
        onClick={handleChange}
        style={{
          boxShadow: 'none',
          color,
          backgroundColor: 'white',
          border: `1px solid ${color}`,
          cursor: 'pointer',
          padding: '8px',
          borderRadius: '5px',
        }}
      >
        {text}
      </button>
    </div>
  );
};

ChangeStatus.propTypes = {
  color: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};
export default ChangeStatus;
