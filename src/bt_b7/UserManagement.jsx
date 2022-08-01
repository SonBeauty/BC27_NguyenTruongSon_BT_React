import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import UserForm from "./UserForm";
import UserList from "./UserList";
import axios from "axios";

const UserManagement = () => {
  const [user, setUser] = useState([]);
  const [selectUser, setSelect] = useState(null);
  const fetchUser = async () => {
    try {
      const { data } = await axios.get(
        "https://62b9626541bf319d227b2b79.mockapi.io/user"
      );
      setUser(data);
    } catch (error) {
      console.log(error);
    }
  };
  const fetchUsers = async (userId) => {
    try {
      const { data } = await axios.get(
        `https://62b9626541bf319d227b2b79.mockapi.io/user/${userId}`
      );
      setSelect(data);
    } catch (error) {}
  };
  useEffect(() => {
    fetchUser();
  }, []);
  return (
    <div>
      <div className="container">
        <h1 className="text-center text-primary">Bài Tập quản lý người dùng</h1>

        <div className="card">
          <div className="card-header bg-dark text-white">
            <strong>Form Đăng ký</strong>
          </div>
          <div className="card-body">
            <UserForm onSubmitSuccess={fetchUser} selectUser={selectUser} />
          </div>
        </div>
        <div className="card">
          <div className="card-header bg-dark text-white">
            <strong>Danh sách người dùng</strong>
          </div>
          <div className="card-body">
            <UserList
              users={user}
              onDeleteSuccess={fetchUser}
              onSelect={fetchUsers}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserManagement;
