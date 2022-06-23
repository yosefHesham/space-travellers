/* eslint-disable no-unused-vars */
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getRockets } from '../../redux/rockets/rockets';
import GetRockets from './rocket';

function Rockets() {
  const dispatch = useDispatch();
  const rockets = useSelector((state) => state.rockets);

  useEffect(() => {
    dispatch(getRockets());
  }, []);
  return (
    <section style={{ width: '100%', padding: '0' }}>
      <ul style={{ width: '100%', padding: '0' }}>
        {rockets.map((rocket) => (
          <GetRockets
            key={rocket.id}
            id={rocket.id}
            images={rocket.flickr_images[0]}
            name={rocket.rocket_name}
            description={rocket.description}
            reserved={rocket.reserved === true}
          />
        ))}
      </ul>
    </section>
  );
}
export default Rockets;
