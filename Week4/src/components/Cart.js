import { useDispatch, useSelector } from "react-redux";
import { removeToCart } from "../redux/actions";
import { useEffect, useState } from "react";

const Cart = () => {
    const [cartData, setCartData] = useState([]);
    const dispatch = useDispatch();
    const handleRemoveToCart = (id) => {
        dispatch(removeToCart(id));
    }
    const cartItem = useSelector((state) => state.reducer);
    console.log(`cart items `, cartItem);

    // useEffect(() => {
    //     setCartData(cartItem);
    // }, cartItem)

    return (
        <div style={{width:'70%'}}>
            <table style={{width:'100%'}}>
                <tr > <th>Item</th><th>Price</th><th>Action</th></tr>
                {cartItem && cartItem.map(item => <tr key={item.id}><td >{item.title}</td> <td >{item.price}</td><td><button style={{ height: 30, width: 95 }} onClick={() => handleRemoveToCart(item.id)}>Remove</button></td></tr>)}
            </table>
        </div>
    );

}

export default Cart;