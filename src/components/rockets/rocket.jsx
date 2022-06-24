import React from 'react';
import PropTypes from 'prop-types';
import RocketBadge from './rocketsBadge';

const badgeStyle = {
  background: '#00B2CE',
  color: '#ffffff',
  padding: '0.2rem',
  fontWeight: 'bold',
  borderRadius: '5px',
  margin: '10px auto',
};

const listStyle = {
  width: '100%',
  height: '250px',
  margin: '50px 0',
  padding: '0',
  gap: '10px',
  display: 'flex',
  justifyContent: 'space-between',
  listStyle: 'none',
};

const cardInfo = {
  maxHeight: '100%',
  minHeight: '200px',
  height: '230px',
  width: '100%',
  padding: '10px',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'start',
  gap: '20px',
  backdropFilter: 'blur(20px)',
  backgroundColor: '#008CFF0E',
  borderRadius: '5px',
};

const nameStyle = { fontSize: '1.5rem', fontWeight: 'bold', padding: '0' };

const GetRockets = ({
  id, images, name, description, reserved,
}) => (
  <li
    style={listStyle}
  >
    <img alt={name} src={images} style={{ width: '25%', height: '100%', padding: '0' }} />
    <div
      style={cardInfo}
    >
      <h2 style={nameStyle}>{name}</h2>
      <div style={{ padding: '0', lineHeight: '25px' }}>
        {reserved ? (
          <div style={{ margin: '0', padding: '0', lineHeight: '25px' }}>
            <p>
              <span
                style={badgeStyle}
              >
                reserved
              </span>
              {' '}
              {description}
              {' '}
            </p>
          </div>
        ) : (
          <p>{description}</p>

        )}
      </div>
      <RocketBadge id={id} reserved={reserved} />
    </div>
  </li>
);

GetRockets.propTypes = {
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  images: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
  reserved: PropTypes.bool.isRequired,
};

export default GetRockets;
