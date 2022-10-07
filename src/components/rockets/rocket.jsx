import React from 'react';
import PropTypes from 'prop-types';
import RocketBadge from './rocketsBadge';

const badgeStyle = {
  background: '#00B2CE',
  color: '#ffffff',
};

const GetRockets = ({
  id, images, name, description, reserved,
}) => (
  <li
    className="card m-auto shadow-md rounded-md p-2 md:mt-10 md:flex gap-5 mb-6"
  >
    <img alt={name} src={images} className="w-full md:w-3/12" />
    <div>
      <h2 className="font-bold md:text-2xl md:mb-2 my-2 text-xl">{name}</h2>
      <div className="p-0 text-sm md:text-xl">
        {reserved ? (
          <div style={{ margin: '0', padding: '0', lineHeight: '25px' }}>
            <p>
              <span
                style={badgeStyle}
                className="p-1 rounded-sm md:rounded-md md:font-normal m-0"
              >
                reserved
              </span>
              {' '}
              <span className="text-grayDark md:text-xl text-sm mb-4">{description}</span>
              {' '}
            </p>
          </div>
        ) : (
          <p className="text-grayDark md:text-xl text-sm mb-4">{description}</p>
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
