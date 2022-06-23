import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { reserveRocket } from '../../redux/rockets/rockets';

function RocketBadge(props) {
  const { id, reserved } = props;
  const dispatch = useDispatch();

  const handleReserve = () => {
    dispatch(reserveRocket(id));
  };

  const buttonStyle = {
    width: '180px',
    height: '40px',
    background: '#0068E8',
    border: 'none',
    outline: 'none',
    color: '#ffffff',
    fontSize: '1rem',
    padding: '0.3rem',
    fontWeight: 'bold',
    borderRadius: '5px',
    cursor: 'pointer',
  };

  const cancelButton = {
    width: '180px',
    height: '40px',
    background: 'transparent',
    border: '1px solid #5F5F5F',
    color: '#5F5F5F',
    outline: 'none',
    fontSize: '1rem',
    padding: '0.3rem',
    fontWeight: 'bold',
    borderRadius: '5px',
    cursor: 'pointer',
  };

  return reserved ? (
    <button className="handleUnreserved" style={cancelButton} type="button" onClick={handleReserve} id={id}>
      Cancel Reservation
    </button>
  ) : (
    <button className="reserveBtn" type="button" style={buttonStyle} onClick={handleReserve} id={id}>
      Reserve Rocket
    </button>
  );
}

RocketBadge.propTypes = {
  reserved: PropTypes.bool.isRequired,
  id: PropTypes.number.isRequired,
};

export default RocketBadge;
