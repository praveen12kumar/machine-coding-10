import React, {useContext} from 'react'
import "./home.scss";
import Dashboard from '../components/Dashboard';
import { DataContext } from '../context/DataContext';
const Home = () => {
  const {products} = useContext(DataContext);
  console.log(products)

  const totalStock = products.reduce((acc, curr)=>{
    return  acc + curr.stock;
  }, 0)

  const totalDelivered = products.reduce((acc, curr)=>{
    return acc + curr.delivered;

  },0)

  const totalLow = products.filter((product)=>(product.stock <= 10));

  


  return (
    <main className='home'>
      <Dashboard/>
      <div className="dashboard-container">
        <div className="container">
        <div className="totalStock">
          <p style={{color:"green"}}>{totalStock}</p>
          <p>Total Stock</p>
        </div>
        <div className="totalDelivered">
          <p style={{color:"orange"}}>{totalDelivered}</p>
          <p>Total Delivered</p>
        </div>
        <div className="totalLow">
          <p style={{color:"red"}}>{totalLow.length}</p>
          <p>Low Stock Items</p>
        </div>
      </div>
        </div>
    </main>
  )
}

export default Home
