import React, { useEffect, useState } from "react";
import axios from "axios";

const UserForm = ({ onSubmitSuccess, selectUser }) => {
  const [values, setValue] = useState({
    account: "",
    password: "",
    email: "",
    name: "",
    phoneNumber: "",
    typeUser: "",
  });

  const handleSubmit = async (evt) => {
    evt.preventDefault();
    try {
      const { id, ...payload } = values;
      if (id) {
        await axios.put(
          `https://62b9626541bf319d227b2b79.mockapi.io/user/${id}`,
          payload
        );
      } else {
        await axios.post(
          "https://62b9626541bf319d227b2b79.mockapi.io/user",
          payload
        );
      }
      onSubmitSuccess();
      setValue({
        account: "",
        password: "",
        email: "",
        name: "",
        phoneNumber: "",
        typeUser: "",
      });
    } catch (error) {
      console.log(error);
    }
  };
  const handleChange = (evt) => {
    const { name, value } = evt.target;
    setValue({ ...values, [name]: value })
    console.log(value, name);;
  };
  useEffect(() => {
    if (!selectUser) return;
    setValue({ ...selectUser });
  }, [selectUser]);
  return (
    <div>
      <form className="userForm" onSubmit={handleSubmit}>
        <div className="mx-3">
          <div className="mb-3">
            <label htmlFor="account">Tài Khoản</label>
            <input
              id="account"
              className="form-control"
              value={values.account}
              name="account"
              onChange={handleChange}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="password">Mật khẩu</label>
            <input
              id="password"
              className="form-control"
              value={values.password}
              name="password"
              onChange={handleChange}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="email">Email</label>
            <input
              id="email"
              className="form-control"
              value={values.email}
              name="email"
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="mx-3">
          <div className="mb-3">
            <label htmlFor="name">Họ Tên</label>
            <input
              id="name"
              className="form-control"
              value={values.name}
              name="name"
              onChange={handleChange}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="phoneNumber">Số điện thoại</label>
            <input
              id="phoneNumber"
              className="form-control"
              value={values.phoneNumber}
              name="phoneNumber"
              onChange={handleChange}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="typeUser">Mã loại người dùng</label>
            <select className="Form-control" defaultValue={"Khách hàng"}
              onChange={(evt)=>{
                const selectType = evt.target.value
                setValue({...values, typeUser:selectType})
                console.log(selectType)   
                ;          
              }}
            >
              <option value="">Chọn loại người dùng</option>
              <option value="Customer">Customer</option>
              <option value="Employee">Employee</option>
            </select>
          </div>
        </div>
        <button className="btn btn-success">Đăng Ký</button>
      </form>
    </div>
  );
};

export default UserForm;
