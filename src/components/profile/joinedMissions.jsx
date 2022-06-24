import React from 'react';
import { useSelector } from 'react-redux';
import TableData from './table_data';

const JoinedMissions = () => {
  const missions = useSelector((state) => state.missions);
  const joined = missions.filter((mission) => mission.reserved);
  const reserveMissionContainer = {
    margin: '30px auto',
    display: 'flex',
    flexDirection: 'column',
  };
  const table = {
    width: '100%',
    height: '50px',
    borderCollapse: 'collapse',
    border: '1px solid #AAAAAA',
  };
  return (
    <div style={reserveMissionContainer}>
      <span style={{ margin: '20px 0', padding: '0' }}>
        <h1>My Missions</h1>
      </span>
      <ul>
        {joined.length > 0 ? (
          <table border={1} style={table}>
            <tbody>
              {joined.map((mission) => (
                <TableData
                  key={mission.mission_id}
                  name={mission.mission_name}
                />
              ))}
            </tbody>
          </table>
        ) : (
          <p>You have not reserved any missions </p>
        )}
      </ul>
    </div>
  );
};
export default JoinedMissions;
