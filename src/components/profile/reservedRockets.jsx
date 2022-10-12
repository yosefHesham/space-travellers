import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loadReservedRockets } from '../../redux/rockets/reservedRockets';
import TableData from './table_data';

const ReservedRockets = () => {
  const reservedRockets = useSelector((state) => state.reservedRockets);
  const rockets = useSelector((state) => state.rockets);
  const dispatch = useDispatch();
  React.useEffect(() => {
    dispatch(loadReservedRockets(rockets));
  }, []);

  return (
    <div className="w-6/12">
      <ul>
        {reservedRockets.length > 0 ? (
          <table className="w-full border-0">
            <th className="border-b border-mySpend text-center text-md md:text-xl">My Rockets</th>
            {reservedRockets.map((rocket) => (
              <tr key={rocket.id} className="odd:bg-white even:bg-slate-100 h-auto text-sm md:text-xl">
                <TableData
                  name={rocket.rocket_name}
                />
              </tr>
            ))}
          </table>
        ) : (
          <p className="text-center text-warning">You have not reserved any rockets!!! </p>
        )}
      </ul>
    </div>
  );
};
export default ReservedRockets;
