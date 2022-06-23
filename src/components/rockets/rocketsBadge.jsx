import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { reserveRocket, unreserveRocket } from '../../redux/rockets/rockets';

function RocketBadge({ reserved, id }) {
  const dispatch = useDispatch();

  const handleReserve = (event) => {
    const { id } = event.target;
    dispatch(reserveRocket(id));
  };

  const handleUnreserve = (event) => {
    const { id } = event.target;
    dispatch(unreserveRocket(id));
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

  return reserved ? (
    <button className="handleUnreserved" style={buttonStyle} type="button" onClick={handleUnreserve} id={id}>
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
