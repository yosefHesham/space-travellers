import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { reserveRocket, unreserveRocket } from '../../redux/rockets/rockets';

export default function ButtonRocketBadge({ id, reserved }) {
  const dispatch = useDispatch();

  const handleReserve = (e) => {
    const { id } = e.target;
    dispatch(reserveRocket(id));
  };

  const handleUnreserved = (e) => {
    const { id } = e.target;
    dispatch(unreserveRocket(id));
  };

  return reserved ? (
    <button type="submit" className="unreservedButton" onClick={handleUnreserved} id={id}>Cancel Reservation</button>
  ) : (
    <button
      type="submit"
      className="reserveButton"
      style={{
        height: '40px',
        border: 'none',
        outline: 'none',
        color: '#FFF',
        fontSize: '1rem',
        fontWeight: 'bold',
        backgroundColor: '#0D53C3',
        cursor: 'pointer',
        borderRadius: '2px',
      }}
      onClick={handleReserve}
      id={id}
    >
      Reserve Rocket
    </button>
  );
}

ButtonRocketBadge.propTypes = {
  id: PropTypes.number.isRequired,
  reserved: PropTypes.bool.isRequired,
};
