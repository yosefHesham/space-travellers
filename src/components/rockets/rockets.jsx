import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { reserveRocket, getRockets } from '../../services/rockets';

function Rockets() {
  const dispatch = useDispatch();
  const rockets = useSelector((state) => state.rockets);

  useEffect(() => {
    dispatch(getRockets());
  }, []);

  const rocketContainerStyle = () => (
    {
      display: 'flex',
      flexDirection: 'column',
      height: '100vh',
      padding: '100px 20px',
    }
  );

  return (
    <div className={{ rocketContainerStyle }}>
      {rockets.map((rocket) => (
        <li
          key={rocket.id}
          style={{
            width: '95%', height: '22%', gap: '20px', margin: ' 50px auto', listStyle: 'none', display: 'flex', justifyContent: 'space-between', alignItems: 'center',
          }}
        >
          <img src={rocket.flickr_images} alt={rocket.name} style={{ width: '22%' }} />
          <div
            className="rocket_name_description"
            style={{
              height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'space-between',
            }}
          >
            <h3>{rocket.name}</h3>
            <p>{rocket.description}</p>
            <button
              type="submit"
              onClick={() => dispatch(reserveRocket(rocket.id))}
              style={{
                background: '#1332CD',
                color: '#FFFFFF',
                border: 'none',
                outline: 'none',
                textAlign: 'center',
                width: '150px',
                height: '40px',
                borderRadius: '2px',
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
