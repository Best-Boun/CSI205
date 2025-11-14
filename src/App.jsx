
import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AppHeader from './Components/AppHeader';
import AppNavbar from './Components/AppNavbar';
import AppLayout from './layouts/AppLayout';
import Components from './pages/Components';
import "./App.css"
import Calculator from './pages/Calculator';
import Home from './pages/Home';
import Animation from './pages/Animation';
import ForwardToHome from './pages/ForwardToHome';
import Todos from './pages/Todos';
import Login from './pages/Login';
import { fetchProducts } from './data/products.jsx';
import Products from './pages/Products.jsx';
import Carts from './pages/Carts.jsx';  

function App() {
  const [counter, setCounter] = useState(0); 
  
  const [token, setToken] = useState('');
  const [role, setRole] = useState('');

  const [products, setProducts] = useState([])
  const [carts, setCarts] = useState([])

 useEffect(() => {setProducts(fetchProducts())},[])
 
if(token === ''){
  return (<Login setToken={setToken} setRole={setRole}/>)
}else{

return (

  <BrowserRouter basename='/csi205'>
    
   
    
    <Routes>
      <Route path="/" element={<AppLayout products={products} carts={carts} setToken={setToken}/>}>
        <Route path="home" element={<Home counter={counter} setCounter={setCounter}/>} />
        <Route path="calculator" element={<Calculator counter={counter} setCounter={setCounter}/>} />
        <Route path="animation" element={<Animation counter={counter} setCounter={setCounter}/>} />
        <Route path="components" element={<Components counter={counter} setCounter={setCounter} />} /> 
        <Route path="forwardtohome" element={<ForwardToHome />} />
        <Route path="Todos" element={<Todos counter={counter} setCounter={setCounter} />} />
        <Route path="products" element={<Products products={products} carts={carts} setCarts={setCarts}/>}/>
        <Route path="carts" element={ <Carts carts={carts} setCarts={setCarts}/>}/>
      </Route>
    </Routes>
  </BrowserRouter>

  
);
}
  
}

export default App;
