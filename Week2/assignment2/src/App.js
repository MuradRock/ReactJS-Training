import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router,Routes,Route,Link } from 'react-router-dom';
import Home from './components/Home';
import Products from './components/Products';
import { useState } from 'react';
import Cart from './components/Cart';



function App() {

  let[cartItem,setCartItem]=useState([]);

  const updateCartItem=(item)=>{
    //setCartItem(prevState=>({...prevState,...item}));
    cartItem.push(item)
    console.log(cartItem);
    setCartItem(cartItem)
  }
  return (
     <Router>
         <div style={{fontSize:30}}>
                    <ul >
                        <li>
                            <Link to="/home">Home</Link>
                        </li>
                        <li>
                            <Link to="/products">
                                Products
                            </Link>
                        </li>
                        <li>
                            <Link to="/cart">
                                Cart
                            </Link>
                        </li>
                    </ul>
                    <Routes>
                       <Route exact path="/home" element={<Home></Home>}></Route>
                       <Route exact path="/products" element={<Products cartItem={cartItem} updateCartItem={updateCartItem}/>}></Route>
                       <Route exact path='/cart' element={<Cart cartItem={cartItem}/>} ></Route>
                    </Routes>
                    </div>

     </Router>
  );
}

export default App;
