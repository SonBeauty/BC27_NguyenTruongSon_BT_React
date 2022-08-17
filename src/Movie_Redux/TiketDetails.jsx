import React from "react";
import { useSelector,  useDispatch} from "react-redux";
const TiketDetails = () => {
  const { selectedChair } = useSelector((state) => state.movie);
  const dispatch = useDispatch();
  if (!selectedChair) {
    return null;
  }
  
  const handleDelete = (chairName) => {
    dispatch({
      type: "deleteChair",
      chairName
    });
  };

  const handleTicket = (chair)=>{
    dispatch({
      type:"handleTicket"
    })
  }
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
            <tr>
              <td>{chair.name}</td>
              <td>{chair.price}</td>
              <td>
                <button className="btn btn-danger" onClick={()=>handleDelete(chair.name)}>
                  x
                </button>
              </td>
            </tr>
          );
        })}
        <button className="btn btn-success" onClick={()=>handleTicket()}>Đặt vé</button>
      </tbody>
    </table>
  );
};

export default TiketDetails;
