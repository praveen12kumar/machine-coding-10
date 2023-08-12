import React, {useState, useContext} from 'react';
import { useNavigate } from 'react-router-dom';
import Dashboard from '../components/Dashboard';
import {MdArrowDropDown} from "react-icons/md";
import {DataContext} from "../context/DataContext";

import "./product.scss";
const Products = () => {
  const navigate = useNavigate();
  const [openDept, setOpenDept] = useState(false);
  const [openSort, setOpenSort] = useState(false);
  const {products, data, DataDispatch} = useContext(DataContext)
  
  const filteredProducts = data;

  const handleAllDept = (value)=>{
    DataDispatch({
      type:"AllProducts",
      payload: value,
    })
  }

  const handleDepartment =(value)=>{
    DataDispatch({
      type: 'changeDepartment',
      payload: value,

    })
  }

  const handleLowStock = ()=>{
    DataDispatch({
      type: "lowStock",
      payload: products,
    })
  }



  return (
    <main className='products'>
      <Dashboard />
      <div className="product-container">
        <div className="header">
          <span className='title'>Products</span>
          <div className="dept-dropdown">
            <button style={{display:"flex", alignItems:"center"}}  onClick={()=> setOpenDept(!openDept)} >Department <span><MdArrowDropDown/></span></button>
            {
              openDept ? 
              <div className="dept-options">
                  
          <div className="dropdown-option" onClick={()=> handleAllDept("All-Department") } >All Department</div>
          <div className="dropdown-option" onClick={()=> handleDepartment("Kitchen")}>Kitchen</div>
          <div className="dropdown-option" onClick={()=> handleDepartment("Clothing")}>Clothing</div>
          <div className="dropdown-option" onClick={()=> handleDepartment("Toys")}>Toys</div>
              </div>
              : null
            }
          </div>
          {/* filter by low stock */}
          
          <div className="checkbox-div" onChange={handleLowStock} >
            <label htmlFor="lowStock">
              <input type="checkbox" value="lowStock" id='lowStock'/> Low Stock Items
            </label>
          </div>

          {/* sort by price */}

          <div className="sort-dropdown">
            <button style={{display:"flex", alignItems:"center"}}  onClick={()=> setOpenSort(!openSort)} >Filter <span><MdArrowDropDown/></span></button>
            {
              openSort ? <div className="sort-options">
                  
          <div className="dropdown-option">Name</div>
          <div className="dropdown-option">Price</div>
          <div className="dropdown-option">Stock</div>
              </div>
              : null
            }
          </div>
          
          <div className="newProduct">
            <button className='new-button'>New</button>
          </div>

          </div>

            <div className="hori"></div>

            <div className="product-main-container">
              <table>
                <thead>
                <tr>
                  <th>Image</th>
                  <th>Name</th>
                  <th>Description</th>
                  <th>Price</th>
                  <th>Stock</th>
                </tr>
                </thead>
                <tbody>
                {
                  filteredProducts?.map((product) =>(
                    <tr key={product.id} className='tbody-row'>
                      <td className='product-image' >
                        <img className='image' src={product.imageUrl} alt="url" onClick={()=> navigate(`/details/${product.id}`)} />
                      </td>
                      <td className='name'>{product.name}</td>
                      <td className='description'>{product.description}</td>
                      <td className='price'>{product.price}</td>
                      <td className='stock'>{product.stock}</td>
                    </tr>
                    
                  ))
                }
                </tbody>
              </table>
            </div>



          </div>
    </main>
  )
}

export default Products
