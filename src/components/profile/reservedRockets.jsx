import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { loadReservedRockets } from "../../redux/rockets/reservedRockets";
loadReservedRockets
const ReservedRockets = () => {

  const reservedRockets = useSelector((state) => state.reservedRockets);
  const rockets = useSelector((state) => state.rockets);
  const dispatch = useDispatch();
  React.useEffect(() => {
    dispatch(loadReservedRockets(rockets))
  }, []);

  const reserveMissionContainer = {
    margin: "30px auto",
    display: "flex",
    flexDirection: "column",
  };
  const table = {
    width: "48%",
    height: "50px",
    borderCollapse: "collapse",
    border: "1px solid #AAAAAA",
  };
  return (
    <div  style={reserveMissionContainer}>
      <span style={{ margin: "20px 0", padding: "0" }}>
        <h1>My Rockets</h1>
      </span>
      <ul>
        {reservedRockets.length > 0 ? (
          reservedRockets.map((rocket) => (
            <table border={1} style={table} key={rocket.rocket_id}>
              <tbody>
                <tr>
                  <td>
                    <p>{rocket.rocket_name}</p>
                  </td>
                </tr>
              </tbody>
            </table>
          ))
        ) : (
          <p>You have not reserved any rockets </p>
        )}
      </ul>
    </div>
  );
};
export default ReservedRockets;
