import { useEffect, useState } from 'react'
import { addToCart, updateToCart } from '../redux/actions';
import { useDispatch, useSelector } from 'react-redux';
const Products = ({ updateCartItem, cartItem }) => {

  const dispatch = useDispatch();
  //const items={};
  const [products, setProducts] = useState([]);
  const cart = useSelector((state => state.reducer));

  const fetchProducts = async () => {
    fetch('https://fakestoreapi.com/products')
      .then((res) => res.json())
      .then(json => setProducts(json))
  }
  useEffect(function () {
    console.log(`product length `, products.length);
    products.length != 0 || fetchProducts();
  }, []);

  function handleAddToCart(item) {
    // updateCartItem(item)
    // setCartCount(count=>count+1);

    //item.quantity=1;
    let cartItem = cart.find(obj => obj.id == item.id);
    // console.log(`add to cart called`,newItem);
    console.log(`cartItem`, cartItem);
    // if (cartItem) {
    //   item.quantity = (cartItem.quantity) + 1;
    //   dispatch(updateToCart(item));
    // }
    // else {
    //   item.quantity = 1;
    //   dispatch(addToCart(item));
    // }
    dispatch(addToCart(item));
  }
  const checkItem = (item) => {

  }

  return (
    <div style={{ fontSize: 30 }}>


      {/* <ul style={{listStyleType:'none'}}>
       {products.map(product=>
           
           <li key={product.id}>{product.title} <span style={{fontSize:35,fontWeight:600}}>{product.price}</span> <button style={{height:30,width:95}} onClick={()=>addToCart(product)}>Add to Cart</button></li>
         )}
         </ul> */}
      <table>
        <th>Item</th><th>Price</th><th>Action</th>
        {products.map(product =>
          <tr key={product.id}> <td>{product.title}</td><td>{product.price}</td><td><button style={{ height: 30, width: 95 }} onClick={() => handleAddToCart(product)}>Add to Cart</button></td></tr>
        )}
      </table>

    </div>
  )
}

export default Products;