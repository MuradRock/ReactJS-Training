import logo from './logo.svg';
import './App.css';
import  { useEffect,useState } from 'react'

function App() {
  const[cartItem,setCartItem]=useState(0);
  //const items={};
  const[products,setProducts]=useState([]);

  const fetchProducts= async ()=>{
    fetch('https://fakestoreapi.com/products')
    .then((res)=>res.json())
    .then(json=> setProducts(json))
  }
  useEffect(function(){
    fetchProducts();
  },[]);

  function addToCart(){
    setCartItem(cartItem+1)
  }

  return (
    <div style={{fontSize:30}}>
    
           <div>Cart Items {cartItem}</div>
           <ul style={{listStyleType:'none'}}>
          {products.map(product=>
              <li>{product.title} <span style={{fontSize:35,fontWeight:600}}>{product.price}</span> <button style={{height:30,width:95}} onClick={addToCart}>Add to Cart</button></li>
            )}
            </ul>
    
    </div>
  );
}

export default App;
