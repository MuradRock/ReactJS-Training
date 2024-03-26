import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './components/Home';
import Products from './components/Products';
import { useState } from 'react';
import Cart from './components/Cart';
import './mystyle.css'
import { FaCartPlus } from "react-icons/fa";
import { useSelector } from 'react-redux';




function App() {

    let [cartItem, setCartItem] = useState([]);
   // const[cartItem,setCartCount]=useState([]);

   cartItem=useSelector((state=>state.reducer));

    const updateCartItem = (item) => {
        //setCartItem(prevState=>({...prevState,...item}));
        //cartItem.push(item)
       // console.log(cartItem);
       // setCartItem(cartItem)
    }
    return (
        <Router>
            <div className='CartHeader'>Cart Service </div>
            <div style={{ backgroundColor: 'brown', width: '100%', height: '40px' }}>
                <div style={{ fontSize: 30, float: 'left' }}>
                    <ul className="menu">
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
                </div>
                <div style={{ color: 'white', float: 'right', padding: '10px' }}>
                    <span>
                        <FaCartPlus />
                    </span>
                    <span style={{marginLeft:'10px'}}>{cartItem.length}</span>
                </div>
               
            </div>
            <Routes>
                    <Route exact path="/home" element={<Home></Home>}></Route>
                    <Route exact path="/products" element={<Products cartItem={cartItem} updateCartItem={updateCartItem} />}></Route>
                    <Route exact path='/cart' element={<Cart />} ></Route>
                </Routes>
        </Router>
    );
}

export default App;
