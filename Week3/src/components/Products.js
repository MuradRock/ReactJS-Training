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
        {/* <ul style={{listStyleType:'none'}}>
       {products.map(product=>
           
           <li key={product.id}>{product.title} <span style={{fontSize:35,fontWeight:600}}>{product.price}</span> <button style={{height:30,width:95}} onClick={()=>addToCart(product)}>Add to Cart</button></li>
         )}
         </ul> */}
         <table>
          <th>Item</th><th>Price</th><th>Action</th>
         {products.map(product=>
             <tr key={product.id}> <td>{product.title}</td><td>{product.price}</td><td><button style={{height:30,width:95}} onClick={()=>addToCart(product)}>Add to Cart</button></td></tr>
         )}
         </table>
 
 </div>
    )
}

export default Products;