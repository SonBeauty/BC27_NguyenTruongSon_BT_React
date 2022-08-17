import React from "react";
import { useSelector, useDispatch } from "react-redux";
const TiketDetails = () => {
  const { selectedChair, choosingChair } = useSelector((state) => state.movie);
  const dispatch = useDispatch();
  if (!selectedChair) {
    return null;
  }
  console.log(choosingChair);
  const handleDelete = (chairName) => {
    dispatch({
      type: "deleteChair",
      chairName,
    });
  };

  const handleTicket = () => {
    dispatch({
      type: "handleTicket",
      payload: selectedChair,
    });
  };
  return (
    <table className="table">
      <thead>
        <tr>
          <th>Số ghế</th>
          <th>Giá</th>
          <th>Hủy</th>
        </tr>
      </thead>
      <tbody>
        {selectedChair.map((chair) => {
          return (
            <tr key={chair.name}>
              <td>{chair.name}</td>
              <td>{chair.price}</td>
              <td>
                <button
                  className="btn btn-danger"
                  onClick={() => handleDelete(chair.name)}
                >
                  x
                </button>
              </td>
            </tr>
          );
        })}
        <tr>
          <td>
            <p>Tổng tiền</p>
          </td>
          <td>{choosingChair}</td>
        </tr>
        <button className="btn btn-success" onClick={handleTicket}>
          Đặt vé
        </button>
      </tbody>
    </table>
  );
};

export default TiketDetails;
