import PropTypes from 'prop-types';
import React from 'react';
import styles from './mission.module.css';
import StatusBadge from './status_badge';

const Mission = (props) => {
  const {
    name, description, reserved, bgColor,
  } = props;

  return (
    <div className={styles.mission} style={{ backgroundColor: bgColor }}>
      <p className={styles.right_border}>{name}</p>
      <p className={styles.right_border}>
        {' '}
        {description}
      </p>
      {reserved ? (
        <>
          {' '}
          <StatusBadge text={"Active Member"} bgColor={'blue'} />
          {' '}
          <button type="button" style={{ padding: '5px' }}>
            Cancel
          </button>
          {' '}
        </>
      ) : (
        <>
          {' '}
          <StatusBadge text={"NOT A MEMBER"} bgColor={'gray'} />
          {' '}
          <button type="button" className="action-button">
            Join
          </button>
        </>
      )}
    </div>
  );
};

Mission.propTypes = {
  description: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  bgColor: PropTypes.string.isRequired,

  reserved: PropTypes.bool.isRequired,
};

export default Mission;
