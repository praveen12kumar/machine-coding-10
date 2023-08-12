import React, {useContext} from 'react'
import { useParams } from 'react-router-dom'
import { DataContext } from '../context/DataContext';
import Dashboard from '../components/Dashboard';
import "./productDetails.scss";
const ProductDetails = () => {
    const{id} = useParams();
    console.log('Product Details', id);
    const {products} = useContext(DataContext);

    const myProduct = products.find((product)=> product.id == id);
    


    return (
    <div className='product-details'>
        <Dashboard/>
        <div className="details-container">
            <div className="details-section">
                <h1>{myProduct?.name}</h1>
                <div className="details-image">
                    <img src={myProduct?.imageUrl} alt="" />
                </div>
                <p>Price: ${myProduct?.price}</p>
                <p>Stock: {myProduct?.stock}</p>
                <p>Supplier: {myProduct?.supplier}</p>
                <p>Department: {myProduct?.department}</p>
                <p>SKU: {myProduct?.sku}</p>
                <p>Delivered: {myProduct?.delivered}</p>
                <p>Description: {myProduct?.description}</p>
            </div>
        </div>
    </div>
  )
}

export default ProductDetails
