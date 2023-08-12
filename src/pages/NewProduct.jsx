import React from 'react'
import Dashboard from '../components/Dashboard'
const NewProduct = () => {
  return (
    <div>
        <Dashboard/>
        <div className="">
            <h1>Add New Product</h1>
            <div className="">
                <label htmlFor="">
                    <input type="text" /> Department
                </label>
            </div>
            <div className="">
                <label htmlFor="">
                    <input type="text" /> Name
                </label>
            </div>
            <div className="">
                <label htmlFor="">
                    <input type="textarea" /> Description
                </label>
            </div>
            <div className="">
                <label htmlFor="">
                    <input type="text" placeholder='0' /> Price            </label>
            </div>
            <div className="">
                <label htmlFor="">
                    <input type="text" placeholder='0' /> Stock
                </label>
            </div>
            <div className="">
                <label htmlFor="">
                    <input type="text" /> SKU
                </label>
            </div>
            <div className="">
                <label htmlFor="">
                    <input type="text" /> Supplier
                </label>
            </div>
        </div>
    </div>
  )
}

export default NewProduct
