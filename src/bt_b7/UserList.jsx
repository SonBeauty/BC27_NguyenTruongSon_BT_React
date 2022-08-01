import React from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";


const UserList = ({ users, onDeleteSuccess, onSelect }) => {
  const handleDelete = async (userId) => {
    try {
      await axios.delete(
        `https://62b9626541bf319d227b2b79.mockapi.io/user/${userId}`
      )
      onDeleteSuccess()
    } catch (error) {
      console.log(error);
    }
  };
  
  const handleUpdate = (userId)=>{
    console.log(userId);
    onSelect(userId)
  }

  return (
    <div>
      <table className="table">
        <thead>
          <tr>
            <th>STT</th>
            <th>Tài Khoản</th>
            <th>Họ Tên</th>
            <th>Mật Khẩu</th>
            <th>Email</th>
            <th>Số điện thoại</th>
            <th>Loại Người dùng</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => {
            return (
              <tr key={user.id}>
                <td>{user.id}</td>
                <td>{user.account}</td>
                <td>{user.name}</td>
                <td>{user.password}</td>
                <td>{user.email}</td>
                <td>{user.phoneNumber}</td>
                <td>{user.typeUser}</td>
                <td>
                  <button className="bn btn-success" onClick={()=> handleUpdate(user.id)}>Update</button>
                  <button
                    className="bn btn-danger"
                    onClick={() => handleDelete(user.id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default UserList;
