/* eslint-disable max-len */
import React from 'react';
import { useSelector } from 'react-redux';
import './Profile.css';

const Joined = () => {
  const missions = useSelector((state) => state.missions);
  const joined = missions.filter((mission) => mission.reserved);
  const reserveMissionContainer = {
    margin: '30px auto',
    display: 'flex',
    flexDirection: 'column',
  };
  const table = {
    width: '48%',
    height: '40px',
    borderCollapse: 'collapse',
  };
  return (
    <div className="profile_container" style={reserveMissionContainer}>
      <span style={{ margin: '20px 0' }}>
        <h1>My Missions</h1>
      </span>
      <ul>
        {joined.length > 0 ? (
          joined.map((mission) => (
            <table className="profile_table_container" border={1} style={table} key={mission.id}>
              <tr>
                <td>
                  <p>{mission.mission_name}</p>
                </td>
              </tr>
            </table>
          ))
        ) : (
          <p>You have not reserved any rockets </p>
        )}
      </ul>
    </div>
  );
};
export default Joined;
