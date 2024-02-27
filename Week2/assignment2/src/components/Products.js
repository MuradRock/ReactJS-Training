import  { useEffect,useState } from 'react'
const Products=({updateCartItem,cartItem})=>{
    
   
    //const items={};
    const[products,setProducts]=useState([]);
    const[cartCount,setCartCount]=useState(0);
  
    const fetchProducts= async ()=>{
      fetch('https://fakestoreapi.com/products')
      .then((res)=>res.json())
      .then(json=> setProducts(json))
    }
    useEffect(function(){
      fetchProducts();
    },[]);
  
     function addToCart(item){
         updateCartItem(item)
         setCartCount(count=>count+1);
     }

    return(
        <div style={{fontSize:30}}>
    
        { <div>Cart Items {cartCount}</div> }
        <ul style={{listStyleType:'none'}}>
       {products.map(product=>
           <li key={product.id}>{product.title} <span style={{fontSize:35,fontWeight:600}}>{product.price}</span> <button style={{height:30,width:95}} onClick={()=>addToCart(product)}>Add to Cart</button></li>
         )}
         </ul>
 
 </div>
    )
}

export default Products;