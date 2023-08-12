import React, {useContext} from "react";
import Dashboard from "../components/Dashboard";
import { useNavigate } from "react-router-dom";
import "./department.scss";
import { DataContext } from "../context/DataContext";
import { type } from "@testing-library/user-event/dist/type";
const Departments = () => {
  const {DataDispatch} = useContext(DataContext);
  const navigate = useNavigate();

  const handleDepartment = (value)=>{
    console.log(value);
    DataDispatch({
      type:"changeDepartment",
      payload: value,
    })
    navigate('/products')
  }

  return (
    <div className="department">
      <Dashboard />
      <div className="dept-container">
        <div className="main-container">
          <div className="kitchen"  onClick={()=>handleDepartment("Kitchen")}>
            <p>Kitchen</p>
          </div>
          <div className="clothing" onClick={()=>handleDepartment("Clothing")}>
            <p>Clothing</p>
          </div>
          <div className="toys" onClick={()=> handleDepartment("Toys")}>
            <p>Toys</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Departments;
