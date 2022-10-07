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

  return reserved ? (
    <button className="py-1 md:py-2 md:px-4 px-2 mt-2 md:mt-4 rounded-sm text-md md:text-xl text-grayDark font-normal md:rounded-md text-center bg-transparent border" type="button" onClick={handleReserve} id={id}>
      Cancel Reservation
    </button>
  ) : (
    <button className="py-1 md:py-2 md:px-4 px-2 rounded-sm text-md md:text-xl text-white font-normal md:rounded-md text-center bg-blue" type="button" onClick={handleReserve} id={id}>
      Reserve Rocket
    </button>
  );
}

RocketBadge.propTypes = {
  reserved: PropTypes.bool.isRequired,
  id: PropTypes.number.isRequired,
};

export default RocketBadge;
