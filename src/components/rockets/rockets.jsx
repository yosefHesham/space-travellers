import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';
import { getRockets } from '../../redux/rockets/rockets';
import ButtonRocketBadge from './ButtonRocketBadge';

function Rockets({ id, reserved }) {
  const dispatch = useDispatch();
  const rockets = useSelector((state) => state.rockets);

  useEffect(() => {
    dispatch(getRockets());
  }, []);

  return (
    <ul className="rocketContainer" style={{ padding: '0px' }}>
      {rockets.map((rocket) => (
        <li
          key={rocket.id}
          style={{
            gap: '10px',
            margin: ' 50px 0px',
            padding: '0px',
            listStyle: 'none',
            display: 'flex',
          }}
        >
          <img
            src={rocket.flickr_images}
            alt={rocket.rocket_name}
            style={{
              width: '25%',
              objectFit: 'cover',
            }}
          />
          <div
            className="rocket_name_description"
            style={{
              maxHeight: '100%',
              minHeight: '200px',
              height: '100%',
              width: '100%',
              padding: '10px',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              backdropFilter: 'blur(20px)',
              backgroundColor: '#E4E4E488',
              borderRadius: '2px',
            }}
          >
            <h2 style={{ padding: '0' }}>{rocket.rocket_name}</h2>
            <span style={{
              height: '150px',
              padding: '0',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
            }}
            >
              {
                reserved ? (
                  <span>
                    <p>reserved</p>
                  </span>
                ) : (
                  <p style={{ margin: '0' }}>{rocket.description}</p>
                )
              }
              <span className="buttonBadgeContainer" style={{ padding: '0' }}>
                <ButtonRocketBadge id={id} reserved={reserved} />
              </span>
            </span>
          </div>
        </li>
      ))}
    </ul>
  );
}

Rockets.propTypes = {
  id: PropTypes.number.isRequired,
  reserved: PropTypes.bool.isRequired,
};
export default Rockets;
