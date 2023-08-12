import {Routes, Route} from "react-router-dom";

import Home from './pages/Home';
import Departments from "./pages/Departments";
import Products  from "./pages/Products";
import ProductDetails from "./pages/ProductDetails";
import './App.css';

function App() {
  return (
    <div className="App">
    
    

    <Routes>
      <Route path="/" element = {<Home />} />
      <Route path="/departments" element = {<Departments/>} />
      <Route path="/products" element = {<Products/>} />
      <Route path="/details/:id" element = {<ProductDetails/>} />
    </Routes>

    </div>
  );
}

export default App;
