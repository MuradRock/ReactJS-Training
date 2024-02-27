
const Cart=({cartItem})=>{

    return(
        <ul>
       { cartItem.map(item=> <li key={item.id}>{item.title}</li>)}
        </ul>
    );
    
}

export default Cart;