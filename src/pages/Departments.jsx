import React from "react";
import Dashboard from "../components/Dashboard";
import { useNavigate } from "react-router-dom";
import "./department.scss";
const Departments = () => {
  const navigate = useNavigate();
  
  return (
    <div className="department">
      <Dashboard />
      <div className="dept-container">
        <div className="main-container">
          <div className="kitchen">
            <p>Kitchen</p>
          </div>
          <div className="clothing">
            <p>Clothing</p>
          </div>
          <div className="toys">
            <p>Toys</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Departments;
