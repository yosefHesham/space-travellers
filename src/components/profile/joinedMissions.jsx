import React from 'react';
import { useSelector } from 'react-redux';
import TableData from './table_data';

const JoinedMissions = () => {
  const missions = useSelector((state) => state.missions);
  const joined = missions.filter((mission) => mission.reserved);

  return (
    <div className="w-6/12">
      <ul>
        {joined.length > 0 ? (
          <table className="w-full border-0">
            <th className="border-b border-mySpend text-center text-md md:text-xl">My Missions</th>
            {joined.map((mission) => (
              <tr key={mission.mission_id} className="odd:bg-white even:bg-slate-100 h-auto text-sm md:text-xl">
                <TableData
                  name={mission.mission_name}
                />
              </tr>
            ))}
          </table>
        ) : (
          <p className="text-center text-warning">You have not reserved any missions!!! </p>
        )}
      </ul>
    </div>
  );
};
export default JoinedMissions;
