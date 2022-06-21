import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { reserveRocket, getRockets } from '../../services/rockets';

function Rockets() {
  const dispatch = useDispatch();
  const rockets = useSelector((state) => state.rockets);

  useEffect(() => {
    dispatch(getRockets());
  }, []);

  return (
    <div className="rocketContainer" style={{ width: '100%', padding: '0px' }}>
      {rockets.map((rocket) => (
        <li
          key={rocket.id}
          style={{
            gap: '10px',
            margin: ' 50px 0px',
            padding: '0px',
            listStyle: 'none',
            display: 'flex',
            justifyContent: 'space-between',
          }}
        >
          <img src={rocket.flickr_images} alt={rocket.rocket_name} style={{ width: '30%', objectFit: 'cover' }} />
          <div
            className="rocket_name_description"
            style={{
              maxHeight: '100%',
              minHeight: '200px',
              height: '100%',
              padding: '10px',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              backdropFilter: 'blur(20px)',
              backgroundColor: '#E4E4E488',
              borderRadius: '2px',
            }}
          >
            <h3 style={{ padding: '0' }}>{rocket.rocket_name}</h3>
            <span style={{ padding: '0' }}>
              <p>{rocket.description}</p>
            </span>
            <button
              type="submit"
              onClick={() => dispatch(reserveRocket(rocket.id))}
              style={{
                width: '190px',
                height: '50px',
                background: '#1332CD',
                textAlign: 'center',
                color: '#FFFFFF',
                fontWeight: 'bold',
                fontSize: '1rem',
                border: 'none',
                outline: 'none',
                borderRadius: '2px',
                cursor: 'pointer',
              }}
            >
              Reserve Rocket
            </button>
          </div>
        </li>
      ))}
    </div>
  );
}
export default Rockets;
