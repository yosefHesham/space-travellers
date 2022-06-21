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
    <button type="submit" className="reserveButton" onClick={handleReserve} id={id}>Reserve Rocket</button>
  );
}

ButtonRocketBadge.propTypes = {
  id: PropTypes.number.isRequired,
  reserved: PropTypes.bool.isRequired,
};
