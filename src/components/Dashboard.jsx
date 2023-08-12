import React from 'react'
import { NavLink } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import "./dashboard.scss";

const Dashboard = () => {
    const navigate = useNavigate();
    const activeClass = "text-base block py-2 pr-4 pl-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white";
  const inActiveClass = "text-base block py-2 pr-4 pl-3 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-white dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700";

  return (
    <div className='dashboard'>
      <div className="dash">
      <NavLink to="/" className={({isActive}) => isActive ? activeClass : inActiveClass } end>Dashboard</NavLink>
      </div>

     <div className="dept">
     <NavLink to="/departments" className={({isActive}) => isActive ? activeClass : inActiveClass } end>Departments</NavLink>
     </div>

        <div className="prod">
        <NavLink to="/products" className={({isActive}) => isActive ? activeClass : inActiveClass } end>Products</NavLink>
        </div>

    </div>
  )
}

export default Dashboard
